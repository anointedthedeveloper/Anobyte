import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { C, G, S, F, maxW, gutter } from '../../styles/tokens'

export default function HomeCTA() {
  const { pathname } = useLocation()
  if (pathname === '/contact') return null

  return (
    <section style={{ background: '#fff', padding: '0 0 clamp(72px,9vw,104px)' }}>
      <div style={{ maxWidth: maxW, margin: '0 auto', padding: `0 ${gutter}` }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: '#0B0E2A', borderRadius: 24, overflow: 'hidden', position: 'relative', padding: 'clamp(40px,6vw,72px)' }}
        >
          <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.08 }} />
          <div style={{ position: 'absolute', top: -60, right: -60, width: 320, height: 320, borderRadius: '50%', background: C.blue500, filter: 'blur(110px)', opacity: 0.22 }} />
          <div style={{ position: 'absolute', bottom: -40, left: -40, width: 240, height: 240, borderRadius: '50%', background: C.violet500, filter: 'blur(90px)', opacity: 0.16 }} />

          <div style={{ position: 'relative', maxWidth: 600 }}>
            <h2 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', letterSpacing: '-0.04em', lineHeight: 1.1, color: '#fff', marginBottom: 16 }}>
              Have Something You Want to Build?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', marginBottom: 36, maxWidth: 480 }}>
              Whether you have a clear specification or just an idea, let's talk about what you need and figure out the best way to build it.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', borderRadius: 12, fontSize: 15, fontWeight: 700, fontFamily: F.head, color: C.blue500, background: '#fff', boxShadow: '0 4px 16px rgba(0,0,0,0.14)' }}>
                  Start a Conversation <HiArrowRight size={15} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 26px', borderRadius: 12, fontSize: 15, fontWeight: 700, fontFamily: F.head, color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.06)', border: '1.5px solid rgba(255,255,255,0.12)' }}>
                  View Our Projects
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
