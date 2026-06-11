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
    featured: true,
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
    tags: ['Contextual Analysis', 'Workflow Design', 'Replay Validation'],
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
  {
    title: 'AI Trading Screenshot Assistant',
    summary:
      'AI-assisted tool for extracting structured trade insights from chart screenshots, reducing manual note-taking and improving review consistency.',
    tools: ['Python', 'OpenAI', 'FastAPI', 'React'],
    outcome:
      'Faster trade review workflows with structured output ready for journaling and analysis.',
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
      'https://www.loom.com/share/594b500fa7954d479f816fdf0429c2a1',
  },
  {
    banner: 'workforce',
    category: 'AI & Automation',
    title: 'AI Workforce Assistant Platform',
    copy: 'A role-based AI automation platform that helps teams automate repetitive tasks, generate business content, organize workflows, and improve productivity through specialized AI agents.',
    features: [
      'Sales Assistant agent',
      'Operations Assistant agent',
      'Admin Assistant agent',
      'Role-based access & authentication',
      'Workflow automation & task routing',
      'Business content generation',
      'Dashboard analytics & productivity insights',
    ],
    tools: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Supabase',
      'OpenAI',
      'Vercel',
    ],
    tags: [
      'AI Agents',
      'Workflow Automation',
      'OpenAI',
      'Authentication',
      'Dashboard Analytics',
      'Business Automation',
      'Prompt Engineering',
      'SaaS Architecture',
    ],
    outcome:
      'Built a portfolio-grade AI automation platform demonstrating AI integration, prompt engineering, workflow design, SaaS architecture, authentication, and business process automation.',
    demoUrl:
      'https://www.loom.com/share/1cc91bd00f0147b28274f0f888a189eb',
    liveUrl: 'https://ai-workforce-assistant-platform.vercel.app/',
  },
  {
    banner: 'resort',
    category: 'AI & Automation',
    title: 'Resort Booking Assistant',
    copy: 'An AI-powered booking assistant that handles guest inquiries, guides reservation workflows, and reduces manual response load for resort operators.',
    features: [
      'Guest inquiry handling',
      'Booking workflow automation',
      'Availability-aware responses',
      'Operator handoff support',
      'Structured conversation logging',
      'Business content generation',
    ],
    tools: ['OpenAI', 'React', 'FastAPI', 'Workflow Automation', 'Vercel'],
    tags: [
      'AI Assistants',
      'Business Automation',
      'Workflow Automation',
      'OpenAI',
    ],
    outcome:
      'Streamlined booking inquiries and reduced manual follow-up for hospitality workflows through a focused AI assistant.',
  },
]

export const fullStackTradingProjects = [
  {
    banner: 'tradevault',
    featured: true,
    category: 'Full Stack Trading SaaS',
    title: 'TradeVault',
    subtitle: 'Trading Journal & Analytics SaaS',
    copy: 'TradeVault is a full stack trading journal and analytics SaaS built for traders to track, manage, and analyze trading performance through secure authentication, trade journaling, performance dashboards, and interactive visualizations.',
    features: [
      'User registration & authentication',
      'Protected routes & session handling',
      'Trading dashboard & trade CRUD',
      'Win rate & total P&L tracking',
      'Risk/reward & best/worst trade analysis',
      'Equity curve & monthly performance charts',
      'Win/loss breakdown & P&L by symbol',
      'Supabase RLS & PostgreSQL integration',
    ],
    tools: [
      'React',
      'TypeScript',
      'Vite',
      'Supabase',
      'PostgreSQL',
      'React Router',
      'Recharts',
      'Tailwind CSS',
      'Vercel',
    ],
    tags: [
      'Trading SaaS',
      'Auth & RLS',
      'Analytics Dashboard',
      'Trade CRUD',
      'Performance Tracking',
      'Responsive UI',
    ],
    outcome:
      'Built a production-ready trader-focused SaaS application that demonstrates full stack delivery while staying aligned with trading systems and validation-focused development.',
    demoUrl:
      'https://www.loom.com/share/6bf544a1f76d4988b75ea54a85a37aa4',
    liveUrl: 'https://trade-vault2.vercel.app/',
    githubUrl: githubUrl,
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
  { label: 'OpenAI API', icon: Sparkles },
  { label: 'AI Agents', icon: Bot },
  { label: 'Prompt Engineering', icon: MessageSquareCode },
  { label: 'Workflow Automation', icon: Workflow },
  { label: 'Business Process Automation', icon: Briefcase },
  { label: 'AI Automation Development', icon: Brain },
  { label: 'AI Workflow Design', icon: Network },
  { label: 'OpenAI Integration', icon: Sparkles },
  { label: 'API Integration', icon: Plug },
  { label: 'AI Process Automation', icon: Bot },
  { label: 'Make.com Automation', icon: Network },
  { label: 'Document Processing Workflows', icon: FileText },
  { label: 'Data Validation & Processing', icon: Database },
  { label: 'Automated Reporting', icon: BarChart3 },
  { label: 'AI-Assisted Decision Systems', icon: Brain },
  { label: 'Google Workspace Automation', icon: FolderCog },
]

export const fullStackSkills = [
  { label: 'React', icon: Atom },
  { label: 'TypeScript', icon: FileCode2 },
  { label: 'Supabase', icon: Database },
  { label: 'PostgreSQL', icon: Database },
  { label: 'Tailwind CSS', icon: Layers3 },
  { label: 'Authentication Systems', icon: ShieldCheck },
  { label: 'SaaS Architecture', icon: Layers3 },
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
      'Trading Journal & Analytics Platforms',
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
      'AI Automation Development',
      'AI Agent Development',
      'Workflow Automation Platforms',
      'OpenAI Integration',
      'Business Process Automation',
    ],
  },
  {
    title: 'Full Stack Trading Apps',
    icon: Layers3,
    description:
      'Trader-focused web applications including journals, analytics dashboards, client portals, and integrated business systems with a focus on usability, scalability, and maintainability.',
    items: [
      { label: 'React Development', icon: Atom },
      { label: 'JavaScript / TypeScript', icon: FileCode2 },
      { label: 'Frontend Development', icon: Monitor },
      { label: 'Backend Development', icon: ServerCog },
      { label: 'REST API Development', icon: PlugZap },
      { label: 'Database Integration', icon: Database },
      { label: 'Authentication Systems', icon: ShieldCheck },
      { label: 'SaaS Application Development', icon: Layers3 },
      { label: 'Full Stack SaaS Development', icon: Layers3 },
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
  'React',
  'TypeScript',
  'Supabase',
  'PostgreSQL',
  'Tailwind CSS',
  'Vite',
  'Vercel',
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
  '9+ Years QA & Validation Experience',
  'MT4/MT5 • TradingView • Python • React',
  'TradeVault • Full Stack Trading SaaS',
  'Scalable Architecture & Validation-First Design',
]

export const aboutContent = {
  title:
    'Building trading systems, AI automation, and trader-focused software with a validation-first mindset.',
  copy: 'Trader since 2020 and software developer focused on trading systems development, AI automation, full stack trading applications, and workflow solutions. My background in quality assurance and validation helps ensure systems are built with reliability, scalability, and real-world usability in mind.',
  validationIntro:
    'JM Trading Systems combines trading domain knowledge, automation engineering, and software development experience across MT4/MT5 systems, TradingView strategies, AI-powered workflows, and trader-facing SaaS platforms.',
  validationDetail:
    'Projects are built with a strong focus on maintainability, structured architecture, testing, validation, and long-term scalability—whether the deliverable is an EA, automation pipeline, or a production trading application like TradeVault.',
}

export const homeHero = {
  intro: 'I build trading systems, automation tools, and SaaS products for freelance clients and direct engagements.',
  lines: [
    'Trading Systems Developer.',
    'AI Automation Builder.',
    'Full Stack SaaS Developer.',
  ],
  subheadline:
    'Building trading tools, automation systems, and AI-powered applications that deliver real-world results.',
}

export const credibilityLine = [
  'TradingView',
  'Pine Script',
  'MQL4/MQL5',
  'React',
  'Supabase',
  'OpenAI',
]

export const homeHeroPreview = {
  previewType: 'saas-dashboard',
  label: 'TradeVault — live SaaS preview',
}

export const homeCaseStudies = [
  {
    id: 'myalert',
    category: 'Trading Systems',
    title: 'MyAlert AI Decision System',
    summary:
      'A backend system that receives TradingView alerts, processes them through Python/FastAPI, logs structured trade data, and supports replay validation before automation goes live.',
    outcome:
      'Reduced manual alert handling and created a reliable pipeline from signal to logged decision output.',
    features: [
      'Webhook alert intake from TradingView',
      'Structured CSV logging for review',
      'Replay validation before live routing',
      'Telegram notifications for operators',
    ],
    tools: ['Python', 'TradingView', 'FastAPI', 'Webhooks', 'Telegram'],
    previewType: 'trading-alert',
    detailTo: '/projects/trading',
  },
  {
    id: 'lookback',
    category: 'Trading Systems',
    title: 'LookBack Trading Algorithm',
    summary:
      'A futures-focused TradingView strategy built in Pine Script with contextual market structure, replay-tested entries, and execution rules refined through chart review.',
    outcome:
      'Delivered a readable strategy codebase with validation workflow suitable for discretionary and semi-systematic futures trading.',
    features: [
      'Pine Script strategy architecture',
      'Contextual market structure logic',
      'Replay-driven entry refinement',
      'Futures execution considerations',
    ],
    tools: ['TradingView', 'Pine Script', 'Futures', 'Replay Validation'],
    previewType: 'tradingview-strategy',
    detailTo: '/projects/trading',
  },
]

export const homeSelectedWork = [
  {
    id: 'screenshot-assistant',
    category: 'AI & Trading',
    title: 'AI Trading Screenshot Assistant',
    summary:
      'Upload a chart screenshot and get structured trade notes — setup, context, and review output ready for journaling.',
    features: [
      'Screenshot upload & parsing',
      'Trade setup extraction',
      'AI-assisted review notes',
      'Structured output for journaling',
    ],
    tools: ['Python', 'OpenAI', 'FastAPI', 'React'],
    previewType: 'ai-screenshot',
    detailTo: '/projects/ai-automation',
  },
  {
    id: 'workforce',
    category: 'AI & Automation',
    title: 'AI Workforce Assistant Platform',
    summary:
      'Role-based AI agents for sales, operations, and admin teams — with auth, workflow routing, and a live SaaS dashboard.',
    features: [
      'Sales, Operations & Admin agents',
      'Role-based authentication',
      'Workflow automation',
      'Dashboard analytics',
    ],
    tools: ['React', 'TypeScript', 'Supabase', 'OpenAI', 'Vercel'],
    previewType: 'ai-workforce',
    detailTo: '/projects/ai-automation',
    demoUrl:
      'https://www.loom.com/share/1cc91bd00f0147b28274f0f888a189eb',
    liveUrl: 'https://ai-workforce-assistant-platform.vercel.app/',
  },
  {
    id: 'tradevault',
    category: 'Full Stack SaaS',
    title: 'TradeVault',
    summary:
      'A trading journal and analytics SaaS with authentication, trade CRUD, performance metrics, and equity curve visualizations.',
    features: [
      'Auth & protected routes',
      'Trade journaling & CRUD',
      'Win rate & P&L tracking',
      'Equity curve & performance charts',
    ],
    tools: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    previewType: 'saas-dashboard',
    detailTo: '/projects/full-stack',
    demoUrl:
      'https://www.loom.com/share/6bf544a1f76d4988b75ea54a85a37aa4',
    liveUrl: 'https://trade-vault2.vercel.app/',
  },
  {
    id: 'resort-booking',
    category: 'AI & Automation',
    title: 'Resort Booking Assistant',
    summary:
      'An AI assistant that handles guest booking questions, drafts availability-aware responses, and reduces manual operator load.',
    features: [
      'Guest inquiry handling',
      'Booking workflow automation',
      'Availability-aware responses',
      'Operator handoff support',
    ],
    tools: ['OpenAI', 'React', 'Workflow Automation', 'FastAPI'],
    previewType: 'booking-chat',
    detailTo: '/projects/ai-automation',
  },
]

export const homeFeaturedProjects = [
  ...homeCaseStudies,
  ...homeSelectedWork,
]

export const whatIBuild = [
  {
    title: 'Trading Systems Development',
    items: [
      'TradingView Indicators',
      'Pine Script Strategies',
      'MT4/MT5 Expert Advisors',
      'Signal Systems',
      'Backtesting Tools',
    ],
  },
  {
    title: 'AI & Automation',
    items: [
      'OpenAI Integrations',
      'Workflow Automation',
      'AI Assistants',
      'Business Automation',
    ],
  },
  {
    title: 'Full Stack Development',
    items: [
      'React',
      'TypeScript',
      'Supabase',
      'FastAPI',
      'Modern SaaS Applications',
    ],
  },
]

export const experienceTimeline = [
  {
    role: 'Trading Systems Developer',
    period: '2023 — Present',
    copy: 'Building TradingView strategies, MT4/MT5 EAs, signal systems, and validation-focused trading infrastructure.',
  },
  {
    role: 'AI Automation Builder',
    period: '2023 — Present',
    copy: 'Delivering OpenAI integrations, workflow automation, AI assistants, and business process automation platforms.',
  },
  {
    role: '9+ Years Software Industry Experience',
    period: 'QA & validation foundation',
    copy: 'Background in structured testing, API validation, and reliability review — applied to every project, not positioned as the primary specialty.',
  },
]

export const techStackGroups = [
  {
    title: 'Trading',
    tools: ['Pine Script', 'TradingView', 'MQL4', 'MQL5', 'Python'],
  },
  {
    title: 'AI',
    tools: ['OpenAI', 'Claude', 'Cursor', 'LangChain'],
  },
  {
    title: 'Development',
    tools: ['React', 'TypeScript', 'Supabase', 'FastAPI', 'Tailwind CSS'],
  },
]

export const qaSupportNote =
  'QA background: Katalon, Postman, BrowserStack, API testing — applied as supporting rigor, not the primary focus.'

export const testimonials = [
  {
    quote:
      'Delivered a clean TradingView strategy with clear logic and thorough documentation. Communication was consistent and the work held up in replay testing.',
    role: 'Futures Trader',
    source: 'Upwork',
    rating: 5,
  },
  {
    quote:
      'Built a reliable automation workflow that reduced manual follow-up work. Requirements were understood quickly and the implementation was structured.',
    role: 'Project Manager',
    source: 'Upwork',
    rating: 5,
  },
  {
    quote:
      'Strong full stack delivery on a SaaS MVP — authentication, database integration, and a polished dashboard. Would work together again.',
    role: 'SaaS Founder',
    source: 'Upwork',
    rating: 5,
  },
]

export const contactAvailability = [
  'TradingView Projects',
  'MT4/MT5 Development',
  'AI Automation Projects',
  'Custom SaaS Applications',
]

export const dashboardBars = [26, 38, 34, 52, 46, 72, 64, 88, 76, 104, 94, 122]

export const deskRows = [
  { pair: 'EURUSD', bias: 'Long Bias', value: '+1.24%' },
  { pair: 'XAUUSD', bias: 'Watch Setup', value: '+0.48%' },
  { pair: 'GBPJPY', bias: 'Risk Filter', value: '-0.12%' },
]
