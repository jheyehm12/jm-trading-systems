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
      className="absolute inset-0 overflow-hidden bg-dark-space"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 10%, 50% 28%, 0 10%)',
      }}
    >
      <div className="hero-chart-grid absolute inset-0 opacity-100" />
      <div className="hero-chart-glow absolute inset-0" />

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
          className="hero-chart-stroke"
          strokeWidth="2"
        />
      </svg>

      {[18, 32, 46].map((top) => (
        <div
          key={top}
          className="hero-chart-line absolute left-[12%] right-[12%] border-t"
          style={{ top: `${top}%` }}
        />
      ))}
    </div>
  );
}

function AngledNav({
  items,
  rotate,
  side,
}: {
  items: NavLink[];
  rotate: number;
  side: 'left' | 'right';
}) {
  return (
    <div
      className="absolute z-30 hidden xl:block"
      style={{
        left: side === 'left' ? '24%' : '76%',
        top: '50%',
        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
      }}
    >
      <motion.nav
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: jmEase }}
      >
        <ul className="flex items-center gap-7 font-display text-[11px] uppercase tracking-[0.22em] text-nav">
          {items.map((item, index) => (
            <li key={item.label} className="flex items-center gap-7">
              <a
                className="transition-colors duration-300 hover:text-accent-blue"
                href={item.href}
              >
                {item.label}
              </a>
              {index < items.length - 1 ? (
                <span className="text-body-soft opacity-50">|</span>
              ) : null}
            </li>
          ))}
        </ul>
      </motion.nav>
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
      <section className="relative overflow-x-clip bg-page-bg xl:min-h-[92svh]">
        <header className="relative z-40 flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <a
            href="/"
            className="inline-flex min-w-0 items-center transition-opacity duration-300 hover:opacity-80"
          >
            <BrandMark />
          </a>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
            <span className="hero-utility-label hidden font-display text-[10px] uppercase tracking-[0.22em] xl:block">
              {content.utilityLabel}
            </span>
            <ThemeToggle />
            <button
              type="button"
              className="theme-toggle xl:hidden"
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
        </header>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.nav
              id="mobile-navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: jmEase }}
              className="mobile-menu relative z-40 mx-4 mb-2 rounded-2xl px-5 py-4 xl:hidden"
            >
              <ul className="flex flex-col gap-3">
                {mobileNav.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block font-display text-[11px] uppercase tracking-[0.22em] text-body-muted transition-colors duration-300 hover:text-accent-blue"
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

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-[26vw] min-h-[100px] max-h-[150px] sm:max-h-[180px] md:max-h-[220px] lg:max-h-[260px] xl:h-[30vh] xl:max-h-[320px] xl:min-h-[200px]">
            <TradingChartWedge />
            <AngledNav items={leftNav} rotate={8} side="left" />
            <AngledNav items={rightNav} rotate={-8} side="right" />

            <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35, duration: 0.85, ease: jmEase }}
                className="relative flex h-14 w-14 items-center justify-center rounded-full border border-theme-md bg-page-bg shadow-surface sm:h-16 sm:w-16 xl:h-[88px] xl:w-[88px]"
                style={{ borderColor: 'var(--symbol-ring)' }}
              >
                <BrandMark variant="symbol" className="!text-accent-blue" />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="relative z-20 px-4 pb-10 pt-4 sm:px-6 sm:pb-12 sm:pt-5 md:px-8 md:pb-14 lg:px-12 lg:pb-16 lg:pt-6 xl:pb-20 xl:pt-8">
          <div className="mx-auto grid max-w-7xl gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-end lg:gap-10 xl:gap-14">
            <div className="order-1 min-w-0 max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.9, ease: jmEase }}
              >
                <h1 className="space-y-1 font-display text-[1.45rem] font-bold leading-[1.1] tracking-[-0.03em] text-heading sm:text-[1.85rem] md:text-[2rem] xl:text-[2.35rem]">
                  {content.headlineLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="mt-4 text-[0.95rem] leading-7 text-body-muted sm:mt-5 sm:text-[1rem] sm:leading-8 md:text-[1.05rem]">
                  {content.intro}
                </p>
                <p className="mt-2 text-sm leading-7 text-body-soft sm:mt-3">
                  {content.subheadline}
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:mt-7 sm:flex-row">
                  <a href={content.primaryCta.href} className="btn-primary">
                    {content.primaryCta.label}
                  </a>
                  <a href={content.secondaryCta.href} className="btn-secondary">
                    {content.secondaryCta.label}
                  </a>
                </div>
                <p className="mt-5 text-xs leading-6 text-body-soft sm:mt-8 sm:text-sm">
                  {content.credibilityLine.join(' • ')}
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.95, ease: jmEase }}
              className="order-2 w-full min-w-0"
            >
              <p className="mb-3 font-display text-[10px] uppercase tracking-[0.22em] text-accent-blue">
                Live project preview
              </p>
              <ProjectScreenshot type="saas-dashboard" large className="w-full" />
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
