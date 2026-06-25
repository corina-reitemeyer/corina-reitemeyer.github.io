import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import About from './pages/About'
import ProductDesign from './pages/ProductDesign'
import LearningDesign from './pages/LearningDesign'
import Making from './pages/Making'
import CaseStudy from './pages/CaseStudy'
import Home from './pages/Landing'
import { ROUTES } from './lib/routes'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path={ROUTES.digitalProducts} element={<ProductDesign />} />
    <Route path={`${ROUTES.digitalProduct}/:slug`} element={<CaseStudy />} />
    <Route path={ROUTES.learningExperiences} element={<LearningDesign />} />
    <Route
      path={`${ROUTES.learningExperience}/:slug`}
      element={<CaseStudy />}
    />
    <Route path="/making" element={<Making />} />
    <Route path="about" element={<About />} />
  </Route>,
)

export default routes
