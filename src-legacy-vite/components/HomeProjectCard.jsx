import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { fadeUp } from '../lib/animations'
import { ProjectBanner } from './ProjectCards'
import { StackBadge } from './ToolLogo'

export function HomeProjectCard({ project, index }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      custom={index * 0.06}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#07131d]"
    >
      <div className="relative h-48 overflow-hidden border-b border-white/6 sm:h-52">
        <ProjectBanner project={project} />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300/75">
          {project.category}
        </span>
        <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">
          {project.title}
        </h3>

        <div className="mt-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Problem solved
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-300">
            {project.problem}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Key features
          </p>
          <ul className="mt-2 space-y-1.5">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-2 text-sm leading-6 text-slate-300">
                <span className="text-cyan-300/70">—</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <StackBadge key={`${project.id}-${tool}`} name={tool} />
          ))}
        </div>

        <Link
          to={project.detailTo}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors hover:text-cyan-100"
        >
          View details
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  )
}
