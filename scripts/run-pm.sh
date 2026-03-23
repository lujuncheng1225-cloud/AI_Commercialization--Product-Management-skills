#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

show_usage() {
  cat <<'EOF'
Usage:
  ./scripts/run-pm.sh skill <skill-name> "<request>"
  ./scripts/run-pm.sh command <command-name> "<request>"
EOF
}

if [[ $# -lt 3 ]]; then
  show_usage
  exit 1
fi

MODE="$1"
NAME="$2"
REQUEST="$3"

case "$MODE" in
  skill)
    TARGET="$ROOT_DIR/skills/$NAME/SKILL.md"
    ;;
  command)
    TARGET="$ROOT_DIR/commands/$NAME.md"
    ;;
  *)
    show_usage
    exit 1
    ;;
esac

if [[ ! -f "$TARGET" ]]; then
  echo "Not found: $TARGET" >&2
  exit 1
fi

cat <<EOF
Open this file in Codex or your preferred agent:
  $TARGET

Then use a prompt like:

Using $TARGET, help me with this request:
$REQUEST

Ask up to 3 clarifying questions first.
Follow the file closely.
End with assumptions, risks, and next steps.
EOF

