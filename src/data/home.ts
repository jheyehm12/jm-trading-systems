import type { NavLink } from './site';

/** Homepage copy for the Jimeno Labs studio redesign. */

export const homeNav: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const homeHero = {
  eyebrow: 'AI Systems & Engineering Studio',
  headlineLines: ['AI systems', 'engineered for', 'real-world use.'],
  intro:
    'AI systems, automation, and integrations built with a quality-engineering mindset — practical, tested, and reliable.',
  primaryCta: { label: 'View Selected Work', href: '#work' },
  secondaryCta: { label: "Let's Talk", href: '/contact/' },
};

export const homeWork = {
  eyebrow: 'Selected Work',
  title: 'AI systems, automation, and research.',
  intro:
    'Four projects across client AI applications, business automation, real-time alerting, and quantitative research — each with its status stated plainly.',
};

export interface FeaturedProject {
  id: string;
  category: string;
  title: string;
  status: string;
  summary: string;
  tags: string[];
  /** Real, approved image only. Omit for a typography-led treatment. */
  imageSrc?: string;
  imageAlt?: string;
  /** Native width / height of the image, so it is shown uncropped. */
  imageRatio?: string;
  /** Show the whole image inside a dark frame instead of covering it. */
  imageContain?: boolean;
  /** Individual case-study page. */
  detailTo?: string;
  /** Internal category page (not an individual case study). */
  relatedTo?: string;
  externalUrl?: { href: string; label: string };
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'auvyre',
    category: 'Client AI Application / Full-Stack AI',
    title: 'Auvyre AI',
    status: 'Live client application',
    summary:
      'An AI-powered futures chart analysis application providing structured insights from uploaded charts, with supporting market news and earnings context.',
    tags: ['Chart analysis', 'Full-stack AI', 'Client project'],
    imageSrc: '/images/projects/auvyre/auvyre-ai-analysis-homepage.webp',
    imageAlt:
      'Auvyre AI analysis result screen for an MGC chart review, showing the submitted chart images and a result snapshot with bias, confidence, and decision.',
    imageRatio: '1375 / 777',
    detailTo: '/projects/auvyre-ai/',
    externalUrl: { href: 'https://www.auvyreai.com', label: 'Visit site' },
  },
  {
    id: 'casa-tia',
    category: 'Business Automation / AI Integration',
    title: 'CASA Tia: Resort Booking Automation',
    status: 'Development & controlled testing',
    summary:
      'A Messenger-based resort inquiry and booking automation system using n8n, backend integrations, structured data capture, and controlled workflow validation.',
    tags: ['n8n', 'Messenger', 'Workflow validation'],
    imageSrc: '/images/projects/casa-tia/casa-tia-booking-workflow-authentic.webp',
    imageAlt: 'CASA Tia n8n DEV workflow for booking date validation and availability checks.',
    imageRatio: '1500 / 660',
    detailTo: '/projects/casa-tia/',
  },
  {
    id: 'myalert-ai',
    category: 'Real-Time AI Systems / Python Automation',
    title: 'MyAlert AI',
    status: 'Active alerting · ongoing research',
    summary:
      'A trading decision-support system connecting TradingView alerts, Python processing, AI evaluation, and Telegram notifications. Not an autonomous trading bot.',
    tags: ['TradingView', 'Python', 'Telegram'],
    imageSrc: '/images/projects/myalert/myalert-btcusdt-telegram-authentic.webp',
    imageAlt:
      'MyAlert AI BTCUSDT 5m Telegram alert showing final TAKE_SELL decision, entry, stop loss, take profit, and ML shadow prediction.',
    imageContain: true,
    detailTo: '/projects/myalert-ai/',
  },
  {
    id: 'quant-research',
    category: 'Quantitative Research / Data Analysis',
    title: 'Quant Research & Strategy Analytics',
    status: 'Ongoing research',
    summary:
      'Research workflows for testing trading hypotheses, examining historical data, and evaluating strategy behavior and execution costs.',
    tags: ['Historical data', 'Strategy analysis', 'Execution costs'],
    imageSrc: '/images/projects/quant-research/quant-research-experiment-tracking-crop.webp',
    imageRatio: '650 / 504',
    imageAlt:
      'Quant Research experiment tracking workspace showing backtested experiments, preliminary evidence, and ongoing data collection.',
    imageContain: true,
    detailTo: '/projects/quant-research/',
  },
];

export const homeResearch = {
  eyebrow: 'Research & Upcoming',
  title: 'In research and development — not operational systems.',
  items: [
    {
      title: 'Private AI Infrastructure',
      label: 'Research',
      text: 'Local LLM experimentation and research into private AI deployment. Exploratory work only.',
    },
    {
      title: 'TestForge',
      label: 'Initiative',
      text: 'An AI quality-engineering initiative, applying AI to software testing. Scope and capabilities will be published once defined.',
    },
  ],
};

/** Minimal tag set shown on cards (first N of each project's tags). */
export const MAX_TAGS = 3;

export const homeExpertise = {
  eyebrow: 'Expertise',
  title: 'Engineering across the software lifecycle.',
  areas: [
    {
      title: 'Full-Stack Development',
      text: 'React, TypeScript, Supabase and FastAPI applications with solid auth, data models, and UI.',
    },
    {
      title: 'AI Systems & Integration',
      text: 'AI-powered applications, assistants, and agent workflows wired into real business processes.',
    },
    {
      title: 'Business Process Automation',
      text: 'Intake, routing, and follow-up flows that remove repetitive manual work.',
    },
    {
      title: 'Quality Engineering & Test Automation',
      text: '10+ years of QA — API, regression, and release validation with Katalon, Postman, and more.',
    },
    {
      title: 'Trading Systems & Quantitative Research',
      text: 'TradingView, Pine Script, and MT4/MT5 tooling with replay-driven validation.',
    },
  ],
};

export const homeAbout = {
  name: 'John Michael Jimeno',
  title: 'Founder, Jimeno Labs',
  roles: 'AI Systems Developer • Automation Engineer • Quality Engineering Specialist',
  paragraphs: [
    'I bring 10+ years of QA and software testing experience into everything I build. That background shapes how I approach development: validate early, design for edge cases, and ship systems that hold up in production.',
    'Jimeno Labs combines that quality-first mindset with AI systems development, automation, and integration — delivering software that solves practical problems for clients and teams.',
  ],
  facts: [
    { value: '10+', label: 'Years in QA & testing' },
    { value: '4', label: 'Featured projects' },
  ],
};

export const homeContact = {
  eyebrow: 'Contact',
  title: "Let's build something reliable.",
  text: 'Available for freelance projects and consulting engagements. Tell me what you are working on.',
  cta: { label: 'Start a conversation', href: '/contact/' },
  secondary: { label: 'GitHub profile', href: 'https://github.com/jheyehm12' },
};

export const homeFooterDirectory: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Services', href: '/services/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'GitHub profile', href: 'https://github.com/jheyehm12' },
];

export const homeFooterMeta = {
  title: 'Jimeno Labs',
  description:
    'AI systems & engineering studio — AI systems, automation, integration, and quality engineering by John Michael Jimeno.',
};

export const homeFooterPolicies = ['AI Systems', 'Automation', 'Quality Engineering'];
