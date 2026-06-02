import { motion } from 'framer-motion'
import { PageShell } from '../components/PageShell'
import { ShowcaseProjectCard } from '../components/ProjectCards'
import { SectionHeading } from '../components/SectionHeading'
import { fullStackTradingProjects } from '../data/portfolioData'
import { fadeUp } from '../lib/animations'

export function FullStackTradingPage() {
  return (
    <section className="relative border-b border-white/6 py-20">
      <PageShell>
        <SectionHeading
          eyebrow="Full Stack Trading Applications"
          title="Trader-focused SaaS products that extend trading systems expertise into production web platforms."
          copy="These projects demonstrate full stack delivery—authentication, databases, analytics UI, and cloud deployment—while staying anchored in real trading workflows rather than generic business apps."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="rounded-[1.7rem] border border-cyan-400/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_38%),linear-gradient(180deg,rgba(8,20,30,0.96),rgba(5,12,19,1))] p-6 shadow-[0_22px_54px_rgba(0,0,0,0.28)] sm:p-8"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
              TradeVault Overview
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              TradeVault combines trade journaling, performance analytics, and
              trader-focused dashboards into a single platform designed to help
              traders review performance, identify strengths and weaknesses,
              and improve decision-making through structured data and visual
              insights.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            custom={0.06}
            className="rounded-[1.7rem] border border-cyan-400/10 bg-[#07131d] p-6 shadow-[0_22px_54px_rgba(0,0,0,0.28)] sm:p-8"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
              Platform Preview
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Live screenshots and walkthrough videos will be added as the
              platform continues to evolve.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.2rem] border border-dashed border-cyan-400/14 bg-cyan-400/4 px-4 py-8 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/60">
                  Dashboard
                </p>
              </div>
              <div className="rounded-[1.2rem] border border-dashed border-cyan-400/14 bg-cyan-400/4 px-4 py-8 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/60">
                  Analytics
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 space-y-10">
          {fullStackTradingProjects.map((project, index) => (
            <ShowcaseProjectCard
              key={project.title}
              index={index}
              project={project}
            />
          ))}
        </div>
      </PageShell>
    </section>
  )
}
