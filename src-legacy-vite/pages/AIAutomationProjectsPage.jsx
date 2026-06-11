import { PageShell } from '../components/PageShell'
import { AutomationProjectCard } from '../components/ProjectCards'
import { SectionHeading } from '../components/SectionHeading'
import { aiAutomationProjects } from '../data/portfolioData'

export function AIAutomationProjectsPage() {
  return (
    <section className="relative border-b border-white/6 py-20">
      <PageShell>
        <SectionHeading
          eyebrow="AI & Automation Projects"
          title="AI-assisted workflow systems that support business operations without pulling focus away from trading development."
          copy="This secondary project layer shows business automation, document processing, and OpenAI-connected workflow design using the same structured build mindset applied across trading systems."
        />

        <div className="mt-12 space-y-10">
          {aiAutomationProjects.map((project, index) => (
            <AutomationProjectCard
              key={project.title}
              index={index}
              project={project}
            />
          ))}
        </div>
      </PageShell>
    </section>
  )
}
