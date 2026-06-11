export const navItems = [
  { label: 'Home', to: '/' },
  {
    label: 'Projects',
    children: [
      { label: 'All Projects', to: '/projects' },
      { label: 'Trading Systems', to: '/projects/trading' },
      {
        label: 'Full Stack Trading Apps',
        to: '/projects/full-stack',
      },
      { label: 'AI & Automation', to: '/projects/ai-automation' },
      { label: 'QA & Validation', to: '/projects/qa-validation' },
    ],
  },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export const projectRoutes = [
  {
    title: 'Trading Systems',
    description:
      'Featured trading infrastructure, MT4/MT5 systems, strategy development, and supporting development work.',
    to: '/projects/trading',
    featured: true,
    sortOrder: 1,
  },
  {
    title: 'Full Stack Trading Apps',
    description:
      'Trader-focused SaaS applications with authentication, analytics dashboards, and production-ready cloud deployment.',
    to: '/projects/full-stack',
    featured: true,
    sortOrder: 2,
  },
  {
    title: 'AI & Automation',
    description:
      'AI-assisted workflow systems, business automation, and integration layers built with structured orchestration.',
    to: '/projects/ai-automation',
    sortOrder: 3,
  },
  {
    title: 'QA & Validation',
    description:
      'QA foundation applied to trading systems through structured testing, replay validation, and reliability review.',
    to: '/projects/qa-validation',
    sortOrder: 4,
  },
]
