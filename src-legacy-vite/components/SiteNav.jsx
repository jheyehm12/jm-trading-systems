import { useCallback, useEffect, useState } from 'react'
import { ChevronDown, Code2, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navItems } from '../data/navigation'

function navLinkClasses({ isActive }) {
  return [
    'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200',
    isActive
      ? 'text-white'
      : 'text-slate-400 hover:text-white',
  ].join(' ')
}

function subNavLinkClasses({ isActive }) {
  return [
    'block rounded-md px-3 py-2.5 text-sm transition-colors duration-200',
    isActive
      ? 'text-white'
      : 'text-slate-400 hover:text-white',
  ].join(' ')
}

export function SiteNav() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false)
  const [desktopProjectsOpen, setDesktopProjectsOpen] = useState(false)

  const isProjectsActive = location.pathname.startsWith('/projects')

  const closeMobile = useCallback(() => {
    setMobileOpen(false)
    setMobileProjectsOpen(false)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#080808]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
        <NavLink
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
          onClick={closeMobile}
        >
          <Code2 className="h-4 w-4 text-slate-400" />
          JM Trading Systems
        </NavLink>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDesktopProjectsOpen(true)}
                onMouseLeave={() => setDesktopProjectsOpen(false)}
              >
                <button
                  type="button"
                  className={[
                    'inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200',
                    isProjectsActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white',
                  ].join(' ')}
                  aria-expanded={desktopProjectsOpen}
                  aria-haspopup="true"
                  onClick={() =>
                    setDesktopProjectsOpen((open) => !open)
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${desktopProjectsOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`absolute left-0 top-full z-50 min-w-[13.5rem] pt-2 transition-all duration-200 ${
                    desktopProjectsOpen
                      ? 'pointer-events-auto visible translate-y-0 opacity-100'
                      : 'pointer-events-none invisible -translate-y-1 opacity-0'
                  }`}
                >
                  <div className="overflow-hidden rounded-lg border border-white/10 bg-[#111] p-2 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={subNavLinkClasses}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} className={navLinkClasses}>
                {item.label}
              </NavLink>
            ),
          )}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-90"
          >
            Let&apos;s Talk
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/10 p-2.5 text-white transition-colors hover:bg-white/5 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-white/5 bg-[#080808] lg:hidden ${
          mobileOpen ? 'block' : 'hidden'
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 sm:px-8 lg:px-12"
          aria-label="Mobile"
        >
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="flex flex-col">
                <button
                  type="button"
                  className={[
                    'inline-flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors duration-200',
                    isProjectsActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white',
                  ].join(' ')}
                  aria-expanded={mobileProjectsOpen}
                  onClick={() =>
                    setMobileProjectsOpen((open) => !open)
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${mobileProjectsOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
                    mobileProjectsOpen ? 'max-h-72' : 'max-h-0'
                  }`}
                >
                  <div className="flex flex-col gap-0.5 border-l border-white/10 py-1 pl-4">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={subNavLinkClasses}
                        onClick={closeMobile}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={navLinkClasses}
                onClick={closeMobile}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}
