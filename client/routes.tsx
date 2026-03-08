import { createRoutesFromElements, Route, Navigate } from 'react-router-dom'
import App from './components/App'
import About from './pages/About'
import Projects from './pages/Projects'
import CaseStudy from './pages/CaseStudy'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Navigate to="projects" replace />} />
    <Route path="projects" element={<Projects />} />
    <Route path="projects/:slug" element={<CaseStudy />} />
    <Route path="about" element={<About />} />
  </Route>,
)

export default routes
