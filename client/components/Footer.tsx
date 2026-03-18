export default function Footer() {
  return (
    <footer className="w-full bg-[#08082a] py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-start px-8">
        {/* Decorative rule — aria-hidden so screen readers skip it */}
        <div aria-hidden="true" className="mb-6 h-[3px] w-12 bg-white" />

        <nav aria-label="Social links">
          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- restores list semantics removed by Tailwind preflight in VoiceOver/Safari */}
          <ul role="list" className="flex flex-wrap gap-8">
            <li>
              <a
                href="https://www.linkedin.com/in/corinareitemeyer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in a new tab)"
                className="font-semibold text-white transition hover:text-slate-400"
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
                className="font-semibold text-white transition hover:text-slate-400"
              >
                Medium.
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
