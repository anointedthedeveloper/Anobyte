import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { HiCodeBracket, HiCog6Tooth, HiArrowsRightLeft } from 'react-icons/hi2'
import { HiDesktopComputer } from 'react-icons/hi'
import { C, G, F, S } from '../../styles/tokens'

const SERVICES = [
  { Icon: HiCodeBracket,      title: 'Web & App Development',   desc: 'Fast, responsive websites and web applications built for performance and user experience.', accent: C.blue500,   bg: C.blue50      },
  { Icon: HiDesktopComputer,  title: 'Custom Software Systems',  desc: 'Tailored software solutions that solve your unique business challenges.',                   accent: C.violet500, bg: C.violetLight },
  { Icon: HiCog6Tooth,        title: 'Business Automation',      desc: 'Streamline workflows and reduce manual work with smart automation.',                         accent: '#009955',   bg: '#EDFFF7'     },
  { Icon: HiArrowsRightLeft,  title: 'APIs & Integrations',      desc: 'Connect your tools and platforms seamlessly to improve efficiency and data flow.',           accent: '#0284C7',   bg: '#EFF9FF'     },
]

const fade = i => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: i * 0.10, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO — truly full-width, no maxW cap
      ══════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        width: '100%',
        background: '#fff',
        overflow: 'hidden',
        /* Push content below fixed navbar */
        paddingTop: 'clamp(64px,8vw,76px)',
      }}>
        <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }} />

        {/*
          Two-column flex — no wrapper, no maxW.
          Copy takes 48% of viewport, image takes the rest to the edge.
        */}
        <div style={{
          display: 'flex',
          alignItems: 'stretch',
          width: '100%',
          minHeight: 'calc(92svh - clamp(64px,8vw,76px))',
        }}>

          {/* ─── LEFT: copy column ─────────────────
              Left padding = safe gutter so text never
              touches the edge.  Right padding creates
              breathing room before the image.
          ─────────────────────────────────────── */}
          <div style={{
            flex: '0 0 48%',
            width: '48%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            /* Use 5vw left pad — feels natural at all sizes */
            padding: 'clamp(48px,7vw,88px) clamp(24px,3vw,48px) clamp(48px,7vw,88px) clamp(20px,5vw,80px)',
            position: 'relative',
            zIndex: 2,
          }} className="hero-copy">

            {/* Eyebrow */}
            <motion.div {...fade(0)} style={{ marginBottom: 22 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 14px', borderRadius: 100,
                background: 'rgba(79,114,248,0.08)',
                border: '1px solid rgba(79,114,248,0.20)',
                fontSize: 11, fontWeight: 700, fontFamily: F.head,
                letterSpacing: '0.10em', textTransform: 'uppercase',
                color: C.blue500,
              }}>
                <span className="anim-pulse" style={{ display: 'block', width: 5, height: 5, borderRadius: '50%', background: C.blue500 }} />
                Software Solutions That Deliver Results
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 {...fade(1)} style={{
              fontFamily: F.head, fontWeight: 800,
              color: C.ink,
              fontSize: 'clamp(2.2rem,3.6vw,4rem)',
              lineHeight: 1.08, letterSpacing: '-0.038em',
              marginBottom: 24,
            }}>
              We Build Digital{' '}
              <span className="tg-anim">Solutions</span>{' '}
              That Move Your Business Forward.
            </motion.h1>

            {/* Sub */}
            <motion.p {...fade(2)} style={{
              fontSize: 'clamp(14px,1.4vw,16px)',
              lineHeight: 1.85, color: C.body,
              marginBottom: 40, maxWidth: 460,
            }}>
              From modern websites to custom software and business systems, we build tools that simplify operations, automate processes, and help you grow with confidence.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fade(3)} style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 28px', borderRadius: 12,
                  fontSize: 15, fontWeight: 700, fontFamily: F.head,
                  color: '#fff', background: G.brand, boxShadow: S.btn,
                }}>
                  Start a Project <HiArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/services" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '13px 28px', borderRadius: 12,
                  fontSize: 15, fontWeight: 700, fontFamily: F.head,
                  color: C.ink3, background: '#fff',
                  border: `1.5px solid ${C.border}`,
                }}>
                  Explore Our Services
                </Link>
              </motion.div>
            </motion.div>

          </div>

          {/* ─── RIGHT: image — fills to viewport edge ─
              position:relative + overflow:hidden.
              Image is absolute-inset so it stretches
              to fill the column fully, no gaps.
          ─────────────────────────────────────── */}
          <motion.div
            className="hero-img-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{
              flex: '1 1 52%',
              position: 'relative',
              overflow: 'hidden',
              /* No right/top/bottom padding — bleeds to all edges */
            }}
          >
            <img
              src="/hero.png"
              alt="Anobyte Technologies software solutions"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'left center',
                display: 'block',
              }}
            />
            {/* Left-side blend: image fades into white copy area */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.3) 18%, transparent 38%)',
              pointerEvents: 'none',
            }} />
            {/* Bottom blend: image fades into What We Do section */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '32%',
              background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.98) 100%)',
              pointerEvents: 'none',
            }} />
          </motion.div>

        </div>

      </section>

      {/* ══════════════════════════════════════
          WHAT WE DO — also full-width section,
          content centred with inline padding
      ══════════════════════════════════════ */}
      <section style={{
        background: '#fff',
        borderTop: `1px solid ${C.border}`,
        padding: 'clamp(52px,7vw,80px) clamp(20px,5vw,80px)',
      }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <p style={{
            fontSize: 11, fontWeight: 700, fontFamily: F.head,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: C.muted, marginBottom: 10,
          }}>
            What We Do
          </p>
          <h2 style={{
            fontFamily: F.head, fontWeight: 800,
            fontSize: 'clamp(1.6rem,2.6vw,2.2rem)',
            color: C.ink, letterSpacing: '-0.03em',
          }}>
            Practical Software.{' '}
            <span className="tg">Real Impact.</span>
          </h2>
        </motion.div>

        {/* 4-col cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: 'clamp(14px,2vw,24px)',
          maxWidth: '1400px',
          margin: '0 auto',
        }} className="what-grid">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              style={{
                display: 'flex', flexDirection: 'column', gap: 14,
                padding: '28px 24px 32px',
                borderRadius: 16,
                border: `1px solid ${C.border}`,
                background: '#fff',
                boxShadow: S.card,
                transition: 'box-shadow 0.22s, transform 0.22s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = S.cardH; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = S.card;  e.currentTarget.style.transform = 'none' }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: s.bg, border: `1px solid ${s.accent}20`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <s.Icon size={24} style={{ color: s.accent }} />
              </div>
              <h3 style={{ fontFamily: F.head, fontWeight: 700, fontSize: 16, color: C.ink, lineHeight: 1.3 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: C.body }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </section>

      <style>{`
        @media (max-width: 860px) {
          .hero-copy    { flex: 1 1 100% !important; width: 100% !important; }
          .hero-img-col { display: none !important; }
          .what-grid    { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) {
          .what-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
