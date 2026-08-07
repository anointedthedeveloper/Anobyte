import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

export default function HomeCTA() {
  return (
    <section className="py-24 lg:py-32" style={{ background: '#F8FAFC' }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden p-12 lg:p-16"
          style={{ background: 'linear-gradient(135deg, #4B6EF5 0%, #8B3FF5 100%)' }}
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-grid opacity-15" />
          {/* Blobs */}
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-25" style={{ background: '#ffffff' }} />
          <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full blur-3xl opacity-15" style={{ background: '#ffffff' }} />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mb-5 tracking-tight">
              Ready to build something remarkable?
            </h2>
            <p className="text-lg mb-9 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Let's turn your vision into a high-performance digital product. We're ready when you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-semibold text-base transition-all"
                  style={{ background: '#ffffff', color: '#4B6EF5', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
                >
                  Start Your Project <HiArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-semibold text-base text-white transition-all"
                  style={{ border: '2px solid rgba(255,255,255,0.35)' }}
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
