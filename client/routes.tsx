import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './layout/App'
import About from './features/about/About'
import Contact from './features/contact/Contact'
import ProductDesign from './features/product-design/ProductDesign'
import Making from './features/making/Making'
import CaseStudy from './features/case-study/CaseStudy'
import Home from './features/landing/Landing'
import { ROUTES } from './lib/routes'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path={ROUTES.digitalProducts} element={<ProductDesign />} />
    <Route path={`${ROUTES.digitalProduct}/:slug`} element={<CaseStudy />} />
    <Route
      path={`${ROUTES.learningExperience}/:slug`}
      element={<CaseStudy />}
    />
    <Route path="/making" element={<Making />} />
    <Route path="about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Route>,
)

export default routes
