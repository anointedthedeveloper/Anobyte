import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import SectionBadge from '../ui/SectionBadge'

const featured = [
  {
    title: 'Nexus Analytics Platform',
    category: 'SaaS',
    desc: 'Real-time enterprise analytics with AI-powered insights and multi-tenant architecture.',
    result: '340% faster data processing',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    gradient: 'linear-gradient(135deg, #4B6EF5 0%, #2563EB 100%)',
  },
  {
    title: 'SwiftCart Mobile App',
    category: 'Mobile',
    desc: 'Feature-rich e-commerce app with AR preview, one-tap checkout, and live delivery tracking.',
    result: '4.9★ App Store · 50K downloads',
    tech: ['React Native', 'Firebase', 'Stripe'],
    gradient: 'linear-gradient(135deg, #8B3FF5 0%, #EC4899 100%)',
  },
  {
    title: 'MedConnect Portal',
    category: 'Healthcare',
    desc: 'HIPAA-compliant telemedicine platform connecting patients and providers via video consult.',
    result: '10,000+ consultations facilitated',
    tech: ['Next.js', 'Python', 'WebRTC'],
    gradient: 'linear-gradient(135deg, #059669 0%, #0EA5E9 100%)',
  },
]

export default function ProjectsOverview() {
  return (
    <section className="py-24 lg:py-32" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="mb-5"><SectionBadge color="violet">Featured Work</SectionBadge></div>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading tracking-tight" style={{ color: '#0F172A' }}>
              Projects we're <span className="text-gradient">proud of</span>
            </h2>
          </div>
          <Link to="/projects" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold transition-all" style={{ color: '#4B6EF5' }}>
            View all projects <HiArrowRight size={15} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl overflow-hidden group transition-all duration-400"
              style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.05)' }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 40px rgba(75,110,245,0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.05)')}
            >
              {/* Image area */}
              <div className="relative aspect-video overflow-hidden" style={{ background: p.gradient }}>
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-black font-heading text-7xl opacity-10 text-white select-none">{p.title[0]}</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-white text-xs font-medium" style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)' }}>
                    {p.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-gradient transition-colors" style={{ color: '#0F172A' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#475569' }}>{p.desc}</p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4" style={{ background: '#ECFDF5', border: '1px solid #A7F3D0' }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#10B981' }} />
                  <span className="text-xs font-semibold" style={{ color: '#059669' }}>{p.result}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#475569' }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
