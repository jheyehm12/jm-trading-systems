# Open Tasks — Jimeno Labs Portfolio

> Future work for the portfolio only. Update when items are completed or priorities shift.  
> Sync with `MASTER_PROMPT.md` Future Roadmap and `PROJECT_STATE.md` Missing Items.

---

## High Priority

- [ ] **Configure www.jimenolabs.dev** — DNS / hosting (out of repo scope)
- [ ] **Redirect old domain** — point jmtradingsystems.com → jimenolabs.dev (DNS / hosting)
- [ ] **Set up professional email** — prepare mailbox; do **not** invent or activate `john@jimenolabs.dev` on the site until ready
- [ ] **Update external profile links** — Upwork, LinkedIn, GitHub profile, other directories → Jimeno Labs / https://jimenolabs.dev
- [ ] **Update root `README.md`** — replace Vite boilerplate with Astro + Jimeno Labs setup
- [ ] **Add QuantLab project** — Python trading research platform (content exists in legacy `portfolioData.js`)
- [ ] **Add MT5 Import / EA demo** — showcase MQL4/MQL5 capability on portfolio
- [ ] **Add project screenshots** — real UI captures for Workforce, TradeVault, Client Intake (MyAlert charts done)
- [ ] **Record Loom demos** for MyAlert and Resort Booking (if available)
- [ ] **Per-project GitHub URLs** — replace single profile link where dedicated repos exist

---

## Medium Priority

- [ ] **Restore AI Trading Screenshot Assistant** on Astro homepage or dedicated project page
- [ ] **Add `/skills` Astro page** — migrate from `src-legacy-vite/pages/SkillsPage.jsx`
- [ ] **Improve case study detail pages** — shared layout, previews, consistent action buttons
- [ ] **Add project filters** — category tabs on homepage (Trading / AI / QA)
- [ ] **Add `og:image` asset** — social sharing preview image (OG tags already present)
- [ ] **Add `LICENSE` file** — MIT or proprietary for this repo
- [ ] **Remove or document `_aeon-template/`** — template reference vs gitignored clone
- [ ] **Improve mobile animations** — reduce motion cost on low-end devices

---

## Low Priority

- [ ] **Dark/light toggle polish** — persist preference, test all sections in both modes
- [ ] **Search projects** — client-side filter by title/tag
- [ ] **Visitor analytics** — privacy-friendly (Plausible, Vercel Analytics)
- [ ] **Blog / insights section** — optional thought leadership
- [ ] **Testimonials** — link to live Upwork profile or add more reviews
- [ ] **Contact form** — backend or form service (currently GitHub-only on contact page)
- [ ] **i18n** — unlikely needed; note if requested

---

## Completed (recent)

- [x] Rebrand to **Jimeno Labs** (header, footer, titles, SEO, canonical, OG)
- [x] Primary URL **https://jimenolabs.dev** in Astro config, sitemap, robots
- [x] Shared `SiteHead.astro` metadata component
- [x] AI Workforce Assistant Platform — full portfolio entry + demos
- [x] AI Client Onboarding / Document Intake Platform
- [x] Loom Demo buttons (conditional `ProjectActionButtons`)
- [x] QA experience entries (Banking QA, Test Automation / Validation)
- [x] Astro 6 migration
- [x] Responsive layout pass
- [x] Light mode fix
- [x] Work With Me rename
- [x] Portfolio documentation files (this set)

---

## Maintenance checklist (every portfolio change)

1. Update `src/data/projects.ts` and/or `src/data/site.ts`
2. Run `npm run build` — verify no errors
3. Update `MASTER_PROMPT.md`
4. Update `PROJECT_STATE.md`
5. Add entry to `CHANGELOG.md`
6. Tick or add items in `OPEN_TASKS.md`
