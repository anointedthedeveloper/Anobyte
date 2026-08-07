import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { C, G, S, F, maxW, gutter } from '../../styles/tokens'

export default function HomeCTA() {
  return (
    <section style={{ background: '#fff', padding: '0 0 clamp(72px,9vw,104px)' }}>
      <div style={{ maxWidth: maxW, margin: '0 auto', padding: `0 ${gutter}` }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: '#06081A', borderRadius: 24, overflow: 'hidden', position: 'relative', padding: 'clamp(40px,6vw,72px)' }}
        >
          {/* Bg grid */}
          <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.09 }} />
          {/* Glow */}
          <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: C.blue500, filter: 'blur(100px)', opacity: 0.28 }} />
          <div style={{ position: 'absolute', bottom: -40, left: -40, width: 220, height: 220, borderRadius: '50%', background: C.violet500, filter: 'blur(80px)', opacity: 0.2 }} />

          <div style={{ position: 'relative', maxWidth: 600 }}>
            <p style={{ fontSize: 11, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>
              Let's work together
            </p>
            <h2 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(1.9rem,3.8vw,3rem)', letterSpacing: '-0.04em', lineHeight: 1.1, color: '#fff', marginBottom: 18 }}>
              Have a project in mind?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', marginBottom: 36, maxWidth: 480 }}>
              Tell us what you're building. We'll respond within one business day with a clear proposal — scope, timeline, and cost.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', borderRadius: 12, fontSize: 15, fontWeight: 700, fontFamily: F.head, color: C.blue500, background: '#fff', boxShadow: '0 4px 16px rgba(0,0,0,0.18)' }}>
                  Start a Conversation <HiArrowRight size={15} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 26px', borderRadius: 12, fontSize: 15, fontWeight: 700, fontFamily: F.head, color: 'rgba(255,255,255,0.75)', background: 'rgba(255,255,255,0.06)', border: '1.5px solid rgba(255,255,255,0.12)' }}>
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
