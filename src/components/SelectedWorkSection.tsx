import { MotionConfig, motion } from 'framer-motion';
import { ArrowRight, Layers3 } from 'lucide-react';

import type { ProjectEntry } from '../data/projects';
import ProjectActionButtons from './ProjectActionButtons';
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
      <section id="selected-work" className="bg-page-bg py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
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
            <h2 className="mt-4 font-display text-[1.85rem] font-bold leading-[1.05] text-heading sm:mt-5 sm:text-[2.4rem] lg:text-[3rem]">
              AI automation, trading SaaS, and workflow delivery.
            </h2>
          </motion.div>

          <div className="mt-10 space-y-12 sm:mt-14 sm:space-y-16 lg:space-y-20">
            {projects.map((project, index) => {
              const reverse = index % 2 === 1;

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 48 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={inViewViewport}
                  transition={{ ...fadeUpTransition, delay: 0.05 }}
                  className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:gap-14"
                >
                  <div
                    className={[
                      'order-1 min-w-0',
                      reverse ? 'lg:order-2' : 'lg:order-1',
                    ].join(' ')}
                  >
                    <p className="font-display text-[11px] uppercase tracking-[0.24em] text-accent-blue">
                      {project.category}
                    </p>
                    <h3 className="mt-4 font-display text-[1.65rem] font-bold leading-[1.05] text-heading sm:text-[2rem] lg:text-[2.35rem]">
                      {project.title}
                    </h3>
                    {project.subtitle ? (
                      <p className="mt-2 text-sm font-medium text-accent-blue">
                        {project.subtitle}
                      </p>
                    ) : null}
                    <p className="mt-5 text-[1.02rem] leading-8 text-body-muted">
                      {project.summary}
                    </p>
                    {project.outcome ? (
                      <p className="mt-4 text-sm leading-7 text-body-soft">
                        <span className="text-body-strong">Outcome: </span>
                        {project.outcome}
                      </p>
                    ) : null}
                    {project.tags?.length ? (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="chip rounded px-2.5 py-1 font-display text-[10px] uppercase tracking-[0.14em]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded border border-theme bg-panel-tint px-2.5 py-1 font-display text-[10px] uppercase tracking-[0.12em] text-body-soft"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={project.detailTo}
                        className="inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.22em] text-body-muted transition-colors hover:text-accent-blue"
                      >
                        Details <ArrowRight size={14} />
                      </a>
                    </div>
                    <ProjectActionButtons
                      demoUrl={project.demoUrl}
                      liveUrl={project.liveUrl}
                      githubUrl={project.githubUrl}
                      className="mt-3 flex flex-wrap gap-3"
                    />
                  </div>
                  <ProjectScreenshot
                    type={project.previewType}
                    imageSrc={project.imageSrc}
                    large
                    className={[
                      'order-2 w-full min-w-0',
                      reverse ? 'lg:order-1' : 'lg:order-2',
                    ].join(' ')}
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
