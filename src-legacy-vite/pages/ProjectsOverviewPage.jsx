import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageShell } from '../components/PageShell'
import { SectionHeading } from '../components/SectionHeading'
import { projectRoutes } from '../data/navigation'
import { fadeUp } from '../lib/animations'

export function ProjectsOverviewPage() {
  return (
    <section className="relative border-b border-white/6 py-20">
      <PageShell>
        <SectionHeading
          eyebrow="Projects"
          title="Portfolio work across trading systems, full stack trading apps, AI automation, and QA validation."
          copy="Explore development work organized by focus area. Trading systems remain the core specialization, with supporting proof in SaaS delivery, workflow automation, and validation discipline."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {[...projectRoutes]
            .sort((a, b) => (a.sortOrder ?? 99) - (b.sortOrder ?? 99))
            .map((route, index) => (
            <motion.article
              key={route.to}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              custom={index * 0.08}
              className={[
                'relative flex min-w-0 flex-col rounded-[1.75rem] border bg-[#07131d] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.32)]',
                route.featured
                  ? 'border-cyan-400/18 ring-1 ring-cyan-400/10'
                  : 'border-cyan-400/10',
              ].join(' ')}
            >
              {route.featured ? (
                <span className="mb-4 inline-flex w-fit rounded-full border border-cyan-300/16 bg-cyan-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100">
                  Featured
                </span>
              ) : null}
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                {route.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                {route.description}
              </p>
              <Link
                to={route.to}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-transform duration-300 hover:translate-x-1"
              >
                View {route.title}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </PageShell>
    </section>
  )
}
