---
name: frontend-design
description: Implements UI components for Owlky following the actual design system: shadcn radix-nova, CVA, Tailwind CSS 4, lucide-react icons, typography components.
---

# Frontend Design Skill (Owlky)

## Component structure

### UI primitive (`src/components/ui/<name>/`)
```
<name>/
├── <name>.tsx               # Main component
├── <name>-<sub>.tsx         # Sub-components if needed (e.g., CardHeader)
├── index.ts                 # Re-exports all public exports
├── types.ts                 # Shared types (if complex)
└── <name>.stories.tsx       # Storybook story
```

### Block composite (`src/components/blocks/<name>/`)
```
<name>/
├── <name>.tsx
├── index.ts
└── types.ts (if needed)
```

## Multi-variant components — use CVA

```tsx
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const componentVariants = cva(
  "base-classes-here",
  {
    variants: {
      variant: {
        default: "...",
        outline: "...",
      },
      size: {
        default: "h-8 px-3",
        sm: "h-6 px-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

interface ComponentProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof componentVariants> {
  asChild?: boolean
}

function Component({ className, variant, size, asChild = false, ...props }: ComponentProps) {
  const Comp = asChild ? Slot.Root : "button"
  return <Comp className={cn(componentVariants({ variant, size, className }))} {...props} />
}
```

## Typography — always use these, never raw HTML tags

```tsx
import { H2, P, Small, Muted, Large } from "@/components/ui/typography"

<H2>Section title</H2>
<P>Body paragraph text</P>
<Large>Emphasized non-heading text</Large>
<Small>Label or nav item</Small>
<Muted>Secondary supporting text</Muted>
```

## Icons

```tsx
import { Settings, type LucideIcon } from "lucide-react"

// In component props:
interface Props { icon?: LucideIcon }

// Render:
{props.icon && <props.icon className="size-4" />}
```

## Class merging

```tsx
import { cn } from "@/lib/utils"

<div className={cn("base-class", isActive && "active-class", className)} />
```

## i18n in components

```tsx
// Client component
"use client"
import { useTranslations } from "next-intl"

function MyComponent() {
  const t = useTranslations("myNamespace")
  return <Small>{t("labelKey")}</Small>
}
```

## Rules checklist
- [ ] No `useMemo`/`useCallback`/`React.memo`
- [ ] All text uses typography components
- [ ] Icons from `lucide-react` only
- [ ] `index.ts` created with re-exports
- [ ] External imports use folder index
- [ ] Boolean props start with `is`/`has`/`can`/`should`
- [ ] No comments unless genuinely non-obvious
- [ ] i18n keys added to both `en.json` and `vi.json`
