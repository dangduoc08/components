# i18n Rules (Owlky)

## Setup
- Library: `next-intl` 4.8.3
- Locales: `vi` (default), `en`
- Message files: `src/i18n/messages/en.json` and `src/i18n/messages/vi.json`
- Routing: `src/i18n/routing.ts` — `defineRouting({ locales, defaultLocale: "vi" })`
- Middleware: `src/proxy.ts` (next-intl middleware for locale routing)

## Using translations
- **Server component**: `const t = await getTranslations("namespace")`
- **Client component**: `const t = useTranslations("namespace")`
- Always add keys to BOTH `en.json` and `vi.json` at the same time
- Namespace structure matches the feature/page (e.g., `"nav"`, `"jobs"`, `"postJob"`, `"landing"`)

## Navigation
- Import `Link`, `redirect`, `usePathname`, `useRouter` from `@/i18n/navigation`
- Never import these from `next/navigation` — the i18n wrappers handle locale prefixing

## Timezone
- Detected client-side from `Intl.DateTimeFormat().resolvedOptions().timeZone`
- Stored in cookie `NEXT_LOCALE_TIMEZONE` by `TimezoneProvider`
- Read server-side in `src/i18n/request.ts` and passed to `NextIntlClientProvider`

## Adding a new locale
1. Add locale code to `src/i18n/routing.ts`
2. Add message file `src/i18n/messages/<locale>.json`
3. Update `src/i18n/request.ts` if needed

## Adding new translation keys
1. Add to `src/i18n/messages/en.json` under the appropriate namespace
2. Add to `src/i18n/messages/vi.json` with the Vietnamese translation
3. Never leave a key missing in any locale — it throws in dev
