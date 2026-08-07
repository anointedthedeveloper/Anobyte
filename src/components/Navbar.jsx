import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'Home',      to: '/' },
  { label: 'Services',  to: '/services' },
  { label: 'Projects',  to: '/projects' },
  { label: 'Process',   to: '/process' },
  { label: 'About',     to: '/about' },
  { label: 'Contact',   to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 18)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location.pathname])

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid #E2E8F0' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.04)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <img
                src="/logo.png"
                alt="AnoByte Technologies"
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  style={{
                    color: isActive(link.to) ? '#4B6EF5' : '#475569',
                    background: isActive(link.to) ? '#EEF0FF' : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(link.to)) e.currentTarget.style.color = '#0F172A'
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.to)) e.currentTarget.style.color = '#475569'
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, #4B6EF5 0%, #8B3FF5 100%)',
                    boxShadow: '0 4px 14px rgba(75,110,245,0.38)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 28px rgba(75,110,245,0.52)')}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 4px 14px rgba(75,110,245,0.38)')}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors"
              style={{ color: '#475569' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-40 lg:hidden"
            style={{
              background: 'rgba(255,255,255,0.96)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid #E2E8F0',
              boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
            }}
          >
            <div className="max-w-7xl mx-auto px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                  style={{
                    color: isActive(link.to) ? '#4B6EF5' : '#475569',
                    background: isActive(link.to) ? '#EEF0FF' : 'transparent',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 pb-1">
                <Link
                  to="/contact"
                  className="flex justify-center w-full px-4 py-3 text-white text-sm font-semibold rounded-xl"
                  style={{ background: 'linear-gradient(135deg, #4B6EF5, #8B3FF5)' }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
