import { PageShell } from '../components/PageShell'
import {
  FeaturedProjectCard,
  OtherWorkCard,
} from '../components/ProjectCards'
import { SectionHeading } from '../components/SectionHeading'
import {
  additionalProjects,
  featuredProjects,
  githubUrl,
} from '../data/portfolioData'

export function TradingProjectsPage() {
  return (
    <>
      <section className="relative border-b border-white/6 py-20">
        <PageShell>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Trading systems, automation layers, and validation workflows presented as portfolio-ready development work."
            copy="The featured work stays focused on trading infrastructure, strategy development, automation, and reliability under realistic review conditions."
            actionHref={githubUrl}
            actionLabel="View GitHub"
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard
                key={project.title}
                index={index}
                project={project}
              />
            ))}
          </div>
        </PageShell>
      </section>

      <section className="relative border-b border-white/6 py-20">
        <PageShell className="!pt-0">
          <SectionHeading
            eyebrow="Additional Projects"
            title="Other Development Work"
            copy="Additional system and tooling work that supports trading automation, research workflows, and development efficiency."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {additionalProjects.map((item, index) => (
              <OtherWorkCard key={item.title} index={index} item={item} />
            ))}
          </div>
        </PageShell>
      </section>
    </>
  )
}
