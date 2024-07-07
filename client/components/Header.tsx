import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <nav className="bg-white-100 py- ml-4 flex items-center justify-between px-6 py-6">
        <ul className="flex space-x-4">
          <li>
            <Link to="/about" className="text-gray-800 hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-gray-800 hover:text-blue-600">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center">
          <img
            src="/images/weblogo.PNG"
            alt="Logo of Corina's website"
            className="mr-4 h-16"
          />
        </div>
      </nav>
    </>
  )
}
