import { homeSelectedWork } from './projects';
import type { NavLink } from './site';

/** Homepage copy for the Jimeno Labs studio redesign. */

export const homeNav: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const homeHero = {
  eyebrow: 'Software Engineering Studio',
  headlineLines: ['Software', 'engineering for', 'real-world systems.'],
  intro:
    'Full-stack software, AI solutions, and automation built with a focus on reliability, quality, and practical impact.',
  primaryCta: { label: 'View Selected Work', href: '#work' },
  secondaryCta: { label: "Let's Talk", href: '/contact/' },
};

export const homeWork = {
  eyebrow: 'Selected Work',
  title: 'A curated selection of software and AI projects.',
  intro:
    'Real applications and practical systems — built end to end, from authentication and data to AI workflows and polished interfaces.',
};

const byId = (id: string) => {
  const project = homeSelectedWork.find((p) => p.id === id);
  if (!project) throw new Error(`Missing project: ${id}`);
  return project;
};

/** One featured + two supporting projects, sourced from the existing catalog. */
// Real public landing-page capture (homepage only; other pages keep their own previews).
export const featuredProject = { ...byId('workforce'), imageSrc: '/images/projects/workforce/landing.webp' };
export const supportingProjects = [byId('client-intake'), byId('tradevault')];

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
      title: 'AI Applications & Agent Systems',
      text: 'OpenAI-powered assistants and role-based agents wired into real business workflows.',
    },
    {
      title: 'Business Process Automation',
      text: 'Intake, routing, and follow-up flows that remove repetitive manual work.',
    },
    {
      title: 'Quality Engineering & Test Automation',
      text: '9+ years of QA — API, regression, and release validation with Katalon, Postman, and more.',
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
  roles: 'Software Engineer • QA Engineer • Automation & AI Developer',
  paragraphs: [
    'I bring 9+ years of QA and software testing experience into everything I build. That background shapes how I approach development: validate early, design for edge cases, and ship systems that hold up in production.',
    'Jimeno Labs combines that quality-first mindset with full-stack development, AI integration, and automation — delivering software that solves practical problems for clients and teams.',
  ],
  facts: [
    { value: '9+', label: 'Years in QA & testing' },
    { value: '6', label: 'Flagship projects' },
  ],
};

export const homeContact = {
  eyebrow: 'Contact',
  title: "Let's build something reliable.",
  text: 'Available for freelance projects and consulting engagements. Tell me what you are working on.',
  cta: { label: 'Start a conversation', href: '/contact/' },
  secondary: { label: 'GitHub', href: 'https://github.com/jheyehm12' },
};

export const homeFooterDirectory: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Services', href: '/services/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'GitHub', href: 'https://github.com/jheyehm12' },
];

export const homeFooterMeta = {
  title: 'Jimeno Labs',
  description:
    'Software engineering studio — full-stack development, AI solutions, and automation by John Michael Jimeno.',
};

export const homeFooterPolicies = ['Full-Stack', 'AI & Automation', 'Quality Engineering'];
