import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { CaseStudyBlock } from '../components/CaseStudyBlock'
import { ProjectScreenshot } from '../components/ProjectScreenshot'
import { PageShell } from '../components/PageShell'
import {
  contactAvailability,
  credibilityLine,
  homeCaseStudies,
  homeHero,
  homeHeroPreview,
  homeSelectedWork,
  qaSupportNote,
  testimonials,
  whatIBuild,
} from '../data/portfolioData'
import { fadeUp } from '../lib/animations'

export function HomePage() {
  return (
    <>
      <section className="border-b border-white/5">
        <PageShell className="pb-20 pt-16 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-20">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="max-w-xl"
            >
              <p className="text-sm text-slate-400">JM Trading Systems</p>

              <h1 className="mt-5 space-y-1 font-semibold tracking-[-0.04em] text-white">
                {homeHero.lines.map((line) => (
                  <span
                    key={line}
                    className="block text-[1.85rem] leading-[1.15] sm:text-[2.15rem] lg:text-[2.35rem]"
                  >
                    {line}
                  </span>
                ))}
              </h1>

              <p className="mt-6 text-base leading-8 text-slate-300">
                {homeHero.intro}
              </p>

              <p className="mt-4 text-base leading-8 text-slate-400">
                {homeHero.subheadline}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-90"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/25 hover:bg-white/[0.03]"
                >
                  Let&apos;s Talk
                </Link>
              </div>

              <p className="mt-10 text-sm text-slate-500">
                {credibilityLine.join(' • ')}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={0.08}
              className="lg:pl-4"
            >
              <p className="mb-3 text-xs text-slate-500">
                {homeHeroPreview.label}
              </p>
              <ProjectScreenshot
                type={homeHeroPreview.previewType}
                large
              />
            </motion.div>
          </div>
        </PageShell>
      </section>

      <section id="case-studies" className="border-b border-white/5">
        <PageShell className="!pb-4 !pt-16 sm:!pt-20">
          <div className="max-w-2xl">
            <p className="text-sm text-slate-500">Case Studies</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
              Trading systems built for real execution workflows.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-400">
              Deep dives into flagship trading projects — problem, build approach,
              stack, and outcome.
            </p>
          </div>

          <div className="mt-4">
            {homeCaseStudies.map((project, index) => (
              <CaseStudyBlock
                key={project.id}
                project={project}
                index={index}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </PageShell>
      </section>

      <section id="selected-work" className="border-b border-white/5">
        <PageShell className="!pb-4 !pt-16 sm:!pt-20">
          <div className="max-w-2xl">
            <p className="text-sm text-slate-500">Selected Work</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
              AI automation and SaaS projects.
            </h2>
          </div>

          <div className="mt-4">
            {homeSelectedWork.map((project, index) => (
              <CaseStudyBlock
                key={project.id}
                project={project}
                index={index}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </PageShell>
      </section>

      <section id="build" className="border-b border-white/5 py-16 sm:py-24">
        <PageShell className="!pt-0">
          <p className="text-sm text-slate-500">What I Build</p>
          <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            Three areas of client work.
          </h2>

          <div className="mt-12 grid gap-12 sm:grid-cols-3 sm:gap-8">
            {whatIBuild.map((group) => (
              <div key={group.title}>
                <h3 className="text-base font-medium text-white">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm leading-7 text-slate-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-14 text-sm leading-7 text-slate-500">
            {qaSupportNote}
          </p>
        </PageShell>
      </section>

      <section id="testimonials" className="border-b border-white/5 py-16 sm:py-24">
        <PageShell className="!pt-0">
          <p className="text-sm text-slate-500">Client feedback</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            Upwork reviews.
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.blockquote
                key={item.role}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                custom={index * 0.04}
                className="border-t border-white/8 pt-6"
              >
                <div className="flex gap-0.5 text-slate-400">
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-3.5 w-3.5 fill-current"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-4">
                  <p className="text-sm text-white">{item.role}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.source}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </PageShell>
      </section>

      <section id="contact" className="py-16 sm:py-24">
        <PageShell className="!pt-0">
          <div className="max-w-2xl">
            <p className="text-sm text-slate-500">Contact</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
              Open to selected projects.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-400">
              Trading systems, AI automation, and custom SaaS builds.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {contactAvailability.map((item) => (
              <span
                key={item}
                className="rounded border border-white/10 px-3 py-1.5 text-sm text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-90"
            >
              Let&apos;s Talk
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/25"
            >
              View all projects
            </Link>
          </div>
        </PageShell>
      </section>
    </>
  )
}
