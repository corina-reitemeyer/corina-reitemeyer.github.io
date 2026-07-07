type CtaLinkProps = {
  label: string
  href: string
  external?: boolean
}

export default function CtaLink({ label, href, external }: CtaLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#08082a] transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#08082a]"
    >
      {label}
      {external && (
        <>
          <span aria-hidden="true"> ↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </>
      )}
    </a>
  )
}
