import { Link } from 'react-router-dom'
import { Code2, GitBranch } from 'lucide-react'
import { githubUrl } from '../data/portfolioData'

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/5 bg-[#080808]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white">
              <Code2 className="h-4 w-4 text-slate-400" />
              JM Trading Systems
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Trading Systems • AI Automation • Full Stack SaaS
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Building trading tools, automation systems, and AI-powered
              applications for real-world delivery.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
            <div>
              <p className="text-xs font-medium text-slate-500">
                Explore
              </p>
              <nav className="mt-3 flex flex-col gap-2">
                <Link
                  to="/projects/trading"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Trading Systems
                </Link>
                <Link
                  to="/projects/full-stack"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Full Stack Trading Apps
                </Link>
                <Link
                  to="/services"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </nav>
            </div>

            <div>
              <p className="text-xs font-medium text-slate-500">
                Connect
              </p>
              <a
                href={githubUrl}
                rel="noreferrer"
                target="_blank"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
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
