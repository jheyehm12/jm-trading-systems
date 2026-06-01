import { motion } from 'framer-motion'
import { TestTube2 } from 'lucide-react'
import { PageShell } from '../components/PageShell'
import { SectionHeading } from '../components/SectionHeading'
import { ToolLogo } from '../components/ToolLogo'
import { qaChecks, qaSkillGroups } from '../data/portfolioData'
import { fadeUp } from '../lib/animations'

export function QAValidationProjectsPage() {
  return (
    <section className="relative border-b border-white/6 py-20">
      <PageShell>
        <SectionHeading
          eyebrow="Supporting Strength"
          title="QA Foundation"
          copy="10+ years of QA experience applied to trading system development. I use structured testing, regression checks, replay validation, log review, edge-case testing, and automation testing to make trading systems more reliable before live use."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="rounded-[2rem] border border-cyan-400/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_35%),linear-gradient(180deg,rgba(8,20,30,0.96),rgba(5,12,19,1))] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.32)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300/80">
                  Reliability Layer
                </p>
                <p className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-white">
                  10+ Years
                </p>
              </div>
              <div className="rounded-2xl border border-cyan-300/12 bg-cyan-300/8 p-3 text-cyan-200">
                <TestTube2 className="h-5 w-5" />
              </div>
            </div>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
              QA remains supporting credibility rather than the main story.
              The same discipline used in software quality is applied to
              strategy logic, automation flows, and pre-live review so
              trading systems behave more reliably.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {qaChecks.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-300/10 bg-cyan-300/6 px-4 py-2 text-sm text-cyan-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={0.1}
            className="rounded-[2rem] border border-cyan-400/10 bg-[#07131d] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.32)]"
          >
            <div className="grid gap-4 md:grid-cols-2">
              {qaSkillGroups.map((group) => {
                const Icon = group.icon

                return (
                  <div
                    key={group.title}
                    className="rounded-[1.6rem] border border-white/6 bg-white/3 p-5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
                        {group.title}
                      </p>
                      <Icon className="h-4 w-4 text-cyan-200" />
                    </div>

                    {group.title === 'Tools & Platforms' ? (
                      <div className="mt-5 grid grid-cols-2 gap-3">
                        {group.items.map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-cyan-300/10 bg-[#081822] p-3"
                          >
                            <div className="flex items-center gap-3">
                              <ToolLogo name={item} />
                              <span className="text-sm text-slate-200">
                                {item}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="mt-5 flex flex-wrap gap-2.5">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-cyan-300/10 bg-[#081822] px-3 py-2 text-sm text-slate-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </PageShell>
    </section>
  )
}
