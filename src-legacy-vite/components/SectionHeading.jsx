import { ArrowRight } from 'lucide-react'

export function SectionHeading({ eyebrow, title, copy, actionLabel, actionHref }) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
          {copy}
        </p>
      </div>
      {actionLabel ? (
        <a
          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-transform duration-300 hover:translate-x-1"
          href={actionHref}
          rel={actionHref?.startsWith('http') ? 'noreferrer' : undefined}
          target={actionHref?.startsWith('http') ? '_blank' : undefined}
        >
          {actionLabel}
          <ArrowRight className="h-4 w-4" />
        </a>
      ) : null}
    </div>
  )
}
