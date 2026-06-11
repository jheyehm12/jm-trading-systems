import { MotionConfig, motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

import { validationBackground } from '../data/site';
import { fadeUpTransition, inViewViewport } from './motion';

type ValidationContent = typeof validationBackground;

interface ValidationBackgroundSectionProps {
  content: ValidationContent;
}

export default function ValidationBackgroundSection({
  content,
}: ValidationBackgroundSectionProps) {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="validation-background"
        className="border-t border-theme bg-page-bg py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewViewport}
            transition={fadeUpTransition}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 font-display text-[11px] uppercase tracking-[0.24em] text-accent-blue">
              <ShieldCheck size={16} strokeWidth={1.6} />
              <span>{content.eyebrow}</span>
            </div>
            <h2 className="mt-5 font-display text-[1.85rem] font-bold leading-[1.08] text-heading sm:text-[2.25rem]">
              {content.title}
            </h2>
            <p className="mt-4 text-[1.02rem] leading-8 text-body-muted">
              {content.intro}
            </p>
            <p className="mt-3 text-[1.02rem] leading-8 text-body-soft">
              {content.copy}
            </p>
          </motion.div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.ul
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewViewport}
              transition={{ ...fadeUpTransition, delay: 0.06 }}
              className="grid gap-2 sm:grid-cols-2"
            >
              {content.focusAreas.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm leading-7 text-body-muted"
                >
                  <span className="text-accent-blue/50">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewViewport}
              transition={{ ...fadeUpTransition, delay: 0.1 }}
            >
              <p className="font-display text-[11px] uppercase tracking-[0.22em] text-body-soft">
                Tools & Experience
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {content.tools.map((tool) => (
                  <span
                    key={tool}
                    className="chip rounded px-2.5 py-1 font-display text-[10px] uppercase tracking-[0.12em]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-body-soft">
                QA experience supports delivery reliability — it is not offered
                as a standalone freelance service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
