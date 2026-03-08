import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const mobileNavId = 'mobile-nav-panel'

export default function Header() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileNavRef = useRef<HTMLDivElement>(null)

  useEffect(() => setIsMobileMenuOpen(false), [location.pathname])

  return (
    <header className="z-50 w-full bg-[#08082a] px-6">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-end justify-between py-12 pb-6"
      >
        {/* Logo — alt="" since the text next to it already identifies it */}
        <Link to="/projects" className="flex flex-col items-start">
          <img
            src="/images/cr-reverse-logo.svg"
            alt=""
            aria-hidden="true"
            className="mb-2 h-6 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-white">
              Corina Reitemeyer
            </span>
            <span className="-mt-1 text-xl text-slate-400">
              Senior Product Designer.
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
        <ul role="list" className="hidden items-end gap-10 text-lg sm:flex">
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                [
                  'text-base transition',
                  isActive || location.pathname.startsWith('/projects')
                    ? 'font-semibold text-white'
                    : 'font-medium text-slate-400 hover:text-white',
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
                    : 'font-medium text-slate-400 hover:text-white',
                ].join(' ')
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <a
              href="/files/Corina-Reitemeyer-Designer-Resume.pdf"
              className="text-base font-medium text-slate-400 transition hover:text-white"
              download="Corina-Reitemeyer-Designer-Resume"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 ring-1 ring-white/20 transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:hidden"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls={mobileNavId}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
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
        id={mobileNavId}
        ref={mobileNavRef}
        aria-hidden={!isMobileMenuOpen}
        {...(!isMobileMenuOpen ? { inert: '' } : {})}
        className={`transition-[max-height,opacity] duration-200 sm:hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="border-t border-white/10 bg-[#08082a] px-6 pb-6 pt-2 sm:px-10">
          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
          <ul role="list" className="space-y-2">
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  [
                    'block rounded-lg px-3 py-2 text-base transition',
                    isActive || location.pathname.startsWith('/projects')
                      ? 'font-semibold text-white'
                      : 'font-medium text-slate-400 hover:text-white',
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
                      : 'font-medium text-slate-400 hover:text-white',
                  ].join(' ')
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <a
                href="/files/Corina-Reitemeyer-Designer-Resume.pdf"
                className="block rounded-lg px-3 py-2 text-base font-medium text-slate-400 transition hover:text-white"
                download="Corina-Reitemeyer-Designer-Resume"
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
