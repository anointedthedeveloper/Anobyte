import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { HiEnvelope, HiMapPin, HiPhone } from 'react-icons/hi2'
import { C, G, S, F, maxW, gutter } from '../styles/tokens'

const WHATSAPP_NUMBER = '2348101209470'
const WHATSAPP_URL    = `https://wa.me/${WHATSAPP_NUMBER}`

const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L.057 23.882l6.231-1.635A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.88 9.88 0 01-5.031-1.375l-.361-.214-3.741.981.999-3.648-.235-.374A9.859 9.859 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118c5.467 0 9.882 4.415 9.882 9.882 0 5.468-4.415 9.882-9.882 9.882z"/>
  </svg>
)

const NAV_COLS = [
  {
    heading: 'Company',
    links: [
      { l: 'About Us',    to: '/about'   },
      { l: 'Our Process', to: '/process' },
      { l: 'Projects',    to: '/projects'},
      { l: 'Contact',     to: '/contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { l: 'Web Development',    to: '/services/websites-web-apps'         },
      { l: 'Custom Software',    to: '/services/custom-software'            },
      { l: 'Business Systems',   to: '/services/custom-software'            },
      { l: 'Mobile Applications',to: '/services/mobile-applications'        },
      { l: 'APIs & Integrations',to: '/services/api-integrations'           },
    ],
  },
]

const SOCIALS = [
  {
    label: 'WhatsApp',
    href: WHATSAPP_URL,
    hoverColor: 'rgba(37,211,102,0.18)',
    hoverBorder: 'rgba(37,211,102,0.4)',
    icon: <WhatsAppIcon />,
  },
  {
    label: 'LinkedIn',
    href: '#',
    hoverColor: 'rgba(79,114,248,0.16)',
    hoverBorder: 'rgba(79,114,248,0.38)',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/AnoByte-Technologies',
    hoverColor: 'rgba(79,114,248,0.16)',
    hoverBorder: 'rgba(79,114,248,0.38)',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    hoverColor: 'rgba(79,114,248,0.16)',
    hoverBorder: 'rgba(79,114,248,0.38)',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const [email,  setEmail]  = useState('')
  const [subbed, setSubbed] = useState(false)

  return (
    <footer style={{ background: '#0F1535', color: '#fff', position: 'relative', overflow: 'hidden' }}>

      {/* ── Background glows ── */}
      <div style={{ position: 'absolute', top: '-60px', left: '15%',  width: 560, height: 320, borderRadius: '50%', background: C.blue500,   filter: 'blur(180px)', opacity: 0.10, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0,   right: '8%',   width: 420, height: 300, borderRadius: '50%', background: C.violet500, filter: 'blur(160px)', opacity: 0.09, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40%',  left: '-5%',   width: 300, height: 300, borderRadius: '50%', background: C.violet500, filter: 'blur(140px)', opacity: 0.06, pointerEvents: 'none' }} />

      {/* ── Top CTA band ── */}
      <div style={{ position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{
          maxWidth: maxW, margin: '0 auto',
          padding: `clamp(40px,5.5vw,64px) ${gutter}`,
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 28,
        }}>
          <div style={{ maxWidth: 480 }}>
            <p style={{
              fontSize: 11, fontWeight: 700, fontFamily: F.head,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: C.blue500, marginBottom: 12,
            }}>
              Let's work together
            </p>
            <h2 style={{
              fontFamily: F.head, fontWeight: 800,
              fontSize: 'clamp(1.5rem,2.5vw,2.2rem)',
              color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.2,
              marginBottom: 10,
            }}>
              Have a project in mind?
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.38)', maxWidth: 400 }}>
              Tell us what you're building and we'll get back to you within one business day.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '13px 28px', borderRadius: 12,
                  fontSize: 14, fontWeight: 700, fontFamily: F.head,
                  color: '#fff', background: G.brand, boxShadow: S.btn,
                  whiteSpace: 'nowrap', textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = S.btnH }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = S.btn }}
              >
                Start a Conversation <HiArrowRight size={14} />
              </Link>
            </motion.div>
            <a
              href="mailto:anobytetechnologies@gmail.com"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                fontSize: 13, color: 'rgba(255,255,255,0.38)',
                textDecoration: 'none', transition: 'color 0.16s',
                fontFamily: F.body,
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.38)' }}
            >
              <HiEnvelope size={13} /> anobytetechnologies@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div style={{
        position: 'relative', maxWidth: maxW, margin: '0 auto',
        padding: `clamp(48px,6vw,72px) ${gutter} 0`,
      }}>
        <div className="footer-grid">

          {/* ── Brand column ── */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>

            {/* Logo */}
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 20, textDecoration: 'none' }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                background: 'rgba(79,114,248,0.12)',
                border: '1px solid rgba(79,114,248,0.22)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img src="/favicon.png" alt="Anobyte Technologies" style={{ height: 26, width: 'auto', objectFit: 'contain' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25 }}>
                <span style={{
                  fontFamily: F.head, fontWeight: 800, fontSize: 15.5,
                  background: G.brand,
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  letterSpacing: '-0.02em',
                }}>
                  Anobyte Technologies
                </span>
                <span style={{ fontFamily: F.body, fontSize: 10.5, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.02em' }}>
                  Precision in Every Byte
                </span>
              </div>
            </Link>

            {/* Tagline */}
            <p style={{ fontSize: 13.5, lineHeight: 1.85, color: 'rgba(255,255,255,0.34)', marginBottom: 28, maxWidth: 270 }}>
              We build websites, web apps, custom software, and business systems designed around how your team works.
            </p>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
              {[
                { Icon: HiEnvelope, text: 'anobytetechnologies@gmail.com', href: 'mailto:anobytetechnologies@gmail.com' },
                { Icon: HiPhone,    text: '+234 810 120 9470',              href: 'tel:+2348101209470'                  },
                {
                  Icon: () => <WhatsAppIcon />,
                  text: 'Chat on WhatsApp',
                  href: WHATSAPP_URL,
                },
                { Icon: HiMapPin,   text: 'Remote · Worldwide',            href: null },
              ].map(({ Icon, text, href }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                  <div style={{
                    width: 26, height: 26, borderRadius: 7, flexShrink: 0,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={12} style={{ color: 'rgba(255,255,255,0.35)' }} />
                  </div>
                  {href ? (
                    <a href={href} style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.16s' }}
                      onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
                    >{text}</a>
                  ) : (
                    <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.35)' }}>{text}</span>
                  )}
                </div>
              ))}
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
                    width: 36, height: 36, borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.38)',
                    transition: 'all 0.18s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = s.hoverColor
                    e.currentTarget.style.borderColor = s.hoverBorder
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.38)'
                    e.currentTarget.style.transform = 'none'
                  }}
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
                fontSize: 10.5, fontWeight: 700, fontFamily: F.head,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.22)', marginBottom: 20,
              }}>
                {col.heading}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 13 }}>
                {col.links.map(({ l, to }) => (
                  <li key={l}>
                    <Link
                      to={to}
                      className="footer-link"
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
              fontSize: 10.5, fontWeight: 700, fontFamily: F.head,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.22)', marginBottom: 20,
            }}>
              Stay Updated
            </p>

            <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(255,255,255,0.32)', marginBottom: 18 }}>
              Occasional updates on what we're building and thinking about.
            </p>

            {subbed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '12px 16px', borderRadius: 12,
                  background: 'rgba(0,200,122,0.08)',
                  border: '1px solid rgba(0,200,122,0.18)',
                }}
              >
                <div style={{
                  width: 22, height: 22, borderRadius: 6,
                  background: 'rgba(0,200,122,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <span style={{ fontSize: 11, color: C.green }}>✓</span>
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, fontFamily: F.head, color: C.green }}>
                  You're subscribed!
                </span>
              </motion.div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); if (email.trim()) setSubbed(true) }}>
                <div style={{ position: 'relative', marginBottom: 10 }}>
                  <HiEnvelope
                    size={13}
                    style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.20)', pointerEvents: 'none' }}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    style={{
                      width: '100%', boxSizing: 'border-box',
                      paddingLeft: 34, paddingRight: 12,
                      paddingTop: 11, paddingBottom: 11,
                      borderRadius: 10, fontSize: 13,
                      color: '#fff',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.09)',
                      outline: 'none', fontFamily: F.body,
                      transition: 'border-color 0.18s, background 0.18s',
                    }}
                    onFocus={e  => { e.target.style.borderColor = 'rgba(79,114,248,0.5)'; e.target.style.background = 'rgba(79,114,248,0.06)' }}
                    onBlur={e   => { e.target.style.borderColor = 'rgba(255,255,255,0.09)'; e.target.style.background = 'rgba(255,255,255,0.05)' }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: '100%', padding: '11px 16px', borderRadius: 10,
                    fontSize: 13, fontWeight: 700, fontFamily: F.head,
                    color: '#fff', background: G.brand, border: 'none',
                    boxShadow: '0 2px 12px rgba(79,114,248,0.30)',
                    cursor: 'pointer', transition: 'opacity 0.18s, box-shadow 0.18s',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(79,114,248,0.45)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(79,114,248,0.30)' }}
                >
                  Subscribe <HiArrowRight size={13} />
                </button>
              </form>
            )}

            {/* Trust note */}
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.18)', marginTop: 12, lineHeight: 1.6 }}>
              No spam. Unsubscribe anytime.
            </p>
          </div>

        </div>
      </div>

      {/* ── Gradient divider ── */}
      <div style={{
        position: 'relative', maxWidth: maxW, margin: '48px auto 0',
        padding: `0 ${gutter}`,
      }}>
        <div style={{
          height: 1,
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent 100%)',
        }} />
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ position: 'relative', maxWidth: maxW, margin: '0 auto', padding: `20px ${gutter} 28px` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.18)', fontFamily: F.body }}>
            © {new Date().getFullYear()} Anobyte Technologies Ltd. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
            {[{ l: 'Privacy Policy', to: '/privacy' }, { l: 'Terms of Service', to: '/terms' }].map(({ l, to }) => (
              <Link
                key={l}
                to={to}
                style={{ fontSize: 12, color: 'rgba(255,255,255,0.20)', transition: 'color 0.16s', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.20)' }}
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
          grid-template-columns: 1.8fr 1fr 1.1fr 1.5fr;
          gap: clamp(28px, 4vw, 56px);
        }
        .footer-link {
          font-size: 13.5px;
          color: rgba(255,255,255,0.38);
          text-decoration: none;
          transition: color 0.16s;
          position: relative;
          display: inline-block;
          font-family: ${F.body};
        }
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: ${C.blue500};
          transition: width 0.22s ease;
        }
        .footer-link:hover {
          color: rgba(255,255,255,0.82);
        }
        .footer-link:hover::after {
          width: 100%;
        }
        @media (max-width: 1060px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr; }
        }
        @media (max-width: 680px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 420px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  )
}
