import { motion } from 'framer-motion'
import SectionBadge from './SectionBadge'

export default function PageHero({ badge, title, subtitle }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: '#F8FAFC' }}>
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      {/* Blobs */}
      <div
        className="absolute -top-16 -left-16 w-80 h-80 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #4B6EF5, transparent)' }}
      />
      <div
        className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full blur-3xl opacity-15"
        style={{ background: 'radial-gradient(circle, #8B3FF5, transparent)' }}
      />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-5"
        >
          <SectionBadge>{badge}</SectionBadge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-5"
          style={{ color: '#0F172A' }}
        >
          {title.split(' ').map((word, i, arr) => {
            // Gradient the last word
            if (i === arr.length - 1) {
              return (
                <span key={i} className="text-gradient"> {word}</span>
              )
            }
            return <span key={i}>{i === 0 ? word : ` ${word}`}</span>
          })}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: '#475569' }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}
