import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { C, G, S, F, maxW, gutter } from '../styles/tokens'
import PageWrapper from '../components/ui/PageWrapper'

export default function NotFound() {
  return (
    <PageWrapper>
      <div style={{ minHeight: '100vh', background: 'linear-gradient(145deg, #1a1f4e 0%, #0d1035 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.08 }} />
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 300, height: 300, borderRadius: '50%', background: C.blue500, filter: 'blur(120px)', opacity: 0.2 }} />
        <div style={{ position: 'absolute', bottom: '15%', right: '10%', width: 240, height: 240, borderRadius: '50%', background: C.violet500, filter: 'blur(100px)', opacity: 0.16 }} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', maxWidth: 480, padding: `0 ${gutter}`, textAlign: 'center' }}
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: F.head, fontWeight: 900, fontSize: 'clamp(6rem,18vw,9rem)', lineHeight: 1, letterSpacing: '-0.05em', marginBottom: 4 }}
            className="tg"
          >
            404
          </motion.p>

          <h1 style={{ fontFamily: F.head, fontWeight: 700, fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
            Page not found
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.45)', marginBottom: 36 }}>
            The page you're looking for doesn't exist or may have moved.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 12, fontSize: 14, fontWeight: 700, fontFamily: F.head, color: '#fff', background: G.brand, boxShadow: S.btn }}>
                Back to Home <HiArrowRight size={15} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 24px', borderRadius: 12, fontSize: 14, fontWeight: 700, fontFamily: F.head, color: 'rgba(255,255,255,0.75)', background: 'rgba(255,255,255,0.06)', border: '1.5px solid rgba(255,255,255,0.12)' }}>
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
