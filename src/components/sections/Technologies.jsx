import { motion } from 'framer-motion'
import SectionBadge from '../ui/SectionBadge'

const stack = [
  { name: 'React',       color: '#61DAFB', cat: 'Frontend' },
  { name: 'Next.js',     color: '#0F172A', cat: 'Frontend' },
  { name: 'TypeScript',  color: '#3178C6', cat: 'Language' },
  { name: 'TailwindCSS', color: '#06B6D4', cat: 'Styling' },
  { name: 'Node.js',     color: '#339933', cat: 'Backend' },
  { name: 'Python',      color: '#3776AB', cat: 'Backend' },
  { name: 'Express',     color: '#4B6EF5', cat: 'Backend' },
  { name: '.NET / C#',   color: '#512BD4', cat: 'Backend' },
  { name: 'PostgreSQL',  color: '#4169E1', cat: 'Database' },
  { name: 'MongoDB',     color: '#47A248', cat: 'Database' },
  { name: 'MySQL',       color: '#4479A1', cat: 'Database' },
  { name: 'Firebase',    color: '#FFCA28', cat: 'Platform' },
  { name: 'Supabase',    color: '#3ECF8E', cat: 'Platform' },
  { name: 'Docker',      color: '#2496ED', cat: 'DevOps' },
  { name: 'Linux',       color: '#FCC624', cat: 'DevOps' },
  { name: 'GitHub',      color: '#181717', cat: 'DevOps' },
]

export default function Technologies() {
  return (
    <section className="py-24 lg:py-32" style={{ background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex justify-center mb-5"><SectionBadge color="blue">Our Stack</SectionBadge></div>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading tracking-tight mb-5" style={{ color: '#0F172A' }}>
            Built with the <span className="text-gradient">best tools</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#475569' }}>
            Modern, battle-tested technologies chosen for performance, scalability, and developer experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
          {stack.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: i * 0.04 }}
              whileHover={{ y: -4, scale: 1.06 }}
              className="bg-white rounded-2xl p-4 flex flex-col items-center gap-2 group cursor-default transition-all duration-300"
              style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.05)' }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 30px rgba(75,110,245,0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.05)')}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-sm" style={{ background: t.color }}>
                {t.name.charAt(0)}
              </div>
              <p className="text-xs font-semibold text-center font-heading leading-tight" style={{ color: '#0F172A' }}>{t.name}</p>
              <p className="text-xs text-center" style={{ color: '#CBD5E1' }}>{t.cat}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
