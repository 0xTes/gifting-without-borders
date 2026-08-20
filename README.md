# Gifting Without Borders

Gifting Without Borders is a humanitarian nonprofit web platform built to present practical support, project context, and giving information with dignity and accountability. The current implementation is a reviewable foundation with content-ready states where authoritative organizational information is still pending.

## Stack

- Next.js 16 and React 19
- JavaScript and the Next.js App Router
- Tailwind CSS v4
- Vercel deployment target

## Local development

```bash
npm install
npm run dev
```

Useful commands:

```bash
npm run lint
npm run build
git diff --check
```

## Branch model

Work from `develop` on a scoped `feature/*` branch, validate it, open a pull request into `develop`, review it, merge it, then synchronize local `develop`. `main` is reserved for production-ready checkpoints. See [Development Workflow](docs/development-workflow.md).

## Current status

The foundation, global shell, Homepage architecture, About, Projects, and core content-ready pages are implemented. Authoritative organization, contact, project-reporting, story, transparency, and donation-channel inputs remain intentionally pending.

## Documentation

- [Architecture](docs/architecture.md)
- [Brand Guidelines](docs/brand-guidelines.md)
- [Asset Inventory](docs/asset-inventory.md)
- [Content Strategy](docs/content-strategy.md)
- [Content Readiness](docs/content-readiness.md)
- [Donation Funnel](docs/donation-funnel.md)
- [Roadmap](docs/roadmap.md)
- [SEO Strategy Boundary](docs/seo-strategy.md)
