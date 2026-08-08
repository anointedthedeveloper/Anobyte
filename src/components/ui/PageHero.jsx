import { motion } from 'framer-motion'
import { C, F, maxW, gutter } from '../../styles/tokens'

export default function PageHero({ eyebrow, title, titleGrad, subtitle }) {
  return (
    <section className="page-hero-section" style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* subtle grid */}
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
      {/* soft glow at top */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(75,110,245,0.07) 0%, transparent 70%)' }} />
      {/* colour blobs */}
      <div style={{ position: 'absolute', top: '10%', left: '-5%', width: 360, height: 360, borderRadius: '50%', background: C.blue500, filter: 'blur(140px)', opacity: 0.08 }} />
      <div style={{ position: 'absolute', bottom: '5%', right: '-5%', width: 280, height: 280, borderRadius: '50%', background: C.violet500, filter: 'blur(120px)', opacity: 0.07 }} />

      <div style={{ position: 'relative', maxWidth: maxW, margin: '0 auto', padding: `0 ${gutter}`, textAlign: 'center' }}>
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: 11, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.blue500, marginBottom: 18 }}
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(2rem,4.5vw,3.8rem)', letterSpacing: '-0.04em', lineHeight: 1.1, color: C.ink, marginBottom: subtitle ? 18 : 0 }}
        >
          {title}{titleGrad && <> <span className="tg">{titleGrad}</span></>}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            style={{ fontSize: 'clamp(14px,1.5vw,17px)', lineHeight: 1.75, color: C.body, maxWidth: 560, margin: '0 auto' }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      <style>{`
        .page-hero-section {
          padding-top: clamp(88px, 10vw, 120px);
          padding-bottom: clamp(32px, 4vw, 56px);
        }
        @media (max-width: 860px) {
          .page-hero-section { padding-top: 88px; padding-bottom: 32px; }
        }
        @media (max-width: 480px) {
          .page-hero-section { padding-top: 80px; padding-bottom: 28px; }
        }
      `}</style>
    </section>
  )
}
