import PageWrapper from '../components/ui/PageWrapper'
import PageHero from '../components/ui/PageHero'
import Services from '../components/sections/Services'
import HomeCTA from '../components/sections/HomeCTA'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import { C, G, F, S, maxW, gutter } from '../styles/tokens'

/* ── Services page hero — light, no dark background ── */
function ServicesHero() {
  return (
    <section style={{
      background: '#fff',
      paddingTop: 'clamp(96px,12vw,136px)',
      paddingBottom: 'clamp(56px,7vw,88px)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.45, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(79,114,248,0.07) 0%, transparent 70%)' }} />
      <div style={{ position: 'absolute', top: '10%', left: '-5%', width: 360, height: 360, borderRadius: '50%', background: C.blue500, filter: 'blur(140px)', opacity: 0.07, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', right: '-5%', width: 280, height: 280, borderRadius: '50%', background: C.violet500, filter: 'blur(120px)', opacity: 0.06, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: maxW, margin: '0 auto', padding: `0 ${gutter}`, textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: 11, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.blue500, marginBottom: 18 }}
        >
          Services
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', letterSpacing: '-0.04em', lineHeight: 1.1, color: C.ink, marginBottom: 18 }}
        >
          Digital Solutions{' '}
          <span className="tg">Built Around Your Needs</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          style={{ fontSize: 17, lineHeight: 1.75, color: C.body, maxWidth: 560, margin: '0 auto 32px' }}
        >
          From business websites to custom software and complete digital systems, we design and build solutions around the way your organisation works.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26 }}
        >
          <Link
            to="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 28px', borderRadius: 12,
              fontSize: 15, fontWeight: 700, fontFamily: F.head,
              color: '#fff', background: G.brand, boxShadow: S.btn,
              textDecoration: 'none',
            }}
          >
            Start a Conversation <HiArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <PageWrapper>
      <ServicesHero />
      <Services />
      <HomeCTA />
    </PageWrapper>
  )
}
