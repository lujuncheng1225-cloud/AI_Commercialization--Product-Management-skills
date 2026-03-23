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
  rg -i -n --glob '*/SKILL.md' "$2" "$SKILLS_DIR"
  exit 0
fi

if [[ "${1:-}" == "--type" && -n "${2:-}" ]]; then
  rg -n "^type: ${2}$" --glob '*/SKILL.md' "$SKILLS_DIR"
  exit 0
fi

show_usage
exit 1

