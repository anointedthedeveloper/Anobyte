import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'

const cats = ['All', 'Web App', 'Mobile', 'SaaS', 'E-Commerce']

const projects = [
  { title: 'Nexus Analytics',    cat: 'SaaS',       desc: 'Enterprise real-time analytics dashboard with AI-powered insights and multi-tenant architecture.', tech: ['React','Node.js','PostgreSQL','AWS'],     result: '340% faster processing',  g: 'linear-gradient(135deg,#4B6EF5,#2563EB)', featured: true },
  { title: 'SwiftCart App',      cat: 'Mobile',     desc: 'E-commerce mobile app with AR preview, one-tap checkout, and real-time delivery tracking.',        tech: ['React Native','Firebase','Stripe'],      result: '4.9★ · 50K downloads',   g: 'linear-gradient(135deg,#8B3FF5,#EC4899)' },
  { title: 'MedConnect Portal',  cat: 'Web App',    desc: 'HIPAA-compliant telemedicine platform with video consultations and electronic health records.',     tech: ['Next.js','Python','WebRTC'],             result: '10K+ consultations',      g: 'linear-gradient(135deg,#059669,#0EA5E9)' },
  { title: 'BuildFlow SaaS',     cat: 'SaaS',       desc: 'Construction project management with real-time collaboration, scheduling, and budget tracking.',    tech: ['Vue.js','Django','MySQL','Redis'],        result: '$2M ARR in 18 months',    g: 'linear-gradient(135deg,#D97706,#EF4444)' },
  { title: 'Lumina Fashion',     cat: 'E-Commerce', desc: 'Premium e-commerce with AI recommendations, 3D product viewer, and multi-currency checkout.',      tech: ['React','Shopify','GraphQL'],             result: '280% conversion boost',   g: 'linear-gradient(135deg,#EC4899,#F59E0B)' },
  { title: 'TradeDesk Fintech',  cat: 'Web App',    desc: 'Algorithmic trading platform with live market feeds, portfolio analytics, and backtesting engine.', tech: ['TypeScript','Python','WebSocket'],       result: '$50M+ traded daily',      g: 'linear-gradient(135deg,#334155,#4B6EF5)' },
]

function Card({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`bg-white rounded-3xl overflow-hidden group transition-all duration-300 ${p.featured ? 'md:col-span-2' : ''}`}
      style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.05)' }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 40px rgba(75,110,245,0.12)')}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.05)')}
    >
      <div className="relative aspect-video overflow-hidden" style={{ background: p.g }}>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-black font-heading text-8xl text-white opacity-10 select-none">{p.title[0]}</span>
        </div>
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 rounded-full text-white text-xs font-medium" style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)' }}>{p.cat}</span>
          {p.featured && <span className="px-3 py-1 rounded-full text-white text-xs font-semibold" style={{ background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)' }}>Featured</span>}
        </div>
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(0,0,0,0.38)' }}>
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-sm font-semibold rounded-xl shadow-lg" style={{ color: '#0F172A' }}><HiExternalLink size={14}/>Live Demo</button>
          <button className="flex items-center gap-2 px-4 py-2 text-white text-sm font-semibold rounded-xl" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)' }}><HiCode size={14}/>GitHub</button>
        </div>
      </div>
      <div className="p-7">
        <h3 className="font-heading font-bold text-xl mb-2" style={{ color: '#0F172A' }}>{p.title}</h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#475569' }}>{p.desc}</p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4" style={{ background: '#ECFDF5', border: '1px solid #A7F3D0' }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#10B981' }} />
          <span className="text-xs font-semibold" style={{ color: '#059669' }}>{p.result}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {p.tech.map((t) => <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#475569' }}>{t}</span>)}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active)

  return (
    <section className="py-16 lg:py-24" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              style={active === c
                ? { background: 'linear-gradient(135deg,#4B6EF5,#8B3FF5)', color: '#fff', boxShadow: '0 4px 14px rgba(75,110,245,0.38)' }
                : { background: '#F8FAFC', color: '#475569', border: '1px solid #E2E8F0' }
              }
            >
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => <Card key={p.title} p={p} i={i} />)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
