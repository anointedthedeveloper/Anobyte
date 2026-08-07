import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { C, S, F } from '../../styles/tokens'
import { Section, SectionHeader } from '../ui/Wrap'

const projects = [
  {
    title: 'Prep4JAMB',
    category: 'Web Application',
    desc: 'An online examination and study preparation platform for students preparing for JAMB. Includes practice tests, performance tracking, and study materials.',
    tags: ['Web App', 'Education', 'React'],
    grad: 'linear-gradient(145deg, #0a0f50, #2433b4, #4F72F8)',
    accent: C.blue500,
  },
  {
    title: 'Prep4U',
    category: 'Web Application',
    desc: 'A student-facing preparation platform with subject-based quizzes, timed tests, and progress dashboards designed to help users study more effectively.',
    tags: ['Web App', 'Education', 'Node.js'],
    grad: 'linear-gradient(145deg, #2d0a50, #6B1FD4, #8B3FF5)',
    accent: C.violet500,
  },
  {
    title: 'StockWise',
    category: 'Business System',
    desc: 'An inventory and stock management system built for small and medium businesses. Tracks products, manages suppliers, and generates reports.',
    tags: ['Business System', 'Dashboard', 'PostgreSQL'],
    grad: 'linear-gradient(145deg, #023929, #047857, #00C87A)',
    accent: '#009955',
  },
]

export default function ProjectsOverview() {
  return (
    <Section bg={C.bg}>
      <SectionHeader
        eyebrow="Selected Projects"
        title="Software we've"
        titleGrad="designed and built"
        subtitle="A selection of products and systems we have developed."
      />

      <div className="proj-grid">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: '#fff', borderRadius: 18, border: `1px solid ${C.border}`, boxShadow: S.card, overflow: 'hidden', transition: 'box-shadow 0.22s, transform 0.22s' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = S.cardH; e.currentTarget.style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = S.card; e.currentTarget.style.transform = 'none' }}
          >
            <div style={{ background: p.grad, height: 120, position: 'relative', overflow: 'hidden' }}>
              <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.14 }} />
              <div style={{ position: 'absolute', top: 14, left: 14 }}>
                <span style={{ padding: '5px 12px', borderRadius: 7, fontSize: 11, fontWeight: 600, fontFamily: F.head, color: '#fff', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  {p.category}
                </span>
              </div>
            </div>
            <div style={{ padding: '20px 22px 24px' }}>
              <h3 style={{ fontFamily: F.head, fontWeight: 700, fontSize: 17, color: C.ink, marginBottom: 8 }}>{p.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: C.body, marginBottom: 16 }}>{p.desc}</p>
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

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
        <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, fontFamily: F.head, color: C.blue500, textDecoration: 'none' }}>
          View all projects <HiArrowRight size={14} />
        </Link>
      </div>

      <style>{`
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(16px, 2.5vw, 24px);
        }
        @media (max-width: 860px) { .proj-grid { grid-template-columns: 1fr; } }
        @media (max-width: 600px) { .proj-grid { grid-template-columns: 1fr; } }
      `}</style>
    </Section>
  )
}
