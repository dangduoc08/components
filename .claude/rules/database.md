# Testing Rules (Owlky)

## Test setup
- **Unit tests**: Vitest 4, run with `npm run test` (`vitest run --project unit`)
- **Interactive tests**: Storybook + Vitest addon + Playwright (`--project storybook`)
- **Test files**: `src/**/*.test.ts(x)` co-located with source files
- **Story files**: `src/**/*.stories.tsx` co-located with component

## Unit tests (Vitest)
- Use `describe`/`it`/`expect` — no `test()` shorthand unless single assertion
- Reference pattern: `src/components/ui/avatar/utils.test.ts`
- Test pure functions exported from component `utils.ts` files
- Cover: happy path, edge cases, null/empty inputs, unexpected types
- Do NOT mock internal project modules — test through the public API
- Path alias `@/` is configured — use it for imports

## Storybook stories
- One `.stories.tsx` per component, co-located in the component folder
- Use `Meta<typeof Component>` and `StoryObj<typeof Component>` types
- Export one named story per significant variant (Default, Outline, Destructive, etc.)
- Global controls `appearance` (light/dark) and `theme` (60+ themes) are auto-injected by decorators
- Stories are also used for visual regression via Chromatic

## What to test
- All exported utility functions must have unit tests
- UI components: cover all CVA variants via Storybook stories
- Hooks: test via `renderHook` from Vitest or through component stories
- Do NOT write snapshot tests for visual components — Storybook stories serve that purpose

## Linting
- Linter: Biome 2 (`npm run lint` → `biome check`, `npm run format` → `biome format --write`)
- Pre-commit: Husky + lint-staged already runs `biome check --write` on staged files
- Git hooks are in `.husky/` — do not bypass with `--no-verify`
