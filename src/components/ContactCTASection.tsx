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
      <section id="work-with-me" className="bg-page-bg py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
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
            <h2 className="mt-4 font-display text-[1.75rem] font-bold text-heading sm:mt-5 sm:text-[2.2rem] lg:text-[2.8rem]">
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
                className="chip rounded px-3 py-1.5 font-display text-[10px] uppercase tracking-[0.14em]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/contact/" className="btn-primary gap-2">
              Let&apos;s Talk <ArrowRight size={14} />
            </a>
            <a href="#case-studies" className="btn-secondary">
              View Projects
            </a>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
