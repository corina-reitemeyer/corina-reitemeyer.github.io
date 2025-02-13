interface ButtonProps {
  url?: string
  label: string
  className?: string
}

const Button: React.FC<ButtonProps> = ({ url, label, className = '' }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-md bg-customYellow px-6 py-2 text-center text-sm font-semibold text-black hover:bg-yellow-400 ${className}`}
    >
      {label}
    </a>
  )
}

export default Button
