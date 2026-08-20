# Asset inventory

Source recovery audit: 2026-08-17. Live-source recheck: 2026-08-20. The source site was the organization-controlled public legacy homepage at `https://giftingwithoutborder.org/`.

| Local asset | Public source | Current use | Provenance boundary |
| --- | --- | --- | --- |
| `public/images/brand/gifting-without-borders-logo.png` | `/Logo.png` | Header and footer identity | Organization logo published on the legacy homepage. |
| `public/images/projects/empowerment-training.webp` | `/IMG4.jpg` | Empowerment & Training project card and detail page | Legacy homepage image paired with the training project card. The delivered file is WebP despite the legacy `.jpg` URL. |
| `public/images/projects/medical-outreach.jpg` | `/MED2.jpg` | Medical Outreach project card and detail page | Legacy homepage image paired with the medical project card. |
| `public/images/projects/feeding-outreach.jpg` | `/IMG1.jpg` | Feeding Outreach project card, detail page, and About hero | Legacy homepage image paired with the feeding project card. |

The legacy `/about`, `/projects`, `/gallery`, `/contact`, and `/donate` routes returned not-found responses during the 2026-08-20 recheck, so this implementation uses only the public homepage’s stated project areas and imagery. No legacy address, email, telephone, social account, payment information, statistics, testimonials, named individuals, dates, locations, or outcomes were reused.

Excluded assets: third-party Freepik images found in the legacy page source; the same-domain widows-outreach image at `/Widows/Wid7.jpg` (not recovered locally and without publication-context metadata); and additional ambiguous legacy images without a clear project-context match. Project descriptions and their publication boundaries are centralized in `src/data/projects.js`. See `docs/content-evidence-matrix.md` for the evidence classification used by the trust-content milestone.
