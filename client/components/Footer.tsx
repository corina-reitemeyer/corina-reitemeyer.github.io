export default function Footer() {
  return (
    <footer className="w-full border-t border-rule bg-ink py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-start px-8">
        {/* Decorative rule — aria-hidden so screen readers skip it */}
        <div aria-hidden="true" className="mb-6 h-[3px] w-12 bg-teal-mid" />

        <nav aria-label="Social links">
          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
          <ul role="list" className="flex flex-wrap gap-8">
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
        </nav>
      </div>
    </footer>
  )
}
