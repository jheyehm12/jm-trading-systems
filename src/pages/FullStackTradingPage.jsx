import { PageShell } from '../components/PageShell'
import { ShowcaseProjectCard } from '../components/ProjectCards'
import { SectionHeading } from '../components/SectionHeading'
import { fullStackTradingProjects } from '../data/portfolioData'

export function FullStackTradingPage() {
  return (
    <section className="relative border-b border-white/6 py-20">
      <PageShell>
        <SectionHeading
          eyebrow="Full Stack Trading Applications"
          title="Trader-focused SaaS products that extend trading systems expertise into production web platforms."
            copy="These projects demonstrate full stack delivery—authentication, databases, analytics UI, and cloud deployment—while staying anchored in real trading workflows rather than generic business apps."
          />

          <p className="mt-6 text-sm text-slate-400">
            Add TradeVault screenshots to{' '}
            <code className="rounded bg-white/6 px-1.5 py-0.5 text-cyan-100/90">
              public/images/tradevault/
            </code>{' '}
            (hero, dashboard, analytics, trade-history, mobile) when ready.
          </p>

          <div className="mt-12 space-y-10">
          {fullStackTradingProjects.map((project, index) => (
            <ShowcaseProjectCard
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
