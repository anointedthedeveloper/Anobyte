import { motion } from 'framer-motion'
import {
  HiOutlineSparkles,
  HiOutlineChatBubbleLeftRight,
  HiOutlineKey,
  HiOutlineArrowTrendingUp,
} from 'react-icons/hi2'
import { C, S, F, G, maxW, gutter } from '../../styles/tokens'
import { Section, SectionHeader } from '../ui/Wrap'

const values = [
  { Icon: HiOutlineSparkles,              title: 'Quality first',        desc: 'We do not ship work we are not proud of. Every deliverable is reviewed, tested, and documented before it leaves our hands.',                accent: C.blue500,   bg: C.blue50 },
  { Icon: HiOutlineChatBubbleLeftRight,   title: 'Honest communication', desc: 'If something is taking longer than planned, or a technical decision needs revisiting, we say so early — not after it becomes a problem.',   accent: C.violet500, bg: C.violetLight },
  { Icon: HiOutlineKey,                   title: 'Client ownership',     desc: 'You own everything we build. Source code, designs, documentation — all of it. We are here to build your asset, not create a dependency.',   accent: '#009955',   bg: '#EDFFF7' },
  { Icon: HiOutlineArrowTrendingUp,       title: 'Long-term thinking',   desc: 'We write code that your next developer can understand. Good architecture and clear documentation are not optional extras.',                 accent: '#D97706',   bg: '#FFFBEB' },
]

const timeline = [
  { year: '2019', title: 'Founded',                desc: 'Started as a two-person consultancy helping small businesses get properly built software.' },
  { year: '2020', title: 'First enterprise client', desc: 'Landed our first enterprise engagement — a custom ERP integration for a manufacturing business.' },
  { year: '2021', title: 'Mobile practice',         desc: 'Built out a dedicated mobile engineering team, enabling full-stack React Native delivery.' },
  { year: '2022', title: 'Cloud & DevOps',          desc: 'Expanded into cloud architecture, infrastructure-as-code, and managed DevOps services.' },
  { year: '2023', title: 'Full-service studio',     desc: 'Grew into a full-service product studio covering strategy, design, engineering, and support.' },
  { year: '2024', title: 'Continued growth',        desc: 'Deepening expertise in AI-integrated products and high-scale backend systems.' },
]

const fade = (i = 0, dir = 'y') => ({
  initial: { opacity: 0, [dir]: 24 },
  whileInView: { opacity: 1, [dir]: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
})

export default function About() {
  return (
    <>
      {/* ── Mission & Vision ── */}
      <Section bg="#fff">
        <div className="about-split">
          {/* Mission — dark card */}
          <motion.div {...fade(0)} className="mission-card">
            <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.07 }} />
            <div style={{ position: 'absolute', top: -50, right: -50, width: 220, height: 220, borderRadius: '50%', background: C.blue500, filter: 'blur(90px)', opacity: 0.28 }} />
            <div style={{ position: 'absolute', bottom: -30, left: '20%', width: 160, height: 160, borderRadius: '50%', background: C.violet500, filter: 'blur(80px)', opacity: 0.18 }} />
            <div style={{ position: 'relative' }}>
              <p style={{ fontSize: 10.5, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 18 }}>
                Our Mission
              </p>
              <h3 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(1.5rem,2.4vw,2rem)', letterSpacing: '-0.03em', lineHeight: 1.2, color: '#fff', marginBottom: 18 }}>
                We build software that solves real problems.
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.50)' }}>
                Not just software that ships — software that fits the way you actually work, holds up under real use, and doesn't need to be replaced in a year.
              </p>
              {/* Gradient rule */}
              <div style={{ marginTop: 32, height: 1, background: 'linear-gradient(90deg, rgba(79,114,248,0.5) 0%, rgba(139,63,245,0.5) 60%, transparent 100%)' }} />
              <p style={{ marginTop: 16, fontSize: 13, color: 'rgba(255,255,255,0.28)', fontStyle: 'italic', lineHeight: 1.6 }}>
                "Built for the people who use it, not just the demo."
              </p>
            </div>
          </motion.div>

          {/* Vision — light card */}
          <motion.div {...fade(1)} className="vision-card">
            <p style={{ fontSize: 10.5, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.muted, marginBottom: 18 }}>
              Our Vision
            </p>
            <h3 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(1.5rem,2.4vw,2rem)', letterSpacing: '-0.03em', lineHeight: 1.2, color: C.ink, marginBottom: 18 }}>
              The most trusted engineering partner for ambitious teams.
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.body }}>
              Trusted not because we are the biggest, but because we are consistent — clear communication, solid code, and a genuine long-term interest in the products we help build.
            </p>

            {/* Stat pills */}
            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              {[
                { val: '5+',   label: 'Years building' },
                { val: '30+',  label: 'Projects shipped' },
                { val: '100%', label: 'Client ownership' },
              ].map(s => (
                <div key={s.label} style={{
                  padding: '10px 18px', borderRadius: 12,
                  background: C.blue50, border: `1px solid ${C.blue100}`,
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                }}>
                  <span style={{ fontFamily: F.head, fontWeight: 800, fontSize: 20, color: C.blue500, lineHeight: 1.1 }}>{s.val}</span>
                  <span style={{ fontSize: 11, color: C.muted, marginTop: 3, fontFamily: F.head, fontWeight: 600 }}>{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── Values ── */}
      <Section bg={C.bg}>
        <SectionHeader eyebrow="What We Stand For" title="Our" titleGrad="values" />
        <div className="values-grid">
          {values.map((v, i) => (
            <motion.div key={v.title} {...fade(i)} className="value-card">
              <div style={{ height: 3, background: v.accent }} />
              <div style={{ padding: '22px 22px 26px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: v.bg, border: `1px solid ${v.accent}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <v.Icon size={20} style={{ color: v.accent }} />
                  </div>
                  <span style={{ fontFamily: F.head, fontWeight: 900, fontSize: 28, color: '#F0F1F8', lineHeight: 1 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4 style={{ fontFamily: F.head, fontWeight: 700, fontSize: 15.5, color: C.ink, marginBottom: 8, lineHeight: 1.3 }}>{v.title}</h4>
                <p style={{ fontSize: 13.5, lineHeight: 1.8, color: C.body }}>{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Timeline ── */}
      <Section bg="#fff">
        <SectionHeader eyebrow="Our Journey" title="How we" titleGrad="got here" />
        <div className="timeline-grid">
          {timeline.map((t, i) => (
            <motion.div key={t.year} {...fade(i)} className="timeline-card">
              {/* Year badge */}
              <div style={{
                flexShrink: 0, width: 54, height: 54, borderRadius: 14,
                background: G.brand,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(79,114,248,0.30)',
              }}>
                <span style={{ fontFamily: F.head, fontWeight: 900, fontSize: 12, color: '#fff', letterSpacing: '-0.02em' }}>
                  {t.year.slice(2)}'
                </span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, fontFamily: F.head, color: C.blue500, letterSpacing: '0.04em' }}>{t.year}</span>
                  <div style={{ flex: 1, height: 1, background: C.border }} />
                </div>
                <p style={{ fontFamily: F.head, fontWeight: 700, fontSize: 14.5, color: C.ink, marginBottom: 5 }}>{t.title}</p>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: C.body }}>{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <style>{`
        .about-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          align-items: stretch;
        }
        .mission-card {
          background: linear-gradient(145deg, #1a1f4e 0%, #0d1035 100%);
          border-radius: 20px;
          padding: clamp(28px, 4vw, 44px);
          position: relative;
          overflow: hidden;
        }
        .vision-card {
          background: ${C.bg};
          border-radius: 20px;
          padding: clamp(28px, 4vw, 44px);
          border: 1px solid ${C.border};
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(12px, 1.8vw, 20px);
        }
        .value-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid ${C.border};
          box-shadow: ${S.card};
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.22s, transform 0.22s;
        }
        .value-card:hover {
          box-shadow: ${S.cardH};
          transform: translateY(-3px);
        }
        .timeline-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(12px, 2vw, 18px);
        }
        .timeline-card {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background: #fff;
          border-radius: 14px;
          border: 1px solid ${C.border};
          box-shadow: ${S.card};
          padding: 20px 22px;
          transition: box-shadow 0.22s, transform 0.22s;
        }
        .timeline-card:hover {
          box-shadow: ${S.cardH};
          transform: translateY(-2px);
        }
        @media (max-width: 860px) {
          .about-split { grid-template-columns: 1fr; }
          .values-grid  { grid-template-columns: repeat(2, 1fr); }
          .timeline-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .values-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
