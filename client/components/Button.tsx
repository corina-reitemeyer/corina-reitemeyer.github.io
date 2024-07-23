interface ButtonProps {
  url?: string
  label: string
  className?: string
}

const Button: React.FC<ButtonProps> = ({ url, label, className = '' }) => {
  const handleClick = () => {
    window.open(url, '_blank')
  }

  return (
    <button
      className={`mr-4 mt-4 flex rounded-md bg-blue-500 px-4 py-2 text-sm text-white ${className} hover:bg-blue-600`}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default Button
