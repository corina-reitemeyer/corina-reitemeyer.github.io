import { NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  return (
    <nav className="bg-white-100 ml-4 flex items-center justify-between px-10 py-10">
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `nav-item ${
                isActive || location.pathname.startsWith('/projects')
                  ? 'active'
                  : ''
              }`
            }
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            About
          </NavLink>
        </li>

        <li>
          <a href="/files/CV.pdf" className="nav-item" download="CV_2024">
            Resume
          </a>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center">
        <img
          src="/images/weblogo.PNG"
          alt="Logo of website"
          className="mr-4 h-16"
        />
      </div>
    </nav>
  )
}
