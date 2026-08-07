import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiArrowLeft, HiCheckCircle } from 'react-icons/hi'
import {
  HiComputerDesktop, HiCodeBracket, HiDevicePhoneMobile,
  HiCog6Tooth, HiArrowsRightLeft, HiWrenchScrewdriver,
} from 'react-icons/hi2'
import PageWrapper from '../components/ui/PageWrapper'
import HomeCTA from '../components/sections/HomeCTA'
import { SERVICES_DATA } from '../data/services'
import { C, G, F, S, maxW, gutter } from '../styles/tokens'

const ICONS = {
  'websites-web-apps':         HiComputerDesktop,
  'custom-software':           HiCodeBracket,
  'mobile-applications':       HiDevicePhoneMobile,
  'business-automation':       HiCog6Tooth,
  'api-integrations':          HiArrowsRightLeft,
  'design-improvement-support':HiWrenchScrewdriver,
}

const fade = (i = 0) => ({
  initial:    { opacity: 0, y: 20 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
})

export default function ServiceDetailPage() {
  const { id }     = useParams()
  const navigate   = useNavigate()
  const service    = SERVICES_DATA.find(s => s.id === id)
  const others     = SERVICES_DATA.filter(s => s.id !== id)

  if (!service) {
    return (
      <PageWrapper>
        <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
          <p style={{ fontFamily: F.head, fontWeight: 700, fontSize: 20, color: C.ink, marginBottom: 16 }}>Service not found.</p>
          <Link to="/services" style={{ color: C.blue500, fontFamily: F.head, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>← Back to Services</Link>
        </div>
      </PageWrapper>
    )
  }

  const Icon = ICONS[id] || HiComputerDesktop

  return (
    <PageWrapper>
      {/* ── Hero ── */}
      <section style={{
        background: '#fff',
        paddingTop: 'clamp(96px,12vw,130px)',
        paddingBottom: 'clamp(48px,7vw,80px)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '5%', left: '-5%', width: 360, height: 360, borderRadius: '50%', background: service.accent, filter: 'blur(150px)', opacity: 0.07, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '5%', right: '-5%', width: 280, height: 280, borderRadius: '50%', background: service.accent, filter: 'blur(120px)', opacity: 0.05, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', maxWidth: maxW, margin: '0 auto', padding: `0 ${gutter}` }}>

          {/* Back link */}
          <motion.div {...fade(0)} style={{ marginBottom: 28 }}>
            <Link
              to="/services"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 600, fontFamily: F.head, color: C.muted, textDecoration: 'none', transition: 'color 0.18s' }}
              onMouseEnter={e => { e.currentTarget.style.color = C.blue500 }}
              onMouseLeave={e => { e.currentTarget.style.color = C.muted }}
            >
              <HiArrowLeft size={14} /> Back to Services
            </Link>
          </motion.div>

          {/* Hero content */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'flex-start' }} className="svc-hero-grid">
            <div>
              <motion.div {...fade(1)} style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 11, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.14em', textTransform: 'uppercase', color: service.accent }}>
                  {service.n} — Service
                </span>
              </motion.div>

              <motion.h1 {...fade(2)} style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(2rem,4vw,3.4rem)', letterSpacing: '-0.04em', lineHeight: 1.1, color: C.ink, marginBottom: 20 }}>
                {service.title}
              </motion.h1>

              <motion.p {...fade(3)} style={{ fontSize: 'clamp(15px,1.5vw,18px)', lineHeight: 1.8, color: C.body, maxWidth: 580, marginBottom: 32 }}>
                {service.fullDesc}
              </motion.p>

              <motion.div {...fade(4)} style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <Link
                  to="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', borderRadius: 12, fontSize: 15, fontWeight: 700, fontFamily: F.head, color: '#fff', background: G.brand, boxShadow: S.btn, textDecoration: 'none' }}
                >
                  Start a conversation <HiArrowRight size={15} />
                </Link>
                <Link
                  to="/services"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 26px', borderRadius: 12, fontSize: 15, fontWeight: 600, fontFamily: F.head, color: C.ink3, background: '#fff', border: `1.5px solid ${C.border}`, textDecoration: 'none' }}
                >
                  All Services
                </Link>
              </motion.div>
            </div>

            {/* Icon block */}
            <motion.div {...fade(2)} style={{ flexShrink: 0 }} className="svc-hero-icon">
              <div style={{
                width: 96, height: 96, borderRadius: 24,
                background: service.bg,
                border: `2px solid ${service.accent}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 8px 32px ${service.accent}22`,
              }}>
                <Icon size={44} style={{ color: service.accent }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section style={{ background: C.bg, padding: `clamp(56px,7vw,88px) 0` }}>
        <div style={{ maxWidth: maxW, margin: '0 auto', padding: `0 ${gutter}` }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px,4vw,48px)', alignItems: 'start' }} className="svc-content-grid">

            {/* Left — what we build */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              style={{ background: '#fff', borderRadius: 20, border: `1px solid ${C.border}`, boxShadow: S.card, padding: 'clamp(24px,4vw,36px)' }}
            >
              <p style={{ fontSize: 11, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.14em', textTransform: 'uppercase', color: service.accent, marginBottom: 16 }}>
                What we build
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {service.whatWeBuild.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}
                  >
                    <HiCheckCircle size={17} style={{ color: service.accent, flexShrink: 0, marginTop: 1 }} />
                    <span style={{ fontSize: 14, lineHeight: 1.65, color: C.body }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right — what's included + approach */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                style={{ background: '#fff', borderRadius: 20, border: `1px solid ${C.border}`, boxShadow: S.card, padding: 'clamp(24px,4vw,36px)' }}
              >
                <p style={{ fontSize: 11, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.14em', textTransform: 'uppercase', color: service.accent, marginBottom: 16 }}>
                  What's included
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {service.includes.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <div style={{ width: 18, height: 18, borderRadius: 5, background: service.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <polyline points="2 6 5 9 10 3" stroke={service.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span style={{ fontSize: 14, lineHeight: 1.65, color: C.body }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Approach callout */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  background: service.bg,
                  borderRadius: 16,
                  borderLeft: `4px solid ${service.accent}`,
                  padding: '22px 24px',
                }}
              >
                <p style={{ fontSize: 11, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.14em', textTransform: 'uppercase', color: service.accent, marginBottom: 10 }}>
                  Our approach
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: C.body }}>{service.approach}</p>
              </motion.div>

              {/* Best for tags */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                style={{ background: '#fff', borderRadius: 16, border: `1px solid ${C.border}`, padding: '20px 22px' }}
              >
                <p style={{ fontSize: 11, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted, marginBottom: 12 }}>
                  Best for
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {service.bestFor.map(tag => (
                    <span key={tag} style={{ padding: '5px 12px', borderRadius: 100, fontSize: 12, fontWeight: 600, fontFamily: F.head, background: service.bg, border: `1px solid ${service.accent}25`, color: service.accent }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── See also — other services ── */}
      <section style={{ background: C.bg, padding: `clamp(52px,7vw,80px) 0` }}>
        <div style={{ maxWidth: maxW, margin: '0 auto', padding: `0 ${gutter}` }}>
          <div style={{ marginBottom: 32 }}>
            <p style={{ fontSize: 11, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted, marginBottom: 8 }}>
              See also
            </p>
            <h2 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(1.4rem,2.2vw,1.9rem)', letterSpacing: '-0.03em', color: C.ink }}>
              Other services we offer
            </h2>
          </div>

          <div className="other-svc-grid">
            {others.map((s, i) => {
              const OtherIcon = ICONS[s.id] || HiComputerDesktop
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.38, delay: i * 0.06 }}
                >
                  <Link
                    to={`/services/${s.id}`}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 16,
                      padding: '18px 20px', borderRadius: 14,
                      background: '#fff', border: `1px solid ${C.border}`,
                      boxShadow: S.card, textDecoration: 'none',
                      transition: 'box-shadow 0.2s, border-color 0.2s, transform 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.boxShadow = `0 4px 20px ${s.accent}20`
                      e.currentTarget.style.borderColor = `${s.accent}50`
                      e.currentTarget.style.transform = 'translateX(4px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.boxShadow = S.card
                      e.currentTarget.style.borderColor = C.border
                      e.currentTarget.style.transform = 'none'
                    }}
                  >
                    {/* Accent bar on left */}
                    <div style={{ width: 3, height: 36, borderRadius: 2, background: s.accent, flexShrink: 0 }} />

                    {/* Icon */}
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <OtherIcon size={18} style={{ color: s.accent }} />
                    </div>

                    {/* Text */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontFamily: F.head, fontWeight: 700, fontSize: 14, color: C.ink, lineHeight: 1.3, marginBottom: 2 }}>{s.title}</p>
                      <p style={{ fontSize: 12, color: C.muted, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {s.shortDesc.slice(0, 72)}…
                      </p>
                    </div>

                    <HiArrowRight size={14} style={{ color: C.muted, flexShrink: 0 }} />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <HomeCTA />

      <style>{`
        .svc-hero-grid     { grid-template-columns: 1fr auto; }
        .svc-hero-icon     { display: flex; }
        .svc-content-grid  { grid-template-columns: 1fr 1fr; }
        .other-svc-grid    {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(10px, 1.5vw, 16px);
        }

        @media (max-width: 860px) {
          .svc-hero-grid    { grid-template-columns: 1fr; }
          .svc-hero-icon    { display: none; }
          .svc-content-grid { grid-template-columns: 1fr; }
          .other-svc-grid   { grid-template-columns: 1fr; }
        }
      `}</style>
    </PageWrapper>
  )
}
