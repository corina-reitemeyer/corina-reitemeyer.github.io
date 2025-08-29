import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Header() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu when route changes
  useEffect(() => setIsMobileMenuOpen(false), [location.pathname])

  const isProjects = (p: string) =>
    p === '/projects' || p.startsWith('/projects')

  return (
    <header className="z-50 w-full bg-[#08082a]">
      <nav className="mx-auto flex max-w-6xl items-end justify-between px-6 py-12 pb-6 sm:px-10">
        {/* Left: Logo above Name/Title */}
        <Link to="/projects" className="flex flex-col items-start">
          <img
            src="/images/cr-reverse-logo.svg"
            alt="Logo"
            className="mb-2 h-6 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-white">
              Corina Reitemeyer
            </span>
            <span className="-mt-1 text-xl text-white/70">
              Senior UX/UI Designer.
            </span>
          </div>
        </Link>

        {/* Right: Desktop nav, aligned with Title */}
        <ul className="hidden items-end gap-10 text-lg sm:flex">
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                [
                  'text-base transition',
                  isActive || location.pathname.startsWith('/projects')
                    ? 'font-semibold text-white'
                    : 'font-medium text-white/60 hover:text-white/80',
                ].join(' ')
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                [
                  'text-base transition',
                  isActive
                    ? 'font-semibold text-white'
                    : 'font-medium text-white/60 hover:text-white/80',
                ].join(' ')
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <a
              href="/files/Resumé_Corina_Reitemeyer_2025.pdf"
              className="text-base font-medium text-white/60 transition hover:text-white/80"
              download="mycv"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-white/80 ring-1 ring-white/15 transition hover:bg-white/5 sm:hidden"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            // X icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={`transition-[max-height,opacity] duration-200 sm:hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="border-t border-white/10 bg-[#08082a] px-6 pb-6 pt-2 sm:px-10">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  [
                    'block rounded-lg px-3 py-2 text-base transition',
                    isActive || isProjects(location.pathname)
                      ? 'font-semibold text-white'
                      : 'font-medium text-white/70 hover:text-white',
                  ].join(' ')
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  [
                    'block rounded-lg px-3 py-2 text-base transition',
                    isActive
                      ? 'font-semibold text-white'
                      : 'font-medium text-white/70 hover:text-white',
                  ].join(' ')
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <a
                href="/files/mycv.pdf"
                className="block rounded-lg px-3 py-2 text-base font-medium text-white/70 transition hover:text-white"
                download="mycv"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
