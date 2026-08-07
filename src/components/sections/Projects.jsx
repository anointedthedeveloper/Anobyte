import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { C, S, F } from '../../styles/tokens'
import { Section } from '../ui/Wrap'

const cats = ['All', 'Web App', 'Mobile', 'SaaS', 'Backend']

const projects = [
  {
    title: 'Enterprise Analytics Dashboard',
    cat: 'SaaS',
    desc: 'Multi-tenant analytics platform for a logistics company — real-time KPIs, custom reports, and role-based access for 200+ internal users.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    grad: 'linear-gradient(145deg, #0a0f50, #2433b4, #4B6EF5)',
    accent: C.blue500,
    featured: true,
  },
  {
    title: 'Healthcare Patient Portal',
    cat: 'Web App',
    desc: 'HIPAA-compliant appointment and patient management portal for a private clinic group — integrated with their existing EMR system via HL7 FHIR.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    grad: 'linear-gradient(145deg, #023929, #047857, #00C87A)',
    accent: '#009955',
  },
  {
    title: 'Fleet Management App',
    cat: 'Mobile',
    desc: 'React Native app for a transport company — live GPS tracking, digital driver logs, maintenance schedules, and push notifications.',
    tech: ['React Native', 'Firebase', 'Node.js', 'GCP'],
    grad: 'linear-gradient(145deg, #2d0a50, #6B1FD4, #8B3FF5)',
    accent: C.violet500,
  },
  {
    title: 'B2B SaaS Platform',
    cat: 'SaaS',
    desc: 'Project management tool built for construction companies — resource scheduling, budget tracking, and automated progress reporting.',
    tech: ['Vue.js', 'Django', 'MySQL', 'Redis'],
    grad: 'linear-gradient(145deg, #3d1000, #b45309, #F59E0B)',
    accent: '#D97706',
  },
  {
    title: 'E-Commerce Backend',
    cat: 'Backend',
    desc: 'High-throughput order processing API with inventory management, multi-currency pricing, and Stripe/PayPal integration. Handles peak traffic gracefully.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'RabbitMQ'],
    grad: 'linear-gradient(145deg, #0a0f20, #1e2f5e, #3A5CE8)',
    accent: C.blue600,
  },
  {
    title: 'Property Listing Platform',
    cat: 'Web App',
    desc: 'Full-stack real estate platform with property search, interactive maps, saved searches, and an agent management portal.',
    tech: ['React', 'Next.js', 'PostgreSQL', 'Mapbox'],
    grad: 'linear-gradient(145deg, #1a0030, #6B1FD4, #EC4899)',
    accent: '#EC4899',
  },
]

function Card({ p, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: '#fff',
        borderRadius: 18,
        border: `1px solid ${p.featured ? C.blue200 : C.border}`,
        boxShadow: p.featured ? `0 4px 24px rgba(75,110,245,0.1)` : S.card,
        overflow: 'hidden',
        gridColumn: p.featured ? 'span 2' : 'span 1',
        transition: 'box-shadow 0.25s, transform 0.25s',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = S.cardH; e.currentTarget.style.transform = 'translateY(-3px)' }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = p.featured ? `0 4px 24px rgba(75,110,245,0.1)` : S.card; e.currentTarget.style.transform = 'none' }}
    >
      {/* Visual */}
      <div style={{ background: p.grad, height: p.featured ? 180 : 140, position: 'relative', overflow: 'hidden' }}>
        <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.15 }} />
        <div style={{ position: 'absolute', top: 14, left: 14, display: 'flex', gap: 8 }}>
          <span style={{ padding: '5px 12px', borderRadius: 7, fontSize: 11, fontWeight: 600, fontFamily: F.head, color: '#fff', background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.18)' }}>
            {p.cat}
          </span>
          {p.featured && (
            <span style={{ padding: '5px 12px', borderRadius: 7, fontSize: 11, fontWeight: 600, fontFamily: F.head, color: '#fff', background: 'rgba(75,110,245,0.4)', border: '1px solid rgba(75,110,245,0.3)' }}>
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px 22px 24px' }}>
        <h3 style={{ fontFamily: F.head, fontWeight: 700, fontSize: 17, color: C.ink, marginBottom: 8 }}>{p.title}</h3>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: C.body, marginBottom: 16 }}>{p.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {p.tech.map(t => (
            <span key={t} style={{ padding: '4px 10px', borderRadius: 7, fontSize: 12, fontWeight: 500, fontFamily: F.head, background: C.bg, border: `1px solid ${C.border}`, color: C.ink3 }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active)

  return (
    <Section bg="#fff">
      {/* Filter */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
        {cats.map(c => (
          <button
            key={c}
            onClick={() => setActive(c)}
            style={{
              padding: '8px 18px', borderRadius: 10, fontSize: 14, fontWeight: 600, fontFamily: F.head,
              cursor: 'pointer', transition: 'all 0.18s',
              background: active === c ? C.blue500 : C.bg,
              color: active === c ? '#fff' : C.body,
              border: `1px solid ${active === c ? C.blue500 : C.border}`,
              boxShadow: active === c ? S.btn : 'none',
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}
        >
          {filtered.map((p, i) => <Card key={p.title} p={p} i={i} />)}
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}
