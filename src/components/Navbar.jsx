import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { C, G, S, F } from '../styles/tokens'

const NAV = [
  { label: 'Home',     to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Process',  to: '/process' },
  { label: 'About',    to: '/about' },
  { label: 'Contact',  to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [open, setOpen]           = useState(false)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 })
  const navRef                    = useRef(null)
  const loc                       = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [loc.pathname])

  // Measure active link for the sliding indicator
  useEffect(() => {
    if (!navRef.current) return
    const active = navRef.current.querySelector('.nav-link--active')
    if (active) {
      const navRect  = navRef.current.getBoundingClientRect()
      const linkRect = active.getBoundingClientRect()
      setIndicator({
        left:    linkRect.left - navRect.left,
        width:   linkRect.width,
        opacity: 1,
      })
    }
  }, [loc.pathname])

  const isActive = to => to === '/' ? loc.pathname === '/' : loc.pathname.startsWith(to)

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${scrolled ? C.border : 'rgba(229,232,242,0.5)'}`,
          boxShadow: scrolled ? S.nav : 'none',
          transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
        }}
      >
        <div className="nav-inner">

          {/* ── Logo ── */}
          <Link to="/" className="nav-logo-link">
            <motion.img
              src="/favicon.png"
              alt="Anobyte Technologies"
              whileHover={{ scale: 1.08, rotate: 5 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="nav-logo-img"
            />
            <div className="nav-logo-text">
              <span className="nav-brand-name">Anobyte Technologies</span>
              <span className="nav-tagline">Precision in Every Byte</span>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav ref={navRef} className="desktop-nav nav-links">
            {/* Sliding background pill — moves to active item */}
            <motion.span
              className="nav-indicator"
              animate={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
              transition={{ type: 'spring', stiffness: 380, damping: 36 }}
            />
            {NAV.map(l => {
              const on = isActive(l.to)
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`nav-link${on ? ' nav-link--active' : ''}`}
                >
                  {l.label}
                </Link>
              )
            })}
          </nav>

          {/* ── CTA — hidden on contact page ── */}
          {!isActive('/contact') && (
            <Link to="/contact" className="desktop-nav nav-cta">
              Get Started →
            </Link>
          )}

          {/* ── Hamburger ── */}
          <button
            className="mobile-btn"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'flex' }}
            >
              {open
                ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              }
            </motion.span>
          </button>

        </div>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mob-drawer"
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            animate={{ opacity: 1,  y: 0,   scale: 1    }}
            exit={{   opacity: 0,  y: -16,  scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV.map((l, i) => {
              const on = isActive(l.to)
              return (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1,  x: 0   }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link to={l.to} className={`mob-link${on ? ' mob-link--active' : ''}`}>
                    <span>{l.label}</span>
                    {on && <span className="mob-active-dot" />}
                  </Link>
                </motion.div>
              )
            })}
            <div className="mob-cta-wrap">
              <Link to="/contact" className="mob-cta">Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        /* ════════════════════════════════
           NAV INNER — responsive padding
           No maxW cap: uses padding to
           keep content away from edges.
           Small screen: 16px sides
           Medium: 32px sides
           Large: 5vw sides
        ════════════════════════════════ */
        .nav-inner {
          width: 100%;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          /* Fluid side padding — never touches edges */
          padding: 0 clamp(16px, 3.5vw, 56px);
          box-sizing: border-box;
        }

        /* ── Logo ── */
        .nav-logo-link {
          display: flex; align-items: center; gap: 10px;
          flex-shrink: 0; text-decoration: none;
        }
        .nav-logo-img {
          height: 38px; width: auto; object-fit: contain; flex-shrink: 0;
        }
        .nav-logo-text {
          display: flex; flex-direction: column; line-height: 1.2;
        }
        .nav-brand-name {
          font-family: "Space Grotesk", sans-serif;
          font-weight: 800; font-size: 15px;
          background: linear-gradient(135deg, #4F72F8 0%, #8B3FF5 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; letter-spacing: -0.02em;
        }
        .nav-tagline {
          font-family: "Inter", sans-serif;
          font-weight: 400; font-size: 10px;
          color: ${C.muted}; letter-spacing: 0.02em;
        }

        /* ── Desktop nav container ── */
        .nav-links {
          position: relative;
          display: flex !important;
          align-items: center;
          gap: 2px;
        }

        /* Sliding pill background — sits behind the active link */
        .nav-indicator {
          position: absolute;
          top: 0; bottom: 0;
          border-radius: 10px;
          background: linear-gradient(135deg, #4F72F8 0%, #8B3FF5 100%);
          box-shadow: 0 4px 18px rgba(79,114,248,0.35);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Desktop link ── */
        .nav-link {
          position: relative;
          z-index: 1;
          display: inline-block;
          padding: 8px 16px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          font-family: "Space Grotesk", sans-serif;
          color: ${C.body};
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: ${C.ink};
        }
        /* Active — white text over the sliding pill */
        .nav-link--active {
          color: #fff !important;
          font-weight: 700 !important;
        }
        .nav-link--active:hover {
          color: rgba(255,255,255,0.9) !important;
        }

        /* ── CTA ── */
        .nav-cta {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 9px 20px; border-radius: 10px;
          font-size: 14px; font-weight: 700;
          font-family: "Space Grotesk", sans-serif;
          color: #4F72F8;
          background: transparent;
          box-shadow: none;
          border: 1.5px solid #4F72F8;
          text-decoration: none; white-space: nowrap; flex-shrink: 0;
          transition: color 0.22s, background 0.22s, box-shadow 0.22s, transform 0.15s;
        }
        .nav-cta:hover {
          color: #fff;
          background: linear-gradient(135deg, #4F72F8 0%, #8B3FF5 100%);
          box-shadow: 0 2px 10px rgba(79,114,248,0.28);
        }
        .nav-cta:active { transform: translateY(0); }

        /* ── Hamburger ── */
        .mobile-btn {
          display: none !important;
          width: 40px; height: 40px; border-radius: 10px;
          align-items: center; justify-content: center;
          color: ${C.ink3}; cursor: pointer;
          background: transparent;
          border: 1px solid transparent;
          flex-shrink: 0;
          transition: background 0.18s, border-color 0.18s;
        }
        .mobile-btn:hover {
          background: ${C.bg};
          border-color: ${C.border};
        }

        /* ── Breakpoint: hide desktop nav on small screens ── */
        .desktop-nav { display: flex !important; }
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .mobile-btn  { display: flex !important; }
          .nav-inner   { padding: 0 16px; gap: 12px; }
          .nav-brand-name { font-size: 13px; }
          .nav-tagline { display: none; }
        }
        @media (max-width: 480px) {
          .nav-inner { padding: 0 12px; gap: 8px; }
          .nav-brand-name { font-size: 12px; max-width: 160px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
          .nav-logo-img   { height: 28px; }
        }

        /* ── Large screen scaling ── */
        @media (min-width: 1440px) {
          .nav-inner      { padding: 0 clamp(40px, 4vw, 80px); }
          .nav-link       { font-size: 15px; padding: 9px 18px; }
          .nav-cta        { font-size: 15px; padding: 10px 24px; }
          .nav-brand-name { font-size: 16px; }
        }
        @media (min-width: 1920px) {
          .nav-inner { padding: 0 clamp(64px, 5vw, 120px); }
          .nav-link  { font-size: 16px; padding: 10px 20px; }
          .nav-cta   { font-size: 16px; padding: 11px 28px; }
        }

        /* ── Mobile drawer ── */
        .mob-drawer {
          position: fixed;
          top: 80px; left: 12px; right: 12px;
          z-index: 99;
          background: rgba(255,255,255,0.99);
          backdrop-filter: blur(24px);
          border-radius: 18px;
          border: 1px solid ${C.border};
          box-shadow: 0 24px 64px rgba(11,14,42,0.13);
          padding: 10px 10px 14px;
          display: flex; flex-direction: column; gap: 2px;
        }
        .mob-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 13px 14px; border-radius: 12px;
          font-size: 15px; font-weight: 600;
          font-family: "Space Grotesk", sans-serif;
          color: ${C.body}; text-decoration: none;
          transition: background 0.15s, color 0.15s;
        }
        .mob-link:hover { background: ${C.bg}; color: ${C.ink}; }
        .mob-link--active {
          color: ${C.blue500} !important;
          background: ${C.blue50} !important;
          font-weight: 700 !important;
        }
        .mob-active-dot {
          width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0;
          background: linear-gradient(135deg, #4F72F8, #8B3FF5);
          box-shadow: 0 0 8px rgba(79,114,248,0.6);
          animation: pulse 2s ease-in-out infinite;
        }
        .mob-cta-wrap {
          padding: 8px 4px 0; margin-top: 6px;
          border-top: 1px solid ${C.border};
        }
        .mob-cta {
          display: block; text-align: center;
          padding: 13px 16px; border-radius: 12px;
          font-size: 15px; font-weight: 700;
          font-family: "Space Grotesk", sans-serif;
          color: #fff;
          background: linear-gradient(135deg, #4F72F8 0%, #8B3FF5 100%);
          box-shadow: 0 4px 14px rgba(79,114,248,0.32);
          text-decoration: none;
          transition: opacity 0.18s, transform 0.15s;
        }
        .mob-cta:hover { opacity: 0.88; transform: translateY(-1px); }
      `}</style>
    </>
  )
}
