import { MotionConfig, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import type { FooterMeta, NavLink } from '../data/site';
import BrandMark from './BrandMark';
import { jmEase } from './motion';

interface JMFooterProps {
  directory: NavLink[];
  meta: FooterMeta;
  policies: string[];
}

export default function JMFooter({ directory, meta, policies }: JMFooterProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <MotionConfig reducedMotion="user">
      <motion.footer
        id="site-footer"
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.85, ease: jmEase }}
        className="bg-footer-bg py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,0.95fr)]">
            <div className="max-w-2xl">
              <BrandMark className="text-lg" />
              <p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-body-muted">
                {meta.description}
              </p>
            </div>

            <div>
              <h3 className="font-display text-[11px] uppercase tracking-[0.24em] text-body-muted">
                Explore
              </h3>
              <ul className="mt-6 grid grid-cols-1 gap-y-4 sm:grid-cols-2">
                {directory.map((item) => (
                  <li key={item.label}>
                    <a
                      className="text-[1.02rem] text-body-muted transition-colors duration-300 hover:text-accent-blue"
                      href={item.href}
                      {...(item.href.startsWith('http')
                        ? { target: '_blank', rel: 'noreferrer' }
                        : {})}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-theme pt-6 text-[0.8rem] uppercase tracking-[0.08em] text-body-soft sm:mt-12 sm:gap-6 sm:pt-8 sm:text-[0.9rem] md:flex-row md:items-center md:justify-between lg:mt-16">
            <p>
              © {new Date().getFullYear()} {meta.title}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              {policies.map((policy) => (
                <span key={policy}>{policy}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </MotionConfig>
  );
}
