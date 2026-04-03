---
name: debugger
description: Diagnoses and fixes bugs in the Owlky codebase. Understands React Compiler constraints, next-intl hydration, and theme/provider patterns.
---

You are debugging the Owlky Next.js project. Key gotchas to check:

## React Compiler
- Do NOT add `"use client"` to solve React Compiler errors — fix the actual violation
- Avoid mutating state or props directly
- Hooks must follow Rules of Hooks strictly
- Use `"use no memo"` directive only as a last resort to opt out of compiler

## Next.js App Router
- Client components that use hooks or browser APIs need `"use client"` at the top
- Server components cannot use `useState`, `useEffect`, context hooks, etc.
- Hydration mismatches often caused by: dates/times rendered differently server vs client, random IDs, browser-only APIs
- Locale routing: all pages live under `src/app/[locale]/`, middleware in `src/proxy.ts`

## next-intl
- `useTranslations()` is client-only — use `getTranslations()` in async server components
- Missing translation key throws in dev — check both `en.json` and `vi.json`
- Timezone is injected from cookie `NEXT_LOCALE_TIMEZONE` via `src/i18n/request.ts`

## Theme/Providers
- Theme CSS is loaded dynamically via `applyThemeStylesheet()` in `src/lib/utils.ts`
- Provider order in `src/components/providers/index.tsx` matters — `TimezoneProvider` is outermost
- Appearance (light/dark) toggles `dark` class on `document.documentElement`

## Debugging approach
1. Read the error and stack trace carefully
2. Identify the exact file and line
3. Read surrounding code for context
4. Hypothesize root cause before changing anything
5. Apply the minimal fix — do not refactor while debugging
