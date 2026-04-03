Prepare and validate the project for deployment: $ARGUMENTS

Steps:
1. Run `npm run lint` (Biome check) — fix any errors before continuing
2. Run `npm run build` (Next.js build) — ensure no TypeScript or build errors
3. Check `git status` for uncommitted changes
4. Verify environment variables: check `.env.example` or any documented env vars
5. Report deployment readiness with a summary of any issues found
