# Gifting Without Borders design foundation

This foundation is locked for the first implementation phase. It balances editorial humanitarian storytelling (66%) with restrained product-quality interaction design (34%). Prefer calm, precise, human presentation over decoration or conversion pressure.

## Runtime source of truth

`src/app/globals.css` owns runtime CSS variables and Tailwind v4 mappings. `src/config/theme.js` is the matching JavaScript-facing semantic contract; values in both files must remain in parity. `src/app/layout.jsx` loads Inter as `--font-inter` and Merriweather as `--font-merriweather`; CSS and Tailwind use those raw Next font variables directly. Do not introduce a second font-variable chain.

## Tokens

| Purpose | Token | Value |
| --- | --- | --- |
| Page background | `--background` | `#F8F7F2` |
| Surface | `--surface` | `#FFFFFF` |
| Primary teal | `--primary` | `#0F766E` |
| Accent gold | `--accent` | `#F59E0B` |
| Main text | `--foreground` | `#0F172A` |
| Secondary text | `--foreground-secondary` | `#334155` |
| Muted text | `--foreground-muted` | `#64748B` |
| Border | `--border` | `#E2E8F0` |
| Keyboard focus | `--focus-ring` | `#92400E` |

Merriweather is used for headings only; Inter is the body and interface face. Core hierarchy: display heading, section heading, card heading, body large, body, and uppercase meta/eyebrow. Keep readable text around 55–70 characters per line rather than expanding text across the full layout.

## Layout and interaction

- Use only `container-sm` (48rem), `container` (80rem), and `container-wide` (90rem), each with responsive gutters from 1.25rem to 2rem.
- Sections use `--section-space: clamp(4.5rem, 8vw, 8rem)`. Preserve that rhythm unless a specifically dense content type justifies a smaller gap.
- Use 0.25rem, 0.5rem, and 0.75rem radii. Shadows are restrained and only separate floating content from a surface.
- Teal filled buttons are primary actions; outlined buttons are secondary; underlined text actions are tertiary. Gold is an accent, not a primary button background with white text.
- All interactive elements expose a 3px dark-amber focus outline. Controls target at least 44px. Respect reduced-motion preferences.

## Responsive and image policy

Build mobile layouts intentionally from 360px upward; desktop grids should collapse cleanly without horizontal scrolling. Use authentic, consented visual media only. When verified project media, reports, figures, or voices do not exist, use a clear content-ready state instead of placeholder photos, invented statistics, anonymous quotes, or dummy downloads.

## Avoid

Do not introduce SaaS dashboard cards, glassmorphism, neon/gradient decoration, overly rounded UI, large shadow stacks, decorative carousels, unverified impact claims, fake testimonials, or generic stock beneficiary photography. No animation library is needed for this foundation.
