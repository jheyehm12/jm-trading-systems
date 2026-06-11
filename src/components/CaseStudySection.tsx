import { MotionConfig, motion } from 'framer-motion';
import { ArrowRight, LineChart } from 'lucide-react';

import type { ProjectEntry } from '../data/projects';
import ProjectChartGallery from './ProjectChartGallery';
import ProjectScreenshot from './ProjectScreenshot';
import { fadeUpTransition, inViewViewport, jmEase } from './motion';

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
      className="border-t border-white/8 py-14 first:border-t-0 sm:py-20"
    >
      <div
        className={[
          'grid items-center gap-10 lg:grid-cols-2 lg:gap-16',
          reverse ? 'lg:[&>*:first-child]:order-2' : '',
        ].join(' ')}
      >
        <div className="max-w-xl">
          <p className="font-display text-[11px] uppercase tracking-[0.24em] text-accent-blue">
            {project.category}
          </p>
          <h3 className="mt-4 font-display text-[2rem] font-bold leading-[1.02] tracking-[-0.03em] text-white sm:text-[2.6rem]">
            {project.title}
          </h3>
          {project.subtitle ? (
            <p className="mt-2 text-sm font-medium text-accent-blue/90">
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
              <span className="text-white/75">Outcome: </span>
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
          <a
            href={project.detailTo}
            className="mt-8 inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.22em] text-white/70 transition-colors duration-300 hover:text-accent-blue"
          >
            View project details <ArrowRight size={14} />
          </a>
        </div>
        {project.images?.length ? (
          <ProjectChartGallery images={project.images} />
        ) : (
          <ProjectScreenshot
            type={project.previewType}
            imageSrc={project.imageSrc}
            large
          />
        )}
      </div>
    </motion.article>
  );
}

export default function CaseStudySection({ projects }: CaseStudySectionProps) {
  return (
    <MotionConfig reducedMotion="user">
      <section id="case-studies" className="bg-section-dark py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
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
            <h2 className="mt-5 max-w-3xl font-display text-[2.4rem] font-bold leading-[1.02] text-white sm:text-[3rem]">
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
