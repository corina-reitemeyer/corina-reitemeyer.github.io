import { Link } from 'react-router-dom'

type AdjacentLink = { href: string; label: string }

type Props = {
  previous: AdjacentLink | null
  next: AdjacentLink | null
}

export default function CaseStagedAdjacentNav({ previous, next }: Props) {
  return (
    <nav
      aria-label="Other case studies"
      className="case-staged__snap bg-ink grid min-h-[60dvh] w-full grid-cols-1 border-t border-rule sm:grid-cols-2"
    >
      {previous ? (
        <Link
          to={previous.href}
          className="group border-rule flex flex-col justify-center gap-2 border-b px-6 py-16 transition-colors duration-200 hover:bg-charcoal-soft sm:border-b-0 sm:border-r sm:px-10"
        >
          <span className="text-paper-muted font-normal text-[0.7rem] uppercase tracking-[0.12em]">
            Previous
          </span>
          <strong className="text-paper group-hover:text-teal-mist inline-flex items-center gap-2 text-2xl font-bold tracking-[-0.02em] transition-colors duration-200">
            <span aria-hidden="true">←</span>
            {previous.label}
          </strong>
        </Link>
      ) : (
        <div className="sm:border-rule sm:border-r" />
      )}

      {next ? (
        <Link
          to={next.href}
          className="group flex flex-col items-start justify-center gap-2 px-6 py-16 text-left transition-colors duration-200 hover:bg-charcoal-soft sm:items-end sm:px-10 sm:text-right"
        >
          <span className="text-paper-muted font-normal text-[0.7rem] uppercase tracking-[0.12em]">
            Next
          </span>
          <strong className="text-paper group-hover:text-teal-mist inline-flex items-center gap-2 text-2xl font-bold tracking-[-0.02em] transition-colors duration-200">
            {next.label}
            <span aria-hidden="true">→</span>
          </strong>
        </Link>
      ) : null}
    </nav>
  )
}
