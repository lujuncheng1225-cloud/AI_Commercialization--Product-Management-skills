#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SKILLS_DIR="$ROOT_DIR/skills"

show_usage() {
  cat <<'EOF'
Usage:
  ./scripts/find-a-skill.sh --list-all
  ./scripts/find-a-skill.sh --keyword onboarding
  ./scripts/find-a-skill.sh --type workflow
EOF
}

if [[ $# -eq 0 ]]; then
  show_usage
  exit 1
fi

if [[ "${1:-}" == "--list-all" ]]; then
  find "$SKILLS_DIR" -mindepth 2 -maxdepth 2 -name SKILL.md | sort
  exit 0
fi

if [[ "${1:-}" == "--keyword" && -n "${2:-}" ]]; then
  find "$SKILLS_DIR" -name SKILL.md -print0 | xargs -0 rg -i -n -- "$2"
  exit 0
fi

if [[ "${1:-}" == "--type" && -n "${2:-}" ]]; then
  find "$SKILLS_DIR" -name SKILL.md -print0 | xargs -0 rg -n -- "^type: ${2}$"
  exit 0
fi

show_usage
exit 1
