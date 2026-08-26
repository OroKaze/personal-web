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
```

`pnpm demo` builds the app and starts the production server on port 3000.

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

The visual system uses a dark editorial foundation with a restrained lime accent, serif emphasis typography, grid/line details, and one lightweight wireframe 3D object in the hero. All motion has a `prefers-reduced-motion` fallback; the 3D scene is dynamically loaded with a CSS fallback.

The PDF supplied with the project is copied to `public/resume.pdf` so the resume CTA works locally and can be replaced with a final version later.
