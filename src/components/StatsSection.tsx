import { MotionConfig, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import type { StatBlockProps } from '../data/site';
import { jmEase } from './motion';

interface StatsSectionProps {
  stats: StatBlockProps[];
}

function parseStatValue(value: string) {
  const normalizedValue = value.replace(/,/g, '');
  const match = normalizedValue.match(/^(\d+(?:\.\d+)?)(.*)$/);

  if (!match) {
    return { decimals: 0, suffix: '', target: 0, useGrouping: false };
  }

  return {
    decimals: match[1].includes('.') ? match[1].split('.')[1].length : 0,
    suffix: match[2],
    target: Number(match[1]),
    useGrouping: value.includes(','),
  };
}

function formatStatValue(value: number, originalValue: string) {
  const { decimals, suffix, useGrouping } = parseStatValue(originalValue);
  const numericValue =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toLocaleString('en-US', { useGrouping });

  return `${numericValue}${suffix}`;
}

function StatBlock({ index, label, value }: StatBlockProps & { index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState(() =>
    formatStatValue(0, value),
  );

  useEffect(() => {
    if (!isInView) return;

    const { target } = parseStatValue(value);
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    let frameId = 0;
    const duration = 1250;
    const start = performance.now();

    const animateValue = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(formatStatValue(target * easedProgress, value));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animateValue);
      } else {
        setDisplayValue(value);
      }
    };

    frameId = window.requestAnimationFrame(animateValue);
    return () => window.cancelAnimationFrame(frameId);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.78, delay: index * 0.12, ease: jmEase }}
      className={index > 0 ? 'lg:border-l lg:border-theme-faint lg:pl-10' : ''}
    >
      <div className="font-display text-[2.25rem] font-bold leading-none text-heading sm:text-[3rem] lg:text-[3.6rem]">
        {displayValue}
      </div>
      <div className="mt-4 font-display text-[11px] uppercase tracking-[0.24em] text-accent-blue">
        {label}
      </div>
    </motion.div>
  );
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <MotionConfig reducedMotion="user">
      <section className="bg-page-bg py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid gap-y-8 gap-x-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
            {stats.map((stat, index) => (
              <StatBlock key={stat.label} index={index} {...stat} />
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
