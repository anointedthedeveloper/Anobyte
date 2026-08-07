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

  const isActive = to => to === '/' ? loc.pathname === '/' : loc.pathname.startsWith(to)

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${scrolled ? C.border : 'rgba(229,232,242,0.6)'}`,
          boxShadow: scrolled ? S.nav : 'none',
          transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
        }}
      >
        <div style={{
          maxWidth: maxW, margin: '0 auto',
          padding: `0 ${gutter}`,
          height: 72,
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}>

          {/* ── Logo ── */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0, textDecoration: 'none' }}>
            <motion.img
              src="/favicon.png"
              alt="Anobyte Technologies"
              whileHover={{ scale: 1.08, rotate: 5 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              style={{ height: 40, width: 'auto', objectFit: 'contain', flexShrink: 0 }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
              <span style={{
                fontFamily: F.head, fontWeight: 800, fontSize: 16,
                background: G.brand,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                letterSpacing: '-0.02em',
              }}>
                Anobyte Technologies
              </span>
              <span style={{
                fontFamily: F.body, fontWeight: 400, fontSize: 10,
                color: C.muted, letterSpacing: '0.02em',
              }}>
                Precision in Every Byte
              </span>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
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

          {/* ── CTA ── */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Link to="/contact" className="nav-cta">
              Get Started →
            </Link>
          </div>

          {/* ── Hamburger ── */}
          <button
            className="mobile-btn"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            style={{
              width: 42, height: 42, borderRadius: 10, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: C.ink3, cursor: 'pointer',
              background: open ? C.bg : 'transparent',
              border: `1px solid ${open ? C.border : 'transparent'}`,
              transition: 'all 0.2s',
            }}
          >
            <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
              {open
                ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              }
            </motion.div>
          </button>
        </div>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0,   scale: 1    }}
            exit={{   opacity: 0, y: -12,  scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', top: 80, left: 12, right: 12, zIndex: 99,
              background: 'rgba(255,255,255,0.99)',
              backdropFilter: 'blur(24px)',
              borderRadius: 18,
              border: `1px solid ${C.border}`,
              boxShadow: '0 24px 64px rgba(11,14,42,0.14)',
              padding: '10px 10px 14px',
              display: 'flex', flexDirection: 'column', gap: 2,
            }}
          >
            {NAV.map((l, i) => {
              const on = isActive(l.to)
              return (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link to={l.to} className={`mob-link${on ? ' mob-link--active' : ''}`}>
                    {l.label}
                    {on && <span className="mob-active-dot" />}
                  </Link>
                </motion.div>
              )
            })}
            <div style={{ padding: '8px 6px 0', marginTop: 6, borderTop: `1px solid ${C.border}` }}>
              <Link to="/contact" className="mob-cta">Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        /* ── Breakpoints ── */
        .desktop-nav { display: flex !important; }
        .mobile-btn  { display: none  !important; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-btn  { display: flex !important; }
        }

        /* ─────────────────────────────────────
           DESKTOP LINK — base state
        ───────────────────────────────────── */
        .nav-link {
          position: relative;
          display: inline-block;
          padding: 9px 18px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          font-family: "Space Grotesk", sans-serif;
          color: ${C.body};
          text-decoration: none;
          white-space: nowrap;
          letter-spacing: -0.01em;
          transition: color 0.2s ease, background 0.2s ease;
        }

        /* ─────────────────────────────────────
           HOVER — subtle ink colour + bg tint
        ───────────────────────────────────── */
        .nav-link:hover {
          color: ${C.ink};
          background: ${C.bg};
        }

        /* ─────────────────────────────────────
           ACTIVE — gradient pill with glow
           Unique treatment: the link sits inside
           a soft gradient capsule with a bottom
           glow bleeding out underneath
        ───────────────────────────────────── */
        .nav-link--active {
          color: #fff !important;
          font-weight: 700 !important;
          background: linear-gradient(135deg, #4F72F8 0%, #8B3FF5 100%) !important;
          box-shadow:
            0 4px 16px rgba(79,114,248,0.38),
            0 1px 4px rgba(79,114,248,0.25);
        }
        .nav-link--active:hover {
          color: #fff !important;
          opacity: 0.92;
          background: linear-gradient(135deg, #4F72F8 0%, #8B3FF5 100%) !important;
        }

        /* ─────────────────────────────────────
           CTA BUTTON
        ───────────────────────────────────── */
        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 24px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          font-family: "Space Grotesk", sans-serif;
          color: #fff;
          background: linear-gradient(135deg, #4F72F8 0%, #8B3FF5 100%);
          box-shadow: 0 4px 14px rgba(79,114,248,0.42);
          text-decoration: none;
          white-space: nowrap;
          transition: box-shadow 0.2s, transform 0.15s, opacity 0.2s;
          border: 1.5px solid rgba(255,255,255,0.15);
        }
        .nav-cta:hover {
          box-shadow: 0 6px 24px rgba(79,114,248,0.56);
          transform: translateY(-1px);
        }
        .nav-cta:active {
          transform: translateY(0);
          opacity: 0.9;
        }

        /* ─────────────────────────────────────
           MOBILE LINKS
        ───────────────────────────────────── */
        .mob-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 16px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          font-family: "Space Grotesk", sans-serif;
          color: ${C.body};
          text-decoration: none;
          transition: background 0.18s, color 0.18s;
        }
        .mob-link:hover {
          background: ${C.bg};
          color: ${C.ink};
        }
        .mob-link--active {
          color: ${C.blue500} !important;
          background: ${C.blue50} !important;
          font-weight: 700 !important;
        }
        .mob-link--active:hover {
          background: #dce5ff !important;
        }

        /* Small pulsing dot on active mobile item */
        .mob-active-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4F72F8, #8B3FF5);
          box-shadow: 0 0 6px rgba(79,114,248,0.6);
          animation: pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        .mob-cta {
          display: block;
          text-align: center;
          padding: 14px 16px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          font-family: "Space Grotesk", sans-serif;
          color: #fff;
          background: linear-gradient(135deg, #4F72F8 0%, #8B3FF5 100%);
          box-shadow: 0 4px 14px rgba(79,114,248,0.35);
          text-decoration: none;
          transition: opacity 0.18s, transform 0.15s;
        }
        .mob-cta:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        /* ─────────────────────────────────────
           LARGE SCREEN tweaks (1440px+)
        ───────────────────────────────────── */
        @media (min-width: 1440px) {
          .nav-link  { font-size: 16px; padding: 10px 20px; }
          .nav-cta   { font-size: 16px; padding: 11px 28px; }
        }
        @media (min-width: 1920px) {
          .nav-link  { font-size: 17px; padding: 10px 22px; }
          .nav-cta   { font-size: 17px; padding: 12px 32px; }
        }
      `}</style>
    </>
  )
}
