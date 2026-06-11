import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { fadeUp } from '../lib/animations'
import { ProjectScreenshot } from './ProjectScreenshot'

export function CaseStudyBlock({ project, index, reverse = false }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      custom={index * 0.04}
      className="border-b border-white/6 py-14 last:border-b-0 sm:py-20"
    >
      <div
        className={[
          'grid items-center gap-10 lg:grid-cols-2 lg:gap-16',
          reverse ? 'lg:[&>*:first-child]:order-2' : '',
        ].join(' ')}
      >
        <div className="max-w-lg">
          <p className="text-sm text-slate-500">{project.category}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-5 text-base leading-8 text-slate-300">
            {project.summary ?? project.problem}
          </p>

          {project.outcome ? (
            <p className="mt-4 text-sm leading-7 text-slate-400">
              <span className="text-slate-300">Outcome: </span>
              {project.outcome}
            </p>
          ) : null}

          <ul className="mt-6 space-y-2">
            {project.features.slice(0, 4).map((feature) => (
              <li
                key={feature}
                className="flex gap-2 text-sm leading-6 text-slate-400"
              >
                <span className="text-slate-600">–</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded border border-white/8 px-2.5 py-1 text-xs text-slate-400"
              >
                {tool}
              </span>
            ))}
          </div>

          <Link
            to={project.detailTo}
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            View project details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ProjectScreenshot
          type={project.previewType}
          imageSrc={project.imageSrc}
          large
        />
      </div>
    </motion.article>
  )
}
