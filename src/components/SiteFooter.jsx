import { Link } from 'react-router-dom'
import { GitBranch, Sparkles } from 'lucide-react'
import { githubUrl } from '../data/portfolioData'

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/6 bg-[#040b12]/95">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/12 bg-cyan-300/6 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              <Sparkles className="h-3.5 w-3.5" />
              JM Trading Systems
            </div>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Trading Systems Specialist
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Available for trading systems, AI automation, and full stack
              trading app projects.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/70">
                Explore
              </p>
              <nav className="mt-3 flex flex-col gap-2">
                <Link
                  to="/projects/trading"
                  className="text-sm text-slate-300 transition-colors hover:text-cyan-100"
                >
                  Trading Systems
                </Link>
                <Link
                  to="/projects/full-stack"
                  className="text-sm text-slate-300 transition-colors hover:text-cyan-100"
                >
                  Full Stack Trading Apps
                </Link>
                <Link
                  to="/services"
                  className="text-sm text-slate-300 transition-colors hover:text-cyan-100"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="text-sm text-slate-300 transition-colors hover:text-cyan-100"
                >
                  Contact
                </Link>
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/70">
                Connect
              </p>
              <a
                href={githubUrl}
                rel="noreferrer"
                target="_blank"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition-colors hover:text-cyan-100"
              >
                <GitBranch className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 border-t border-white/6 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} JM Trading Systems. Trading systems
          development, AI automation, and validation-first software delivery.
        </p>
      </div>
    </footer>
  )
}
