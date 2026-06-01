import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CandlestickChart,
  Cpu,
  GitBranch,
  Sparkles,
  Target,
} from 'lucide-react'
import { PageShell } from '../components/PageShell'
import { SectionHeading } from '../components/SectionHeading'
import {
  aboutHighlights,
  dashboardBars,
  deskRows,
  githubUrl,
} from '../data/portfolioData'
import { fadeUp } from '../lib/animations'

export function HomePage() {
  return (
    <>
      <section className="relative border-b border-white/6">
        <PageShell className="pb-20 pt-[calc(env(safe-area-inset-top)+1rem)] sm:pb-24 lg:pb-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.02fr] lg:items-center">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/12 bg-cyan-300/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                JM Trading Systems
              </div>

              <h1 className="mt-8 max-w-5xl font-semibold tracking-[-0.07em]">
                <span className="block max-w-4xl text-[1.15rem] leading-snug text-white sm:text-[1.35rem] lg:text-[1.5rem]">
                  Algorithmic Trading Developer • AI Automation Engineer • Full
                  Stack Developer
                </span>
                <span className="mt-4 block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-[2.6rem] leading-[1.02] text-transparent sm:text-[3.6rem] lg:text-[4.5rem]">
                  Building Intelligent Trading Systems
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-xl font-medium leading-8 text-slate-200 sm:text-2xl">
                Trading systems, AI automation, and full-stack solutions built
                with validation-first thinking.
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                I build trading platforms, automation workflows, and modern web
                applications with a focus on clean logic, reliable execution,
                replay validation, and real-world usability.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/projects/trading"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#041018] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={githubUrl}
                  rel="noreferrer"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/18 bg-white/3 px-6 py-3 text-sm font-semibold text-cyan-100 transition-colors duration-300 hover:bg-cyan-300/8"
                >
                  View GitHub
                  <GitBranch className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-400/12 bg-cyan-400/6 px-4 py-2 text-sm text-cyan-100">
                  Clean logic
                </span>
                <span className="rounded-full border border-cyan-400/12 bg-cyan-400/6 px-4 py-2 text-sm text-cyan-100">
                  Replay validation
                </span>
                <span className="rounded-full border border-cyan-400/12 bg-cyan-400/6 px-4 py-2 text-sm text-cyan-100">
                  Real execution behavior
                </span>
                <span className="rounded-full border border-cyan-400/12 bg-cyan-400/6 px-4 py-2 text-sm text-cyan-100">
                  QA-backed reliability
                </span>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={0.12}
              className="relative"
            >
              <div className="absolute inset-0 rounded-[2.2rem] bg-cyan-400/12 blur-3xl" />
              <div className="relative rounded-[2.25rem] border border-cyan-400/12 bg-[#07131d]/90 p-4 shadow-[0_36px_110px_rgba(0,0,0,0.48)] backdrop-blur">
                <div className="rounded-[1.8rem] border border-white/6 bg-[#050d15] p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-teal-300/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                    </div>
                    <span className="rounded-full border border-cyan-300/12 bg-cyan-300/6 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200">
                      Trading Dashboard
                    </span>
                  </div>

                  <div className="mt-6 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-[1.6rem] border border-white/6 bg-[linear-gradient(180deg,rgba(9,30,43,0.88),rgba(5,13,21,1))] p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/70">
                            Execution Monitor
                          </p>
                          <p className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white">
                            +12.8R
                          </p>
                        </div>
                        <div className="rounded-2xl border border-cyan-300/12 bg-cyan-300/8 p-3 text-cyan-200">
                          <Target className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="relative mt-6 h-44 overflow-hidden rounded-[1.4rem] border border-white/6 bg-[#06111a] p-4">
                        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />
                        <div className="absolute inset-x-4 top-8 h-px bg-cyan-200/10" />
                        <div className="absolute inset-x-4 top-1/2 h-px bg-cyan-200/10" />
                        <div className="absolute inset-x-4 bottom-8 h-px bg-cyan-200/10" />
                        <div className="relative flex h-full items-end gap-2">
                          {dashboardBars.map((height, index) => (
                            <span
                              key={`dashboard-bar-${index}`}
                              className="flex-1 rounded-t-full bg-gradient-to-t from-cyan-500/18 to-cyan-300/85"
                              style={{ height: `${height}px` }}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-[0.95fr_0.95fr_1.15fr] gap-3">
                        <div className="min-w-0 rounded-2xl border border-white/6 bg-white/4 p-3.5">
                          <div className="flex min-h-[92px] flex-col items-center justify-center text-center">
                            <p className="text-[9px] uppercase tracking-[0.12em] text-slate-400">
                              Signal Score
                            </p>
                            <p className="mt-2 text-xl font-semibold leading-none text-white">
                              87%
                            </p>
                          </div>
                        </div>
                        <div className="min-w-0 rounded-2xl border border-white/6 bg-white/4 p-3.5">
                          <div className="flex min-h-[92px] flex-col items-center justify-center text-center">
                            <p className="text-[9px] uppercase tracking-[0.12em] text-slate-400">
                              Replay Runs
                            </p>
                            <p className="mt-2 text-xl font-semibold leading-none text-white">
                              324
                            </p>
                          </div>
                        </div>
                        <div className="min-w-0 rounded-2xl border border-white/6 bg-white/4 p-3.5">
                          <div className="flex min-h-[92px] flex-col items-center justify-center text-center">
                            <p className="text-[9px] uppercase tracking-[0.12em] text-slate-400">
                              Automation
                            </p>
                            <p className="mt-2 text-xl font-semibold leading-none text-white">
                              Stable
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-[1.5rem] border border-white/6 bg-[#071521] p-5">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/70">
                            System Stack
                          </p>
                          <Cpu className="h-4 w-4 text-cyan-200" />
                        </div>
                        <div className="mt-4 space-y-3">
                          <div className="rounded-2xl border border-cyan-300/10 bg-cyan-300/6 px-4 py-3 text-sm text-white">
                            Forex Logic
                          </div>
                          <div className="rounded-2xl border border-cyan-300/10 bg-cyan-300/6 px-4 py-3 text-sm text-white">
                            TradingView Alerts
                          </div>
                          <div className="rounded-2xl border border-cyan-300/10 bg-cyan-300/6 px-4 py-3 text-sm text-white">
                            MT4/MT5 EAs
                          </div>
                          <div className="rounded-2xl border border-cyan-300/10 bg-cyan-300/6 px-4 py-3 text-sm text-white">
                            AI Decision Layer
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[1.5rem] border border-white/6 bg-[#071521] p-5">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/70">
                            Market Desk
                          </p>
                          <CandlestickChart className="h-4 w-4 text-cyan-200" />
                        </div>
                        <div className="mt-4 space-y-3">
                          {deskRows.map((row) => (
                            <div
                              key={row.pair}
                              className="flex items-center justify-between rounded-2xl border border-white/6 bg-white/4 px-4 py-3"
                            >
                              <div>
                                <p className="text-sm font-semibold text-white">
                                  {row.pair}
                                </p>
                                <p className="text-xs text-slate-400">
                                  {row.bias}
                                </p>
                              </div>
                              <p className="text-sm font-semibold text-cyan-200">
                                {row.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </PageShell>
      </section>

      <section className="relative border-b border-white/6 py-20">
        <PageShell className="!pt-0">
          <SectionHeading
            eyebrow="About"
            title="Building trading systems, AI automation, and software solutions with a validation-first mindset."
            copy="Trader since 2020 and software developer focused on trading systems, AI automation, and workflow solutions. My background in quality assurance and validation helps ensure systems are built with reliability, scalability, and real-world usability in mind."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="rounded-[2rem] border border-cyan-400/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_35%),linear-gradient(180deg,rgba(8,20,30,0.96),rgba(5,12,19,1))] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.32)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300/80">
                Validation-First Development
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                JM Trading Systems combines trading domain knowledge, automation
                engineering, and software development experience. Projects are
                built with a strong focus on maintainability, structured
                architecture, testing, validation, and long-term scalability.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Whether developing MT4/MT5 systems, TradingView strategies,
                AI-powered workflows, or business applications, the goal remains
                the same: reliable solutions designed for real-world use.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0.08}
              className="grid gap-4 sm:grid-cols-2"
            >
              {aboutHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.45rem] border border-cyan-400/10 bg-[#07131d] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.22)]"
                >
                  <p className="text-sm leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </PageShell>
      </section>
    </>
  )
}
