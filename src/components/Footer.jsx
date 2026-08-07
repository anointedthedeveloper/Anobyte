import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { HiEnvelope, HiMapPin } from 'react-icons/hi2'
import { C, G, S, F, maxW, gutter } from '../styles/tokens'

const NAV_COLS = [
  {
    heading: 'Company',
    links: [
      { l: 'About Us',   to: '/about'    },
      { l: 'Our Process',to: '/process'  },
      { l: 'Contact',    to: '/contact'  },
    ],
  },
  {
    heading: 'Services',
    links: [
      { l: 'Web Development',   to: '/services' },
      { l: 'Custom Software',   to: '/services' },
      { l: 'Business Systems',  to: '/services' },
      { l: 'APIs & Integrations',to: '/services' },
    ],
  },
  {
    heading: 'Work',
    links: [
      { l: 'Projects',  to: '/projects' },
      { l: 'FAQ',       to: '/process'  },
    ],
  },
]

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/AnoByte-Technologies',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const [email,  setEmail]  = useState('')
  const [subbed, setSubbed] = useState(false)

  return (
    <footer style={{ background: '#0B0E2A', color: '#fff', position: 'relative', overflow: 'hidden' }}>

      {/* ── Subtle background glow ── */}
      <div style={{ position: 'absolute', top: 0, left: '20%', width: 500, height: 300, borderRadius: '50%', background: C.blue500, filter: 'blur(160px)', opacity: 0.06, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, right: '10%', width: 400, height: 280, borderRadius: '50%', background: C.violet500, filter: 'blur(160px)', opacity: 0.05, pointerEvents: 'none' }} />

      {/* ── Top CTA band ── */}
      <div style={{ position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{
          maxWidth: maxW, margin: '0 auto',
          padding: `clamp(36px,5vw,56px) ${gutter}`,
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 24,
        }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 10 }}>
              Let's work together
            </p>
            <h2 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(1.4rem,2.4vw,2rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.2 }}>
              Have a project in mind?
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.38)', marginTop: 6, maxWidth: 380 }}>
              Tell us what you're building and we'll get back to you within one business day.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 26px', borderRadius: 12,
                fontSize: 14, fontWeight: 700, fontFamily: F.head,
                color: '#fff', background: G.brand, boxShadow: S.btn,
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = S.btnH }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = S.btn }}
            >
              Start a Conversation <HiArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div style={{ position: 'relative', maxWidth: maxW, margin: '0 auto', padding: `clamp(44px,6vw,64px) ${gutter} 0` }}>
        <div className="footer-grid">

          {/* ── Brand column ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {/* Logo + name */}
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 18, textDecoration: 'none' }}>
              <img
                src="/favicon.png"
                alt="Anobyte Technologies"
                style={{ height: 40, width: 'auto', objectFit: 'contain', flexShrink: 0 }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25 }}>
                <span style={{
                  fontFamily: F.head, fontWeight: 800, fontSize: 16,
                  background: G.brand,
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  letterSpacing: '-0.02em',
                }}>
                  Anobyte Technologies
                </span>
                <span style={{ fontFamily: F.body, fontWeight: 400, fontSize: 10, color: 'rgba(255,255,255,0.30)', letterSpacing: '0.01em' }}>
                  Precision in Every Byte
                </span>
              </div>
            </Link>

            {/* Tagline */}
            <p style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(255,255,255,0.36)', marginBottom: 24, maxWidth: 260 }}>
              We build websites, web apps, custom software, and business systems designed around how your team works.
            </p>

            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <HiMapPin size={13} style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Remote · Worldwide</span>
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 8 }}>
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 34, height: 34, borderRadius: 9,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    color: 'rgba(255,255,255,0.45)',
                    transition: 'all 0.18s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(79,114,248,0.18)'; e.currentTarget.style.borderColor = 'rgba(79,114,248,0.4)'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Nav columns ── */}
          {NAV_COLS.map(col => (
            <div key={col.heading}>
              <p style={{
                fontSize: 11, fontWeight: 700, fontFamily: F.head,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)', marginBottom: 18,
              }}>
                {col.heading}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map(({ l, to }) => (
                  <li key={l}>
                    <Link
                      to={to}
                      style={{ fontSize: 13, color: 'rgba(255,255,255,0.40)', transition: 'color 0.16s' }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#fff' }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.40)' }}
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Newsletter column ── */}
          <div>
            <p style={{
              fontSize: 11, fontWeight: 700, fontFamily: F.head,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)', marginBottom: 18,
            }}>
              Stay Updated
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.36)', marginBottom: 16 }}>
              Occasional updates on what we're building and thinking about.
            </p>

            {subbed ? (
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '10px 14px', borderRadius: 10,
                background: 'rgba(0,200,122,0.1)', border: '1px solid rgba(0,200,122,0.2)',
              }}>
                <span style={{ fontSize: 14 }}>✓</span>
                <span style={{ fontSize: 13, fontWeight: 600, fontFamily: F.head, color: C.green }}>You're subscribed</span>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); if (email.trim()) setSubbed(true) }}>
                <div style={{ position: 'relative', marginBottom: 8 }}>
                  <HiEnvelope
                    size={14}
                    style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.22)', pointerEvents: 'none' }}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    style={{
                      width: '100%', paddingLeft: 32, paddingRight: 12,
                      paddingTop: 10, paddingBottom: 10,
                      borderRadius: 10, fontSize: 13,
                      color: '#fff',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.10)',
                      outline: 'none', fontFamily: F.body,
                      transition: 'border-color 0.18s',
                    }}
                    onFocus={e  => { e.target.style.borderColor = 'rgba(79,114,248,0.55)' }}
                    onBlur={e   => { e.target.style.borderColor = 'rgba(255,255,255,0.10)' }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: '100%', padding: '10px 16px', borderRadius: 10,
                    fontSize: 13, fontWeight: 700, fontFamily: F.head,
                    color: '#fff', background: G.brand,
                    boxShadow: '0 2px 10px rgba(79,114,248,0.28)',
                    cursor: 'pointer', transition: 'opacity 0.18s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.88' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ position: 'relative', maxWidth: maxW, margin: '0 auto', padding: `24px ${gutter} 28px` }}>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.20)' }}>
            © {new Date().getFullYear()} Anobyte Technologies Ltd. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {[{ l: 'Privacy Policy', to: '#' }, { l: 'Terms of Service', to: '#' }].map(({ l, to }) => (
              <Link
                key={l}
                to={to}
                style={{ fontSize: 12, color: 'rgba(255,255,255,0.22)', transition: 'color 0.16s' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.22)' }}
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1.4fr;
          gap: 40px;
        }
        @media (max-width: 1000px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 400px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  )
}
