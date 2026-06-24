import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const mobileNavId = 'mobile-nav-panel'

const navItems = [
  {
    to: '/digital-products',
    label: 'designing.',
    matchPrefix: '/digital-product',
  },
  {
    to: '/learning-experiences',
    label: 'elearning.',
    matchPrefix: '/learning-experience',
  },
  { to: '/making', label: 'making.' },
  { to: '/about', label: 'about.' },
]

const resumes = [
  {
    label: 'Product Designer CV',
    href: '/files/Corina-Reitemeyer-Product-Designer-CV.pdf',
    download: 'Corina-Reitemeyer-Product-Designer-CV',
  },
  {
    label: 'Learning Designer CV',
    href: '/files/Corina-Reitemeyer-Learning-Designer-CV.pdf',
    download: 'Corina-Reitemeyer-Learning-Designer-CV',
  },
]

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
      />
    </svg>
  )
}

export default function Header() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isResumeMenuOpen, setIsResumeMenuOpen] = useState(false)
  const resumeMenuRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsResumeMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!isResumeMenuOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (!resumeMenuRef.current?.contains(event.target as Node)) {
        setIsResumeMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isResumeMenuOpen])

  const isNavItemActive = (isActive: boolean, matchPrefix?: string) =>
    isActive || (matchPrefix ? location.pathname.startsWith(matchPrefix) : false)

  return (
    <header className="z-50 w-full bg-[#08082a] px-6">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-end justify-between py-12 pb-6"
      >
        <Link to="/" className="flex flex-col items-start">
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
              Product & Learning Designer.
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
        <ul role="list" className="hidden items-end gap-10 text-lg sm:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  [
                    'text-base transition',
                    isNavItemActive(isActive, item.matchPrefix)
                      ? 'font-semibold text-white'
                      : 'font-medium text-slate-400 hover:text-white',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li ref={resumeMenuRef} className="relative">
            <button
              type="button"
              onClick={() => setIsResumeMenuOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={isResumeMenuOpen}
              className="text-base font-medium text-slate-400 transition hover:text-white"
            >
              resume.
            </button>

            {isResumeMenuOpen && (
              <ul
                role="list"
                className="absolute right-0 top-full z-10 mt-4 min-w-[14rem] rounded-lg border border-white/10 bg-[#0f0f3a] py-2 shadow-lg"
              >
                {resumes.map((resume) => (
                  <li key={resume.href}>
                    <a
                      href={resume.href}
                      download={resume.download}
                      className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                    >
                      <DownloadIcon />
                      {resume.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
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
        aria-hidden={!isMobileMenuOpen}
        {...(!isMobileMenuOpen ? { inert: '' } : {})}
        className={`transition-[max-height,opacity] duration-200 sm:hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="border-t border-white/10 bg-[#08082a] px-6 pb-6 pt-2 sm:px-10">
          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
          <ul role="list" className="space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      'block rounded-lg px-3 py-2 text-base transition',
                      isNavItemActive(isActive, item.matchPrefix)
                        ? 'font-semibold text-white'
                        : 'font-medium text-slate-400 hover:text-white',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            {resumes.map((resume) => (
              <li key={resume.href}>
                <a
                  href={resume.href}
                  download={resume.download}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium text-slate-400 transition hover:text-white"
                >
                  <DownloadIcon />
                  {resume.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
