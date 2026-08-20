# Asset inventory

Source recovery audit: 2026-08-17. Live-source recheck and owner asset intake: 2026-08-20. The legacy source was the organization-controlled public site at `https://giftingwithoutborder.org/`; direct files named below were provided by the project owner.

| Local asset | Source | Current use | Provenance boundary |
| --- | --- | --- | --- |
| `public/images/brand/gifting-without-borders-logo.png` | Legacy `/Logo.png` | Header and footer identity | Organization logo published on the legacy homepage. |
| `public/images/home/hero.webp` | Owner-supplied `hero.jpg` | Homepage right-side hero media | Direct owner-supplied visual and explicit placement direction. The delivered file is WebP despite its supplied `.jpg` filename. It supports the image placement, not an inferred activity, date, location, or outcome. |
| `public/images/projects/empowerment-training.webp` | Legacy `/IMG4.jpg` | Empowerment & Training project card and detail hero | Legacy homepage image paired with the training project card. The delivered file is WebP despite the legacy `.jpg` URL. |
| `public/images/projects/empowerment-training/empowerment-training-02.webp` | Legacy `/Empowerment/Emp2.jpg` | Empowerment & Training detail gallery | Original gallery image rendered in the legacy Empowerment group. The delivered file is WebP despite the legacy `.jpg` URL. |
| `public/images/projects/empowerment-training/empowerment-training-03.webp` | Legacy `/Empowerment/Emp3.jpg` | Empowerment & Training detail gallery | Original gallery image rendered in the legacy Empowerment group. |
| `public/images/projects/medical-outreach.jpg` | Legacy `/MED2.jpg` | Medical Outreach project card and detail hero | Legacy homepage image paired with the medical project card. |
| `public/images/projects/medical-outreach/medical-outreach-01.webp` through `-03.webp` | Legacy `/Medical/Med1.JPG` through `Med3.JPG` | Medical Outreach detail gallery | Original gallery images rendered in the legacy Medical group. |
| `public/images/projects/feeding-outreach.jpg` | Legacy `/IMG1.jpg` | Feeding Outreach project card, detail hero, and About hero | Legacy homepage image paired with the feeding project card. |
| `public/images/projects/feeding-outreach/feeding-outreach-01.webp` through `-03.webp` | Legacy `/Feeding/Feed1.jpg` through `Feed3.jpg` | Feeding Outreach detail gallery | Original gallery images rendered in the legacy Feeding group. The delivered files are WebP despite their legacy `.jpg` URLs. |
| `public/images/projects/widows-outreach/widows-outreach-01.webp` | Owner-supplied `Wid7.jpg` | Widows project card, detail hero, and gallery | Direct owner-supplied visual and explicit placement direction. It supports the image placement, not an inferred activity, date, location, or outcome. |
| `public/images/projects/widows-outreach/widows-outreach-02.jpg` and `-03.jpg` | Legacy `/Widows/Wid2.jpg` and `Wid3.jpg` | Widows Outreach detail gallery | Original gallery images rendered in the legacy Widows group. |

## Exclusions and handling notes

- The supplied legacy screenshots are evidence/reference only; no screenshot is copied into `public/` or rendered by the product.
- One recovered Empowerment image was excluded because it visibly exposes registration and partner material that this milestone does not publish or substantiate.
- Third-party Freepik images found in the legacy page source remain excluded.
- Direct navigation to legacy `/gallery` returned a not-found response during the recheck, while the client-rendered gallery exposed the original source asset paths used above. The paths are treated as historic visual associations, not as a current publication record.
- No legacy address, email, telephone, social account handle, payment information, statistics, testimonials, named individuals, dates, locations, or outcomes are reused, except the owner-authorized conservative location string recorded in the evidence matrix.

Project descriptions and their publication boundaries are centralized in `src/data/projects.js`. See `docs/content-evidence-matrix.md` for the evidence classification used by the trust-content milestone.
