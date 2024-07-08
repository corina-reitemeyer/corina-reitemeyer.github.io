import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <nav className="bg-white-100 py- ml-4 flex items-center justify-between px-6 py-6">
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/about"
              className="relative inline-block font-medium text-gray-600 hover:text-black"
            >
              About
            </Link>
          </li>
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
              to="/contact"
              className="relative inline-block font-medium text-gray-600 hover:text-black"
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="/path-to-your-cv.pdf" // Replace with the actual path to my CV file
              className="relative inline-block font-medium text-gray-600 hover:text-black"
              download="Corina_Rei_CV_2024.pdf"
            >
              Download CV
            </a>
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
