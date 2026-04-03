# Frontend Rules (Owlky)

## React & Next.js
- Framework: Next.js App Router — all routes under `src/app/[locale]/`
- React Compiler is enabled — NEVER add `useMemo`, `useCallback`, or `React.memo`
- `"use client"` is required for components using hooks, browser APIs, or event handlers
- shadcn config has `"rsc": false` — shadcn components are client-only by default

## Component placement
- Reusable UI primitive → `src/components/ui/<name>/`
- Page-level composite (uses multiple UI components) → `src/components/blocks/<name>/`
- Each folder must have `index.ts` re-exporting all public exports
- External code imports from folder index, never from internal files

## Styling
- Tailwind CSS 4 with `@import "tailwindcss"` syntax — no CSS modules, no inline styles
- Use `cn()` from `@/lib/utils` (clsx + tailwind-merge) for conditional/merged classes
- Multi-variant components must use CVA (`class-variance-authority`)
- Dark mode uses `dark` class on `document.documentElement` (not media query variant)
- Custom CSS variables come from theme files in `src/themes/*.css` — do not hardcode colors

## Typography
- All visible text must use components from `@/components/ui/typography`:
  - `H1`–`H4` for headings
  - `P` for body text
  - `Lead` for hero/intro text
  - `Large` for emphasized non-heading text
  - `Small` for labels, nav items, UI text
  - `Muted` for secondary/supporting text
  - `Code` for inline code, `List` for unordered lists
- Never use raw `<p>`, `<span>`, `<h1>`–`<h4>` for rendering text

## Icons
- Only `lucide-react` — no other icon libraries
- Icon prop type: `LucideIcon` from `lucide-react`
- Render dynamically: `{item.icon && <item.icon />}`

## i18n
- All user-facing text comes from `src/i18n/messages/{locale}.json`
- Add keys to both `en.json` and `vi.json` at the same time
- Server components: `getTranslations("namespace")`, client components: `useTranslations("namespace")`
- Use `Link`, `redirect`, `usePathname`, `useRouter` from `@/i18n/navigation` (not next/navigation)

## Theme system
- 60+ CSS themes in `src/themes/*.css`
- Load theme via `applyThemeStylesheet()` from `@/lib/utils`
- Do not hardcode theme colors — always use CSS custom properties (`--primary`, `--background`, etc.)
- Add new themes by adding a `.css` file to `src/themes/` — no code changes needed
