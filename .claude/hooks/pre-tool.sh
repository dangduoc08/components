#!/bin/bash
# PreToolUse hook: runs before every Bash execution
# Receives JSON on stdin: { "tool_name": "Bash", "tool_input": { "command": "..." } }

INPUT=$(cat)
COMMAND=$(echo "$INPUT" | python3 -c "
import sys, json
data = json.loads(sys.stdin.read())
print(data.get('tool_input', {}).get('command', ''))
" 2>/dev/null)

if echo "$COMMAND" | grep -qE "rm -rf|git push --force|git push -f"; then
  echo "Blocked: destructive command detected: $COMMAND" >&2
  exit 2
fi

exit 0
