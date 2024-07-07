import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import About from './pages/About.tsx'
import Projects from './pages/Projects.tsx'
import CaseStudy from './pages/CaseStudy.tsx'
import Contact from './pages/Contact.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Projects images={''} />} />
    <Route path="/projects" element={<Projects images={''} />} />
    <Route path="/projects/:name" element={<CaseStudy />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Route>,
)
