import { motion } from 'framer-motion'
import { HiSearch, HiClipboardList, HiColorSwatch, HiCode, HiBeaker } from 'react-icons/hi'
import { HiRocketLaunch } from 'react-icons/hi2'
import SectionBadge from '../ui/SectionBadge'

const steps = [
  { n: '01', title: 'Discovery',   desc: 'Deep-dive workshops with your team to uncover goals, user needs, and technical constraints.',                                icon: HiSearch,       bg: '#EEF0FF', ic: '#4B6EF5', dur: '1–2 weeks' },
  { n: '02', title: 'Planning',    desc: 'A detailed roadmap, architecture blueprint, sprint plan, and timeline with clear milestones.',                              icon: HiClipboardList, bg: '#F3EAFF', ic: '#8B3FF5', dur: '1 week' },
  { n: '03', title: 'Design',      desc: 'Wireframes, interactive prototypes, and pixel-perfect UI delivered iteratively with your feedback.',                        icon: HiColorSwatch,  bg: '#FDF2F8', ic: '#EC4899', dur: '2–3 weeks' },
  { n: '04', title: 'Development', desc: 'Agile sprints with clean, tested code. You receive working builds and updates every two weeks.',                            icon: HiCode,         bg: '#ECFDF5', ic: '#059669', dur: '4–12 weeks' },
  { n: '05', title: 'Testing',     desc: 'Unit, integration, performance, security, and UAT — ensuring a rock-solid, bug-free product.',                             icon: HiBeaker,       bg: '#FFFBEB', ic: '#D97706', dur: '1–2 weeks' },
  { n: '06', title: 'Deployment',  desc: 'CI/CD pipelines, zero-downtime launches, monitoring setup, and full knowledge transfer to your team.',                      icon: HiRocketLaunch, bg: '#EEF0FF', ic: '#4B6EF5', dur: '1 week' },
]

export default function Process() {
  return (
    <section className="py-16 lg:py-24" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.52, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl p-6 group"
              style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.05)' }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 40px rgba(75,110,245,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.05)')}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: s.bg }}>
                  <s.icon style={{ color: s.ic }} size={22} />
                </div>
                <span className="text-3xl font-black font-heading" style={{ color: '#F1F5F9' }}>{s.n}</span>
              </div>
              <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#0F172A' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#475569' }}>{s.desc}</p>
              <div className="flex items-center gap-2 pt-3" style={{ borderTop: '1px solid #F1F5F9' }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#4B6EF5' }} />
                <span className="text-xs font-medium" style={{ color: '#94A3B8' }}>{s.dur}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
