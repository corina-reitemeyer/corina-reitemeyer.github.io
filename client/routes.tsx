import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Projects from './pages/Projects.tsx'
import CaseStudy from './pages/CaseStudy.tsx'
import Contact from './pages/Contact.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/projects/:name" element={<CaseStudy />} />
    <Route path="/contact" element={<Contact />} />
  </Route>,
)
