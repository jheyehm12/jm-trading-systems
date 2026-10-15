# Changelog — Jimeno Labs Portfolio

All notable changes to the **Jimeno Labs** portfolio site and documentation  
(formerly JM Trading Systems).

Format based on [Keep a Changelog](https://keepachangelog.com/). Portfolio documentation version tracks major content releases.

---

## [2.2.1] — 2026-10-15

### Changed

- Center circular monogram restored from **JL** to **JM** (Jimeno Labs full brand unchanged)

---

## [2.2.0] — 2026-10-15

### Changed

- Rebranded portfolio from **JM Trading Systems** to **Jimeno Labs**
- Brand mark: full name “Jimeno Labs”, symbol “JM” (personal initials; briefly “JL” in 2.2.0, restored in 2.2.1)
- Primary URL / Astro `site`: **https://jimenolabs.dev**
- Page titles, meta descriptions, footer, hero utility label, contact page brand label
- Owner attribution: **John Michael Jimeno** (`meta name="author"`)

### Added

- Shared `SiteHead.astro` — canonical URLs, Open Graph, Twitter card tags
- `public/sitemap.xml` and `public/robots.txt` for jimenolabs.dev

### Preserved

- Project names, descriptions, Live Demo, GitHub, and Loom demo links
- Premium dark theme, hero layout, navigation, responsiveness, animations
- Existing contact method (GitHub CTA) — no new email activated
- GitHub repository name and Vercel project name unchanged

### Documentation

- Updated `MASTER_PROMPT.md`, `PROJECT_STATE.md`, `CHANGELOG.md`, `OPEN_TASKS.md` for Jimeno Labs rebrand and pending domain/email/profile tasks

---

## [2.1.0] — 2026-06-02

### Added

- AI Client Submission & Document Intake Platform (Selected Work + AI automation page)
- Banking QA Experience and Test Automation / Validation (Validation section + `/projects/qa-validation/`)
- `ProjectActionButtons` component — Live Demo, GitHub, ▶ Watch Demo (shown only when URLs exist)
- Loom demo links for AI Workforce, Client Intake, and TradeVault
- `client-intake` and `qa-validation` preview mockups in `ProjectScreenshot`
- Portfolio documentation: `MASTER_PROMPT.md`, `PROJECT_STATE.md`, `CHANGELOG.md`, `OPEN_TASKS.md`
- MyAlert TradingView screenshot assets (`public/images/projects/myalert/`)

### Updated

- AI Workforce Assistant Platform — full description, feature tags, agents, outcome, demo links
- TradeVault — expanded copy, trading category, links on trading + full-stack pages
- Resort Booking Assistant — GitHub link
- MyAlert & LookBack — tags and GitHub links on case studies
- Hero positioning copy and **Work With Me** labels (replacing Contact in nav)
- Selected Work section — outcomes, feature tags, tech stack chips, action buttons
- Case Studies — tags, tools, action buttons
- Project detail pages (`trading`, `ai-automation`, `full-stack`) with full project listings

### Improved

- Responsive layout across breakpoints (390px–1440px)
- Light mode theme system (semantic tokens, readable contrast)
- Horizontal overflow prevention
- Astro dev toolbar disabled in development

---

## [2.0.0] — 2026-06-02

### Added

- Astro 6 + React islands migration
- JM-branded components: `JMHeroShell`, `CaseStudySection`, `SelectedWorkSection`, `ValidationBackgroundSection`, `JMFooter`
- Centralized data: `src/data/projects.ts`, `src/data/site.ts`
- Pages: `/`, `/contact/`, `/services/`, `/projects/trading/`, `/projects/ai-automation/`, `/projects/full-stack/`

### Changed

- Replaced Vite SPA as primary app; archived to `src-legacy-vite/`
- Build output: static `dist/` (7 pages)

### Removed

- Active Vite `npm run dev` on port 5173 (now Astro port 4321)

---

## [1.x] — Pre-Astro (legacy Vite SPA)

### Added

- React + Vite portfolio with multi-page routing
- AI Workforce Assistant Platform project data
- TradeVault featured project with Loom + live URL
- Skills, Services, QA Validation, and project archive pages
- Dark theme portfolio redesign

### Note

Legacy history preserved in `src-legacy-vite/` and git history (`8af5b97` and earlier).

---

## Documentation maintenance

When shipping portfolio changes, add a new version section here and sync:

- `MASTER_PROMPT.md`
- `PROJECT_STATE.md`
- `OPEN_TASKS.md`
