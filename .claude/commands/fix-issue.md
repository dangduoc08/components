Fix the GitHub issue: $ARGUMENTS

Steps:
1. Fetch the issue with `gh issue view $ARGUMENTS`
2. Understand the problem — read all relevant files before changing anything
3. Find affected code using Grep/Glob
4. Apply the minimal fix
5. Run `npm run lint` to check for Biome errors
6. Summarize what changed and why
