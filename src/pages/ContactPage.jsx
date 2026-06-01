import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GitBranch } from 'lucide-react'
import { PageShell } from '../components/PageShell'
import { githubUrl } from '../data/portfolioData'
import { fadeUp } from '../lib/animations'

export function ContactPage() {
  return (
    <section className="relative py-20">
      <PageShell>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-[2.3rem] border border-cyan-400/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),linear-gradient(180deg,rgba(8,20,30,0.96),rgba(5,12,19,1))] px-8 py-10 shadow-[0_30px_90px_rgba(0,0,0,0.38)] sm:px-10 sm:py-12"
        >
          <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-teal-400/10 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
                JM Trading Systems
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                Trading systems built with structured logic, realistic validation, and automation-ready workflows.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
                The portfolio stays centered on trading infrastructure,
                strategy development, MT4/MT5 systems, automation support,
                and QA-backed reliability.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/projects/trading"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/18 bg-white/3 px-6 py-3 text-sm font-semibold text-cyan-100 transition-colors duration-300 hover:bg-cyan-300/8"
              >
                View Projects
              </Link>
              <a
                href={githubUrl}
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#041018] transition-transform duration-300 hover:-translate-y-0.5"
              >
                View GitHub
                <GitBranch className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </PageShell>
    </section>
  )
}
