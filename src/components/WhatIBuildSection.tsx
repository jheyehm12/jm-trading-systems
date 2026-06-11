import { MotionConfig, motion } from 'framer-motion';

import { fadeUpTransition, inViewViewport } from './motion';

interface BuildGroup {
  title: string;
  items: string[];
}

interface WhatIBuildSectionProps {
  groups: BuildGroup[];
}

export default function WhatIBuildSection({ groups }: WhatIBuildSectionProps) {
  return (
    <MotionConfig reducedMotion="user">
      <section id="build" className="bg-section-dark py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewViewport}
            transition={fadeUpTransition}
            className="max-w-2xl"
          >
            <p className="font-display text-[11px] uppercase tracking-[0.24em] text-accent-blue">
              What I Build
            </p>
            <h2 className="mt-4 font-display text-[1.75rem] font-bold text-heading sm:mt-5 sm:text-[2.2rem] lg:text-[2.8rem]">
              Three areas of client work.
            </h2>
          </motion.div>

          <div className="mt-8 grid gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
            {groups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inViewViewport}
                transition={{ ...fadeUpTransition, delay: index * 0.08 }}
                className="border-t border-theme pt-6"
              >
                <h3 className="font-display text-lg font-semibold text-heading">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm leading-7 text-body-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
