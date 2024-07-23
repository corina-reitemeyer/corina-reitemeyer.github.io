interface ButtonProps {
  url: string
  label: string
  styling: string
}

const Button: React.FC<ButtonProps> = ({ url, label, styling }) => {
  const handleClick = () => {
    window.open(url, '_blank')
  }

  return (
    <button className={styling} onClick={handleClick}>
      {label}
    </button>
  )
}

export default Button
