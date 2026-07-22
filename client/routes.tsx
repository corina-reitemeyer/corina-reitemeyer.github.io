import { lazy } from 'react'
import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './layout/App'
import Home from './features/landing/Landing'
import { ROUTES } from './lib/routes'

const About = lazy(() => import('./features/about/About'))
const Contact = lazy(() => import('./features/contact/Contact'))
const ProductDesign = lazy(() => import('./features/product-design/ProductDesign'))
const Making = lazy(() => import('./features/making/Making'))
const CaseStudy = lazy(() => import('./features/case-study/CaseStudy'))

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path={ROUTES.digitalProducts} element={<ProductDesign />} />
    <Route path={`${ROUTES.digitalProduct}/:slug`} element={<CaseStudy />} />
    <Route
      path={`${ROUTES.learningExperience}/:slug`}
      element={<CaseStudy />}
    />
    <Route path="/playground" element={<Making />} />
    <Route path="about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Route>,
)

export default routes
