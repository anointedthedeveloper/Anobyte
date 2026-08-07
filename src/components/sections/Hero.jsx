import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { C, G, F, S, maxW, gutter } from '../../styles/tokens'

/* ─────────────────────────────────────────
   Orbiting particle ring
───────────────────────────────────────── */
function OrbitRing({ r, count, size, speed, colorA, colorB, delay = 0 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * 360
        const dur   = speed + i * 0.18
        const color = i % 2 === 0 ? colorA : colorB
        return (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              width: size, height: size,
              borderRadius: '50%',
              background: color,
              boxShadow: `0 0 ${size * 3}px ${color}`,
              transformOrigin: `${-r}px 0`,
              marginTop: -(size / 2),
              marginLeft: -(size / 2),
            }}
            animate={{ rotate: [angle, angle + 360] }}
            transition={{ duration: dur, repeat: Infinity, ease: 'linear', delay: delay + i * 0.1 }}
            initial={false}
          />
        )
      })}
      {/* Orbit path */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        width: r * 2, height: r * 2, borderRadius: '50%',
        border: '1px solid rgba(79,114,248,0.10)',
        transform: 'translate(-50%,-50%)',
        pointerEvents: 'none',
      }} />
    </>
  )
}

/* ─────────────────────────────────────────
   Logo visual with orbiting particles
───────────────────────────────────────── */
function LogoOrbit({ mx, my }) {
  const rx = useSpring(useTransform(my, [-400, 400], [6, -6]),  { stiffness: 60, damping: 18 })
  const ry = useSpring(useTransform(mx, [-400, 400], [-6, 6]), { stiffness: 60, damping: 18 })

  return (
    <motion.div
      style={{
        position: 'relative',
        width: '100%', maxWidth: 460,
        aspectRatio: '1 / 1',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        rotateX: rx, rotateY: ry,
        transformStyle: 'preserve-3d',
        perspective: 1200,
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        width: '70%', height: '70%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79,114,248,0.14) 0%, rgba(139,63,245,0.10) 55%, transparent 72%)',
        filter: 'blur(36px)',
      }} />

      {/* Outer ring — tilted */}
      <div style={{ position: 'absolute', inset: 0, transform: 'rotateX(58deg)' }}>
        <OrbitRing r={196} count={6} size={10} speed={16} colorA="rgba(79,114,248,0.92)" colorB="rgba(139,63,245,0.88)" delay={0} />
      </div>
      {/* Mid ring */}
      <div style={{ position: 'absolute', inset: 0, transform: 'rotateX(58deg) rotateZ(42deg)' }}>
        <OrbitRing r={138} count={4} size={7}  speed={11} colorA="rgba(75,188,255,0.92)" colorB="rgba(79,114,248,0.82)" delay={0.6} />
      </div>
      {/* Inner ring */}
      <div style={{ position: 'absolute', inset: 0, transform: 'rotateX(58deg) rotateZ(-22deg)' }}>
        <OrbitRing r={88}  count={3} size={5}  speed={7.5} colorA="rgba(139,63,245,0.88)" colorB="rgba(236,72,153,0.82)" delay={1.1} />
      </div>

      {/* Logo — centred, floating */}
      <motion.div
        initial={{ opacity: 0, scale: 0.72 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="anim-float"
        style={{
          position: 'relative', zIndex: 2,
          width: '52%',
          filter: 'drop-shadow(0 16px 48px rgba(79,114,248,0.32)) drop-shadow(0 4px 16px rgba(139,63,245,0.22))',
        }}
      >
        <img src="/favicon.png" alt="AnoByte Technologies" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </motion.div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   "What we build" pills row
───────────────────────────────────────── */
const WHAT_WE_BUILD = [
  'Web & App Development',
  'Custom Software',
  'Business Systems',
  'APIs & Integrations',
]

/* ─────────────────────────────────────────
   Hero
───────────────────────────────────────── */
export default function Hero() {
  const ref = useRef(null)
  const mx  = useMotionValue(0)
  const my  = useMotionValue(0)

  useEffect(() => {
    const fn = e => {
      const r = ref.current?.getBoundingClientRect()
      if (r) {
        mx.set(e.clientX - r.left - r.width / 2)
        my.set(e.clientY - r.top  - r.height / 2)
      }
    }
    window.addEventListener('mousemove', fn, { passive: true })
    return () => window.removeEventListener('mousemove', fn)
  }, [mx, my])

  const fade = i => ({
    initial:    { opacity: 0, y: 24 },
    animate:    { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: i * 0.11, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#fff',
        paddingTop: 'clamp(64px,8vw,76px)',
        overflow: 'hidden',
      }}
    >
      {/* ── Backgrounds ── */}
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.42 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 55% at 62% 35%, rgba(79,114,248,0.07) 0%, transparent 60%)' }} />
      <div className="anim-blob"  style={{ position: 'absolute', top: '5%',   left: '-6%', width: 460, height: 460, borderRadius: '50%', background: C.blue500,   filter: 'blur(150px)', opacity: 0.07 }} />
      <div className="anim-blob2" style={{ position: 'absolute', bottom: '2%',right: '-6%',width: 500, height: 500, borderRadius: '50%', background: C.violet500, filter: 'blur(170px)', opacity: 0.06 }} />

      {/* ── Content ── */}
      <div style={{
        position: 'relative', flex: 1,
        display: 'flex', alignItems: 'center',
        width: '100%', maxWidth: maxW, margin: '0 auto',
        padding: `clamp(32px,5vw,56px) ${gutter} clamp(28px,4vw,48px)`,
      }}>
        <div className="hero-grid">

          {/* ── Left: copy ── */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            {/* Headline */}
            <motion.h1
              {...fade(0)}
              style={{
                fontFamily: F.head, fontWeight: 800,
                color: C.ink,
                fontSize: 'clamp(2rem,4.6vw,3.9rem)',
                lineHeight: 1.08, letterSpacing: '-0.04em',
                marginBottom: 22,
              }}
            >
              We Build Software<br />
              For The Way<br />
              <span className="tg-anim">You Work.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              {...fade(1)}
              style={{
                fontSize: 'clamp(15px,1.6vw,17px)',
                lineHeight: 1.8, color: C.body,
                marginBottom: 36, maxWidth: 460,
              }}
            >
              We create websites, web applications, custom software, and business systems designed around your requirements — helping you automate processes, serve your customers, and get more done.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fade(2)} style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 44 }}>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '13px 26px', borderRadius: 12,
                    fontSize: 15, fontWeight: 700, fontFamily: F.head,
                    color: '#fff', background: G.brand, boxShadow: S.btn,
                  }}
                >
                  Start a Project <HiArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/services"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '12px 26px', borderRadius: 12,
                    fontSize: 15, fontWeight: 700, fontFamily: F.head,
                    color: C.ink3, background: '#fff',
                    border: `1.5px solid ${C.border}`,
                  }}
                >
                  View Our Services
                </Link>
              </motion.div>
            </motion.div>

            {/* From idea to implementation */}
            <motion.div {...fade(3)}>
              <p style={{
                fontSize: 11, fontWeight: 600, fontFamily: F.head,
                letterSpacing: '0.13em', textTransform: 'uppercase',
                color: C.muted, marginBottom: 10,
              }}>
                From idea to implementation
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {WHAT_WE_BUILD.map((label, i) => (
                  <span
                    key={label}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      padding: '6px 14px', borderRadius: 100,
                      fontSize: 12, fontWeight: 600, fontFamily: F.head,
                      color: C.ink3,
                      background: i === 0 ? C.blue50  :
                                  i === 1 ? C.violetLight :
                                  i === 2 ? '#EDFFF7'  : '#EFF9FF',
                      border: `1px solid ${
                                  i === 0 ? C.blue200 :
                                  i === 1 ? '#C4A0FF' :
                                  i === 2 ? '#A7F3D0' : '#BAE6FD'}`,
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: logo + orbits ── */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <LogoOrbit mx={mx} my={my} />
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
        style={{ position: 'absolute', bottom: 22, left: '50%', transform: 'translateX(-50%)' }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          style={{
            width: 18, height: 30, borderRadius: 9,
            border: `1.5px solid ${C.border}`,
            display: 'flex', justifyContent: 'center', paddingTop: 5,
          }}
        >
          <div style={{ width: 3, height: 7, borderRadius: 2, background: G.brand }} />
        </motion.div>
      </motion.div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: clamp(28px, 5vw, 60px);
          align-items: center;
          width: 100%;
        }
        .hero-right { display: flex; }
        @media (max-width: 900px) {
          .hero-grid  { grid-template-columns: 1fr; }
          .hero-right { display: none; }
        }
      `}</style>
    </section>
  )
}
