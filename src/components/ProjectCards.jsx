import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Cpu,
  ExternalLink,
  GitBranch,
  LineChart,
  Play,
  Sparkles,
  Users,
  Workflow,
} from 'lucide-react'
import { githubUrl } from '../data/portfolioData'
import { fadeUp } from '../lib/animations'
import { getValidUrl } from '../lib/getValidUrl'
import { BannerToolBadge, StackBadge } from './ToolLogo'

function FeaturedBadge() {
  return (
    <span className="absolute right-4 top-4 z-20 rounded-full border border-cyan-300/20 bg-cyan-300/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100 shadow-[0_8px_24px_rgba(0,0,0,0.28)]">
      Featured
    </span>
  )
}

export function ProjectActionButtons({
  demoUrl,
  liveUrl,
  githubUrl: repoUrl,
  className = 'mt-6 flex flex-col gap-3 sm:flex-row',
}) {
  const demoHref = getValidUrl(demoUrl)
  const liveHref = getValidUrl(liveUrl)
  const repoHref =
    repoUrl === undefined ? getValidUrl(githubUrl) : getValidUrl(repoUrl)

  return (
    <div className={className}>
      {demoHref ? (
        <a
          href={demoHref}
          rel="noreferrer"
          target="_blank"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#041018] transition-transform duration-300 hover:-translate-y-0.5"
        >
          <Play className="h-4 w-4" />
          Watch Demo
        </a>
      ) : null}
      {liveHref ? (
        <a
          href={liveHref}
          rel="noreferrer"
          target="_blank"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/18 bg-white/3 px-5 py-3 text-sm font-semibold text-cyan-100 transition-colors duration-300 hover:bg-cyan-300/8"
        >
          <ExternalLink className="h-4 w-4" />
          Live App
        </a>
      ) : null}
      {repoHref ? (
        <a
          href={repoHref}
          rel="noreferrer"
          target="_blank"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/18 bg-white/3 px-5 py-3 text-sm font-semibold text-cyan-100 transition-colors duration-300 hover:bg-cyan-300/8"
        >
          <GitBranch className="h-4 w-4" />
          View GitHub
        </a>
      ) : null}
    </div>
  )
}

export function ProjectBanner({ project }) {
  if (project.banner === 'ai') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_75%_35%,rgba(114,78,255,0.28),transparent_28%),linear-gradient(180deg,#09121e_0%,#07101a_100%)]">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute left-5 top-5">
          <p className="text-2xl font-semibold tracking-[-0.04em] text-cyan-200">
            MyAlert AI
          </p>
          <p className="mt-1 text-sm text-slate-300">Decision System</p>
        </div>
        <div className="absolute right-4 top-4 flex gap-2">
          <span className="rounded-full border border-violet-300/18 bg-violet-300/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-violet-200">
            AI
          </span>
          <span className="rounded-full border border-cyan-300/18 bg-cyan-300/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-200">
            ML
          </span>
        </div>
        <div className="absolute bottom-3 right-4 text-cyan-300 drop-shadow-[0_0_18px_rgba(34,211,238,0.55)]">
          <BrainCircuit className="h-24 w-24" />
        </div>
      </div>
    )
  }

  if (project.banner === 'lookback') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(180deg,#09121e_0%,#07101a_100%)]">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute left-5 top-5">
          <p className="text-3xl font-semibold tracking-[-0.04em] text-cyan-200">
            LookBack
          </p>
          <p className="mt-1 text-xl text-slate-200">TradingView</p>
          <p className="text-xl text-slate-200">Strategy</p>
        </div>
        <div className="absolute bottom-4 right-4 h-28 w-32 rounded-2xl border border-cyan-300/12 bg-[#081622]/90 p-3 shadow-[0_12px_28px_rgba(0,0,0,0.35)]">
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />
          <svg
            className="relative h-full w-full"
            fill="none"
            viewBox="0 0 128 112"
          >
            <path
              d="M4 82L24 68L40 72L56 40L70 58L88 22L104 38L124 10"
              stroke="#55f3e5"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <path
              d="M4 90L24 76L40 80L56 48L70 66L88 30L104 46L124 18"
              stroke="rgba(34,211,238,0.35)"
              strokeLinecap="round"
              strokeWidth="9"
            />
          </svg>
        </div>
      </div>
    )
  }

  if (project.banner === 'ea') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_75%_28%,rgba(34,211,238,0.14),transparent_26%),linear-gradient(180deg,#09121e_0%,#07101a_100%)]">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute left-5 top-5 right-[8.5rem] z-10">
          <p className="text-[1.9rem] font-semibold leading-none tracking-[-0.05em] text-white">
            MT4/MT5
          </p>
          <p className="mt-2 max-w-[9ch] text-[1.05rem] font-semibold leading-tight text-slate-100 sm:text-[1.2rem]">
            EA Development
          </p>
        </div>
        <div className="absolute bottom-3 right-3 flex items-end gap-2.5">
          <div className="h-16 w-16 rounded-full border border-cyan-300/18 bg-cyan-300/8 shadow-[0_0_30px_rgba(34,211,238,0.18)] sm:h-18 sm:w-18" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-[1.85rem] border border-cyan-300/16 bg-[#091824]/90 shadow-[0_16px_32px_rgba(0,0,0,0.38)] sm:h-28 sm:w-28">
            <Cpu className="h-12 w-12 text-cyan-200 sm:h-14 sm:w-14" />
          </div>
        </div>
      </div>
    )
  }

  if (project.banner === 'tradevault') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_72%_22%,rgba(34,211,238,0.2),transparent_32%),radial-gradient(circle_at_12%_88%,rgba(99,102,241,0.14),transparent_34%),linear-gradient(180deg,#09121e_0%,#07101a_100%)]">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute left-5 top-5 z-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
            Full Stack Trading SaaS
          </p>
          <p className="mt-3 text-[1.65rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[1.9rem]">
            TradeVault
          </p>
          <p className="mt-1 text-sm text-slate-300">
            Trading Journal & Analytics
          </p>
        </div>
        <div className="absolute right-4 top-4 z-10 flex gap-2">
          <span className="rounded-full border border-cyan-300/12 bg-cyan-300/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100">
            React
          </span>
          <span className="rounded-full border border-cyan-300/12 bg-cyan-300/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100">
            Supabase
          </span>
        </div>
        <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between gap-4">
          <div className="h-24 flex-1 rounded-2xl border border-cyan-300/12 bg-[#081622]/90 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200/80">
                Equity Curve
              </span>
              <LineChart className="h-4 w-4 text-cyan-200" />
            </div>
            <svg className="h-14 w-full" fill="none" viewBox="0 0 200 56">
              <path
                d="M4 44L28 38L52 40L76 28L100 32L124 18L148 22L172 12L196 8"
                stroke="#55f3e5"
                strokeLinecap="round"
                strokeWidth="2.5"
              />
            </svg>
          </div>
          <div className="w-28 rounded-2xl border border-cyan-300/12 bg-[#081622]/90 p-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200/80">
                Win Rate
              </span>
              <BarChart3 className="h-4 w-4 text-cyan-200" />
            </div>
            <p className="mt-2 text-2xl font-semibold text-white">68%</p>
          </div>
        </div>
      </div>
    )
  }

  if (project.banner === 'workforce') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_70%_18%,rgba(114,78,255,0.22),transparent_32%),radial-gradient(circle_at_14%_82%,rgba(34,211,238,0.16),transparent_34%),linear-gradient(180deg,#09121e_0%,#07101a_100%)]">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute left-5 top-5 z-10 max-w-[12rem] sm:max-w-[14rem]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
            AI & Automation
          </p>
          <p className="mt-3 text-[1.35rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[1.55rem]">
            AI Workforce Assistant
          </p>
          <p className="mt-1 text-sm text-slate-300">Role-Based AI Agents</p>
        </div>
        <div className="absolute right-4 top-4 z-10 flex gap-2">
          <span className="rounded-full border border-violet-300/14 bg-violet-300/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-100">
            OpenAI
          </span>
          <span className="rounded-full border border-cyan-300/12 bg-cyan-300/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100">
            SaaS
          </span>
        </div>
        <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between gap-3">
          <div className="flex flex-1 flex-wrap gap-2">
            {['Sales', 'Ops', 'Admin'].map((agent) => (
              <div
                key={agent}
                className="flex min-w-[4.5rem] flex-1 items-center gap-2 rounded-[1.2rem] border border-cyan-300/12 bg-[#081824]/92 px-3 py-2.5 shadow-[0_10px_24px_rgba(0,0,0,0.28)]"
              >
                <Bot className="h-4 w-4 shrink-0 text-cyan-200" />
                <span className="text-[11px] font-semibold text-slate-100">
                  {agent}
                </span>
              </div>
            ))}
          </div>
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.4rem] border border-cyan-300/14 bg-[#081824]/92 shadow-[0_14px_30px_rgba(0,0,0,0.34)]">
            <Users className="h-9 w-9 text-cyan-200" />
          </div>
        </div>
      </div>
    )
  }

  if (project.banner === 'intake') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_78%_24%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_18%_84%,rgba(99,102,241,0.16),transparent_30%),linear-gradient(180deg,#09121e_0%,#07101a_100%)]">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute left-5 top-5 z-10 max-w-[11rem] sm:max-w-[13rem]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
            AI Workflow Automation
          </p>
          <p className="mt-3 text-[1.42rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[1.65rem]">
            Accounting Firm Intake
          </p>
        </div>
        <div className="absolute right-4 top-4 z-10 rounded-full border border-cyan-300/12 bg-cyan-300/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100">
          OpenAI + Make
        </div>
        <div className="absolute inset-x-0 top-1/2 z-10 hidden -translate-y-1/2 justify-center px-6 lg:flex lg:pl-[22rem] lg:pr-[17rem] xl:pl-[24rem] xl:pr-[18rem]">
          <div className="flex max-w-3xl flex-wrap justify-center gap-3">
            {project.tools.map((item) => (
              <BannerToolBadge key={`banner-tool-${item}`} name={item} />
            ))}
          </div>
        </div>
        <div className="absolute bottom-5 left-5 flex h-20 w-20 flex-col justify-between rounded-[1.4rem] border border-cyan-300/14 bg-[#081824]/92 p-3 shadow-[0_14px_30px_rgba(0,0,0,0.34)]">
          <div className="h-2 w-10 rounded-full bg-cyan-200/75" />
          <div className="space-y-2">
            <div className="h-2 w-full rounded-full bg-white/18" />
            <div className="h-2 w-5/6 rounded-full bg-white/14" />
            <div className="h-2 w-1/2 rounded-full bg-white/12" />
          </div>
        </div>
        <div className="absolute bottom-5 right-5 h-24 w-40 rounded-[1.65rem] border border-cyan-300/14 bg-[#081824]/92 p-4 pl-[4.4rem] shadow-[0_16px_34px_rgba(0,0,0,0.36)]">
          <div className="absolute left-3 top-3 flex h-12 w-12 items-center justify-center rounded-[1.2rem] border border-cyan-300/16 bg-cyan-300/8 text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.14)]">
            <Workflow className="h-6 w-6" />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200/80">
              Tracking
            </span>
            <Sparkles className="h-4 w-4 text-cyan-200" />
          </div>
          <div className="mt-4 space-y-3">
            <div className="h-2 w-full rounded-full bg-cyan-300/65" />
            <div className="h-2 w-5/6 rounded-full bg-cyan-300/45" />
            <div className="h-2 w-3/4 rounded-full bg-cyan-300/35" />
            <div className="h-2 w-2/3 rounded-full bg-cyan-300/25" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(180deg,#09121e_0%,#07101a_100%)]">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute left-5 top-5">
        <p className="text-3xl font-semibold tracking-[-0.04em] text-white">
          Trading System
        </p>
        <p className="mt-1 text-2xl font-semibold text-slate-100">Validation</p>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
        <div className="h-20 flex-1 rounded-2xl border border-cyan-300/12 bg-[#081622]/80 p-3">
          <svg className="h-full w-full" fill="none" viewBox="0 0 120 70">
            <path
              d="M2 58L18 50L34 46L50 32L66 38L84 22L102 26L118 8"
              stroke="#55f3e5"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </svg>
        </div>
        <div className="w-20 rounded-2xl border border-cyan-300/14 bg-[#081622]/90 p-3">
          <div className="space-y-2">
            <div className="h-2 w-full rounded-full bg-cyan-300/75" />
            <div className="h-2 w-4/5 rounded-full bg-cyan-300/55" />
            <div className="h-2 w-3/5 rounded-full bg-cyan-300/40" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function FeaturedProjectCard({ project, index }) {
  const isFeatured = project.featured

  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      custom={index * 0.08}
      className={[
        'group relative min-w-0 overflow-hidden rounded-[1.75rem] border bg-[#08131d] shadow-[0_24px_70px_rgba(0,0,0,0.32)]',
        isFeatured
          ? 'border-cyan-400/20 ring-1 ring-cyan-400/12'
          : 'border-cyan-400/10',
      ].join(' ')}
    >
      {isFeatured ? <FeaturedBadge /> : null}
      <div className="relative h-48 overflow-hidden border-b border-white/6">
        <ProjectBanner project={project} />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2.5">
          {project.tools.map((item) => (
            <StackBadge key={item} name={item} />
          ))}
        </div>

        <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{project.copy}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/8 bg-white/4 px-3 py-1.5 text-[11px] font-medium text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={githubUrl}
          rel="noreferrer"
          target="_blank"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-transform duration-300 group-hover:translate-x-1"
        >
          View Project
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  )
}

export function AutomationProjectCard({ project, index }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      custom={index * 0.08}
      className="group min-w-0 overflow-hidden rounded-[1.9rem] border border-cyan-400/10 bg-[#08131d] shadow-[0_24px_70px_rgba(0,0,0,0.32)]"
    >
      <div className="relative h-52 overflow-hidden border-b border-white/6">
        <ProjectBanner project={project} />
      </div>

      <div className="grid gap-8 p-6 xl:grid-cols-[1.04fr_0.96fr] xl:p-8">
        <div>
          <span className="inline-flex rounded-full border border-cyan-400/12 bg-cyan-400/6 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
            {project.category}
          </span>
          <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
            {project.title}
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            {project.copy}
          </p>

          {project.tags?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/8 bg-white/4 px-3 py-1.5 text-[11px] font-medium text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="rounded-[1.2rem] border border-white/6 bg-white/4 px-4 py-3"
              >
                <p className="text-sm text-slate-200">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-wrap gap-2.5 lg:hidden">
            {project.tools.map((item) => (
              <StackBadge key={item} name={item} />
            ))}
          </div>

          <div className="hidden flex-wrap gap-2.5 lg:flex">
            {project.tools.map((item) => (
              <StackBadge key={`desktop-${item}`} name={item} />
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-white/6 bg-white/4 p-5 lg:mt-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
              Outcome
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              {project.outcome}
            </p>
          </div>

          <ProjectActionButtons
            demoUrl={project.demoUrl}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl ?? null}
          />
        </div>
      </div>
    </motion.article>
  )
}

export function HomeFeaturedTradeVaultCard({ project, index }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      custom={index * 0.08}
      className="group relative min-w-0 overflow-hidden rounded-[1.75rem] border border-cyan-400/20 bg-[#08131d] shadow-[0_24px_70px_rgba(0,0,0,0.32)] ring-1 ring-cyan-400/12"
    >
      <FeaturedBadge />
      <div className="relative h-48 overflow-hidden border-b border-white/6">
        <ProjectBanner project={project} />
      </div>

      <div className="p-6">
        <span className="inline-flex rounded-full border border-cyan-400/12 bg-cyan-400/6 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
          {project.category}
        </span>
        <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-white">
          {project.title}
        </h3>
        {project.subtitle ? (
          <p className="mt-1 text-sm font-medium text-cyan-200/90">
            {project.subtitle}
          </p>
        ) : null}
        <p className="mt-3 text-sm leading-7 text-slate-300">{project.copy}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/8 bg-white/4 px-3 py-1.5 text-[11px] font-medium text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <ProjectActionButtons
          demoUrl={project.demoUrl}
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
          className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        />
      </div>
    </motion.article>
  )
}

export function ShowcaseProjectCard({ project, index }) {
  const isFeatured = project.featured

  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      custom={index * 0.08}
      className={[
        'group relative min-w-0 overflow-hidden rounded-[1.9rem] border bg-[#08131d] shadow-[0_24px_70px_rgba(0,0,0,0.32)]',
        isFeatured
          ? 'border-cyan-400/20 ring-1 ring-cyan-400/12'
          : 'border-cyan-400/10',
      ].join(' ')}
    >
      {isFeatured ? <FeaturedBadge /> : null}
      <div className="relative h-52 overflow-hidden border-b border-white/6 sm:h-56">
        <ProjectBanner project={project} />
      </div>

      <div className="grid gap-8 p-6 xl:grid-cols-[1.04fr_0.96fr] xl:p-8">
        <div>
          <span className="inline-flex rounded-full border border-cyan-400/12 bg-cyan-400/6 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
            {project.category}
          </span>
          <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
            {project.title}
          </h3>
          {project.subtitle ? (
            <p className="mt-2 text-sm font-medium text-cyan-200/90">
              {project.subtitle}
            </p>
          ) : null}
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            {project.copy}
          </p>

          {project.tags?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/8 bg-white/4 px-3 py-1.5 text-[11px] font-medium text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="rounded-[1.2rem] border border-white/6 bg-white/4 px-4 py-3"
              >
                <p className="text-sm text-slate-200">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-wrap gap-2.5 lg:hidden">
            {project.tools.map((item) => (
              <StackBadge key={item} name={item} />
            ))}
          </div>

          <div className="hidden flex-wrap gap-2.5 lg:flex">
            {project.tools.map((item) => (
              <StackBadge key={item} name={item} />
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-white/6 bg-white/4 p-5 lg:mt-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
              Key Outcome
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              {project.outcome}
            </p>
          </div>

          <ProjectActionButtons
            demoUrl={project.demoUrl}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        </div>
      </div>
    </motion.article>
  )
}

export function OtherWorkCard({ item, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      custom={index * 0.06}
      className="min-w-0 rounded-[1.6rem] border border-cyan-400/10 bg-[#07131d] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)]"
    >
      <h3 className="text-balance text-xl font-semibold leading-snug tracking-[-0.03em] text-white">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{item.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2.5">
        {item.tools.map((tool) => {
          const toolLabel = typeof tool === 'string' ? tool : tool.label
          const toolVisual = typeof tool === 'string' ? tool : tool.visual

          return (
            <StackBadge key={toolLabel} name={toolVisual} label={toolLabel} />
          )
        })}
      </div>

      <div className="mt-5 rounded-2xl border border-white/6 bg-white/4 px-4 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
          Outcome
        </p>
        <p className="mt-2 text-sm text-slate-200">{item.outcome}</p>
      </div>
    </motion.div>
  )
}
