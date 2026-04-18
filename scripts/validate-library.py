#!/usr/bin/env python3
from __future__ import annotations

import importlib.util
import re
import sys
from pathlib import Path
from urllib.parse import unquote


ROOT = Path(__file__).resolve().parent.parent
SKILLS_DIR = ROOT / "skills"
COMMANDS_DIR = ROOT / "commands"
CATALOG_DIR = ROOT / "catalog"
TOOLKIT_HTML = ROOT / "docs" / "pm-skills-interactive-course.html"
TOOLKIT_DATA_JS = ROOT / "docs" / "toolkit-skills.js"
DOCS_ARCHIVE_DIR = ROOT / "docs" / "archive"
LLMS_TXT = ROOT / "docs" / "llms.txt"
DOC_LINK_PATTERN = re.compile(r"\[[^\]]+\]\(([^)]+)\)")
SAMPLE_OUTPUT_PATTERN = re.compile(r"## Sample Output .*?(?=\n## |\Z)", re.S)
INLINE_CODE_PATH_PATTERN = re.compile(r"`([^`\n]+\.md)`")
TOOLKIT_ID_PATTERN = re.compile(r"\{id:'([^']+)'")
TOOLKIT_SOURCE_REF_PATTERN = re.compile(r"sourceRef:'([^']+)'")
TOOLKIT_SOURCE_FIT_PATTERN = re.compile(r"sourceFit:'(direct|adjacent)'")

REQUIRED_SKILL_FIELDS = {"name", "description", "type"}
REQUIRED_COMMAND_FIELDS = {"name", "description", "uses", "outputs"}
VALID_TYPES = {"component", "interactive", "workflow"}
REFERENCE_PATTERN = re.compile(r"`(\.\./[^`]+)`")
CRITICAL_TOOLKIT_CHECKS = {
    "pricing-strategy": [
        "Value metric",
        "免费层边界",
        "升级触发点",
        "不要输出 SWOT",
    ],
}
TOOLKIT_BANNED_TERMS = [
    "资深",
]
REQUIRED_PUBLIC_PAGES = [
    ROOT / "docs" / "product" / "README.md",
    ROOT / "docs" / "benchmarks" / "README.md",
    ROOT / "docs" / "benchmarks" / "FIRST_PUBLIC_RUN.md",
    ROOT / "docs" / "benchmarks" / "LEADERBOARD.md",
    ROOT / "docs" / "core" / "CATEGORY_LANGUAGE.md",
    ROOT / "docs" / "core" / "FLAGSHIP_CASES.md",
    ROOT / "docs" / "brand" / "DISTRIBUTION_ENGINE.md",
]
REQUIRED_LLM_PATHS = [
    "/product/",
    "/benchmarks/",
    "/benchmarks/leaderboard/",
    "/benchmarks/first-public-run/",
    "/core/category-language/",
    "/core/flagship-cases/",
    "/brand/distribution-engine/",
    "/brand/distribution-board/",
]


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


def load_catalog_generator():
    generator_path = ROOT / "scripts" / "generate-catalog.py"
    spec = importlib.util.spec_from_file_location("generate_catalog", generator_path)
    if not spec or not spec.loader:
        raise RuntimeError(f"could not load catalog generator: {generator_path}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def validate_generated_catalog(errors: list[str]) -> None:
    generator = load_catalog_generator()
    expected = {
        CATALOG_DIR / "skills.md": generator.render_skills(generator.collect_entries(SKILLS_DIR)),
        CATALOG_DIR / "commands.md": generator.render_commands(generator.collect_entries(COMMANDS_DIR)),
    }

    for path, content in expected.items():
        if not path.exists():
            errors.append(f"{path}: missing generated catalog; run python3 scripts/generate-catalog.py")
            continue
        if path.read_text(encoding="utf-8") != content:
            errors.append(f"{path}: generated catalog is stale; run python3 scripts/generate-catalog.py")


def validate_interactive_toolkit(errors: list[str]) -> None:
    if not TOOLKIT_HTML.exists():
        errors.append(f"{TOOLKIT_HTML}: missing interactive toolkit")
        return

    text = TOOLKIT_HTML.read_text(encoding="utf-8")
    if "toolkit-skills.js" not in text:
        errors.append(f"{TOOLKIT_HTML}: interactive toolkit must load docs/toolkit-skills.js")

    if "const skills=[" in text:
        errors.append(f"{TOOLKIT_HTML}: toolkit data should live in docs/toolkit-skills.js")

    if not TOOLKIT_DATA_JS.exists():
        errors.append(f"{TOOLKIT_DATA_JS}: missing interactive toolkit data")
        return

    data_text = TOOLKIT_DATA_JS.read_text(encoding="utf-8")
    ids = [(match.group(1), match.start()) for match in TOOLKIT_ID_PATTERN.finditer(data_text)]
    seen_ids: set[str] = set()
    blocks: dict[str, str] = {}

    for index, (skill_id, start) in enumerate(ids):
        if skill_id in seen_ids:
            errors.append(f"{TOOLKIT_DATA_JS}: duplicate toolkit card id {skill_id}")
        seen_ids.add(skill_id)

        end = ids[index + 1][1] if index + 1 < len(ids) else data_text.find("\n];", start)
        block = data_text[start:end if end != -1 else len(data_text)]
        blocks[skill_id] = block

        source_ref = TOOLKIT_SOURCE_REF_PATTERN.search(block)
        if not source_ref:
            errors.append(f"{TOOLKIT_DATA_JS}: toolkit card {skill_id} missing sourceRef")
        else:
            source_path = ROOT / source_ref.group(1)
            if not source_path.exists():
                errors.append(f"{TOOLKIT_DATA_JS}: toolkit card {skill_id} has missing sourceRef {source_ref.group(1)}")
            if not source_ref.group(1).startswith(("skills/", "commands/")):
                errors.append(f"{TOOLKIT_DATA_JS}: toolkit card {skill_id} sourceRef must point to skills/ or commands/")

        if not TOOLKIT_SOURCE_FIT_PATTERN.search(block):
            errors.append(f"{TOOLKIT_DATA_JS}: toolkit card {skill_id} missing sourceFit direct/adjacent")

    for term in TOOLKIT_BANNED_TERMS:
        if term in data_text:
            errors.append(f"{TOOLKIT_DATA_JS}: banned toolkit wording found: {term}")

    for skill_id, required_terms in CRITICAL_TOOLKIT_CHECKS.items():
        block = blocks.get(skill_id)
        if block is None:
            errors.append(f"{TOOLKIT_DATA_JS}: missing toolkit card {skill_id}")
            continue

        for term in required_terms:
            if term not in block:
                errors.append(f"{TOOLKIT_DATA_JS}: toolkit card {skill_id} missing required term '{term}'")


def validate_docs_archive(errors: list[str]) -> None:
    if DOCS_ARCHIVE_DIR.exists() and any(DOCS_ARCHIVE_DIR.iterdir()):
        errors.append(f"{DOCS_ARCHIVE_DIR}: archive files must not live under docs/ because they can be published")


def validate_public_layers(errors: list[str]) -> None:
    for page in REQUIRED_PUBLIC_PAGES:
        if not page.exists():
            errors.append(f"{page}: missing required public layer page")

    readme_text = (ROOT / "README.md").read_text(encoding="utf-8")
    readme_zh_text = (ROOT / "README.zh-CN.md").read_text(encoding="utf-8")
    docs_index_text = (ROOT / "docs" / "index.md").read_text(encoding="utf-8")

    for needle in ("docs/product/README.md", "docs/benchmarks/README.md"):
        if needle not in readme_text:
            errors.append(f"{ROOT / 'README.md'}: missing public layer link {needle}")

    for needle in ("docs/product/README.md", "docs/benchmarks/README.md"):
        if needle not in readme_zh_text:
            errors.append(f"{ROOT / 'README.zh-CN.md'}: missing public layer link {needle}")

    for needle in (
        "product/README.md",
        "benchmarks/README.md",
        "core/CATEGORY_LANGUAGE.md",
        "core/FLAGSHIP_CASES.md",
        "brand/DISTRIBUTION_ENGINE.md",
    ):
        if needle not in docs_index_text:
            errors.append(f"{ROOT / 'docs' / 'index.md'}: missing docs entry {needle}")

    if not LLMS_TXT.exists():
        errors.append(f"{LLMS_TXT}: missing llms.txt")
        return

    llms_text = LLMS_TXT.read_text(encoding="utf-8")
    for path in REQUIRED_LLM_PATHS:
        if path not in llms_text:
            errors.append(f"{LLMS_TXT}: missing public discovery path {path}")


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

    validate_generated_catalog(errors)
    validate_interactive_toolkit(errors)
    validate_docs_archive(errors)
    validate_public_layers(errors)

    if errors:
        print("Validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print(f"Validated {len(skill_files)} skills and {len(command_files)} commands.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
