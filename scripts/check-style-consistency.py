#!/usr/bin/env python3
from __future__ import annotations

import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
SKILLS_DIR = ROOT / "skills"
COMMANDS_DIR = ROOT / "commands"

SKILL_REQUIRED_HEADERS = [
    "## Purpose / 用途",
    "## Key Concepts / 核心概念",
    "## Application / 用法",
    "## Examples / 示例",
    "## Common Pitfalls / 常见误区",
    "## References / 关联项",
]

COMMAND_REQUIRED_HEADERS = [
    "## Workflow / 流程",
    "## Checkpoints / 检查点",
]


def validate_file(path: Path, required_headers: list[str], errors: list[str]) -> None:
    text = path.read_text(encoding="utf-8")
    for header in required_headers:
        if header not in text:
            errors.append(f"{path}: missing required header '{header}'")


def main() -> int:
    errors: list[str] = []

    for skill_file in sorted(SKILLS_DIR.rglob("SKILL.md")):
        validate_file(skill_file, SKILL_REQUIRED_HEADERS, errors)

    for command_file in sorted(COMMANDS_DIR.glob("*.md")):
        validate_file(command_file, COMMAND_REQUIRED_HEADERS, errors)

    if errors:
        print("Style consistency check failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print("Style consistency check passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
