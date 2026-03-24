#!/usr/bin/env python3
from __future__ import annotations

import re
import sys
from pathlib import Path
from urllib.parse import unquote


ROOT = Path(__file__).resolve().parent.parent
SKILLS_DIR = ROOT / "skills"
COMMANDS_DIR = ROOT / "commands"
DOC_LINK_PATTERN = re.compile(r"\[[^\]]+\]\(([^)]+)\)")
SAMPLE_OUTPUT_PATTERN = re.compile(r"## Sample Output .*?(?=\n## |\Z)", re.S)
INLINE_CODE_PATH_PATTERN = re.compile(r"`([^`\n]+\.md)`")

REQUIRED_SKILL_FIELDS = {"name", "description", "type"}
REQUIRED_COMMAND_FIELDS = {"name", "description", "uses", "outputs"}
VALID_TYPES = {"component", "interactive", "workflow"}
REFERENCE_PATTERN = re.compile(r"`(\.\./[^`]+)`")


def parse_frontmatter(path: Path) -> dict[str, object]:
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        return {}

    lines = text.splitlines()
    data: dict[str, object] = {}
    key: str | None = None

    for line in lines[1:]:
        if line == "---":
            break
        if line.startswith("  - ") and key:
            data.setdefault(key, [])
            assert isinstance(data[key], list)
            data[key].append(line[4:].strip().strip('"'))
            continue
        if ": " in line and not line.startswith("  "):
            key, value = line.split(": ", 1)
            data[key] = value.strip().strip('"')
            continue
        if line.endswith(":") and not line.startswith("  "):
            key = line[:-1]
            data[key] = []

    return data


def find_frontmatter_end(text: str) -> int:
    if not text.startswith("---\n"):
        return 0
    parts = text.split("---\n", 2)
    if len(parts) < 3:
        return 0
    return len(parts[0]) + len("---\n") + len(parts[1]) + len("---\n")


def is_external_link(target: str) -> bool:
    return target.startswith(("http://", "https://", "mailto:", "#"))


def validate_markdown_links(path: Path, errors: list[str]) -> None:
    text = path.read_text(encoding="utf-8")
    for target in DOC_LINK_PATTERN.findall(text):
        clean_target = unquote(target.split("#", 1)[0])
        if not clean_target or is_external_link(clean_target):
            continue
        if clean_target.startswith("/"):
            errors.append(f"{path}: invalid absolute local link target {target}")
            continue
        resolved = (path.parent / clean_target).resolve()
        if not resolved.exists():
            errors.append(f"{path}: missing markdown link target {target}")


def validate_sample_output_paths(path: Path, errors: list[str]) -> None:
    text = path.read_text(encoding="utf-8")
    match = SAMPLE_OUTPUT_PATTERN.search(text)
    if not match:
        errors.append(f"{path}: missing Sample Output section")
        return

    sample_paths = INLINE_CODE_PATH_PATTERN.findall(match.group(0))
    if not sample_paths:
        errors.append(f"{path}: Sample Output section must include at least one markdown path")
        return

    for sample in sample_paths:
        resolved = (path.parent / sample).resolve()
        if not resolved.exists():
            errors.append(f"{path}: missing sample output target {sample}")
            continue
        if resolved.stem.endswith("-sample") and not resolved.stem.startswith(path.stem):
            errors.append(
                f"{path}: sample output target {sample} does not match command name '{path.stem}'"
            )


def validate_skill(path: Path, names: set[str], errors: list[str]) -> None:
    meta = parse_frontmatter(path)
    if not meta:
        errors.append(f"{path}: missing or invalid frontmatter")
        return

    missing = REQUIRED_SKILL_FIELDS - meta.keys()
    if missing:
        errors.append(f"{path}: missing required fields: {', '.join(sorted(missing))}")

    name = meta.get("name")
    if isinstance(name, str):
        if name in names:
            errors.append(f"{path}: duplicate skill name '{name}'")
        names.add(name)

    skill_type = meta.get("type")
    if isinstance(skill_type, str) and skill_type not in VALID_TYPES:
        errors.append(f"{path}: invalid type '{skill_type}'")

    text = path.read_text(encoding="utf-8")
    body = text[find_frontmatter_end(text):]
    for ref in REFERENCE_PATTERN.findall(body):
        ref_path = (path.parent / ref).resolve()
        if not ref_path.exists():
            errors.append(f"{path}: missing reference target {ref}")

    validate_markdown_links(path, errors)


def validate_command(path: Path, skill_names: set[str], errors: list[str]) -> None:
    meta = parse_frontmatter(path)
    if not meta:
        errors.append(f"{path}: missing or invalid frontmatter")
        return

    missing = REQUIRED_COMMAND_FIELDS - meta.keys()
    if missing:
        errors.append(f"{path}: missing required fields: {', '.join(sorted(missing))}")

    uses = meta.get("uses", [])
    if not isinstance(uses, list) or not uses:
        errors.append(f"{path}: uses must be a non-empty list")
    else:
        for skill in uses:
            if skill not in skill_names:
                errors.append(f"{path}: unknown skill in uses: {skill}")

    validate_markdown_links(path, errors)
    validate_sample_output_paths(path, errors)


def collect_skill_files() -> list[Path]:
    return sorted(SKILLS_DIR.rglob("SKILL.md"))


def collect_command_files() -> list[Path]:
    return sorted(COMMANDS_DIR.glob("*.md"))


def main() -> int:
    errors: list[str] = []
    skill_names: set[str] = set()
    skill_files = collect_skill_files()
    command_files = collect_command_files()

    for skill_file in skill_files:
        validate_skill(skill_file, skill_names, errors)

    for command_file in command_files:
        validate_command(command_file, skill_names, errors)

    for doc_file in sorted(ROOT.glob("*.md")):
        validate_markdown_links(doc_file, errors)

    for doc_file in sorted((ROOT / "docs").rglob("*.md")):
        validate_markdown_links(doc_file, errors)

    for doc_file in sorted((ROOT / "catalog").rglob("*.md")):
        validate_markdown_links(doc_file, errors)

    for doc_file in sorted((ROOT / "agent").rglob("*.md")):
        validate_markdown_links(doc_file, errors)

    for doc_file in sorted((ROOT / "adapters").rglob("*.md")):
        validate_markdown_links(doc_file, errors)

    for doc_file in sorted((ROOT / "evals").rglob("*.md")):
        validate_markdown_links(doc_file, errors)

    for doc_file in sorted((ROOT / "private").rglob("*.md")):
        validate_markdown_links(doc_file, errors)

    if errors:
        print("Validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print(f"Validated {len(skill_files)} skills and {len(command_files)} commands.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
