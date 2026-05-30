import { motion } from 'framer-motion'
import {
  ArrowRight,
  BrainCircuit,
  CandlestickChart,
  Cpu,
  GitBranch,
  LineChart,
  Play,
  ScanSearch,
  Sparkles,
  Target,
  TestTube2,
  Workflow,
} from 'lucide-react'

const githubUrl = 'https://github.com/jheyehm12'

const featuredProjects = [
  {
    banner: 'ai',
    title: 'MyAlert AI Decision System',
    copy: 'AI-assisted trading decision framework built around TradingView alerts, backend processing, structured logging, replay validation, and automation-ready workflows.',
    tools: ['Python', 'TradingView', 'FastAPI', 'Webhooks', 'CSV Logging', 'Telegram'],
    tags: ['AI Signals', 'Structured Logging', 'Automation Ready'],
  },
  {
    banner: 'lookback',
    title: 'LookBack TradingView Strategy',
    copy: 'Advanced TradingView futures system focused on contextual market analysis, replay-driven validation, execution refinement, and structured workflow design for discretionary and semi-systematic trading environments.',
    tools: ['TradingView', 'Pine Script', 'Futures', 'Replay Validation'],
    tags: ['NDA Safe', 'Contextual Analysis', 'Workflow Design'],
  },
  {
    banner: 'ea',
    title: 'MT4/MT5 EA Development',
    copy: 'Development and refinement of Forex Expert Advisors with configurable logic, trade management, optimization workflows, and stable execution handling.',
    tools: ['MT4', 'MT5', 'MQL5', 'Forex'],
    tags: ['Trade Management', 'Optimization', 'Execution Stability'],
  },
  {
    banner: 'validation',
    title: 'Trading System Validation',
    copy: 'QA-driven trading system validation using replay testing, regression checks, edge-case review, structured logs, and execution analysis.',
    tools: ['Replay Validation', 'CSV Logging', 'Postman', 'Katalon'],
    tags: ['Regression Checks', 'Log Review', 'Edge Cases'],
  },
]

const additionalProjects = [
  {
    title: 'EA Tool for MT5',
    summary:
      'Support tooling for MT5-based workflows with cleaner parameter control, execution utilities, and operator-friendly handling.',
    tools: ['MT5', 'MQL5', 'VPS'],
    outcome: 'Improved iteration speed and cleaner execution workflows.',
  },
  {
    title: 'MQL5 Code From Video',
    summary:
      'Translating trading concepts from video walkthroughs into structured MQL5 prototypes without exposing private strategy internals.',
    tools: ['MQL5', 'MT5', 'Git'],
    outcome: 'Faster idea-to-prototype conversion for EA builds.',
  },
  {
    title: 'TradingView TA Integration for EA Platforms',
    summary:
      'Bridging TradingView analysis and signal output into EA-oriented workflows for cleaner routing and less manual friction.',
    tools: ['TradingView', 'Webhooks', 'FastAPI', 'MT5'],
    outcome: 'More reliable signal handoff into automation pipelines.',
  },
  {
    title: 'Python Strategy Tester',
    summary:
      'A lightweight testing environment for structured strategy runs, logged results, and fast comparison across variations.',
    tools: ['Python', 'CSV Logging', 'GitHub'],
    outcome: 'Shorter validation cycles and clearer performance review.',
  },
  {
    title: 'AI Trading Assistant (Paper Mode + Backtest)',
    summary:
      'AI-assisted paper workflow for trade review, scenario guidance, and backtest-oriented experimentation before live deployment.',
    tools: ['Python', 'AI/ML', 'Telegram'],
    outcome: 'Safer experimentation with cleaner feedback loops.',
  },
]

const aiAutomationProjects = [
  {
    banner: 'intake',
    category: 'AI Workflow Automation',
    title: 'Accounting Firm AI Intake Workflow',
    copy: 'Built an AI-powered document intake workflow for an accounting firm where clients submit documents through a form. The system automatically reviews submissions, identifies missing information, assigns priority levels, generates accountant summaries, and drafts follow-up communications.',
    features: [
      'Automated document intake',
      'AI-powered submission review',
      'Missing information detection',
      'Priority classification',
      'Accountant summary generation',
      'Automated follow-up drafting',
      'Google Forms integration',
      'Google Sheets tracking',
    ],
    tools: [
      'Make.com',
      'OpenAI',
      'Google Forms',
      'Google Sheets',
      'Workflow Automation',
    ],
    outcome:
      'Reduced manual review effort and streamlined client onboarding through AI-assisted workflow automation.',
    demoUrl:
      '[PASTE_YOUR_LOOM_URL_HERE](https://www.loom.com/share/594b500fa7954d479f816fdf0429c2a1)',
  },
]

const coreSkills = [
  {
    icon: CandlestickChart,
    title: 'Algorithmic Trading System Development',
    copy: 'Rule-based systems for signal generation, trade management, and automation-ready execution logic.',
  },
  {
    icon: Workflow,
    title: 'Backend Development for Automation Workflows',
    copy: 'Support services for alerts, task routing, integrations, and operational trading workflows.',
  },
  {
    icon: ScanSearch,
    title: 'API & Integration Handling',
    copy: 'Webhook endpoints, API connectivity, and platform-to-platform data exchange.',
  },
  {
    icon: LineChart,
    title: 'Data Logging & Performance Tracking',
    copy: 'Structured logs, CSV outputs, and review pipelines for validation and performance monitoring.',
  },
  {
    icon: Target,
    title: 'System Architecture & Workflow Design',
    copy: 'Modular system structure designed for maintainability, clarity, and future upgrades.',
  },
  {
    icon: Cpu,
    title: 'MQL5 EA Development (MT5)',
    copy: 'MT5 expert advisor builds with configurable trade logic and stable order handling.',
  },
  {
    icon: TestTube2,
    title: 'Strategy Testing, Optimization & Forward Testing',
    copy: 'Backtest cycles, parameter optimization, replay review, and validation before live use.',
  },
  {
    icon: LineChart,
    title: 'TradingView Pine Script Systems',
    copy: 'Indicators and strategies built with readable Pine logic and structured alert behavior.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-assisted Trading Systems',
    copy: 'Decision support, signal filtering, and workflow assistance around trading system development.',
  },
  {
    icon: Workflow,
    title: 'VPS Deployment & Monitoring',
    copy: 'Deployment, runtime monitoring, and operational oversight for long-running automation.',
  },
]

const automationSkills = [
  'Workflow Automation',
  'AI Process Automation',
  'Make.com',
  'OpenAI Integration',
  'Business Process Automation',
  'Google Workspace Automation',
  'API Integration',
  'Document Processing Workflows',
]

const workStyle = [
  'Clear inputs and settings',
  'Clean readable code',
  'Non repaint logic where relevant',
  'Focus on stability and realistic testing',
  'Spread/slippage/execution awareness',
  'Modular architecture for future upgrades',
]

const services = [
  'Build Pine Script indicators and strategies',
  'Build or modify MT5 EAs',
  'Trading automation workflows',
  'AI-assisted trading tools',
  'Backtesting and optimization',
  'VPS setup and monitoring',
  'Trading system validation',
]

const qaSkillGroups = [
  {
    icon: TestTube2,
    title: 'Testing Skills',
    items: [
      'Manual Testing',
      'Automation Testing',
      'API Testing',
      'Test Case Design',
      'Regression Testing',
      'Mobile/Web Testing',
    ],
  },
  {
    icon: ScanSearch,
    title: 'Tools & Platforms',
    items: ['Katalon Studio', 'BrowserStack', 'Postman', 'JIRA'],
  },
]

const qaChecks = [
  'Structured testing',
  'Regression checks',
  'Replay validation',
  'Log review',
  'Edge-case testing',
  'Automation testing',
]

const tools = [
  'MT4',
  'MT5',
  'MQL5',
  'Python',
  'TradingView',
  'FastAPI',
  'Git',
  'GitHub',
  'CSV Logging',
  'Telegram',
  'VPS',
  'Postman',
  'Katalon',
  'BrowserStack',
]

const aboutHighlights = [
  'Trader since 2020',
  'Freelance EA and automation developer since 2023',
  'Focus on MT4/MT5 systems, automation, testing, optimization, and deployment workflows',
  'Strong validation-first development mindset',
  'Structured systems designed for scalability and maintainability',
]

const dashboardBars = [26, 38, 34, 52, 46, 72, 64, 88, 76, 104, 94, 122]

const deskRows = [
  { pair: 'EURUSD', bias: 'Long Bias', value: '+1.24%' },
  { pair: 'XAUUSD', bias: 'Watch Setup', value: '+0.48%' },
  { pair: 'GBPJPY', bias: 'Risk Filter', value: '-0.12%' },
]

const toolVisuals = {
  'AI/ML': { kind: 'icon', icon: BrainCircuit },
  'BrowserStack': { kind: 'text', label: 'BS' },
  'CSV Logging': { kind: 'text', label: 'CSV' },
  'FastAPI': { kind: 'image', src: 'https://cdn.simpleicons.org/fastapi/00C7B7' },
  'Forex': { kind: 'icon', icon: CandlestickChart },
  'Futures': { kind: 'text', label: 'F' },
  'Git': { kind: 'image', src: 'https://cdn.simpleicons.org/git/F05032' },
  'GitHub': { kind: 'image', src: 'https://cdn.simpleicons.org/github/FFFFFF' },
  'Google Forms': {
    kind: 'image',
    src: 'https://cdn.simpleicons.org/googleforms/7248B9',
  },
  'Google Sheets': {
    kind: 'image',
    src: 'https://cdn.simpleicons.org/googlesheets/34A853',
  },
  'JIRA': { kind: 'image', src: 'https://cdn.simpleicons.org/jira/2684FF' },
  'Katalon': { kind: 'text', label: 'K' },
  'Katalon Studio': { kind: 'text', label: 'K' },
  'Make.com': { kind: 'image', src: 'https://cdn.simpleicons.org/make/7B61FF' },
  'MQL5': { kind: 'text', label: 'MQ' },
  'MT4': { kind: 'text', label: 'MT4' },
  'MT5': { kind: 'text', label: 'MT5' },
  'OpenAI': { kind: 'image', src: 'https://cdn.simpleicons.org/openai/FFFFFF' },
  'Pine Script': { kind: 'text', label: 'PS' },
  'Postman': { kind: 'image', src: 'https://cdn.simpleicons.org/postman/FF6C37' },
  'Python': { kind: 'image', src: 'https://cdn.simpleicons.org/python/3776AB' },
  'Replay Validation': { kind: 'icon', icon: LineChart },
  'Telegram': { kind: 'image', src: 'https://cdn.simpleicons.org/telegram/26A5E4' },
  'TradingView': {
    kind: 'image',
    src: 'https://cdn.simpleicons.org/tradingview/1ED6FF',
  },
  'VPS': { kind: 'text', label: 'VPS' },
  'Webhooks': { kind: 'icon', icon: Workflow },
  'Workflow Automation': { kind: 'icon', icon: Workflow },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function resolveLinkHref(value) {
  if (!value) {
    return ''
  }

  const markdownMatch = value.match(/\((https?:\/\/[^)]+)\)$/)

  return markdownMatch?.[1] ?? value
}

function SectionHeading({ eyebrow, title, copy, actionLabel, actionHref }) {
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

function ToolLogo({ name }) {
  const visual = toolVisuals[name]

  if (!visual) {
    return (
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/12 bg-cyan-300/8 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-100">
        {name.slice(0, 2)}
      </span>
    )
  }

  if (visual.kind === 'image') {
    return (
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/12 bg-cyan-300/8">
        <img alt="" className="h-4 w-4 object-contain" src={visual.src} />
      </span>
    )
  }

  if (visual.kind === 'icon') {
    const Icon = visual.icon

    return (
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/12 bg-cyan-300/8 text-cyan-100">
        <Icon className="h-4 w-4" />
      </span>
    )
  }

  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/12 bg-cyan-300/8 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-100">
      {visual.label}
    </span>
  )
}

function StackBadge({ name }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/12 bg-cyan-400/6 px-3 py-1.5 text-[11px] font-medium text-cyan-100">
      <ToolLogo name={name} />
      {name}
    </span>
  )
}

function BannerToolBadge({ name }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/12 bg-[#0a1824]/88 px-3 py-2 text-[11px] font-medium text-cyan-50 shadow-[0_10px_24px_rgba(0,0,0,0.2)] backdrop-blur">
      <span className="scale-[0.85]">
        <ToolLogo name={name} />
      </span>
      {name}
    </span>
  )
}

function ToolTile({ name }) {
  return (
    <div className="rounded-[1.35rem] border border-cyan-400/10 bg-[#07131d] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.22)]">
      <div className="flex items-center gap-3">
        <ToolLogo name={name} />
        <span className="text-sm font-medium text-white">{name}</span>
      </div>
    </div>
  )
}

function ProjectBanner({ project }) {
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

function FeaturedProjectCard({ project, index }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      custom={index * 0.08}
      className="group overflow-hidden rounded-[1.75rem] border border-cyan-400/10 bg-[#08131d] shadow-[0_24px_70px_rgba(0,0,0,0.32)]"
    >
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

function AutomationProjectCard({ project, index }) {
  const demoHref = resolveLinkHref(project.demoUrl)

  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      custom={index * 0.08}
      className="group overflow-hidden rounded-[1.9rem] border border-cyan-400/10 bg-[#08131d] shadow-[0_24px_70px_rgba(0,0,0,0.32)]"
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

          <div className="mt-6 rounded-[1.5rem] border border-white/6 bg-white/4 p-5 lg:mt-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
              Outcome
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              {project.outcome}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={githubUrl}
              rel="noreferrer"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#041018] transition-transform duration-300 hover:-translate-y-0.5"
            >
              View Project
              <ArrowRight className="h-4 w-4" />
            </a>
            {demoHref ? (
              <a
                href={demoHref}
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/18 bg-white/3 px-5 py-3 text-sm font-semibold text-cyan-100 transition-colors duration-300 hover:bg-cyan-300/8"
              >
                <Play className="h-4 w-4" />
                Watch Demo
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function OtherWorkCard({ item, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      custom={index * 0.06}
      className="rounded-[1.6rem] border border-cyan-400/10 bg-[#07131d] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)]"
    >
      <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{item.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2.5">
        {item.tools.map((tool) => (
          <StackBadge key={tool} name={tool} />
        ))}
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

function SkillCard({ item, index }) {
  const Icon = item.icon

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      custom={index * 0.05}
      className="group rounded-[1.45rem] border border-cyan-400/10 bg-[#07131d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.22)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/12 bg-cyan-400/8 text-cyan-200">
          <Icon className="h-5 w-5" />
        </div>
        <ArrowRight className="h-4 w-4 text-cyan-300 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-white">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p>
    </motion.div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#040b12] text-white">
      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#03080f_0%,#06111a_38%,#040b12_100%)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-0 top-32 h-[30rem] w-[30rem] rounded-full bg-teal-400/8 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:88px_88px]" />
        </div>

        <section className="relative border-b border-white/6">
          <div className="mx-auto max-w-7xl px-6 pb-20 pt-[calc(env(safe-area-inset-top)+6rem)] sm:px-8 sm:pb-24 sm:pt-[calc(env(safe-area-inset-top)+6.5rem)] lg:px-12 lg:pb-28 lg:pt-[calc(env(safe-area-inset-top)+7rem)]">
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
                  <span className="block max-w-[14ch] text-[2.2rem] leading-[1.02] text-white sm:text-[3rem] lg:max-w-none lg:text-[3.25rem]">
                    Forex EA Developer | TradingView Strategy Builder |
                  </span>
                  <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-[3rem] leading-[0.98] text-transparent sm:text-[4.2rem] lg:text-[5rem]">
                    Trading Systems Builder
                  </span>
                </h1>

                <p className="mt-7 max-w-3xl text-xl font-medium leading-8 text-slate-200 sm:text-2xl">
                  Building smarter trading systems with automation, AI, and
                  validation.
                </p>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  I build and validate Forex, TradingView, MT4/MT5, and
                  AI-assisted trading systems with a focus on clean logic,
                  backtesting, replay validation, and real-world execution
                  behavior.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#041018] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    View Projects
                    <ArrowRight className="h-4 w-4" />
                  </a>
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
          </div>
        </section>

        <section id="about" className="relative border-b border-white/6 py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow="About"
              title="A trading systems developer with market context, automation depth, and a validation-first mindset."
              copy="Trader since 2020 and freelance EA plus automation developer since 2023, focused on MT4/MT5 systems, trading automation, testing, optimization, and deployment workflows."
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
                  Validation-first development
                </p>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  JM Trading Systems is built around structured development for
                  trading automation, MT4/MT5 workflows, testing, optimization,
                  and deployment support. The emphasis is on reliable behavior,
                  maintainable code, realistic validation, and systems that can
                  scale cleanly as logic evolves.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-300/10 bg-cyan-300/6 px-4 py-2 text-sm text-cyan-100">
                    Validation-first
                  </span>
                  <span className="rounded-full border border-cyan-300/10 bg-cyan-300/6 px-4 py-2 text-sm text-cyan-100">
                    MT4/MT5 workflows
                  </span>
                  <span className="rounded-full border border-cyan-300/10 bg-cyan-300/6 px-4 py-2 text-sm text-cyan-100">
                    Maintainable structure
                  </span>
                </div>
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
          </div>
        </section>

        <section id="projects" className="relative border-b border-white/6 py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Trading systems, automation layers, and validation workflows presented as portfolio-ready development work."
              copy="The featured work stays focused on trading infrastructure, strategy development, automation, and reliability under realistic review conditions."
              actionHref={githubUrl}
              actionLabel="View All Projects"
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-4">
              {featuredProjects.map((project, index) => (
                <FeaturedProjectCard
                  key={project.title}
                  index={index}
                  project={project}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="qa-foundation" className="relative border-b border-white/6 py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow="Supporting Strength"
              title="QA Foundation"
              copy="9+ years of QA experience applied to trading system development. I use structured testing, regression checks, replay validation, log review, edge-case testing, and automation testing to make trading systems more reliable before live use."
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
                      9+ Years
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
          </div>
        </section>

        <section id="other-work" className="relative border-b border-white/6 py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow="Additional Projects"
              title="Other Development Work"
              copy="Additional system and tooling work that supports trading automation, research workflows, and development efficiency."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {additionalProjects.map((item, index) => (
                <OtherWorkCard key={item.title} index={index} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="ai-automation-projects"
          className="relative border-b border-white/6 py-20"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow="AI & Automation Projects"
              title="AI-assisted workflow systems that support business operations without pulling focus away from trading development."
              copy="This secondary project layer shows business automation, document processing, and OpenAI-connected workflow design using the same structured build mindset applied across trading systems."
            />

            <div className="mt-12">
              {aiAutomationProjects.map((project, index) => (
                <AutomationProjectCard
                  key={project.title}
                  index={index}
                  project={project}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="relative border-b border-white/6 py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow="Core Skills"
              title="Trading system development skills built around architecture, automation, validation, and deployment."
              copy="The core capability stack stays centered on building systems that can be tested realistically, upgraded cleanly, and operated reliably."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
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
                  AI & Automation
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                  Workflow and process automation skills that complement the main trading stack.
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  This category stays secondary to trading systems work, while
                  showing practical experience building AI-assisted workflows,
                  integration layers, and document-driven automation.
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
                  {automationSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                      variants={fadeUp}
                      custom={index * 0.03}
                      className="rounded-full border border-cyan-400/12 bg-cyan-400/6 px-4 py-2.5 text-sm font-medium text-cyan-100"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="work-style" className="relative border-b border-white/6 py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
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
          </div>
        </section>

        <section id="services" className="relative border-b border-white/6 py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow="Services"
              title="Focused development support for trading systems, automation, validation, and deployment."
              copy="Service scope stays tightly aligned with trading system work rather than broad agency-style software delivery."
            />

            <div className="mt-10 flex flex-wrap gap-3">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  custom={index * 0.03}
                  className="rounded-full border border-cyan-400/12 bg-cyan-400/6 px-5 py-3 text-sm font-medium text-cyan-100"
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="tools" className="relative border-b border-white/6 py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow="Tools"
              title="A workflow stack built around trading platforms, backend tooling, testing utilities, and deployment support."
              copy="The toolset combines trading-focused platforms with automation, QA, logging, and operational tooling."
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
              {tools.map((tool) => (
                <ToolTile key={tool} name={tool} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              className="relative overflow-hidden rounded-[2.3rem] border border-cyan-400/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),linear-gradient(180deg,rgba(8,20,30,0.96),rgba(5,12,19,1))] px-8 py-10 shadow-[0_30px_90px_rgba(0,0,0,0.38)] sm:px-10 sm:py-12"
            >
              <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-teal-400/10 blur-3xl" />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
                    JM Trading Systems
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                    Trading systems built with structured logic, realistic validation, and automation-ready workflows.
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
                    The portfolio stays centered on trading infrastructure,
                    strategy development, MT4/MT5 systems, automation support,
                    and QA-backed reliability.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/18 bg-white/3 px-6 py-3 text-sm font-semibold text-cyan-100 transition-colors duration-300 hover:bg-cyan-300/8"
                  >
                    View Projects
                  </a>
                  <a
                    href={githubUrl}
                    rel="noreferrer"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#041018] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    View GitHub
                    <GitBranch className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
