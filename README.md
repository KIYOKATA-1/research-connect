# Research Connect

Next.js App Router project with React, TypeScript, ESLint, and SCSS.
The home page at `/` is a responsive ResearchConnect 2026 conference landing page.
All event details and speaker profiles are illustrative demonstration content.
Speaker photo areas are intentionally empty so real images can be added later.

The registration form includes a sample draft, field validation, and a confirmation
preview. It does not send registrations, emails, or data to a server. Form values
exist only in the current page and reset on reload.

## Development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000. The route in `src/app/page.tsx` renders
`src/components/screens/Home/Home.tsx`. Its six sections are in `Home/sections/`;
the header and footer are in `src/components/layout/`. Component styles use SCSS
Modules, with shared tokens in `src/styles/_conference.scss`. Global styles and
the skip-link are in `src/app/globals.scss`. Inter is served locally; its license
is in `src/styles/fonts/OFL.txt`.

## Checks and production

```bash
pnpm lint
pnpm build
pnpm exec tsc --noEmit
pnpm start
```

The build generates the Next.js types required by the standalone TypeScript check.
If the environment prevents Turbopack from opening its internal local port,
`pnpm build --webpack` builds the production application without changing config.
