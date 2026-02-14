# Repository Guidelines

## Project Structure & Module Organization
- `app/` App Router pages, layout, and global styles (`globals.css`).
- `components/` Reusable UI sections (Navigation, Hero, Features, WebUIDashboard, UseCases, Ecosystem, CTA, Footer). Content data often lives at the top of these files.
- `public/` Static assets, including `public/screenshots/` for marketing imagery.
- Config: `tailwind.config.ts`, `postcss.config.mjs`, `tsconfig.json`, `next.config.ts`.

## Build, Test, and Development Commands
- `npm install` Install dependencies.
- `npm run dev` Start Next.js dev server at `http://localhost:3000`.
- `npm run build` Production build (checks types and bundles).
- `npm start` Serve the built app from `.next`.
- `npm run lint` ESLint with Next.js config; run before opening a PR.

## Coding Style & Naming Conventions
- TypeScript + React (Next.js 15). Prefer functional components and server components where appropriate.
- Styling via Tailwind; keep utility classes readable and grouped by purpose (layout → spacing → color → effects).
- Indentation: 2 spaces. Use single quotes in JSX/TS where consistent with existing files.
- Components and files: PascalCase for components (e.g., `Features.tsx`), kebab-case for public assets.
- Keep props minimal; derive display data from local arrays/constants near the top of each component.

## Testing Guidelines
- No automated test suite yet; rely on `npm run lint` and manual QA in dev mode.
- Check responsive behavior (mobile/desktop) and dark aesthetic parity.
- Before shipping, verify key pages render: `app/page.tsx` and any new routes under `app/`.

## Commit & Pull Request Guidelines
- Commits: concise, imperative summary (e.g., `Add CTA contrast tweak`, `Fix navigation focus states`).
- Branching: feature branches (`feature/…` or `fix/…`); keep PRs scoped to a single concern.
- PRs should include: short description of changes, screenshots or GIFs for UI updates, mention of lint/test results, and any content sources if marketing copy changed.
- Link issues or tasks when available; request review from maintainers familiar with the touched area (components vs. config).

## Security & Configuration Tips
- Avoid committing secrets; this site does not require runtime env vars by default.
- If adding integrations, document required env vars in `README.md` and use `.env.local` (not committed).
- Static assets belong in `public/`; avoid remote hotlinks when possible to keep builds deterministic.
