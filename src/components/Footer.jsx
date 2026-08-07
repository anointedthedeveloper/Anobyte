import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { HiEnvelope } from 'react-icons/hi2'
import { C, G, S, F, maxW, gutter } from '../styles/tokens'

const cols = {
  Company:   [{ l: 'About',           to: '/about'    }, { l: 'Process',        to: '/process'  }, { l: 'Contact',        to: '/contact'  }],
  Services:  [{ l: 'Web & Mobile',    to: '/services' }, { l: 'Cloud & DevOps', to: '/services' }, { l: 'Design',         to: '/services' }, { l: 'Automation',     to: '/services' }],
  Resources: [{ l: 'Projects',        to: '/projects' }, { l: 'FAQ',            to: '/process'  }],
  Legal:     [{ l: 'Privacy Policy',  to: '#'         }, { l: 'Terms',          to: '#'         }],
}

export default function Footer() {
  const [email, setEmail]   = useState('')
  const [subbed, setSubbed] = useState(false)

  return (
    <footer style={{ background: '#06081A', color: '#fff' }}>

      {/* ── CTA row ── */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: maxW, margin: '0 auto', padding: `40px ${gutter}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <h3 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(1.3rem,2vw,1.7rem)', color: '#fff', marginBottom: 6, letterSpacing: '-0.025em' }}>
              Have a project in mind?
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Let's talk about what you're building.</p>
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 22px', borderRadius: 11, fontSize: 14, fontWeight: 700, fontFamily: F.head, color: '#fff', background: G.brand, boxShadow: S.btn, whiteSpace: 'nowrap' }}
            >
              Get in Touch <HiArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Main columns ── */}
      <div style={{ maxWidth: maxW, margin: '0 auto', padding: `52px ${gutter} 36px` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 32 }} className="footer-grid">

          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16, textDecoration: 'none' }}>
              <img src="/favicon.png" alt="AnoByte Technologies" style={{ height: 38, width: 'auto', objectFit: 'contain', flexShrink: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25 }}>
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
                  color: 'rgba(255,255,255,0.32)', letterSpacing: '0.01em',
                }}>
                  Precision in Every Byte
                </span>
              </div>
            </Link>
            <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(255,255,255,0.38)', marginBottom: 24, maxWidth: 240 }}>
              Engineering-led product studio. We design and build software that works.
            </p>

            {/* Newsletter */}
            {subbed ? (
              <p style={{ fontSize: 13, fontWeight: 600, fontFamily: F.head, color: C.green }}>✓ Subscribed</p>
            ) : (
              <form
                onSubmit={e => { e.preventDefault(); if (email) setSubbed(true) }}
                style={{ display: 'flex', gap: 8 }}
              >
                <div style={{ flex: 1, position: 'relative' }}>
                  <HiEnvelope style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.2)' }} size={14} />
                  <input
                    type="email" value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="Email address"
                    style={{ width: '100%', paddingLeft: 32, paddingRight: 10, paddingTop: 9, paddingBottom: 9, borderRadius: 9, fontSize: 13, color: '#fff', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', outline: 'none', fontFamily: F.body }}
                    onFocus={e => { e.target.style.borderColor = 'rgba(75,110,245,0.5)' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
                  />
                </div>
                <button type="submit" style={{ padding: '9px 14px', borderRadius: 9, fontSize: 13, fontWeight: 700, fontFamily: F.head, color: '#fff', background: G.brand, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                  Join
                </button>
              </form>
            )}
          </div>

          {/* Link columns */}
          {Object.entries(cols).map(([cat, items]) => (
            <div key={cat}>
              <p style={{ fontSize: 11, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: 16 }}>
                {cat}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map(({ l, to }) => (
                  <li key={l}>
                    <Link
                      to={to}
                      style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', transition: 'color 0.18s' }}
                      onMouseEnter={e => { e.target.style.color = '#fff' }}
                      onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.38)' }}
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: 48, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.22)' }}>
            © {new Date().getFullYear()} AnoByte Technologies. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.18)', fontFamily: F.head }}>
            Precision in Every Byte
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr 1fr; }
        @media (max-width: 860px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 500px) { .footer-grid { grid-template-columns: 1fr; } }
      `}</style>
    </footer>
  )
}
