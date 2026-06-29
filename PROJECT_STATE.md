# JM Trading Systems Portfolio — Project State

> Snapshot of the portfolio codebase and deployment status. Update on every meaningful portfolio change.

---

## Portfolio Version

**2.1.0** (package.json: `1.0.0` — align on next release tag)

---

## Deployment Status

| Item | Status |
|---|---|
| **Build** | Passing (`npm run build` → static `dist/`) |
| **GitHub** | Pushed to `origin/main` |
| **Vercel / production URL** | Not configured in repository |
| **Astro dev toolbar** | Disabled in `astro.config.mjs` |
| **Legacy Vite app** | Archived at `src-legacy-vite/` (not served) |

---

## Last Updated

**2026-06-02**

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

---

## Current Navigation

### Hero (desktop xl+)

- Angled nav: Projects, Selected Work | Services, Work With Me
- Mobile/tablet: hamburger menu with full `siteNav`

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
| **Portfolio site itself** | 1 | JM Trading Systems (this repo) |
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

**Not set in repository.**

Project live demos (separate apps):

- https://ai-workforce-assistant-platform.vercel.app/
- https://trade-vault2.vercel.app/

---

## GitHub Repository

https://github.com/jheyehm12/jm-trading-systems

Default project GitHub link: https://github.com/jheyehm12

---

## Latest Portfolio Changes

- Added **AI Client Submission & Document Intake Platform** with Loom demo
- Expanded **AI Workforce Assistant Platform** (full copy, tags, demo links)
- Added **TradeVault** to trading projects with Live + Loom + GitHub
- Added **QA experience** entries (Banking QA, Test Automation / Validation)
- Added **`ProjectActionButtons`** — Live Demo, GitHub, ▶ Watch Demo (conditional)
- Created **`/projects/qa-validation/`** detail page
- **Responsive layout** overhaul (hero flow, mobile nav, spacing)
- **Light mode** theme tokens and semantic color system
- **Work With Me** rename (formerly Contact labels)
- **Astro 6 migration** from legacy Vite SPA (`src-legacy-vite/`)

---

## Missing Items

- [ ] Production URL for portfolio site (Vercel) documented and linked
- [ ] Root `README.md` still Vite boilerplate — needs Astro portfolio README
- [ ] `LICENSE` file for JM repo
- [ ] Loom demos for MyAlert, LookBack, Resort Booking
- [ ] Live demos for Client Intake, Resort Booking, MyAlert
- [ ] Dedicated Astro `/skills` page (legacy only)
- [ ] AI Trading Screenshot Assistant on current homepage
- [ ] Real screenshots beyond MyAlert chart images
- [ ] Per-project GitHub repo URLs (currently single profile URL)

---

## Next Improvements

1. Deploy to Vercel and record live portfolio URL
2. Update `README.md` to match Astro stack
3. Add MyAlert / TradeVault Loom if recordings exist
4. Migrate or drop `src-legacy-vite/` after parity check
5. Add Open Graph / social preview meta tags
6. Optional: project filters by category on homepage
