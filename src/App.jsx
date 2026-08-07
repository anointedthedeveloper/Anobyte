import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import Navbar     from './components/Navbar'
import Footer     from './components/Footer'
import BackToTop  from './components/ui/BackToTop'
import Home         from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage    from './pages/AboutPage'
import ProcessPage  from './pages/ProcessPage'
import ContactPage  from './pages/ContactPage'
import NotFound     from './pages/NotFound'

function ScrollBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return <motion.div className="scroll-bar" style={{ scaleX }} />
}

function AppRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"         element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about"    element={<AboutPage />} />
        <Route path="/process"  element={<ProcessPage />} />
        <Route path="/contact"  element={<ContactPage />} />
        <Route path="*"         element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollBar />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#fff' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <AppRoutes />
        </main>
        <Footer />
      </div>
      <BackToTop />
    </BrowserRouter>
  )
}
