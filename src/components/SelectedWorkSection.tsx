import { MotionConfig, motion } from 'framer-motion';
import { ArrowRight, Layers3 } from 'lucide-react';

import type { ProjectEntry } from '../data/projects';
import ProjectScreenshot from './ProjectScreenshot';
import { fadeUpTransition, inViewViewport } from './motion';

interface SelectedWorkSectionProps {
  projects: ProjectEntry[];
}

export default function SelectedWorkSection({
  projects,
}: SelectedWorkSectionProps) {
  return (
    <MotionConfig reducedMotion="user">
      <section id="selected-work" className="bg-page-bg py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewViewport}
            transition={fadeUpTransition}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 font-display text-[11px] uppercase tracking-[0.24em] text-accent-blue">
              <Layers3 size={16} strokeWidth={1.6} />
              <span>Selected Work</span>
            </div>
            <h2 className="mt-5 font-display text-[2.4rem] font-bold leading-[1.02] text-white sm:text-[3rem]">
              AI automation and SaaS delivery.
            </h2>
          </motion.div>

          <div className="mt-14 space-y-20">
            {projects.map((project, index) => {
              const reverse = index % 2 === 1;

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 48 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={inViewViewport}
                  transition={{ ...fadeUpTransition, delay: 0.05 }}
                  className={[
                    'grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14',
                    reverse ? 'lg:[&>*:first-child]:order-2' : '',
                  ].join(' ')}
                >
                  <ProjectScreenshot
                    type={project.previewType}
                    imageSrc={project.imageSrc}
                    large
                  />
                  <div>
                    <p className="font-display text-[11px] uppercase tracking-[0.24em] text-accent-blue">
                      {project.category}
                    </p>
                    <h3 className="mt-4 font-display text-[2rem] font-bold leading-[1.02] text-white sm:text-[2.35rem]">
                      {project.title}
                    </h3>
                    <p className="mt-5 text-[1.02rem] leading-8 text-body-muted">
                      {project.summary}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded border border-white/10 px-2.5 py-1 font-display text-[10px] uppercase tracking-[0.14em] text-body-soft"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={project.detailTo}
                        className="inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-accent-blue"
                      >
                        Details <ArrowRight size={14} />
                      </a>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.22em] text-accent-blue/80 transition-colors hover:text-accent-blue"
                        >
                          Live app <ArrowRight size={14} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
