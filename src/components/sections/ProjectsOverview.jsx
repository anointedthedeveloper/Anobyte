import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { C, S, F } from '../../styles/tokens'
import { Section, SectionHeader } from '../ui/Wrap'

const projects = [
  {
    title: 'Enterprise Analytics Platform',
    category: 'SaaS · Web App',
    desc: 'A multi-tenant analytics dashboard built for a logistics company — real-time KPI tracking, custom report builder, and role-based access control.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    accent: C.blue500,
    grad: 'linear-gradient(145deg, #0a0f50, #2433b4, #4B6EF5)',
  },
  {
    title: 'Healthcare Patient Portal',
    category: 'Web App',
    desc: 'A HIPAA-compliant patient management and appointment portal for a private clinic group — integrated with their existing EMR system.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    accent: '#009955',
    grad: 'linear-gradient(145deg, #023929, #047857, #00C87A)',
  },
  {
    title: 'Fleet Management Mobile App',
    category: 'Mobile · React Native',
    desc: 'Cross-platform mobile app for a transport company — live GPS tracking, driver logs, maintenance schedules, and push notifications.',
    tags: ['React Native', 'Firebase', 'Node.js'],
    accent: C.violet500,
    grad: 'linear-gradient(145deg, #2d0a50, #6B1FD4, #8B3FF5)',
  },
]

export default function ProjectsOverview() {
  return (
    <Section bg="#fff">
      <SectionHeader
        eyebrow="Selected Work"
        title="Projects we've"
        titleGrad="shipped"
        subtitle="A sample of products we've designed and built for our clients."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: '#fff', borderRadius: 20, border: `1px solid ${C.border}`, boxShadow: S.card, overflow: 'hidden', transition: 'box-shadow 0.25s, transform 0.25s' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = S.cardH; e.currentTarget.style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = S.card; e.currentTarget.style.transform = 'none' }}
          >
            {/* Visual header */}
            <div style={{ background: p.grad, height: 140, position: 'relative', overflow: 'hidden' }}>
              <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.15 }} />
              <div style={{ position: 'absolute', top: 14, left: 14 }}>
                <span style={{ padding: '5px 12px', borderRadius: 7, fontSize: 11, fontWeight: 600, fontFamily: F.head, color: '#fff', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  {p.category}
                </span>
              </div>
            </div>

            <div style={{ padding: '20px 22px 24px' }}>
              <h3 style={{ fontFamily: F.head, fontWeight: 700, fontSize: 17, color: C.ink, marginBottom: 8 }}>{p.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: C.body, marginBottom: 16 }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.tags.map(t => (
                  <span key={t} style={{ padding: '4px 10px', borderRadius: 7, fontSize: 12, fontWeight: 500, fontFamily: F.head, background: C.bg, border: `1px solid ${C.border}`, color: C.ink3 }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 44 }}>
        <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, fontFamily: F.head, color: C.blue500 }}>
          View all projects <HiArrowRight size={14} />
        </Link>
      </div>
    </Section>
  )
}
