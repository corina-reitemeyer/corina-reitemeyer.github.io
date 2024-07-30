import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import About from './pages/About'
import Projects from './pages/Projects'
import CaseStudy from './pages/CaseStudy'
import Contact from './pages/Contact'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Projects images={''} />} />
    <Route path="projects" element={<Projects images={''} />} />
    <Route path="projects/:slug" element={<CaseStudy />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
  </Route>,
)

export default routes
