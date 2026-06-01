export const navItems = [
  { label: 'Home', to: '/' },
  {
    label: 'Projects',
    children: [
      { label: 'All Projects', to: '/projects' },
      { label: 'Trading Systems', to: '/projects/trading' },
      { label: 'AI & Automation', to: '/projects/ai-automation' },
      { label: 'QA & Validation', to: '/projects/qa-validation' },
    ],
  },
  { label: 'Skills', to: '/skills' },
  { label: 'Services', to: '/services' },
]

export const projectRoutes = [
  {
    title: 'Trading Systems',
    description:
      'Featured trading infrastructure, MT4/MT5 systems, strategy development, and supporting development work.',
    to: '/projects/trading',
  },
  {
    title: 'AI & Automation',
    description:
      'AI-assisted workflow systems, business automation, and integration layers built with structured orchestration.',
    to: '/projects/ai-automation',
  },
  {
    title: 'QA & Validation',
    description:
      'QA foundation applied to trading systems through structured testing, replay validation, and reliability review.',
    to: '/projects/qa-validation',
  },
]
