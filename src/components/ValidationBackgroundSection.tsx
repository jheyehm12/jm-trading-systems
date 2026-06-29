import { MotionConfig, motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

import type { ProjectEntry } from '../data/projects';
import type { validationBackground } from '../data/site';
import ProjectActionButtons from './ProjectActionButtons';
import { fadeUpTransition, inViewViewport } from './motion';

type ValidationContent = typeof validationBackground;

interface ValidationBackgroundSectionProps {
  content: ValidationContent;
  qaProjects?: ProjectEntry[];
}

export default function ValidationBackgroundSection({
  content,
  qaProjects = [],
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

          {qaProjects.length ? (
            <div className="mt-14 space-y-8 border-t border-theme pt-12">
              <h3 className="font-display text-[11px] uppercase tracking-[0.24em] text-accent-blue">
                QA & Validation Experience
              </h3>
              {qaProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={inViewViewport}
                  transition={{ ...fadeUpTransition, delay: index * 0.06 }}
                  className="border-t border-theme pt-8 first:border-t-0 first:pt-0"
                >
                  <p className="font-display text-[11px] uppercase tracking-[0.22em] text-body-soft">
                    {project.category}
                  </p>
                  <h4 className="mt-3 font-display text-xl font-semibold text-heading sm:text-2xl">
                    {project.title}
                  </h4>
                  <p className="mt-3 max-w-3xl text-[1.02rem] leading-8 text-body-muted">
                    {project.summary}
                  </p>
                  {project.outcome ? (
                    <p className="mt-3 text-sm leading-7 text-body-soft">
                      <span className="text-body-strong">Outcome: </span>
                      {project.outcome}
                    </p>
                  ) : null}
                  {project.tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="chip rounded px-2.5 py-1 font-display text-[10px] uppercase tracking-[0.12em]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded border border-theme bg-panel-tint px-2.5 py-1 font-display text-[10px] uppercase tracking-[0.12em] text-body-soft"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <ProjectActionButtons
                    demoUrl={project.demoUrl}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                    className="mt-4 flex flex-wrap gap-3"
                  />
                  <a
                    href={project.detailTo}
                    className="mt-3 inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.22em] text-body-muted transition-colors hover:text-accent-blue"
                  >
                    View details <ArrowRight size={14} />
                  </a>
                </motion.article>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </MotionConfig>
  );
}
