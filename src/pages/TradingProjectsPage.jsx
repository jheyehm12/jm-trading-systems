import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageShell } from '../components/PageShell'
import {
  FeaturedProjectCard,
  OtherWorkCard,
  ProjectActionButtons,
} from '../components/ProjectCards'
import { SectionHeading } from '../components/SectionHeading'
import {
  additionalProjects,
  featuredProjects,
  fullStackTradingProjects,
  githubUrl,
} from '../data/portfolioData'
import { fadeUp } from '../lib/animations'

export function TradingProjectsPage() {
  const tradeVault = fullStackTradingProjects[0]

  return (
    <>
      <section className="relative border-b border-white/6 py-20">
        <PageShell>
          <SectionHeading
            eyebrow="Trading SaaS"
            title="Production-grade trading applications built with full stack architecture."
            copy="TradeVault extends trading systems work into secure SaaS delivery—journals, analytics, and trader-facing dashboards deployed for real-world use."
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="mt-10 rounded-[1.75rem] border border-cyan-400/14 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_38%),linear-gradient(180deg,rgba(8,20,30,0.96),rgba(5,12,19,1))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.32)] sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Featured Trading Application
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
              {tradeVault.title}
            </h3>
            {tradeVault.subtitle ? (
              <p className="mt-1 text-sm font-medium text-cyan-200/90">
                {tradeVault.subtitle}
              </p>
            ) : null}
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              {tradeVault.copy}
            </p>
            <p className="mt-4 text-sm leading-7 text-cyan-100/90">
              {tradeVault.outcome}
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <ProjectActionButtons
                demoUrl={tradeVault.demoUrl}
                liveUrl={tradeVault.liveUrl}
                githubUrl={tradeVault.githubUrl}
                className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              />
              <Link
                to="/projects/full-stack"
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-300 transition-transform duration-300 hover:translate-x-1"
              >
                View Full Case Study
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </PageShell>
      </section>

      <section className="relative border-b border-white/6 py-20">
        <PageShell className="!pt-0">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Trading systems, automation layers, and validation workflows presented as portfolio-ready development work."
            copy="The featured work stays focused on trading infrastructure, strategy development, automation, and reliability under realistic review conditions."
            actionHref={githubUrl}
            actionLabel="View GitHub"
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard
                key={project.title}
                index={index}
                project={project}
              />
            ))}
          </div>
        </PageShell>
      </section>

      <section className="relative border-b border-white/6 py-20">
        <PageShell className="!pt-0">
          <SectionHeading
            eyebrow="Additional Projects"
            title="Other Development Work"
            copy="Additional system and tooling work that supports trading automation, research workflows, and development efficiency."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {additionalProjects.map((item, index) => (
              <OtherWorkCard key={item.title} index={index} item={item} />
            ))}
          </div>
        </PageShell>
      </section>
    </>
  )
}
