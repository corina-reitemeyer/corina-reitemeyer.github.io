import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <nav>
        <img src="/images/weblogo.PNG" alt="Logo of Corina's website" />
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
