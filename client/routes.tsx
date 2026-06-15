import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import About from './pages/About'
import ProductDesign from './pages/ProductDesign'
import CaseStudy from './pages/CaseStudy'
import Home from './pages/Landing'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/digital-products" element={<ProductDesign />} />
    <Route path="/digital-product/:slug" element={<CaseStudy />} />
    <Route path="/learning-experiences" element={<ProductDesign />} />
    <Route path="/learning-experiences/:slug" element={<CaseStudy />} />
    <Route path="about" element={<About />} />
  </Route>,
)

export default routes
