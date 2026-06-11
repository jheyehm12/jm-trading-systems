export type PreviewType =
  | 'trading-alert'
  | 'tradingview-strategy'
  | 'ai-screenshot'
  | 'ai-workforce'
  | 'saas-dashboard'
  | 'booking-chat';

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
  tools: string[];
  previewType: PreviewType;
  detailTo: string;
  demoUrl?: string;
  liveUrl?: string;
  imageSrc?: string;
  images?: ProjectChartImage[];
}

export const homeCaseStudies: ProjectEntry[] = [
  {
    id: 'myalert',
    category: 'Trading Systems',
    title: 'MyAlert',
    subtitle: 'AI-Powered Trading Decision Platform',
    summary:
      'MyAlert is an end-to-end trading intelligence system that receives TradingView alerts, enriches them with market context, evaluates trade quality using AI-assisted decision logic, tracks outcomes through structured logging, and supports replay-driven validation before automation is enabled.',
    detail:
      'The platform was designed to bridge the gap between raw chart alerts and actionable trading decisions by combining technical analysis, rule-based validation, AI review workflows, and performance tracking.',
    outcome:
      'Built a scalable decision-support system that transforms raw trading alerts into structured, reviewable, and measurable trading workflows.',
    features: [
      'TradingView webhook integration',
      'AI-assisted trade evaluation engine',
      'WAIT → TAKE decision lifecycle',
      'Structured trade logging & analytics',
      'Replay validation framework',
      'Telegram trade notifications',
      'Performance tracking and review',
      'Automation-ready architecture',
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
        url: 'tradingview.com/chart/eiSHnZvF',
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
    detailTo: '/projects/trading/',
  },
];

export const homeSelectedWork: ProjectEntry[] = [
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
    detailTo: '/projects/ai-automation/',
  },
  {
    id: 'workforce',
    category: 'AI & Automation',
    title: 'AI Workforce Assistant',
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
    detailTo: '/projects/ai-automation/',
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
    detailTo: '/projects/full-stack/',
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
    detailTo: '/projects/ai-automation/',
  },
];
