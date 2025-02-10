import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="z-20 flex items-center justify-between bg-white px-6 py-6 sm:px-10">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/images/corina-logo.png"
          alt="Logo of website"
          className="h-12"
        />
        <span className="mx-4 text-xl font-bold text-gray-900">
          Corina Reitemeyer
        </span>
      </div>

      {/* Hamburger/Close Button */}
      <button
        className="block focus:outline-none sm:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <div
          className={`h-6 w-6 transform transition-transform duration-500 ease-in-out ${
            isMobileMenuOpen ? 'rotate-180' : ''
          }`}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
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
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </div>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute inset-x-0 top-16 z-50 bg-white py-8 text-center shadow-lg sm:hidden">
          <ul className="space-y-6">
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `nav-item ${
                    isActive || location.pathname.startsWith('/projects')
                      ? 'active'
                      : ''
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-item ${isActive ? 'active' : ''}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <a
                href="/files/CV.pdf"
                className="nav-item"
                download="CV_2024"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resume
              </a>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-item ${isActive ? 'active' : ''}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
      <ul className="bg-white-800 hidden space-x-8 sm:flex">
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `nav-item ${
                isActive || location.pathname.startsWith('/projects')
                  ? 'active'
                  : ''
              }`
            }
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            About
          </NavLink>
        </li>

        <li>
          <a
            href="/files/Corina-Reitemeyer-CV-2025.pdf"
            className="nav-item"
            download="Corina-Reitemeyer-CV-2025"
          >
            Resume
          </a>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
