# Research Connect

Minimal Next.js App Router project with React, TypeScript, ESLint, and SCSS.
The home page at `/` displays `Hello`.

## Development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000. The page is in `src/app/page.tsx`; global styles are in
`src/app/globals.scss`.

## Checks and production

```bash
pnpm lint
pnpm build
pnpm exec tsc --noEmit
pnpm start
```

The build generates the Next.js types required by the standalone TypeScript check.
