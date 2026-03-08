interface ButtonProps {
  label: string
  url?: string
  external?: boolean
  className?: string
}

export default function Button({
  label,
  url,
  external = false,
  className = '',
}: ButtonProps) {
  const baseStyles = `inline-block rounded-md bg-customYellow px-6 py-2 text-center text-sm font-semibold text-black hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-customYellow focus-visible:ring-offset-2 focus-visible:ring-offset-[#08082a] ${className}`

  if (!url) {
    return (
      <button type="button" className={baseStyles}>
        {label}
      </button>
    )
  }

  if (external) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label + ' (opens in a new tab)'}
        className={baseStyles}
      >
        {label}
      </a>
    )
  }

  return (
    <a href={url} className={baseStyles}>
      {label}
    </a>
  )
}
