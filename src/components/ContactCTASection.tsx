import { MotionConfig, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { workWithMeMessage } from '../data/site';
import { fadeUpTransition, inViewViewport } from './motion';

interface ContactCTASectionProps {
  items: string[];
}

export default function ContactCTASection({ items }: ContactCTASectionProps) {
  return (
    <MotionConfig reducedMotion="user">
      <section id="work-with-me" className="bg-page-bg py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewViewport}
            transition={fadeUpTransition}
            className="max-w-2xl"
          >
            <p className="font-display text-[11px] uppercase tracking-[0.24em] text-accent-blue">
              Work With Me
            </p>
            <h2 className="mt-5 font-display text-[2.2rem] font-bold text-white sm:text-[2.8rem]">
              Open to selected development work.
            </h2>
            <p className="mt-4 text-[1.02rem] leading-8 text-body-muted">
              {workWithMeMessage}
            </p>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="rounded border border-white/10 px-3 py-1.5 font-display text-[10px] uppercase tracking-[0.14em] text-body-soft"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact/"
              className="inline-flex min-h-11 items-center justify-center gap-2 bg-accent-blue px-7 font-display text-[10px] uppercase tracking-[0.2em] text-page-bg transition-colors hover:bg-white"
            >
              Let&apos;s Talk <ArrowRight size={14} />
            </a>
            <a
              href="#case-studies"
              className="inline-flex min-h-11 items-center justify-center gap-2 border border-white/18 px-7 font-display text-[10px] uppercase tracking-[0.2em] text-white transition-colors hover:border-accent-blue hover:text-accent-blue"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
