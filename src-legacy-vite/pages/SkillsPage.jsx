import { motion } from 'framer-motion'
import { PageShell } from '../components/PageShell'
import { SectionHeading } from '../components/SectionHeading'
import { SkillCard } from '../components/SkillCard'
import { ToolTile } from '../components/ToolLogo'
import {
  automationSkills,
  coreSkills,
  fullStackSkills,
  tools,
  workStyle,
} from '../data/portfolioData'
import { fadeUp } from '../lib/animations'

export function SkillsPage() {
  return (
    <>
      <section className="relative border-b border-white/6 py-20">
        <PageShell>
          <SectionHeading
            eyebrow="Core Skills"
            title="Trading system development skills built around architecture, automation, validation, and deployment."
            copy="The core capability stack stays centered on building systems that can be tested realistically, upgraded cleanly, and operated reliably."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {coreSkills.map((item, index) => (
              <SkillCard key={item.title} index={index} item={item} />
            ))}
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="rounded-[1.7rem] border border-cyan-400/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_38%),linear-gradient(180deg,rgba(8,20,30,0.96),rgba(5,12,19,1))] p-6 shadow-[0_22px_54px_rgba(0,0,0,0.28)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
                AI Automation
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                Automation Skills
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Designing and building AI-powered workflows that automate
                repetitive business processes, streamline data handling,
                improve decision-making, and reduce manual effort through
                intelligent integrations and workflow orchestration.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0.08}
              className="rounded-[1.7rem] border border-cyan-400/10 bg-[#07131d] p-6 shadow-[0_22px_54px_rgba(0,0,0,0.28)]"
            >
              <div className="flex flex-wrap gap-3">
                {automationSkills.map((skill, index) => {
                  const Icon = skill.icon

                  return (
                    <motion.div
                      key={skill.label}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                      variants={fadeUp}
                      custom={index * 0.03}
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-400/12 bg-cyan-400/6 px-4 py-2.5 text-sm font-medium text-cyan-100"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-cyan-300" />
                      {skill.label}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0.04}
              className="rounded-[1.7rem] border border-cyan-400/10 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_38%),linear-gradient(180deg,rgba(8,20,30,0.96),rgba(5,12,19,1))] p-6 shadow-[0_22px_54px_rgba(0,0,0,0.28)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
                Full Stack
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                SaaS & Web Application Skills
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Building trader-focused and business SaaS applications with
                modern React stacks, secure authentication, database integration,
                and scalable architecture patterns.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0.12}
              className="rounded-[1.7rem] border border-cyan-400/10 bg-[#07131d] p-6 shadow-[0_22px_54px_rgba(0,0,0,0.28)]"
            >
              <div className="flex flex-wrap gap-3">
                {fullStackSkills.map((skill, index) => {
                  const Icon = skill.icon

                  return (
                    <motion.div
                      key={skill.label}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                      variants={fadeUp}
                      custom={index * 0.03}
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-400/12 bg-cyan-400/6 px-4 py-2.5 text-sm font-medium text-cyan-100"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-cyan-300" />
                      {skill.label}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </PageShell>
      </section>

      <section className="relative border-b border-white/6 py-20">
        <PageShell className="!pt-0">
          <SectionHeading
            eyebrow="Work Style"
            title="A development style shaped by clarity, stability, realistic testing, and upgrade-friendly structure."
            copy="The implementation approach stays practical and execution-aware so systems are easier to maintain and less fragile when real conditions change."
          />

          <div className="mt-12 rounded-[2rem] border border-cyan-400/10 bg-[#07131d] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:p-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {workStyle.map((item, index) => (
                <motion.div
                  key={item}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  custom={index * 0.04}
                  className="rounded-[1.35rem] border border-cyan-300/10 bg-white/3 px-5 py-4"
                >
                  <p className="text-sm font-medium text-slate-100">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </PageShell>
      </section>

      <section className="relative border-b border-white/6 py-20">
        <PageShell className="!pt-0">
          <SectionHeading
            eyebrow="Tools"
            title="A workflow stack built around trading platforms, backend tooling, testing utilities, and deployment support."
            copy="The toolset combines trading-focused platforms with automation, QA, logging, and operational tooling."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {tools.map((tool) => (
              <ToolTile key={tool} name={tool} />
            ))}
          </div>
        </PageShell>
      </section>
    </>
  )
}
