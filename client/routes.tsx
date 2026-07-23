import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './layout/App'
import Home from './features/landing/Landing'
import { ROUTES } from './lib/routes'
import { lazyWithRetry } from './lib/lazyWithRetry'

const About = lazyWithRetry(() => import('./features/about/About'))
const Contact = lazyWithRetry(() => import('./features/contact/Contact'))
const ProductDesign = lazyWithRetry(
  () => import('./features/product-design/ProductDesign'),
)
const Making = lazyWithRetry(() => import('./features/making/Making'))
const CaseStudy = lazyWithRetry(() => import('./features/case-study/CaseStudy'))
const NotFound = lazyWithRetry(() => import('./features/not-found/NotFound'))

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
    <Route path="*" element={<NotFound />} />
  </Route>,
)

export default routes
