# Jimeno Labs Portfolio — Project State

> Snapshot of the portfolio codebase and deployment status. Update on every meaningful portfolio change.

---

## Portfolio Version

**2.2.1** (package.json: `1.0.0` — align on next release tag)

---

## Deployment Status

| Item | Status |
|---|---|
| **Brand** | Jimeno Labs |
| **Owner** | John Michael Jimeno |
| **Primary URL** | https://jimenolabs.dev |
| **Build** | Passing (`npm run build` → static `dist/`) |
| **GitHub** | https://github.com/jheyehm12/jm-trading-systems *(name unchanged)* |
| **Vercel project** | Unchanged (do not rename) |
| **Astro `site`** | `https://jimenolabs.dev` in `astro.config.mjs` |
| **Astro dev toolbar** | Disabled in `astro.config.mjs` |
| **Legacy Vite app** | Archived at `src-legacy-vite/` (not served) |
| **DNS / redirects / hosting** | Out of scope for this repo — pending ops tasks |

---

## Last Updated

**2026-10-15**

---

## Current Pages

| Route | File | Description |
|---|---|---|
| `/` | `src/pages/index.astro` | Homepage — hero, case studies, selected work, stats, services summary, testimonials, QA background, contact CTA, footer |
| `/contact/` | `src/pages/contact.astro` | Work With Me — GitHub CTA, availability tags |
| `/services/` | `src/pages/services.astro` | Services — three build areas |
| `/projects/trading/` | `src/pages/projects/trading.astro` | MyAlert, LookBack, TradeVault |
| `/projects/ai-automation/` | `src/pages/projects/ai-automation.astro` | Workforce, Client Intake, Resort Booking |
| `/projects/full-stack/` | `src/pages/projects/full-stack.astro` | TradeVault summary |
| `/projects/qa-validation/` | `src/pages/projects/qa-validation.astro` | Banking QA, Test Automation / Validation |

**Total static pages:** 7 (build output)  
**SEO:** Shared `SiteHead.astro` — titles, description, canonical, Open Graph, Twitter card, author  
**Crawl:** `public/robots.txt` + `public/sitemap.xml`

---

## Current Navigation

### Hero (desktop xl+)

- Angled nav: Projects, Selected Work | Services, Work With Me
- Mobile/tablet: hamburger menu with full `siteNav`
- Brand mark: **Jimeno Labs** (center monogram **JM**)

### `siteNav` / footer directory

| Label | Target |
|---|---|
| Projects | `#case-studies` |
| Selected Work | `#selected-work` |
| Services | `/services/` |
| Work With Me | `/contact/` |
| GitHub | https://github.com/jheyehm12 |

### Homepage sections (order)

1. Hero (`JMHeroShell`)
2. Case Studies (`#case-studies`)
3. Selected Work (`#selected-work`)
4. Stats
5. What I Build (`#build`)
6. Testimonials
7. Validation Background (`#validation-background`)
8. Work With Me CTA (`#work-with-me`)
9. Footer

---

## Current Project Count

| Bucket | Count | Projects |
|---|---|---|
| **Homepage Case Studies** | 2 | MyAlert, LookBack |
| **Homepage Selected Work** | 4 | AI Workforce, Client Intake, TradeVault, Resort Booking |
| **QA Experience (homepage)** | 2 | Banking QA, Test Automation / Validation |
| **Portfolio site itself** | 1 | Jimeno Labs (this repo) |
| **Total featured** | **9** | |

**Archived / not on Astro homepage:** AI Trading Screenshot Assistant (`src-legacy-vite/`)

---

## Current Skills Count

| Group | Items |
|---|---|
| Trading Systems (`whatIBuild`) | 5 |
| AI & Automation (`whatIBuild`) | 4 |
| Full Stack (`whatIBuild`) | 5 |
| QA tools (`validationBackground`) | 10 |
| **Distinct skill areas** | **4 groups · 24 listed items** |

---

## Current Services Count

| Source | Items |
|---|---|
| What I Build categories | 3 service areas |
| Contact availability tags | 4 engagement types |
| Footer policy labels | 3 focus labels |

---

## Live Portfolio URL

**Primary brand URL:** https://jimenolabs.dev

Project live demos (separate apps — unchanged):

- https://ai-workforce-assistant-platform.vercel.app/
- https://trade-vault2.vercel.app/

---

## GitHub Repository

https://github.com/jheyehm12/jm-trading-systems

Default project GitHub link: https://github.com/jheyehm12

---

## Latest Portfolio Changes

- Center circular monogram restored to **JM** (full brand remains Jimeno Labs)
- **Rebrand to Jimeno Labs** — header, footer, page titles, SEO, canonical, Open Graph
- Primary URL set to **https://jimenolabs.dev** (`astro.config.mjs` `site`, sitemap, robots)
- Shared **`SiteHead.astro`** for metadata across all pages
- Owner attributed as **John Michael Jimeno** (`meta name="author"`)
- Contact method unchanged (GitHub CTA) — no new email activated
- Project names, descriptions, Live/GitHub/Loom links preserved

---

## Missing Items

- [ ] Configure **www.jimenolabs.dev** (DNS/hosting)
- [ ] Redirect old domain (**jmtradingsystems.com**) to jimenolabs.dev
- [ ] Set up professional email (do not publish until ready)
- [ ] Update external profile links (Upwork, LinkedIn, GitHub profile bio, etc.)
- [ ] Root `README.md` still Vite boilerplate — needs Astro / Jimeno Labs README
- [ ] `LICENSE` file for repo
- [ ] Loom demos for MyAlert, LookBack, Resort Booking
- [ ] Live demos for Client Intake, Resort Booking, MyAlert
- [ ] Dedicated Astro `/skills` page (legacy only)
- [ ] AI Trading Screenshot Assistant on current homepage
- [ ] Real screenshots beyond MyAlert chart images
- [ ] Per-project GitHub repo URLs (currently single profile URL)
- [ ] Open Graph image asset (`og:image`)

---

## Next Improvements

1. Complete DNS/hosting: www subdomain + old-domain redirect
2. Set up professional email when ready (do not invent contact addresses in site copy)
3. Update external profiles to Jimeno Labs / jimenolabs.dev
4. Update `README.md` to match Astro stack and new brand
5. Optional: add `og:image` social preview asset
6. Optional: project filters by category on homepage
