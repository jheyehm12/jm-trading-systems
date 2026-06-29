import { MotionConfig, motion } from 'framer-motion';
import { ArrowRight, LineChart } from 'lucide-react';

import type { ProjectEntry } from '../data/projects';
import ProjectChartGallery from './ProjectChartGallery';
import ProjectActionButtons from './ProjectActionButtons';
import ProjectScreenshot from './ProjectScreenshot';
import { fadeUpTransition, inViewViewport } from './motion';

function ProjectTags({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null;

  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="chip rounded px-2.5 py-1 font-display text-[10px] uppercase tracking-[0.14em]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectTools({ tools }: { tools: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tools.map((tool) => (
        <span
          key={tool}
          className="rounded border border-theme bg-panel-tint px-2.5 py-1 font-display text-[10px] uppercase tracking-[0.14em] text-body-soft"
        >
          {tool}
        </span>
      ))}
    </div>
  );
}

interface CaseStudySectionProps {
  projects: ProjectEntry[];
}

function CaseStudyBlock({
  project,
  index,
}: {
  project: ProjectEntry;
  index: number;
}) {
  const reverse = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inViewViewport}
      transition={{ ...fadeUpTransition, delay: index * 0.08 }}
      className="border-t border-theme py-10 first:border-t-0 sm:py-14 lg:py-20"
    >
      <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div
          className={[
            'order-1 min-w-0 max-w-xl',
            reverse ? 'lg:order-2' : 'lg:order-1',
          ].join(' ')}
        >
          <p className="font-display text-[11px] uppercase tracking-[0.24em] text-accent-blue">
            {project.category}
          </p>
          <h3 className="mt-4 font-display text-[1.65rem] font-bold leading-[1.05] tracking-[-0.03em] text-heading sm:text-[2rem] lg:text-[2.6rem]">
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
          {project.detail ? (
            <p className="mt-4 text-[1.02rem] leading-8 text-body-soft">
              {project.detail}
            </p>
          ) : null}
          {project.outcome ? (
            <p className="mt-4 text-sm leading-7 text-body-soft">
              <span className="text-body-strong">Outcome: </span>
              {project.outcome}
            </p>
          ) : null}
          <ul className="mt-6 space-y-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="text-sm leading-7 text-body-soft before:mr-2 before:text-accent-blue/60 before:content-['–']"
              >
                {feature}
              </li>
            ))}
          </ul>
          <ProjectTags tags={project.tags} />
          <ProjectTools tools={project.tools} />
          <ProjectActionButtons
            demoUrl={project.demoUrl}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            className="mt-8 flex flex-wrap gap-3"
          />
          <a
            href={project.detailTo}
            className="mt-4 inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.22em] text-body-muted transition-colors duration-300 hover:text-accent-blue"
          >
            View project details <ArrowRight size={14} />
          </a>
        </div>
        <div
          className={[
            'order-2 w-full min-w-0',
            reverse ? 'lg:order-1' : 'lg:order-2',
          ].join(' ')}
        >
          {project.images?.length ? (
            <ProjectChartGallery images={project.images} className="w-full" />
          ) : (
            <ProjectScreenshot
              type={project.previewType}
              imageSrc={project.imageSrc}
              large
              className="w-full"
            />
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function CaseStudySection({ projects }: CaseStudySectionProps) {
  return (
    <MotionConfig reducedMotion="user">
      <section id="case-studies" className="bg-section-dark py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewViewport}
            transition={fadeUpTransition}
          >
            <div className="flex items-center gap-3 font-display text-[11px] uppercase tracking-[0.24em] text-accent-blue">
              <LineChart size={16} strokeWidth={1.6} />
              <span>Case Studies</span>
            </div>
            <h2 className="mt-4 max-w-3xl font-display text-[1.85rem] font-bold leading-[1.05] text-heading sm:mt-5 sm:text-[2.4rem] lg:text-[3rem]">
              Trading systems built for real execution workflows.
            </h2>
            <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-body-muted">
              Flagship trading projects with problem context, implementation
              approach, and measurable outcomes.
            </p>
          </motion.div>

          <div className="mt-10">
            {projects.map((project, index) => (
              <CaseStudyBlock key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
