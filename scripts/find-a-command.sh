#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
COMMANDS_DIR="$ROOT_DIR/commands"

show_usage() {
  cat <<'EOF'
Usage:
  ./scripts/find-a-command.sh --list-all
  ./scripts/find-a-command.sh --keyword roadmap
EOF
}

if [[ $# -eq 0 ]]; then
  show_usage
  exit 1
fi

if [[ "${1:-}" == "--list-all" ]]; then
  find "$COMMANDS_DIR" -maxdepth 1 -type f -name '*.md' | sort
  exit 0
fi

if [[ "${1:-}" == "--keyword" && -n "${2:-}" ]]; then
  rg -i -n "$2" "$COMMANDS_DIR"/*.md
  exit 0
fi

show_usage
exit 1

