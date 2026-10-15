/** Portfolio brand — display name, primary domain, and owner. */
export const siteBrand = 'Jimeno Labs';
export const siteUrl = 'https://jimenolabs.dev';
export const siteOwner = 'John Michael Jimeno';
export const siteDescription =
  'Jimeno Labs — trading systems development, AI automation, and full stack SaaS applications by John Michael Jimeno.';

export interface NavLink {
  href: string;
  label: string;
}

export interface HeroContent {
  intro: string;
  headlineLines: string[];
  subheadline: string;
  credibilityLine: string[];
  primaryCta: NavLink;
  secondaryCta: NavLink;
  utilityLabel: string;
}

export interface StatBlockProps {
  label: string;
  value: string;
}

export interface FooterMeta {
  description: string;
  title: string;
}

export const siteNav: NavLink[] = [
  { label: 'Projects', href: '#case-studies' },
  { label: 'Selected Work', href: '#selected-work' },
  { label: 'Services', href: '/services/' },
  { label: 'Work With Me', href: '/contact/' },
];

export const heroLeftNav: NavLink[] = [
  { label: 'Projects', href: '#case-studies' },
  { label: 'Selected Work', href: '#selected-work' },
];

export const heroRightNav: NavLink[] = [
  { label: 'Services', href: '/services/' },
  { label: 'Work With Me', href: '/contact/' },
];

export const mobileNav: NavLink[] = siteNav;

export const heroContent: HeroContent = {
  intro:
    'I build trading tools, automation systems, and SaaS products for freelance clients and direct engagements.',
  headlineLines: [
    'Trading Systems Developer.',
    'AI Automation Builder.',
    'Full Stack SaaS Developer.',
  ],
  subheadline:
    'Building trading tools, automation systems, and AI-powered applications that deliver real-world results.',
  credibilityLine: [
    'TradingView',
    'Pine Script',
    'MQL4/MQL5',
    'React',
    'Supabase',
    'OpenAI',
  ],
  primaryCta: { label: 'View Projects', href: '#case-studies' },
  secondaryCta: { label: "Let's Talk", href: '/contact/' },
  utilityLabel: 'Jimeno Labs',
};

export const stats: StatBlockProps[] = [
  { value: '2020', label: 'Trading since' },
  { value: '2023', label: 'Software development' },
  { value: '6', label: 'Flagship projects' },
  { value: '9+', label: 'Years industry experience' },
];

export const footerMeta: FooterMeta = {
  title: 'Jimeno Labs',
  description:
    'Trading systems development, AI automation, and full stack SaaS delivery for freelance clients and direct engagements.',
};

export const footerDirectory: NavLink[] = [
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Selected Work', href: '#selected-work' },
  { label: 'Services', href: '/services/' },
  { label: 'Work With Me', href: '/contact/' },
  { label: 'GitHub', href: 'https://github.com/jheyehm12' },
];

export const workWithMeMessage =
  'Available for freelance projects and consulting engagements.';

export const footerPolicies = [
  'Trading Systems',
  'AI Automation',
  'Full Stack SaaS',
];

export const validationBackground = {
  eyebrow: 'Testing & Validation Background',
  title: "Built with an Engineer's Mindset",
  intro:
    'Behind every project is 9+ years of software quality engineering experience.',
  copy: 'My background in QA helps me build trading systems, AI applications, and SaaS products with a strong focus on:',
  focusAreas: [
    'Validation & Verification',
    'Edge Case Analysis',
    'Risk Reduction',
    'Performance Testing',
    'API Testing',
    'Production Readiness',
    'Structured Debugging',
    'Reliability & Stability',
  ],
  tools: [
    'Katalon Studio',
    'Postman',
    'BrowserStack',
    'Jira',
    'API Testing',
    'Manual Testing',
    'Test Automation',
    'Regression Testing',
    'Mobile Testing',
    'Web Testing',
  ],
};

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
];

export const contactAvailability = [
  'TradingView Projects',
  'MT4/MT5 Development',
  'AI Automation Projects',
  'Custom SaaS Applications',
];

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
];
