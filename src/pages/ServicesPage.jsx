import { motion } from 'framer-motion'
import { PageShell } from '../components/PageShell'
import { SectionHeading } from '../components/SectionHeading'
import { availableFor, serviceCategories } from '../data/portfolioData'
import { fadeUp } from '../lib/animations'

function ServicePill({ label, icon: ItemIcon, index, inGrid = false }) {
  const isIconPill = Boolean(ItemIcon && inGrid)

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      custom={index * 0.03}
      className={
        isIconPill
          ? 'flex min-h-[3.25rem] w-full min-w-0 items-start gap-2.5 rounded-2xl border border-cyan-400/12 bg-cyan-400/6 px-4 py-3.5 text-sm font-medium leading-snug text-cyan-100'
          : 'inline-flex items-center gap-2 rounded-full border border-cyan-400/12 bg-cyan-400/6 px-5 py-3 text-sm font-medium text-cyan-100'
      }
    >
      {ItemIcon ? (
        <ItemIcon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
      ) : null}
      <span className="min-w-0 flex-1 text-left [overflow-wrap:anywhere]">
        {label}
      </span>
    </motion.div>
  )
}

function normalizeServiceItem(item) {
  if (typeof item === 'string') {
    return { label: item, icon: null }
  }

  return item
}

export function ServicesPage() {
  return (
    <section className="relative border-b border-white/6 py-20">
      <PageShell>
        <SectionHeading
          eyebrow="Services"
          title="Focused development support for trading systems, automation, validation, and deployment."
          copy="Service scope stays tightly aligned with trading system work rather than broad agency-style software delivery."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {serviceCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            const useIconGrid = category.items.some(
              (item) => typeof item !== 'string',
            )

            return (
              <motion.div
                key={category.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={categoryIndex * 0.06}
                className={[
                  'rounded-[1.7rem] border bg-[#07131d] p-6 shadow-[0_22px_54px_rgba(0,0,0,0.28)]',
                  category.primary
                    ? 'border-cyan-400/18 ring-1 ring-cyan-400/10'
                    : 'border-cyan-400/10',
                  category.spanFull ? 'md:col-span-2' : '',
                ].join(' ')}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/12 bg-cyan-400/8 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
                    {category.title}
                  </h3>
                </div>

                {category.description ? (
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
                    {category.description}
                  </p>
                ) : null}

                <div
                  className={
                    useIconGrid
                      ? 'mt-5 grid grid-cols-[repeat(auto-fill,minmax(13.5rem,1fr))] gap-3'
                      : 'mt-5 flex flex-wrap gap-3'
                  }
                >
                  {category.items.map((service, itemIndex) => {
                    const { label, icon } = normalizeServiceItem(service)

                    return (
                      <ServicePill
                        key={label}
                        label={label}
                        icon={icon}
                        inGrid={useIconGrid}
                        index={categoryIndex * 4 + itemIndex}
                      />
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          custom={0.2}
          className="mt-10 rounded-[1.7rem] border border-cyan-400/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_38%),linear-gradient(180deg,rgba(8,20,30,0.96),rgba(5,12,19,1))] p-6 shadow-[0_22px_54px_rgba(0,0,0,0.28)] sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
            Available For
          </p>

          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {availableFor.map((item) => {
              const Icon = item.icon

              return (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-[1.2rem] border border-white/6 bg-white/4 px-4 py-3.5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/12 bg-cyan-400/8 text-cyan-200">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-slate-100">
                    {item.label}
                  </span>
                </li>
              )
            })}
          </ul>
        </motion.div>
      </PageShell>
    </section>
  )
}
