#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
SKILLS_DIR = ROOT / "skills"
COMMANDS_DIR = ROOT / "commands"
CATALOG_DIR = ROOT / "catalog"


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


def collect_entries(base_dir: Path) -> list[tuple[Path, dict[str, object]]]:
    entries = []
    for path in sorted(base_dir.rglob("*.md")):
        if path.name == "template.md":
            continue
        meta = parse_frontmatter(path)
        if meta:
            entries.append((path, meta))
    return entries


def render_skills(entries: list[tuple[Path, dict[str, object]]]) -> str:
    lines = [
        "# Skills Catalog",
        "",
        f"Generated from `{SKILLS_DIR.relative_to(ROOT)}`.",
        "",
    ]
    for path, meta in entries:
        rel = path.relative_to(ROOT)
        lines.append(f"## {meta.get('name', rel.parent.name)}")
        lines.append("")
        lines.append(f"- Path: `{rel}`")
        lines.append(f"- Type: `{meta.get('type', 'unknown')}`")
        lines.append(f"- Description: {meta.get('description', '')}")
        best_for = meta.get("best_for", [])
        if isinstance(best_for, list) and best_for:
            lines.append(f"- Best for: {', '.join(best_for)}")
        scenarios = meta.get("scenarios", [])
        if isinstance(scenarios, list) and scenarios:
            lines.append(f"- Example: {scenarios[0]}")
        lines.append("")
    return "\n".join(lines)


def render_commands(entries: list[tuple[Path, dict[str, object]]]) -> str:
    lines = [
        "# Commands Catalog",
        "",
        f"Generated from `{COMMANDS_DIR.relative_to(ROOT)}`.",
        "",
    ]
    for path, meta in entries:
        rel = path.relative_to(ROOT)
        lines.append(f"## {meta.get('name', rel.stem)}")
        lines.append("")
        lines.append(f"- Path: `{rel}`")
        lines.append(f"- Description: {meta.get('description', '')}")
        uses = meta.get("uses", [])
        if isinstance(uses, list) and uses:
            lines.append(f"- Uses: {', '.join(uses)}")
        outputs = meta.get("outputs", [])
        if isinstance(outputs, list) and outputs:
            lines.append(f"- Outputs: {', '.join(outputs)}")
        lines.append("")
    return "\n".join(lines)


def main() -> None:
    CATALOG_DIR.mkdir(exist_ok=True)
    skill_entries = collect_entries(SKILLS_DIR)
    command_entries = collect_entries(COMMANDS_DIR)
    (CATALOG_DIR / "skills.md").write_text(render_skills(skill_entries), encoding="utf-8")
    (CATALOG_DIR / "commands.md").write_text(render_commands(command_entries), encoding="utf-8")
    print(f"Generated {CATALOG_DIR / 'skills.md'}")
    print(f"Generated {CATALOG_DIR / 'commands.md'}")


if __name__ == "__main__":
    main()
