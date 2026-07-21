import { useLocation } from 'react-router-dom'
import contactData from '../../src/contactdata.json'
import type ContactData from '../../models/contactdata'
import TechTicker from './TechTicker'

export default function Footer() {
  const year = new Date().getFullYear()
  const isHome = useLocation().pathname === '/'
  const { calendlyUrl }: ContactData = contactData

  return (
    <footer id="contact" className="w-full bg-ink">
      {isHome ? (
        <TechTicker />
      ) : (
        <div className="w-full border-t border-rule" />
      )}

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 sm:gap-12 sm:px-8 sm:py-24 lg:grid-cols-3">
        <div>
          <h2 className="mb-4 text-xs font-normal uppercase tracking-[0.16em] text-paper-muted">
            Elsewhere
          </h2>
          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
          <ul role="list" className="space-y-3">
            <li>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a call (opens in a new tab)"
                className="font-semibold text-paper-muted transition-colors duration-200 hover:text-paper"
              >
                Book a call.
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/corinareitemeyer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in a new tab)"
                className="font-semibold text-paper-muted transition-colors duration-200 hover:text-paper"
              >
                LinkedIn.
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@corina_rei"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium (opens in a new tab)"
                className="font-semibold text-paper-muted transition-colors duration-200 hover:text-paper"
              >
                Medium.
              </a>
            </li>
            <li>
              <a
                href="https://github.com/corina-reitemeyer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in a new tab)"
                className="font-semibold text-paper-muted transition-colors duration-200 hover:text-paper"
              >
                GitHub.
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-normal uppercase tracking-[0.16em] text-paper-muted">
            Colophon
          </h2>
          <p className="max-w-[28rem] text-sm leading-relaxed text-paper-muted">
            Set in Sofia Pro. Built with TypeScript, React, and Vite. Handled
            with care.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2 lg:col-span-1">
          <p className="text-sm text-paper-muted">
            <span className="sr-only">Copyright </span>© {year}
          </p>
        </div>
      </div>
    </footer>
  )
}
