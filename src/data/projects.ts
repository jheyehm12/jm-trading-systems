export type PreviewType =
  | 'trading-alert'
  | 'tradingview-strategy'
  | 'ai-screenshot'
  | 'ai-workforce'
  | 'client-intake'
  | 'saas-dashboard'
  | 'booking-chat'
  | 'qa-validation';

export interface ProjectChartImage {
  src: string;
  caption: string;
  url?: string;
}

export interface ProjectEntry {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  summary: string;
  detail?: string;
  outcome?: string;
  features: string[];
  tags?: string[];
  tools: string[];
  previewType: PreviewType;
  detailTo: string;
  demoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  imageSrc?: string;
  images?: ProjectChartImage[];
}

export const DEFAULT_GITHUB_URL = 'https://github.com/jheyehm12';

export const homeCaseStudies: ProjectEntry[] = [
  {
    id: 'myalert',
    category: 'Trading Systems',
    title: 'MyAlert',
    subtitle: 'AI-Powered Trading Decision Platform',
    summary:
      'MyAlert is a real-time decision-support system that receives TradingView alerts, adds market context, evaluates each setup with deterministic rules and AI-assisted review, and sends the decision to Telegram. It is not an autonomous trading system.',
    detail:
      'Alerts are converted into structured, reviewable decisions (TAKE_BUY, TAKE_SELL, or WAIT) with entry, stop-loss, and take-profit levels tied to the decision.',
    features: [
      'TradingView webhook integration',
      'AI-assisted trade evaluation engine',
      'WAIT → TAKE decision lifecycle',
      'Structured trade logging',
      'Replay validation framework',
      'Telegram trade notifications',
    ],
    tags: [
      'TradingView',
      'Webhooks',
      'AI Decision Engine',
      'Replay Validation',
      'Trade Logging',
    ],
    tools: [
      'Python',
      'FastAPI',
      'TradingView',
      'OpenAI',
      'Telegram',
      'CSV Analytics',
      'Webhook Infrastructure',
    ],
    previewType: 'trading-alert',
    detailTo: '/projects/trading/',
    images: [
      {
        src: '/images/projects/myalert/xauusd-1h-alerts.png',
        caption: 'XAUUSD · 1H — MyAlert signals on TradingView',
      },
      {
        src: '/images/projects/myalert/btcusd-15m-alerts.png',
        caption: 'BTCUSD · 15M — Alert triggers at key price levels',
        url: 'tradingview.com/chart',
      },
    ],
  },
  {
    id: 'lookback',
    category: 'Trading Systems',
    title: 'LookBack Trading Algorithm',
    summary:
      'A futures-focused TradingView strategy built in Pine Script with contextual market structure, replay-tested entries, and execution rules refined through chart review.',
    features: [
      'Pine Script strategy architecture',
      'Contextual market structure logic',
      'Replay-driven entry refinement',
      'Futures execution considerations',
    ],
    tags: ['Pine Script', 'Futures', 'Replay Validation', 'Market Structure'],
    tools: ['TradingView', 'Pine Script', 'Futures', 'Replay Validation'],
    previewType: 'tradingview-strategy',
    detailTo: '/projects/trading/',
  },
];

export const homeSelectedWork: ProjectEntry[] = [
  {
    id: 'workforce',
    category: 'AI & Automation',
    title: 'AI Workforce Assistant Platform',
    summary:
      'A role-based AI assistant platform with specialized agents for sales, operations, and admin tasks, plus business content generation and workflow routing.',
    features: [
      'Sales Assistant agent',
      'Operations Assistant agent',
      'Admin Assistant agent',
      'Role-based authentication',
      'Workflow automation & task routing',
      'Business content generation',
      'Dashboard analytics & productivity insights',
    ],
    tags: [
      'AI Agents',
      'Workflow Automation',
      'OpenAI',
      'Authentication',
      'Business Automation',
      'Prompt Engineering',
      'Dashboard Analytics',
      'SaaS Architecture',
    ],
    tools: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Supabase',
      'OpenAI API',
      'Vercel',
    ],
    previewType: 'ai-workforce',
    detailTo: '/projects/ai-automation/',
    demoUrl: 'https://www.loom.com/share/1cc91bd00f0147b28274f0f888a189eb',
    liveUrl: 'https://ai-workforce-assistant-platform.vercel.app/',
  },
  {
    id: 'client-intake',
    category: 'AI & Automation',
    title: 'AI Client Submission & Document Intake Platform',
    summary:
      'An AI-assisted client onboarding and document submission platform that collects documents, flags missing information, classifies priority, and drafts summaries and follow-ups.',
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
    tags: [
      'Client Portal',
      'Document Upload',
      'AI Automation',
      'Workflow Automation',
      'Business Process Automation',
      'Google Workspace Integration',
    ],
    tools: [
      'React',
      'TypeScript',
      'Supabase',
      'OpenAI',
      'Google Forms',
      'Google Sheets',
      'Make.com',
      'Vercel',
    ],
    previewType: 'client-intake',
    detailTo: '/projects/ai-automation/',
    demoUrl: 'https://www.loom.com/share/594b500fa7954d479f816fdf0429c2a1',
  },
  {
    id: 'tradevault',
    category: 'Trading Systems',
    title: 'TradeVault',
    subtitle: 'Trading Journal & Analytics SaaS',
    summary:
      'TradeVault is a full stack trading journal and analytics SaaS built for traders to track, manage, and analyze trading performance through secure authentication, trade journaling, performance dashboards, and interactive visualizations.',
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
    tags: [
      'Trading SaaS',
      'Auth & RLS',
      'Analytics Dashboard',
      'Trade CRUD',
      'Performance Tracking',
      'Responsive UI',
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
    previewType: 'saas-dashboard',
    detailTo: '/projects/trading/',
    demoUrl: 'https://www.loom.com/share/6bf544a1f76d4988b75ea54a85a37aa4',
    liveUrl: 'https://trade-vault2.vercel.app/',
  },
  {
    id: 'resort-booking',
    category: 'AI & Automation',
    title: 'Resort Booking Assistant',
    summary:
      'An AI-powered booking assistant concept for guest inquiries and reservation workflows. Status to be confirmed.',
    features: [
      'Guest inquiry handling',
      'Booking workflow automation',
      'Availability-aware responses',
      'Operator handoff support',
      'Structured conversation logging',
      'Business content generation',
    ],
    tags: [
      'AI Assistants',
      'Business Automation',
      'Workflow Automation',
      'OpenAI',
    ],
    tools: ['OpenAI', 'React', 'FastAPI', 'Workflow Automation', 'Vercel'],
    previewType: 'booking-chat',
    detailTo: '/projects/ai-automation/',
  },
];

export const homeQaExperience: ProjectEntry[] = [
  {
    id: 'banking-qa',
    category: 'QA & Validation',
    title: 'Banking QA Experience',
    summary:
      'Quality assurance across banking and financial software: web and mobile application testing, API validation, regression, defect tracking, and release validation.',
    features: [
      'Web & mobile application testing',
      'API validation & integration testing',
      'Regression & smoke test execution',
      'Defect lifecycle management',
      'Cross-browser & device coverage',
      'Release readiness review',
      'Test documentation & traceability',
      'Collaboration with dev and product teams',
    ],
    tags: [
      'Banking Software',
      'Regression Testing',
      'API Testing',
      'Mobile Testing',
      'Release Validation',
    ],
    tools: [
      'Katalon Studio',
      'Postman',
      'BrowserStack',
      'Jira',
      'Manual Testing',
      'Test Automation',
    ],
    previewType: 'qa-validation',
    detailTo: '/projects/qa-validation/',
  },
  {
    id: 'test-automation-validation',
    category: 'QA & Validation',
    title: 'Test Automation / Validation',
    summary:
      'Test automation and validation practice across web, API, and workflow systems, combining exploratory testing, automated regression, and reliability review.',
    features: [
      'Test case design & execution',
      'Automation testing frameworks',
      'API & integration validation',
      'Edge-case & exploratory testing',
      'Structured log review',
      'Replay validation for trading systems',
      'Performance & stability checks',
      'Continuous improvement of test coverage',
    ],
    tags: [
      'Test Automation',
      'API Testing',
      'Regression Testing',
      'Validation',
      'Quality Engineering',
    ],
    tools: [
      'Katalon Studio',
      'Postman',
      'BrowserStack',
      'Jira',
      'Manual Testing',
      'Web Testing',
      'Mobile Testing',
    ],
    previewType: 'qa-validation',
    detailTo: '/projects/qa-validation/',
  },
];

export const tradingProjects: ProjectEntry[] = [
  // LookBack is withheld from public pages pending owner approval.
  ...homeCaseStudies.filter((p) => p.id !== 'lookback'),
  homeSelectedWork.find((p) => p.id === 'tradevault')!,
];

// The legacy Resort Booking Assistant is withheld from public pages pending owner approval.
export const aiAutomationProjects: ProjectEntry[] = homeSelectedWork.filter(
  (p) => p.category.includes('AI') && p.id !== 'resort-booking',
);

export const allPortfolioProjects: ProjectEntry[] = [
  ...homeCaseStudies,
  ...homeSelectedWork,
  ...homeQaExperience,
];
