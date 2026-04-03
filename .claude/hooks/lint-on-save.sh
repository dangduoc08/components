#!/bin/bash
# PostToolUse hook: runs after Edit/Write on TS/TSX/JS/JSX files
# Receives JSON on stdin: { "tool_name": "Edit", "tool_input": { "file_path": "..." } }

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | python3 -c "
import sys, json
data = json.loads(sys.stdin.read())
print(data.get('tool_input', {}).get('file_path', ''))
" 2>/dev/null)

if [[ -z "$FILE_PATH" ]]; then
  exit 0
fi

if [[ "$FILE_PATH" =~ \.(ts|tsx|js|jsx)$ ]]; then
  cd /Users/tadangduoc/Projects/owlky
  npx biome check --write "$FILE_PATH" 2>/dev/null || true
fi

exit 0
