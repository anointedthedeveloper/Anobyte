import { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import Navbar     from './components/Navbar'
import Footer     from './components/Footer'
import BackToTop  from './components/ui/BackToTop'
import RippleProvider from './components/ui/RippleProvider'
import Home         from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage    from './pages/AboutPage'
import ProcessPage  from './pages/ProcessPage'
import ContactPage  from './pages/ContactPage'
import PrivacyPage  from './pages/PrivacyPage'
import TermsPage    from './pages/TermsPage'
import NotFound     from './pages/NotFound'

/* ── Top loading bar ──────────────────────────────────────────
   Lives at App level so it renders above AnimatePresence and
   is never affected by page exit/enter transitions.
────────────────────────────────────────────────────────────── */
function TopLoader() {
  const loc      = useLocation()
  const [pct, setPct]       = useState(0)
  const [visible, setVisible] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    // Start on route change
    setVisible(true)
    setPct(0)

    // Quick jump to 30%, then slowly creep to 85%
    const t1 = setTimeout(() => setPct(30),  30)
    const t2 = setTimeout(() => setPct(60),  180)
    const t3 = setTimeout(() => setPct(85),  400)
    // Finish
    const t4 = setTimeout(() => {
      setPct(100)
      // Hide after bar completes
      timer.current = setTimeout(() => setVisible(false), 300)
    }, 600)

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4)
      if (timer.current) clearTimeout(timer.current)
    }
  }, [loc.pathname])

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      height: 3, zIndex: 99999, pointerEvents: 'none',
      background: 'rgba(229,232,242,0.4)',
    }}>
      <motion.div
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #4F72F8 0%, #8B3FF5 55%, #4BBCFF 100%)',
          borderRadius: '0 2px 2px 0',
          boxShadow: '0 0 10px rgba(79,114,248,0.7)',
        }}
      />
    </div>
  )
}

/* ── Scroll progress bar ─────────────────────────────────────── */
function ScrollBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return (
    <motion.div
      className="scroll-bar"
      style={{ scaleX, top: 3 }} // sits just below the loader bar
    />
  )
}

/* ── Routes ─────────────────────────────────────────────────── */
function AppRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/"                element={<Home />} />
        <Route path="/services"        element={<ServicesPage />} />
        <Route path="/services/:id"    element={<ServiceDetailPage />} />
        <Route path="/projects"        element={<ProjectsPage />} />
        <Route path="/about"    element={<AboutPage />} />
        <Route path="/process"  element={<ProcessPage />} />
        <Route path="/contact"  element={<ContactPage />} />
        <Route path="/privacy"  element={<PrivacyPage />} />
        <Route path="/terms"    element={<TermsPage />} />
        <Route path="*"         element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <TopLoader />
      <RippleProvider />
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
