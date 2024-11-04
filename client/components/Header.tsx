import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <nav className="bg-white-100 ml-4 flex items-center justify-between px-10 py-10">
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/projects"
              className="relative inline-block font-medium text-gray-600 hover:text-black"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative inline-block font-medium text-gray-600 hover:text-black"
            >
              About
            </Link>
          </li>
          <li>
            <a
              href="/files/Corina_Rei_UXDesigner_CV_NOV2024"
              className="relative inline-block font-medium text-gray-600 hover:text-black"
              download="Corina_Rei_UXDesigner_CV_NOV2024"
            >
              Resume
            </a>
          </li>
          <li>
            <Link
              to="/contact"
              className="relative inline-block font-medium text-gray-600 hover:text-black"
            >
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
