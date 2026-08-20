# Architecture

## Stack

- Next.js 16 with the App Router
- React 19
- JavaScript
- Tailwind CSS v4 alongside the runtime token layer in `src/app/globals.css`
- Vercel is the deployment target
- MDX is deferred; no publishing system is active

## Source structure

| Path | Responsibility |
| --- | --- |
| `src/app` | Route segments, root layout, and global CSS. Public routes are implemented as App Router pages. |
| `src/components` | Reusable layout, section, card, and UI components. |
| `src/config` | Site, theme, metadata, and donation-architecture configuration. |
| `src/data` | Small structured content records, including the verified legacy project archive. |
| `src/lib` | Shared utilities and deferred integration boundaries. |
| `src/content` | Reserved for a future approved content layer; it is not an active MDX system. |
| `public/images` | Organization-owned, provenance-documented brand and project media. |

## Component architecture

`src/app/layout.jsx` supplies the global shell. `SiteHeader` owns the accessible mobile-navigation interaction and `SiteFooter` owns persistent support and navigation links. UI primitives such as `ButtonLink`, `SectionHeading`, and `PageHero` keep recurring interface responsibilities consistent. Home sections are composed in `src/components/sections`; `ProjectCard` is shared by the homepage and project index.

Project records live in `src/data/projects.js`. The project index and `src/app/projects/[slug]` consume that source so a project description and its publication boundary stay together.

## Data and content boundaries

`docs/asset-inventory.md` records the legacy source and allowed use of recovered images. A record may preserve a publicly established project purpose, but it must not imply current delivery, dates, locations, outcomes, metrics, or identities that have not been verified.

Impact, Stories, and Donate are deliberately content-ready states: their layouts exist, but facts and payment data remain absent until the organization approves them. A future MDX/content layer may be introduced only after the content-readiness requirements are met; it must not replace the current structured project data without an explicit migration decision.

## Server and client rule

Prefer Server Components. Add `"use client"` only where browser interaction is necessary, such as the header’s mobile navigation. Do not add client state, remote data fetching, or a CMS abstraction merely to make a future workflow appear complete.

## Guardrails

- No TypeScript or framework migration for this project phase.
- No unnecessary dependencies, animation libraries, or duplicate systems.
- No fabricated organizational, project, impact, story, contact, or financial content.
- Preserve the locked design foundation and accessibility shell.
- Favor maintainability and clear ownership over speculative abstraction.
