import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

const baseClass =
  'bg-paper text-ink hover:bg-teal-mist inline-flex min-h-[2.75rem] items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5'

type Props = {
  children: ReactNode
  className?: string
} & (
  | { to: string; href?: never; external?: never }
  | { href: string; to?: never; external?: boolean }
)

/** Pill-shaped primary CTA, shared by pages that link out (Contact) or back
 *  into the app (404). Renders an internal `Link` when given `to`, or an
 *  anchor when given `href`. */
export default function PrimaryButtonLink({ children, className = '', ...props }: Props) {
  const classes = `${baseClass} ${className}`.trim()

  if (props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={props.href}
      target={props.external ? '_blank' : undefined}
      rel={props.external ? 'noopener noreferrer' : undefined}
      className={classes}
    >
      {children}
    </a>
  )
}
