import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { HiCodeBracket, HiCog6Tooth, HiArrowsRightLeft, HiComputerDesktop, HiDevicePhoneMobile, HiCircleStack, HiWrenchScrewdriver, HiPaintBrush } from 'react-icons/hi2'
import { C, G, S, F } from '../../styles/tokens'
import { Section, SectionHeader } from '../ui/Wrap'

/* ── Section 2: Intro 4-card overview ── */
const INTRO = [
  {
    Icon: HiCodeBracket,
    title: 'Web Development',
    desc: 'Professional websites and web applications designed for your customers and your business.',
    accent: C.blue500, bg: C.blue50,
  },
  {
    Icon: HiComputerDesktop,
    title: 'Custom Software',
    desc: 'Purpose-built applications created around your processes, requirements, and workflows.',
    accent: C.violet500, bg: C.violetLight,
  },
  {
    Icon: HiCog6Tooth,
    title: 'Business Systems',
    desc: 'Management platforms and internal tools that make everyday operations easier to handle.',
    accent: '#009955', bg: '#EDFFF7',
  },
  {
    Icon: HiArrowsRightLeft,
    title: 'APIs & Integrations',
    desc: 'Connect your applications, services, and data so your systems work together.',
    accent: '#0284C7', bg: '#EFF9FF',
  },
]

/* ── Section 3: Full service list ── */
const SERVICES = [
  { Icon: HiCodeBracket,       title: 'Website Development',       desc: 'Business websites, landing pages, portals, and custom web experiences.' },
  { Icon: HiComputerDesktop,   title: 'Web Applications',          desc: 'Dashboards, platforms, portals, SaaS applications, and customer-facing web applications.' },
  { Icon: HiCog6Tooth,         title: 'Custom Software',           desc: 'Software built specifically for your business instead of forcing your workflow into an existing product.' },
  { Icon: HiWrenchScrewdriver, title: 'Business Systems',          desc: 'School systems, management platforms, administrative tools, inventory systems, and other custom business applications.' },
  { Icon: HiDevicePhoneMobile, title: 'Mobile Applications',       desc: 'Cross-platform mobile applications designed for practical everyday use.' },
  { Icon: HiCircleStack,       title: 'API & Backend Development',  desc: 'Backend services, databases, authentication, APIs, integrations, and the infrastructure behind your applications.' },
  { Icon: HiArrowsRightLeft,   title: 'Automation & Integrations', desc: 'Connect systems and automate repetitive processes to reduce unnecessary manual work.' },
  { Icon: HiPaintBrush,        title: 'UI/UX Design',              desc: 'Interfaces and experiences designed around your users — clear, consistent, and easy to use.' },
]

const fade = (i, extra = {}) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1], ...extra },
})

export default function ServicesOverview() {
  return (
    <>
      {/* ── Section 2: Technology Built Around Your Business ── */}
      <Section bg={C.bg}>
        <SectionHeader
          eyebrow="What We Do"
          title="Technology Built Around"
          titleGrad="Your Business"
          subtitle="Every business has different requirements. We build digital solutions around yours — from a professional website to a complete custom system."
        />

        <div className="svc-intro-grid">
          {INTRO.map((s, i) => (
            <motion.div key={s.title} {...fade(i)}
              className="svc-intro-card"
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(79,114,248,0.13)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'none' }}
            >
              <div style={{ width: 46, height: 46, borderRadius: 13, background: s.bg, border: `1px solid ${s.accent}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <s.Icon size={22} style={{ color: s.accent }} />
              </div>
              <h3 style={{ fontFamily: F.head, fontWeight: 700, fontSize: 16, color: C.ink, marginBottom: 8, lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: C.body }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, fontFamily: F.head, color: C.blue500, textDecoration: 'none' }}>
            View All Services <HiArrowRight size={14} />
          </Link>
        </div>
      </Section>

      {/* ── Section 3: What We Build — full service list ── */}
      <Section bg="#fff">
        <SectionHeader
          eyebrow="What We Build"
          title="From websites to"
          titleGrad="complete systems"
          subtitle="We work across the different parts of a digital product, depending on what your business needs."
        />

        <div className="svc-full-grid">
          {SERVICES.map((s, i) => (
            <motion.div key={s.title} {...fade(i)}
              className="svc-full-card"
              onMouseEnter={e => { e.currentTarget.style.boxShadow = S.cardH; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = S.card;  e.currentTarget.style.transform = 'none' }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: C.bg, border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <s.Icon size={20} style={{ color: C.blue500 }} />
              </div>
              <p style={{ fontFamily: F.head, fontWeight: 700, fontSize: 15, color: C.ink, marginBottom: 6, lineHeight: 1.3 }}>{s.title}</p>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: C.body }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 44 }}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 12, fontSize: 15, fontWeight: 700, fontFamily: F.head, color: '#fff', background: G.brand, boxShadow: '0 4px 14px rgba(79,114,248,0.40)' }}>
              Explore All Services <HiArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </Section>

      <style>{`
        .svc-intro-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(14px, 2vw, 22px);
        }
        .svc-intro-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid ${C.border};
          padding: 24px 22px 28px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06);
          transition: box-shadow 0.22s, transform 0.22s;
        }
        .svc-full-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(12px, 1.8vw, 20px);
        }
        .svc-full-card {
          background: #fff;
          border-radius: 14px;
          border: 1px solid ${C.border};
          padding: 22px 20px 26px;
          box-shadow: ${S.card};
          transition: box-shadow 0.22s, transform 0.22s;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 900px) {
          .svc-intro-grid { grid-template-columns: repeat(2, 1fr); }
          .svc-full-grid  { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .svc-intro-grid { grid-template-columns: 1fr; }
          .svc-full-grid  { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
