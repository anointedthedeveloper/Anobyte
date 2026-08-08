import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { C, G, S, F, maxW, gutter } from '../../styles/tokens'

export default function HomeCTA() {
  const { pathname } = useLocation()
  if (pathname === '/contact') return null

  const onProjects = pathname === '/projects'

  return (
    <section style={{ background: C.bg, padding: 'clamp(56px,8vw,96px) 0' }}>
      <div style={{ maxWidth: maxW, margin: '0 auto', padding: `0 ${gutter}` }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: G.brand,
            borderRadius: 24,
            overflow: 'hidden',
            position: 'relative',
            padding: 'clamp(40px,6vw,68px)',
          }}
        >
          <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.08 }} />
          <div style={{ position: 'absolute', top: -50, right: -50, width: 280, height: 280, borderRadius: '50%', background: '#fff', filter: 'blur(100px)', opacity: 0.12 }} />
          <div style={{ position: 'absolute', bottom: -30, left: '30%', width: 200, height: 200, borderRadius: '50%', background: '#4BBCFF', filter: 'blur(80px)', opacity: 0.18 }} />

          <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 32 }}>
            <div style={{ maxWidth: 520 }}>
              <p style={{ fontSize: 11, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 14 }}>
                Ready to start?
              </p>
              <h2 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(1.8rem,3.2vw,2.7rem)', letterSpacing: '-0.04em', lineHeight: 1.1, color: '#fff', marginBottom: 14 }}>
                Have Something You Want to Build?
              </h2>
              <p style={{ fontSize: 'clamp(14px,1.4vw,16px)', lineHeight: 1.8, color: 'rgba(255,255,255,0.75)', maxWidth: 460 }}>
                Whether you have a clear specification or just an idea — tell us what you need and we'll figure out the best way to build it together.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '13px 28px', borderRadius: 12,
                    fontSize: 15, fontWeight: 700, fontFamily: F.head,
                    color: C.blue500, background: '#fff',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
                    textDecoration: 'none', whiteSpace: 'nowrap',
                  }}
                >
                  Start a Conversation <HiArrowRight size={15} />
                </Link>
              </motion.div>
              {!onProjects && (
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/projects"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '12px 28px', borderRadius: 12,
                      fontSize: 15, fontWeight: 600, fontFamily: F.head,
                      color: 'rgba(255,255,255,0.88)',
                      background: 'rgba(255,255,255,0.12)',
                      border: '1.5px solid rgba(255,255,255,0.25)',
                      textDecoration: 'none', whiteSpace: 'nowrap',
                    }}
                  >
                    View Our Projects
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
