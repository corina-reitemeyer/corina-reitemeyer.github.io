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
      className={`inline-block rounded-md bg-blue-500 px-6 py-2 text-center text-sm text-white hover:bg-blue-600 ${className}`}
    >
      {label}
    </a>
  )
}

export default Button
