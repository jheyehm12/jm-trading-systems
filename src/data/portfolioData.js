import {
  Activity,
  Atom,
  BarChart3,
  Bot,
  Brain,
  BrainCircuit,
  Briefcase,
  CandlestickChart,
  Cpu,
  Database,
  FileCode2,
  FileSearch,
  FileText,
  FolderCog,
  GitBranch,
  Layers3,
  LineChart,
  MessageSquareCode,
  Monitor,
  MonitorCog,
  Network,
  Plug,
  PlugZap,
  Rocket,
  ScanSearch,
  Server,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TestTube2,
  Workflow,
  Wrench,
} from 'lucide-react'

export const githubUrl = 'https://github.com/jheyehm12'

export const featuredProjects = [
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

export const additionalProjects = [
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
    title: 'AI-Powered Trading Strategy Research & Backtesting Platform',
    summary:
      'Built a Python-based trading strategy research platform with backtesting, walk-forward validation, AI performance reviews, and multi-asset market data integration.',
    tools: [
      'Python',
      'Backtesting Engine',
      'Walk-Forward Validation',
      'AI Performance Reviews',
      'Market Data Integration',
      { label: 'CSV Logging', visual: 'CSV Logging (spreadsheet)' },
      'GitHub',
    ],
    outcome:
      'Accelerated strategy research, validation, and optimization through AI-assisted performance analysis and structured multi-market testing workflows.',
  },
  {
    title: 'AI Trading Assistant (Paper Mode + Backtest)',
    summary:
      'AI-assisted paper workflow for trade review, scenario guidance, and backtest-oriented experimentation before live deployment.',
    tools: ['Python', 'AI/ML', 'Telegram'],
    outcome: 'Safer experimentation with cleaner feedback loops.',
  },
]

export const aiAutomationProjects = [
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

export const coreSkills = [
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
    icon: Sparkles,
    title: 'AI Automation',
    copy: 'Designing and building AI-powered workflows that automate repetitive business processes, streamline data handling, improve decision-making, and reduce manual effort through intelligent integrations and workflow orchestration.',
  },
  {
    icon: Workflow,
    title: 'VPS Deployment & Monitoring',
    copy: 'Deployment, runtime monitoring, and operational oversight for long-running automation.',
  },
]

export const automationSkills = [
  { label: 'Workflow Automation', icon: Workflow },
  { label: 'AI Process Automation', icon: Bot },
  { label: 'OpenAI Integration', icon: Sparkles },
  { label: 'Make.com Automation', icon: Network },
  { label: 'API Integration', icon: Plug },
  { label: 'Business Process Automation', icon: Briefcase },
  { label: 'Document Processing Workflows', icon: FileText },
  { label: 'Data Validation & Processing', icon: Database },
  { label: 'Automated Reporting', icon: BarChart3 },
  { label: 'AI-Assisted Decision Systems', icon: Brain },
  { label: 'Google Workspace Automation', icon: FolderCog },
  { label: 'Prompt Engineering', icon: MessageSquareCode },
]

export const workStyle = [
  'Clear inputs and settings',
  'Clean readable code',
  'Non repaint logic where relevant',
  'Focus on stability and realistic testing',
  'Spread/slippage/execution awareness',
  'Modular architecture for future upgrades',
]

export const serviceCategories = [
  {
    title: 'Trading & Research',
    icon: CandlestickChart,
    primary: true,
    items: [
      'TradingView Strategy Development',
      'Build Pine Script indicators and strategies',
      'Build or modify MT5 EAs',
      'Backtesting and optimization',
    ],
  },
  {
    title: 'Automation & AI',
    icon: Workflow,
    items: [
      'Trading automation workflows',
      'Workflow Automation',
      'AI & Workflow Automation',
      'Python Backend Development',
      'Webhook & API Integration',
    ],
  },
  {
    title: 'Full Stack Development',
    icon: Layers3,
    description:
      'Building modern web applications, client portals, dashboards, automation interfaces, and integrated business systems with a focus on usability, scalability, and maintainability.',
    items: [
      { label: 'React Development', icon: Atom },
      { label: 'JavaScript / TypeScript', icon: FileCode2 },
      { label: 'Frontend Development', icon: Monitor },
      { label: 'Backend Development', icon: ServerCog },
      { label: 'REST API Development', icon: PlugZap },
      { label: 'Database Integration', icon: Database },
      { label: 'Authentication Systems', icon: ShieldCheck },
      { label: 'SaaS Application Development', icon: Layers3 },
      { label: 'Responsive Web Design', icon: Smartphone },
      { label: 'Git & GitHub Workflow', icon: GitBranch },
    ],
  },
  {
    title: 'Validation & QA',
    icon: TestTube2,
    items: [
      'Replay Testing & Validation',
      'Trading System QA Review',
      'Trading system validation',
    ],
  },
  {
    title: 'Infrastructure',
    icon: Server,
    spanFull: true,
    description:
      'Supporting deployment, hosting, monitoring, and integration workflows that keep trading systems and automation platforms running reliably in production environments.',
    items: [
      { label: 'VPS Setup & Monitoring', icon: Server },
      { label: 'API & Webhook Integration', icon: PlugZap },
      { label: 'Git & GitHub Version Control', icon: GitBranch },
      { label: 'Deployment & Release Management', icon: Rocket },
      { label: 'Trading System Hosting', icon: Database },
      { label: 'Remote Server Administration', icon: MonitorCog },
      { label: 'Performance Monitoring', icon: Activity },
      { label: 'Log Collection & Analysis', icon: FileSearch },
      { label: 'Automation Workflow Hosting', icon: Workflow },
      { label: 'Secure Environment Configuration', icon: ShieldCheck },
    ],
  },
]

export const availableFor = [
  { label: 'Freelance Development', icon: Briefcase },
  { label: 'System Enhancements', icon: Wrench },
  { label: 'Validation & Testing', icon: TestTube2 },
  { label: 'AI Automation Projects', icon: Sparkles },
]

export const qaSkillGroups = [
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

export const qaChecks = [
  'Structured testing',
  'Regression checks',
  'Replay validation',
  'Log review',
  'Edge-case testing',
  'Automation testing',
]

export const tools = [
  'MT4',
  'MT5',
  'MQL5',
  'Python',
  'TradingView',
  'FastAPI',
  'Make.com',
  'OpenAI',
  'Claude',
  'Git',
  'GitHub',
  'CSV Logging',
  'Telegram',
  'VPS',
  'Postman',
  'Katalon',
  'BrowserStack',
]

export const aboutHighlights = [
  'Trader since 2020',
  'Software & Automation Developer since 2023',
  '10+ Years QA & Validation Experience',
  'Trading Systems & AI Automation Specialist',
  'MT4/MT5 • TradingView • Python • React',
  'Scalable Architecture & Validation-First Design',
]

export const dashboardBars = [26, 38, 34, 52, 46, 72, 64, 88, 76, 104, 94, 122]

export const deskRows = [
  { pair: 'EURUSD', bias: 'Long Bias', value: '+1.24%' },
  { pair: 'XAUUSD', bias: 'Watch Setup', value: '+0.48%' },
  { pair: 'GBPJPY', bias: 'Risk Filter', value: '-0.12%' },
]
