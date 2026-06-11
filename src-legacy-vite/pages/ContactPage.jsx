import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, GitBranch } from 'lucide-react'
import { PageShell } from '../components/PageShell'
import { contactAvailability, githubUrl } from '../data/portfolioData'
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
          className="rounded-lg border border-white/8 bg-[#111] px-8 py-10 sm:px-10 sm:py-12"
        >
          <p className="text-sm text-slate-500">
            Contact
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            Let&apos;s talk about your next project.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Available for trading systems development, AI automation builds, and
            custom SaaS applications. Reach out through GitHub or review project
            work to see if there is a fit.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {contactAvailability.map((item) => (
              <span
                key={item}
                className="rounded border border-white/10 px-3 py-2 text-sm text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={githubUrl}
              rel="noreferrer"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-90"
            >
              Connect on GitHub
              <GitBranch className="h-4 w-4" />
            </a>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/25"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </PageShell>
    </section>
  )
}
