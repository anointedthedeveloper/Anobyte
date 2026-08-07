import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiCode, HiDesktopComputer, HiDeviceMobile, HiColorSwatch, HiCloud, HiLink, HiArrowRight } from 'react-icons/hi'
import SectionBadge from '../ui/SectionBadge'

const featured = [
  { icon: HiCode,           title: 'Custom Software',   desc: 'Bespoke solutions engineered for your exact business needs and built to scale.',       bg: '#EEF0FF', ic: '#4B6EF5' },
  { icon: HiDesktopComputer,title: 'Web Development',   desc: 'High-performance, SEO-ready web apps using the most modern frameworks available.',       bg: '#F3EAFF', ic: '#8B3FF5' },
  { icon: HiDeviceMobile,   title: 'Mobile Apps',       desc: 'Native and cross-platform apps for iOS and Android that users genuinely love.',           bg: '#FDF2F8', ic: '#EC4899' },
  { icon: HiColorSwatch,    title: 'UI/UX Design',      desc: 'Intuitive, pixel-perfect interfaces grounded in real user research.',                     bg: '#FFFBEB', ic: '#D97706' },
  { icon: HiCloud,          title: 'Cloud Solutions',   desc: 'Scalable AWS, GCP, and Azure infrastructure from migration to full cloud-native.',         bg: '#ECFDF5', ic: '#059669' },
  { icon: HiLink,           title: 'API Development',   desc: 'Robust REST and GraphQL APIs that integrate seamlessly into any ecosystem.',               bg: '#EFF6FF', ic: '#2563EB' },
]

export default function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32" style={{ background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="flex justify-center mb-5"><SectionBadge>What We Build</SectionBadge></div>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading tracking-tight mb-5" style={{ color: '#0F172A' }}>
            Services that drive <span className="text-gradient">real results</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#475569' }}>
            From concept to deployment — we deliver end-to-end digital solutions tailored to your business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 group transition-all duration-300"
              style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.05)' }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 40px rgba(75,110,245,0.12), 0 2px 8px rgba(0,0,0,0.06)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.05)')}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: s.bg }}>
                <s.icon style={{ color: s.ic }} size={22} />
              </div>
              <h3 className="font-heading font-semibold text-base mb-2" style={{ color: '#0F172A' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all"
            style={{ background: 'linear-gradient(135deg, #4B6EF5, #8B3FF5)', color: '#ffffff', boxShadow: '0 4px 14px rgba(75,110,245,0.38)' }}
          >
            View All Services <HiArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
