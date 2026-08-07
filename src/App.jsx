import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useScroll, useSpring, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/ui/CustomCursor'
import BackToTop from './components/ui/BackToTop'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProcessPage from './pages/ProcessPage'
import NotFound from './pages/NotFound'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return <motion.div className="scroll-progress" style={{ scaleX }} />
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"          element={<Home />} />
        <Route path="/services"  element={<ServicesPage />} />
        <Route path="/projects"  element={<ProjectsPage />} />
        <Route path="/about"     element={<AboutPage />} />
        <Route path="/process"   element={<ProcessPage />} />
        <Route path="/contact"   element={<ContactPage />} />
        <Route path="*"          element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollProgress />
      <CustomCursor />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
      <BackToTop />
    </Router>
  )
}
