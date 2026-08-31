# Muhammad Nurhuda Rusardi — Portfolio

Recruiter-first portfolio for Muhammad Nurhuda Rusardi, Intelligent Automation Engineer, AI Developer, and QA Specialist.

## Stack

- Next.js 16 App Router + TypeScript
- Tailwind CSS 4 foundation with custom editorial CSS
- GSAP + ScrollTrigger via `@gsap/react`
- Lenis smooth scrolling
- Three.js + React Three Fiber + Drei for one lazy-loaded hero scene
- `next/font` for self-hosted optimized font loading

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production verification

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm demo

# with a running local production server
pnpm verify:deployment
```

`pnpm demo` builds the app and starts the production server on port 3000.

## Cloudflare deployment (static export)

This site is a fully static Next.js export (`output: "export"` in `next.config.ts`), so it does **not** need the OpenNext/`@opennextjs/cloudflare` adapter. Deployment uses Cloudflare Workers static assets:

1. Set env var in Cloudflare (or your CI): `NEXT_PUBLIC_SITE_URL=https://<your-domain>` so the sitemap and metadata use the production domain instead of `http://localhost:3000`.
2. Build command: `pnpm build` (or `npx next build`) — output directory: `out`.
3. Deploy with `wrangler.jsonc` already in the repo:

```bash
pnpm build
npx wrangler deploy
```

The explicit `assets` block in `wrangler.jsonc` (`directory: ./out`, `html_handling: auto-trailing-slash`, `not_found_handling: 404-page`) prevents wrangler from triggering its Next.js autoconfig/OpenNext migration, which hangs on Next.js 16.

For Cloudflare **Pages** instead of Workers, use framework preset "Next.js (Static HTML Export)": build command `npx next build`, build directory `out`.

Vercel deployment uses Node.js `24.x`, declared in `package.json` under `engines` and `.nvmrc`.
The Vercel project setting must also be set to Node.js `24.x` under **Settings → Build and Deployment → Node.js Version**; repository files cannot change an existing dashboard-level override by themselves.
Set `NEXT_PUBLIC_SITE_URL` in Vercel Project Settings to the final production domain; see `.env.example`.

## Routes

- `/` — recruiter-first homepage
- `/projects` — all selected projects
- `/projects/[slug]` — project overview / case study shell
- `/about` — extended profile, strengths, skills, and certifications
- `/resume` — web resume with PDF download
- `/resume.pdf` — source resume PDF
- `/sitemap.xml` — generated sitemap

## Personalization

Content is centralized in `lib/constants.ts`. Replace the empty `linkedinUrl` and `githubUrl` values when the final profile links are available. Set `NEXT_PUBLIC_SITE_URL` to the final production domain before deployment; it is intentionally `http://localhost:3000` by default while the domain is unknown.

Project links are intentionally omitted until verified live demo and repository URLs are provided. This avoids publishing dead or fabricated links.

## Design notes

The visual system uses a dark editorial foundation with a restrained electric-blue accent, Geist typography, grid/line details, and one lightweight wireframe 3D object in the hero. All motion has a `prefers-reduced-motion` fallback; the 3D scene is dynamically loaded with a CSS fallback.

The PDF supplied with the project is copied to `public/resume.pdf` so the resume CTA works locally and can be replaced with a final version later.
