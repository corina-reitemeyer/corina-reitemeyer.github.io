interface ButtonProps {
  url: string
  label: string
  className: string
}

const Button: React.FC<ButtonProps> = ({ url, label, className = '' }) => {
  const handleClick = () => {
    window.open(url, '_blank')
  }

  return (
    <button
      className={`my-14 rounded-md bg-blue-500 px-8 py-4 text-white ${className} hover:bg-blue-600`}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default Button
