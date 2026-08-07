import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { C, G, S, F, maxW, gutter } from '../styles/tokens'

const NAV = [
  { label: 'Home',     to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Process',  to: '/process' },
  { label: 'About',    to: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const loc                     = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [loc.pathname])

  const active = to => to === '/' ? loc.pathname === '/' : loc.pathname.startsWith(to)

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? 'rgba(255,255,255,0.94)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? `1px solid ${C.border}` : '1px solid transparent',
          boxShadow: scrolled ? S.nav : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{
          maxWidth: maxW, margin: '0 auto', padding: `0 ${gutter}`,
          height: 'clamp(64px,8vw,76px)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* ── Logo + Brand name ── */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0, textDecoration: 'none' }}>
            <motion.img
              src="/favicon.png"
              alt="AnoByte Technologies"
              whileHover={{ scale: 1.06, rotate: 4 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              style={{ height: 'clamp(34px,4.5vw,44px)', width: 'auto', objectFit: 'contain', display: 'block', flexShrink: 0 }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
              <span style={{
                fontFamily: F.head, fontWeight: 800,
                fontSize: 'clamp(14px,1.8vw,17px)',
                background: G.brand,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
              }}>
                Anobyte Technologies
              </span>
              <span style={{
                fontFamily: F.body, fontWeight: 400,
                fontSize: 'clamp(9px,1vw,11px)',
                color: C.muted, letterSpacing: '0.01em',
              }}>
                Precision in Every Byte
              </span>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="desktop-nav">
            {NAV.map(l => {
              const on = active(l.to)
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  style={{
                    padding: '7px 15px', borderRadius: 9,
                    fontSize: 14, fontWeight: 600, fontFamily: F.head,
                    color: on ? C.blue500 : C.body,
                    background: on ? C.blue50 : 'transparent',
                    transition: 'all 0.18s', whiteSpace: 'nowrap',
                    position: 'relative',
                  }}
                  onMouseEnter={e => { if (!on) { e.currentTarget.style.color = C.ink; e.currentTarget.style.background = C.bg } }}
                  onMouseLeave={e => { if (!on) { e.currentTarget.style.color = C.body; e.currentTarget.style.background = 'transparent' } }}
                >
                  {l.label}
                  {on && (
                    <span style={{
                      position: 'absolute', bottom: -1, left: '50%', transform: 'translateX(-50%)',
                      width: 16, height: 2, borderRadius: 2, background: G.brand,
                    }} />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* ── CTA ── */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center' }}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '9px 22px', borderRadius: 10,
                  fontSize: 14, fontWeight: 700, fontFamily: F.head,
                  color: '#fff', background: G.brand, boxShadow: S.btn,
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = S.btnH }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = S.btn }}
              >
                Get Started →
              </Link>
            </motion.div>
          </div>

          {/* ── Hamburger ── */}
          <button
            className="mobile-btn"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            style={{
              width: 40, height: 40, borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: C.body, cursor: 'pointer',
              background: open ? C.bg : 'transparent',
              border: `1px solid ${open ? C.border : 'transparent'}`,
              transition: 'all 0.18s',
            }}
          >
            {open
              ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            }
          </button>
        </div>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', top: 74, left: 12, right: 12, zIndex: 99,
              background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)',
              borderRadius: 16, border: `1px solid ${C.border}`,
              boxShadow: '0 16px 48px rgba(0,0,0,0.10)',
              padding: '10px 8px 14px',
              display: 'flex', flexDirection: 'column', gap: 2,
            }}
          >
            {NAV.map((l, i) => {
              const on = active(l.to)
              return (
                <motion.div key={l.to} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                  <Link
                    to={l.to}
                    style={{
                      display: 'block', padding: '11px 16px', borderRadius: 10,
                      fontSize: 15, fontWeight: 600, fontFamily: F.head,
                      color: on ? C.blue500 : C.body,
                      background: on ? C.blue50 : 'transparent',
                      transition: 'all 0.15s',
                    }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              )
            })}
            <div style={{ padding: '8px 8px 0', marginTop: 4, borderTop: `1px solid ${C.border}` }}>
              <Link
                to="/contact"
                style={{
                  display: 'block', textAlign: 'center',
                  padding: '12px 16px', borderRadius: 10,
                  fontSize: 15, fontWeight: 700, fontFamily: F.head,
                  color: '#fff', background: G.brand, boxShadow: S.btn,
                }}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-btn  { display: none  !important; }
        @media (max-width: 860px) {
          .desktop-nav { display: none  !important; }
          .mobile-btn  { display: flex  !important; }
        }
      `}</style>
    </>
  )
}
