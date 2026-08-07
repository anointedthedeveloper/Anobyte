import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { HiCodeBracket, HiCog6Tooth, HiArrowsRightLeft } from 'react-icons/hi2'
import { HiDesktopComputer } from 'react-icons/hi'
import { C, G, F, S } from '../../styles/tokens'

const NAV_H = 72 // matches navbar height

const SERVICES = [
  { Icon: HiCodeBracket,     title: 'Web & App Development',  desc: 'Fast, responsive websites and web applications built for performance and user experience.', accent: C.blue500,   bg: C.blue50      },
  { Icon: HiDesktopComputer, title: 'Custom Software Systems', desc: 'Tailored software solutions that solve your unique business challenges.',                   accent: C.violet500, bg: C.violetLight },
  { Icon: HiCog6Tooth,       title: 'Business Automation',     desc: 'Streamline workflows and reduce manual work with smart automation.',                         accent: '#009955',   bg: '#EDFFF7'     },
  { Icon: HiArrowsRightLeft, title: 'APIs & Integrations',     desc: 'Connect your tools and platforms seamlessly to improve efficiency and data flow.',           accent: '#0284C7',   bg: '#EFF9FF'     },
]

const fade = i => ({
  initial:    { opacity: 0, y: 32 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <>
      {/* ══════════════════════════════════
          HERO SECTION
      ══════════════════════════════════ */}
      <section className="hero-section">
        {/* grid overlay */}
        <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none' }} />

        <div className="hero-inner">

          {/* ── LEFT: copy ── */}
          <div className="hero-copy">

            <motion.h1 {...fade(0)} className="hero-h1">
              We Build Software That
              {' '}<span className="tg-anim">Solves Real Problems.</span>
            </motion.h1>

            <motion.p {...fade(1)} className="hero-sub">
              We design and develop websites, web applications, custom software, and business systems built around your goals, workflows, and users.
            </motion.p>

            <motion.div {...fade(2)} style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              <Link to="/contact" className="hero-btn-primary">
                Start a Project <HiArrowRight size={17} />
              </Link>
              <Link to="/services" className="hero-btn-secondary">
                Explore Our Services
              </Link>
            </motion.div>

          </div>

          {/* ── RIGHT: image ── */}
          <motion.div
            className="hero-img-col"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/hero.png"
              alt="Anobyte Technologies — software in action"
              className="hero-img"
            />
            {/* Left fade — blends image into white copy */}
            <div className="hero-fade-left" />
            {/* Bottom fade — blends into What We Do strip */}
            <div className="hero-fade-bottom" />
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════
          WHAT WE DO STRIP
      ══════════════════════════════════ */}
      <section className="wwd-section">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 52 }}
        >
          <p style={{
            fontSize: 11, fontWeight: 700, fontFamily: F.head,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: C.muted, marginBottom: 10,
          }}>
            What We Do
          </p>
          <h2 style={{
            fontFamily: F.head, fontWeight: 800,
            fontSize: 'clamp(1.6rem,2.4vw,2.4rem)',
            color: C.ink, letterSpacing: '-0.03em',
          }}>
            Practical Software.{' '}
            <span className="tg">Real Impact.</span>
          </h2>
        </motion.div>

        <div className="wwd-grid">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="wwd-card"
            >
              <div style={{
                width: 54, height: 54, borderRadius: 15, flexShrink: 0,
                background: s.bg, border: `1px solid ${s.accent}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 16,
              }}>
                <s.Icon size={24} style={{ color: s.accent }} />
              </div>
              <h3 style={{ fontFamily: F.head, fontWeight: 700, fontSize: 16, color: C.ink, lineHeight: 1.3, marginBottom: 10 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: C.body }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </section>

      {/* ══════════════════════════════════
          ALL STYLES
      ══════════════════════════════════ */}
      <style>{`

        /* ── Hero section ── */
        .hero-section {
          position: relative;
          width: 100%;
          background: #fff;
          overflow: hidden;
          padding-top: ${NAV_H}px;
        }

        /* Two-column full-bleed row */
        .hero-inner {
          display: flex;
          align-items: stretch;
          width: 100%;
          min-height: calc(100svh - ${NAV_H}px);
        }

        /* Left copy column */
        .hero-copy {
          flex: 0 0 46%;
          width: 46%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px 40px 60px clamp(20px, 5vw, 80px);
          position: relative;
          z-index: 2;
        }

        /* Headline */
        .hero-h1 {
          font-family: "Space Grotesk", sans-serif;
          font-weight: 800;
          color: ${C.ink};
          font-size: clamp(2rem, 3.2vw, 3.8rem);
          line-height: 1.1;
          letter-spacing: -0.038em;
          margin-bottom: 24px;
        }

        /* Sub text */
        .hero-sub {
          font-size: clamp(14px, 1.25vw, 17px);
          line-height: 1.85;
          color: ${C.body};
          margin-bottom: 40px;
          max-width: 480px;
        }

        /* CTA buttons */
        .hero-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px; border-radius: 12px;
          font-size: 15px; font-weight: 700;
          font-family: "Space Grotesk", sans-serif;
          color: #fff; background: ${G.brand};
          box-shadow: ${S.btn}; text-decoration: none;
          transition: box-shadow 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .hero-btn-primary:hover {
          box-shadow: ${S.btnH}; transform: translateY(-1px);
        }
        .hero-btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px; border-radius: 12px;
          font-size: 15px; font-weight: 600;
          font-family: "Space Grotesk", sans-serif;
          color: ${C.ink3}; background: transparent;
          border: 1.5px solid ${C.ink3}; text-decoration: none;
          transition: color 0.22s, border-color 0.22s;
          white-space: nowrap;
        }
        .hero-btn-secondary:hover {
          color: ${C.blue500};
          border-color: ${C.blue500};
        }

        /* Right image column — bleeds to right edge */
        .hero-img-col {
          flex: 1 1 54%;
          position: relative;
          overflow: hidden;
        }
        .hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
        }
        .hero-fade-left {
          position: absolute; inset: 0;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.95) 0%,
            rgba(255,255,255,0.50) 12%,
            rgba(255,255,255,0.10) 26%,
            transparent 40%
          );
          pointer-events: none;
        }
        .hero-fade-bottom {
          position: absolute; bottom: 0; left: 0; right: 0; height: 28%;
          background: linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.96) 100%);
          pointer-events: none;
        }

        /* ── What We Do ── */
        .wwd-section {
          background: #fff;
          border-top: 1px solid ${C.border};
          padding: clamp(56px, 7vw, 96px) clamp(20px, 5vw, 80px);
        }
        .wwd-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(16px, 2vw, 28px);
          max-width: 1600px;
          margin: 0 auto;
        }
        .wwd-card {
          display: flex; flex-direction: column;
          padding: 30px 26px 34px;
          border-radius: 18px;
          border: 1px solid ${C.border};
          background: #fff;
          box-shadow: ${S.card};
          transition: box-shadow 0.22s, transform 0.22s;
        }
        .wwd-card:hover {
          box-shadow: ${S.cardH};
          transform: translateY(-4px);
        }

        /* ── Responsiveness ── */

        /* Tablet / small desktop (900–1100px) */
        @media (max-width: 1100px) {
          .hero-copy { flex: 0 0 50%; width: 50%; padding-right: 28px; }
          .hero-img-col { flex: 1 1 50%; }
          .hero-h1 { font-size: clamp(1.8rem, 3.5vw, 3rem); }
        }

        /* Mobile (≤ 860px) — hide image, copy goes full width */
        @media (max-width: 860px) {
          .hero-inner   { min-height: auto; flex-direction: column; }
          .hero-copy    { flex: 1 1 auto; width: 100%; padding: 40px 24px 44px; }
          .hero-h1      { font-size: clamp(1.8rem, 6vw, 2.8rem); }
          .hero-sub     { max-width: 100%; }
          .hero-img-col { display: none; }
          .wwd-grid     { grid-template-columns: repeat(2, 1fr); }
        }

        /* Small mobile (≤ 480px) */
        @media (max-width: 480px) {
          .hero-copy { padding: 32px 16px 36px; }
          .hero-h1   { font-size: 1.75rem; }
          .wwd-grid  { grid-template-columns: 1fr; }
          .hero-btn-primary, .hero-btn-secondary { width: 100%; justify-content: center; }
        }

        /* Large screens — 1440px all-in-ones */
        @media (min-width: 1440px) {
          .hero-copy { padding-left: clamp(60px, 6vw, 120px); padding-right: 56px; }
          .hero-h1   { font-size: clamp(3rem, 3.4vw, 4.2rem); }
          .hero-sub  { font-size: 18px; }
          .hero-btn-primary, .hero-btn-secondary { font-size: 16px; padding: 15px 32px; }
        }

        /* Extra large — 1920px+ (2K, 4K, large all-in-ones) */
        @media (min-width: 1920px) {
          .hero-copy { padding-left: clamp(80px, 7vw, 160px); }
          .hero-h1   { font-size: clamp(3.4rem, 3.6vw, 5rem); }
          .hero-sub  { font-size: 19px; max-width: 560px; }
          .wwd-card  { padding: 36px 30px 40px; }
          .wwd-grid  { gap: 32px; }
        }
      `}</style>
    </>
  )
}
