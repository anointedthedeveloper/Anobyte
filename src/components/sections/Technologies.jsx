import { motion } from 'framer-motion'
import { C, S, F } from '../../styles/tokens'
import { Section, SectionHeader } from '../ui/Wrap'

const stack = [
  { name: 'React',       color: '#61DAFB', dark: '#0a3d52',  cat: 'Frontend' },
  { name: 'Next.js',     color: '#E8EAED', dark: '#111111',  cat: 'Frontend' },
  { name: 'TypeScript',  color: '#3178C6', dark: '#143d73',  cat: 'Language' },
  { name: 'Tailwind',    color: '#38BDF8', dark: '#0c4a5c',  cat: 'Styling'  },
  { name: 'Node.js',     color: '#68A063', dark: '#1a3d1a',  cat: 'Backend'  },
  { name: 'Python',      color: '#4B8BBE', dark: '#1a3050',  cat: 'Backend'  },
  { name: 'Express',     color: '#CCCCCC', dark: '#1a1a1a',  cat: 'Backend'  },
  { name: '.NET',        color: '#512BD4', dark: '#1e0a6e',  cat: 'Backend'  },
  { name: 'PostgreSQL',  color: '#4169E1', dark: '#0f1e6e',  cat: 'Database' },
  { name: 'MongoDB',     color: '#47A248', dark: '#0e3010',  cat: 'Database' },
  { name: 'MySQL',       color: '#4479A1', dark: '#0f2040',  cat: 'Database' },
  { name: 'Firebase',    color: '#FFCA28', dark: '#3d2e00',  cat: 'Platform' },
  { name: 'Supabase',    color: '#3ECF8E', dark: '#0a3520',  cat: 'Platform' },
  { name: 'Docker',      color: '#2496ED', dark: '#082d6e',  cat: 'DevOps'   },
  { name: 'GitHub',      color: '#E8EAED', dark: '#0d1117',  cat: 'DevOps'   },
  { name: 'AWS',         color: '#FF9900', dark: '#3d1f00',  cat: 'Cloud'    },
]

const catColor = { Frontend: C.blue500, Language: C.violet500, Styling: '#0EA5E9', Backend: '#009955', Database: '#D97706', Platform: '#EC4899', DevOps: '#475569', Cloud: '#FF9900' }

export default function Technologies() {
  return (
    <Section bg="#fff">
      <SectionHeader
        eyebrow="Tech Stack"
        title="Tools we"
        titleGrad="work with"
        subtitle="Modern, production-proven technologies chosen for performance and maintainability."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: 12 }}>
        {stack.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.03 }}
            style={{
              background: '#fff',
              border: `1px solid ${C.border}`,
              borderRadius: 14,
              padding: '16px 12px 14px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
              boxShadow: S.card,
              transition: 'box-shadow 0.2s, transform 0.2s, border-color 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = S.cardH; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = C.blue200 }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = S.card; e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = C.border }}
          >
            {/* Icon circle */}
            <div style={{ width: 36, height: 36, borderRadius: 10, background: t.dark, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 900, fontFamily: F.head, color: t.color, letterSpacing: '-0.02em' }}>{t.name.slice(0, 2).toUpperCase()}</span>
            </div>
            <p style={{ fontSize: 12, fontWeight: 700, fontFamily: F.head, color: C.ink, textAlign: 'center', lineHeight: 1.2 }}>{t.name}</p>
            <span style={{ fontSize: 10, fontWeight: 600, fontFamily: F.head, padding: '2px 8px', borderRadius: 100, background: `${catColor[t.cat]}14`, color: catColor[t.cat] }}>
              {t.cat}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
