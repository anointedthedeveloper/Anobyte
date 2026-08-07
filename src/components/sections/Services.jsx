import { motion } from 'framer-motion'
import {
  HiCode, HiDesktopComputer, HiDeviceMobile, HiColorSwatch,
  HiCloud, HiLink, HiDatabase, HiCog, HiChip,
  HiTrendingUp, HiSparkles, HiSupport
} from 'react-icons/hi'

const services = [
  { icon: HiCode,            title: 'Custom Software Development', desc: 'Bespoke software engineered to solve unique business challenges and scale with growth.',                              bg: '#EEF0FF', ic: '#4B6EF5', featured: true },
  { icon: HiDesktopComputer, title: 'Web Development',             desc: 'High-performance, SEO-optimized web apps built with modern frameworks for exceptional experiences.',               bg: '#F3EAFF', ic: '#8B3FF5' },
  { icon: HiDeviceMobile,    title: 'Mobile App Development',      desc: 'Native and cross-platform iOS & Android apps that users love to engage with every day.',                            bg: '#FDF2F8', ic: '#EC4899' },
  { icon: HiColorSwatch,     title: 'UI/UX Design',                desc: 'Intuitive, aesthetically refined interfaces grounded in user research and modern design principles.',               bg: '#FFFBEB', ic: '#D97706' },
  { icon: HiCloud,           title: 'Cloud Solutions',             desc: 'Scalable cloud architecture on AWS, GCP, and Azure — from migration to full cloud-native infrastructure.',          bg: '#ECFDF5', ic: '#059669' },
  { icon: HiLink,            title: 'API Development',             desc: 'Robust, well-documented REST and GraphQL APIs that integrate seamlessly into any ecosystem.',                       bg: '#EFF6FF', ic: '#2563EB' },
  { icon: HiDatabase,        title: 'Database Design',             desc: 'Optimized relational and NoSQL database architectures engineered for reliability and peak performance.',             bg: '#EEF0FF', ic: '#4B6EF5' },
  { icon: HiCog,             title: 'Business Automation',         desc: 'Intelligent workflow automation that eliminates bottlenecks and frees your team to focus on what matters.',         bg: '#F3EAFF', ic: '#8B3FF5' },
  { icon: HiChip,            title: 'Desktop Applications',        desc: 'Powerful cross-platform desktop apps for Windows, macOS, and Linux with native performance.',                      bg: '#F8FAFC', ic: '#64748B' },
  { icon: HiTrendingUp,      title: 'SEO Optimization',            desc: 'Technical SEO strategies and implementations that drive organic traffic and measurable search rankings.',           bg: '#ECFDF5', ic: '#059669' },
  { icon: HiSparkles,        title: 'Brand Identity',              desc: 'Cohesive visual identities — logo, typography, color systems — that make your brand unforgettable.',               bg: '#FDF2F8', ic: '#EC4899' },
  { icon: HiSupport,         title: 'Maintenance & Support',       desc: '24/7 monitoring, proactive maintenance, and dedicated support to keep products at peak performance.',               bg: '#EFF6FF', ic: '#2563EB' },
]

export default function Services() {
  return (
    <section className="py-16 lg:py-24" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="relative bg-white rounded-2xl p-6 group transition-all duration-300"
              style={{
                border: s.featured ? '2px solid #C7D2FE' : '1px solid #E2E8F0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.05)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 40px rgba(75,110,245,0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.05)')}
            >
              {s.featured && (
                <div className="absolute -top-3 left-5">
                  <span className="px-3 py-1 text-white text-xs font-semibold rounded-full" style={{ background: 'linear-gradient(135deg, #4B6EF5, #8B3FF5)' }}>
                    Most Popular
                  </span>
                </div>
              )}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: s.bg }}>
                <s.icon style={{ color: s.ic }} size={22} />
              </div>
              <h3 className="font-heading font-semibold text-sm leading-snug mb-2" style={{ color: '#0F172A' }}>{s.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#475569' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
