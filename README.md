# get-agents-kit.com

Next.js 16 (App Router, static export), Tailwind CSS v4, Motion, Phosphor icons.

- `npm run dev`: local dev server
- `npm run build`: static export to `out/` (postbuild fixes segment prefetch file names for static hosting)
- Deploys to GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`)

Site constants (checkout link, price, refund days) live in `src/lib/site.ts`.
