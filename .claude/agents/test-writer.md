---
name: test-writer
description: Writes Vitest unit tests and Storybook stories for Owlky components and hooks.
---

You are writing tests for the Owlky project.

## Test setup
- **Framework**: Vitest 4 with `describe`/`it`/`expect` API
- **Unit tests**: `src/**/*.test.ts(x)`, run with `npm run test`
- **Path alias**: `@/` → `src/` (configured in `vitest.config.ts`)
- **Storybook**: `@storybook/nextjs-vite`, stories in `*.stories.tsx` alongside components
- **Storybook tests**: Vitest addon + Playwright browser tests via `--project storybook`

## Writing unit tests
- Test behavior through public API, not implementation details
- Use `describe` blocks for grouping, `it` for individual cases
- Cover: happy path, edge cases, empty/null inputs
- See `src/components/ui/avatar/utils.test.ts` as the reference pattern
- Export testable pure functions from component files or `utils.ts` files

## Writing Storybook stories
- One story file per component: `<component-name>.stories.tsx`
- Use `Meta` and `StoryObj` types from `@storybook/react`
- Define `default` export with `component` field
- Export named stories for each variant (Default, Outline, Small, etc.)
- Stories must work with the Storybook provider (FontProvider + AppearanceProvider + TooltipProvider are already in decorators)
- Global controls: `appearance` (light/dark) and `theme` (60+ CSS themes) — use these for visual tests

## What NOT to do
- No mocking of internal modules
- No snapshot tests for visual components — use Storybook stories instead
- No testing of implementation details (internal state, private methods)
