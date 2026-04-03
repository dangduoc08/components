Review the pull request: $ARGUMENTS

Steps:
1. `gh pr view $ARGUMENTS` — read title, description, and context
2. `gh pr diff $ARGUMENTS` — review all changed files
3. Check against Owlky conventions:
   - No `useMemo`/`useCallback`/`React.memo`
   - Text uses typography components, not raw HTML
   - Icons from `lucide-react` only
   - Imports from folder `index.ts`, not internal files
   - Types/enums/interfaces in correct files
   - Both `en.json` and `vi.json` updated if user-facing text changed
   - No comments unless logic is non-obvious
4. Check for security issues and logic errors
5. Post a review with specific file/line feedback
