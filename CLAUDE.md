# Project: Owlky

## Tech Stack
- **Framework**: Next.js (App Router)
- **UI**: React 19 + Tailwind CSS + shadcn/ui
- **React Compiler**: Enabled (`reactCompiler: true` in next.config.ts)

## React Compiler Notes
- Do NOT add `useMemo`, `useCallback`, or `React.memo` manually — the React Compiler handles memoization automatically.
- Avoid patterns that break the Rules of Hooks or mutate state directly, as the compiler requires strict adherence.
- If a component needs to opt out of the compiler, use the `"use no memo"` directive at the top of the function.

## File Organization Rules
- All shared constants must be placed in `constants.ts`.
- All TypeScript `type` definitions must be placed in `types.ts`.
- All TypeScript `enum` definitions must be placed in `enums.ts`.
- All non-Props/State interfaces must be placed in `interfaces.ts`.
- Component Props and State interfaces are allowed inside the component file.
- Never mix constants, types, and interfaces in the same file.
- Never define shared types, interfaces, or constants inside component files.

- Provider files must be independent — each provider lives in its own file and must not import other providers.
- The component that composes providers lives in `index.tsx` of the same folder.

These rules are mandatory and must always be followed when generating or refactoring code.

## Naming Conventions
- General Rules:
  - Always use meaningful and descriptive names.
  - Names must be correctly spelled (no abbreviations unless universally accepted).
  - Follow standard naming conventions of the language (e.g., camelCase for JS/TS).
  - Avoid vague names like: data, temp, value, obj, handleStuff, doThing.

- Variable Naming:
  - Use nouns or noun phrases.
  - Reflect the actual purpose of the variable.
  - Boolean variables must start with:
    - `is`
    - `has`
    - `can`
    - `should`

- Function Naming:
  - Must start with a verb.
  - Clearly describe the action being performed.
  - Avoid generic verbs like handle, process, do, unless followed by something specific.

- Constants:
  - Use `UPPER_SNAKE_CASE` for true constants.
  - Use descriptive names.

- Interfaces & Types:
  - Use pattern `<prefix><name>`
  - Allow prefix:
    - `I`: inteface
    - `T`: type

## Commit Message Convention
```
<type>(<scope>): <short description>

[optional body]

[optional footer]
```

- General Rules:
  - Must be written in English
  - Use present tense
  - Do NOT capitalize the first letter of the description
  - Do NOT end the description with a period
  - Keep the first line under 72 characters
  - Description must be clear, specific, and meaningful
  - Do NOT use vague messages like:
    - `update`
    - `fix stuff`
    - `modify code`
    - `handle logic`
    - `refactor code`
  - Allowed types
    - `feat` – new feature
    - `fix` – bug fix
    - `refactor` – internal refactoring (no behavior change)
    - `perf` – performance improvement
    - `docs` – documentation changes
    - `style` – formatting / lint / rename (no logic change)
    - `test` – add or modify tests
    - `chore` – build/config/dependency updates
    - `ci` – CI/CD changes
    - `revert` – revert previous commit
  - Scope Rules:
    - Scope must represent a module, domain, or bounded context
    - Do NOT use file names as scope
    - Keep scope short and meaningful
  - Logical Commit Rule:
    - One commit = one logical change
    - No unrelated file changes in the same commit
    - No debug logs
    - No commented-out code
    - No partially working code
  - No Co-Author Rule:
    - Add Co-authored-by
    - Add multiple authors
    - Add auto-generated attribution lines
    - Add AI attribution
    - Add signed-off lines unless explicitly requested