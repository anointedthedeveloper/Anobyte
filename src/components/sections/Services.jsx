import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import {
  HiCodeBracket, HiDevicePhoneMobile, HiCog6Tooth,
  HiArrowsRightLeft, HiWrenchScrewdriver, HiComputerDesktop,
} from 'react-icons/hi2'
import { C, S, F } from '../../styles/tokens'
import { Section, SectionHeader } from '../ui/Wrap'
import { SERVICES_DATA } from '../../data/services'

const ICONS = {
  'websites-web-apps':          HiComputerDesktop,
  'custom-software':            HiCodeBracket,
  'mobile-applications':        HiDevicePhoneMobile,
  'business-automation':        HiCog6Tooth,
  'api-integrations':           HiArrowsRightLeft,
  'design-improvement-support': HiWrenchScrewdriver,
}

const CORE = SERVICES_DATA.map(s => ({ ...s, Icon: ICONS[s.id] || HiComputerDesktop }))

/* ─────────────────────────────────────────
   Section 1 — Core service cards
   Each card is a link to /services/:id
───────────────────────────────────────── */
export function CoreServices() {
  return (
    <Section bg="#fff">
      <SectionHeader
        eyebrow="What We Do"
        title="Six ways we can"
        titleGrad="help your business"
        subtitle="We focus on building things that work and solving real problems — not on listing technologies."
      />

      <div className="core-grid">
        {CORE.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
          >
            <Link to={`/services/${s.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div className="core-card" style={{ borderTopColor: s.accent }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ width: 46, height: 46, borderRadius: 13, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <s.Icon size={22} style={{ color: s.accent }} />
                  </div>
                  <span style={{ fontFamily: F.head, fontWeight: 900, fontSize: 28, color: '#F0F1F8', lineHeight: 1 }}>{s.n}</span>
                </div>

                <h3 style={{ fontFamily: F.head, fontWeight: 700, fontSize: 17, color: C.ink, marginBottom: 10, lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: C.body, flex: 1 }}>{s.shortDesc}</p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 20, color: s.accent }}>
                  <span style={{ fontSize: 13, fontWeight: 600, fontFamily: F.head }}>Learn more</span>
                  <HiArrowRight size={13} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <style>{`
        .core-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(16px, 2.5vw, 24px);
          align-items: start;
        }
        .core-card {
          background: #fff;
          border-radius: 18px;
          border: 1px solid ${C.border};
          border-top: 3px solid;
          box-shadow: ${S.card};
          padding: 24px 24px 28px;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: box-shadow 0.22s, transform 0.22s;
        }
        .core-card:hover {
          box-shadow: ${S.cardH};
          transform: translateY(-3px);
        }
        @media (max-width: 960px) { .core-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .core-grid { grid-template-columns: 1fr; } }
      `}</style>
    </Section>
  )
}

/* ─────────────────────────────────────────
   Section 2 — What can we build? pills
───────────────────────────────────────── */
const CAN_BUILD = [
  'Business websites', 'School websites & portals', 'Management systems',
  'Customer portals', 'Inventory systems', 'Examination platforms',
  'Mobile applications', 'Internal tools', 'Automation workflows',
  'API integrations', 'Custom dashboards', 'E-results platforms',
  'SaaS applications', 'Administrative software', 'Reporting systems',
]

export function WhatWeCanBuild() {
  return (
    <Section bg={C.bg}>
      <SectionHeader
        eyebrow="Capabilities"
        title="Things we've"
        titleGrad="built before"
        subtitle="Not an exhaustive list — but a good indicator of the kinds of problems we work on."
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', maxWidth: 800, margin: '0 auto' }}>
        {CAN_BUILD.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            style={{
              padding: '8px 18px', borderRadius: 100,
              fontSize: 14, fontWeight: 500, fontFamily: F.head,
              background: '#fff', border: `1px solid ${C.border}`,
              color: C.ink3, boxShadow: S.card,
              transition: 'border-color 0.2s, color 0.2s, transform 0.2s',
              cursor: 'default', display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.blue200; e.currentTarget.style.color = C.blue500; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.ink3; e.currentTarget.style.transform = 'none' }}
          >
            {item}
          </motion.span>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <p style={{ fontSize: 15, color: C.body, marginBottom: 16 }}>
          Don't see what you need? Chances are we can still help.
        </p>
        <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 15, fontWeight: 600, fontFamily: F.head, color: C.blue500, textDecoration: 'none' }}>
          Tell us what you're trying to build <HiArrowRight size={15} />
        </Link>
      </div>
    </Section>
  )
}

/* ─────────────────────────────────────────
   Section 3 — Not sure what you need?
───────────────────────────────────────── */
const NEEDS = [
  { label: 'A Website',         sub: 'I need a professional online presence.' },
  { label: 'A Web Application', sub: 'I need users to interact with a platform online.' },
  { label: 'Custom Software',   sub: 'I need software built around my business process.' },
  { label: 'A Mobile App',      sub: 'I need a mobile experience for my customers or team.' },
  { label: 'Automation',        sub: 'I want to reduce repetitive manual work.' },
  { label: 'Something Else',    sub: "I have an idea but I'm not sure where to start." },
]

export function NotSureSection() {
  const [hovered, setHovered] = useState(null)

  return (
    <Section bg="#fff">
      <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', marginBottom: 52 }}>
        <p style={{ fontSize: 11, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.blue500, marginBottom: 14 }}>
          Not Sure What You Need?
        </p>
        <h2 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(1.7rem,2.8vw,2.4rem)', letterSpacing: '-0.033em', lineHeight: 1.12, color: C.ink, marginBottom: 16 }}>
          That's okay.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.75, color: C.body }}>
          Tell us what you're trying to achieve and we'll help you figure out what needs to be built.
        </p>
      </div>

      <div className="needs-grid">
        {NEEDS.map((n, i) => (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <Link
              to="/contact"
              style={{ textDecoration: 'none', display: 'block' }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{
                padding: '22px 24px 26px', borderRadius: 16,
                border: `1.5px solid ${hovered === i ? C.blue500 : C.border}`,
                background: hovered === i ? C.blue50 : '#fff',
                boxShadow: hovered === i ? S.cardH : S.card,
                transition: 'all 0.2s', cursor: 'pointer',
              }}>
                <p style={{ fontFamily: F.head, fontWeight: 700, fontSize: 15, color: hovered === i ? C.blue500 : C.ink, marginBottom: 6, transition: 'color 0.2s' }}>
                  I need — {n.label}
                </p>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: C.body }}>{n.sub}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 14, color: C.blue500, opacity: hovered === i ? 1 : 0, transition: 'opacity 0.2s' }}>
                  <span style={{ fontSize: 12, fontWeight: 600, fontFamily: F.head }}>Get in touch</span>
                  <HiArrowRight size={13} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <style>{`
        .needs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(12px, 2vw, 20px);
          max-width: 900px;
          margin: 0 auto;
        }
        @media (max-width: 760px) { .needs-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .needs-grid { grid-template-columns: 1fr; } }
      `}</style>
    </Section>
  )
}

/* ─────────────────────────────────────────
   Default export
───────────────────────────────────────── */
export default function Services() {
  return (
    <>
      <CoreServices />
      <WhatWeCanBuild />
      <NotSureSection />
    </>
  )
}
