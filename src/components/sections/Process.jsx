import { motion } from 'framer-motion'
import { C, S, F } from '../../styles/tokens'
import { Section, SectionHeader } from '../ui/Wrap'

const steps = [
  {
    n: '01',
    title: 'Discovery',
    desc: 'We run structured workshops with your team to understand the business problem, user needs, technical constraints, and success criteria.',
    duration: '1 – 2 weeks',
    accent: C.blue500,
    bg: C.blue50,
  },
  {
    n: '02',
    title: 'Planning',
    desc: 'We produce a detailed project roadmap, system architecture, sprint plan, and cost breakdown. You review and approve before anything is built.',
    duration: '1 week',
    accent: C.violet500,
    bg: C.violetLight,
  },
  {
    n: '03',
    title: 'Design',
    desc: 'Wire­frames first, then interactive prototypes, then high-fidelity UI. Every iteration is reviewed with you before we move on.',
    duration: '2 – 3 weeks',
    accent: '#EC4899',
    bg: '#FDF2F8',
  },
  {
    n: '04',
    title: 'Development',
    desc: 'Two-week agile sprints. You get a working build at the end of every sprint, plus a written update covering what was done and what is next.',
    duration: '4 – 12 weeks',
    accent: '#009955',
    bg: '#EDFFF7',
  },
  {
    n: '05',
    title: 'QA & Testing',
    desc: 'Unit tests, integration tests, performance testing, accessibility checks, and a full UAT session with your team before we release anything.',
    duration: '1 – 2 weeks',
    accent: '#D97706',
    bg: '#FFFBEB',
  },
  {
    n: '06',
    title: 'Deployment',
    desc: 'Zero-downtime production deployment, monitoring setup, documentation handover, and a walkthrough with your team so everyone knows how the system works.',
    duration: '1 week',
    accent: C.blue600,
    bg: C.blue50,
  },
]

export default function Process() {
  return (
    <Section bg="#fff">
      <div className="process-grid">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.48, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: '#fff',
              borderRadius: 16,
              border: `1px solid ${C.border}`,
              boxShadow: S.card,
              overflow: 'hidden',
              transition: 'box-shadow 0.22s, transform 0.22s',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = S.cardH; e.currentTarget.style.transform = 'translateY(-3px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = S.card; e.currentTarget.style.transform = 'none' }}
          >
            <div style={{ height: 3, background: s.accent }} />
            <div style={{ padding: '22px 24px 26px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ width: 42, height: 42, borderRadius: 11, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: F.head, fontWeight: 800, fontSize: 14, color: s.accent }}>{s.n}</span>
                </div>
                <span style={{ fontFamily: F.head, fontWeight: 800, fontSize: 28, color: '#F0F1F8', lineHeight: 1 }}>{s.n}</span>
              </div>

              <h3 style={{ fontFamily: F.head, fontWeight: 700, fontSize: 16, color: C.ink, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: C.body, marginBottom: 18 }}>{s.desc}</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 16, borderTop: `1px solid ${C.border}` }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: s.accent, flexShrink: 0 }} />
                <span style={{ fontSize: 12, fontWeight: 600, fontFamily: F.head, color: s.accent }}>{s.duration}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
          gap: 20px;
        }
        @media (max-width: 680px) {
          .process-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </Section>
  )
}
