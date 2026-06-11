import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import type { HeroContent, NavLink } from '../data/site';
import BrandMark from './BrandMark';
import ProjectScreenshot from './ProjectScreenshot';
import ThemeToggle from './ThemeToggle';
import { jmEase } from './motion';

interface JMHeroShellProps {
  content: HeroContent;
  leftNav: NavLink[];
  mobileNav: NavLink[];
  rightNav: NavLink[];
}

const candleHeights = [42, 58, 35, 68, 48, 72, 55, 80, 62, 88, 70, 76, 64, 92, 78, 66, 84, 58];

function TradingChartWedge() {
  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden bg-dark-space"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 10%, 50% 28%, 0 10%)',
      }}
    >
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.14),transparent_42%)]" />

      <div className="absolute inset-x-[8%] top-[12%] flex h-[38%] items-end gap-1 opacity-80">
        {candleHeights.map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-sm"
            style={{
              height: `${height}%`,
              backgroundColor: index % 4 === 0 ? '#ef5350' : '#26a69a',
            }}
          />
        ))}
      </div>

      <svg
        className="absolute inset-x-[8%] top-[14%] h-[34%] w-[84%] opacity-90"
        fill="none"
        viewBox="0 0 400 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0 90 L40 72 L80 78 L120 50 L160 58 L200 32 L240 40 L280 24 L320 30 L360 18 L400 12"
          stroke="#22d3ee"
          strokeWidth="2"
        />
      </svg>

      {[18, 32, 46].map((top) => (
        <div
          key={top}
          className="absolute left-[12%] right-[12%] border-t border-white/6"
          style={{ top: `${top}%` }}
        />
      ))}
    </div>
  );
}

export default function JMHeroShell({
  content,
  leftNav,
  mobileNav,
  rightNav,
}: JMHeroShellProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative min-h-[100svh] overflow-hidden bg-page-bg">
        <TradingChartWedge />

        <div className="absolute inset-0 z-10">
          <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
            <a
              href="/"
              className="inline-flex items-center transition-opacity duration-300 hover:opacity-80"
            >
              <BrandMark />
            </a>
            <div className="ml-auto flex items-center gap-2 sm:gap-3">
              <span className="hero-utility-label hidden font-display text-[10px] uppercase tracking-[0.22em] lg:block">
                {content.utilityLabel}
              </span>
              <ThemeToggle variant="hero" />
              <button
                type="button"
                className="rounded-full border border-white/12 bg-panel-tint p-2 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 lg:hidden"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setIsMenuOpen((open) => !open)}
              >
                {isMenuOpen ? (
                  <X size={18} strokeWidth={1.5} />
                ) : (
                  <Menu size={18} strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen ? (
              <motion.nav
                id="mobile-navigation"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: jmEase }}
                className="absolute inset-x-5 top-18 z-30 rounded-2xl border border-white/10 bg-deep-space-card/95 px-5 py-4 shadow-[0_22px_52px_rgba(0,0,0,0.45)] backdrop-blur-md lg:hidden"
              >
                <ul className="flex flex-col gap-3">
                  {mobileNav.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="block font-display text-[11px] uppercase tracking-[0.22em] text-white/80 transition-colors duration-300 hover:text-accent-blue"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            ) : null}
          </AnimatePresence>

          <div
            className="absolute z-30 hidden lg:block"
            style={{
              left: '24%',
              top: '20%',
              transform: 'translate(-50%, -50%) rotate(8deg)',
            }}
          >
            <motion.nav
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: jmEase }}
            >
              <ul className="flex items-center gap-7 font-display text-[11px] uppercase tracking-[0.22em] text-white/55">
                {leftNav.map((item, index) => (
                  <li key={item.label} className="flex items-center gap-7">
                    <a
                      className="transition-colors duration-300 hover:text-accent-blue"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                    {index < leftNav.length - 1 ? (
                      <span className="text-white/20">|</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </motion.nav>
          </div>

          <div
            className="absolute z-30 hidden lg:block"
            style={{
              left: '76%',
              top: '20%',
              transform: 'translate(-50%, -50%) rotate(-8deg)',
            }}
          >
            <motion.nav
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: jmEase }}
            >
              <ul className="flex items-center gap-7 font-display text-[11px] uppercase tracking-[0.22em] text-white/55">
                {rightNav.map((item, index) => (
                  <li key={item.label} className="flex items-center gap-7">
                    <a
                      className="transition-colors duration-300 hover:text-accent-blue"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                    {index < rightNav.length - 1 ? (
                      <span className="text-white/20">|</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </motion.nav>
          </div>

          <div className="absolute left-1/2 top-[22%] z-20 -translate-x-1/2 -translate-y-1/2 sm:top-[23%] lg:top-[24%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.85, ease: jmEase }}
              className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-accent-blue/25 bg-page-bg shadow-[0_16px_48px_rgba(0,0,0,0.45)] sm:h-[88px] sm:w-[88px]"
            >
              <BrandMark variant="symbol" className="!text-accent-blue" />
            </motion.div>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-10 pt-[10rem] sm:px-8 sm:pb-14 sm:pt-[12rem] lg:px-12 lg:pb-20 lg:pt-[14rem]">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-end lg:gap-14">
              <div className="max-w-xl">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.9, ease: jmEase }}
                >
                  <h1 className="space-y-1 font-display text-[1.55rem] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[2rem] lg:text-[2.35rem]">
                    {content.headlineLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h1>
                  <p className="mt-5 text-[1rem] leading-8 text-body-muted sm:text-[1.05rem]">
                    {content.intro}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-body-soft">
                    {content.subheadline}
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={content.primaryCta.href}
                      className="inline-flex min-h-11 items-center justify-center bg-accent-blue px-7 font-display text-[10px] uppercase tracking-[0.2em] text-page-bg transition-colors duration-300 hover:bg-white"
                    >
                      {content.primaryCta.label}
                    </a>
                    <a
                      href={content.secondaryCta.href}
                      className="inline-flex min-h-11 items-center justify-center border border-white/18 px-7 font-display text-[10px] uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-accent-blue hover:text-accent-blue"
                    >
                      {content.secondaryCta.label}
                    </a>
                  </div>
                  <p className="mt-8 text-sm text-body-soft">
                    {content.credibilityLine.join(' • ')}
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.95, ease: jmEase }}
              >
                <p className="mb-3 font-display text-[10px] uppercase tracking-[0.22em] text-accent-blue">
                  Live project preview
                </p>
                <ProjectScreenshot type="saas-dashboard" large />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
