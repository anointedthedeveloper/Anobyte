import { motion } from 'framer-motion'
import { C, S, F, G } from '../../styles/tokens'
import { Section, SectionHeader } from '../ui/Wrap'

const values = [
  { title: 'Quality first',             desc: 'We do not ship work we are not proud of. Every deliverable is reviewed, tested, and documented before it leaves our hands.',                accent: C.blue500,   bg: C.blue50 },
  { title: 'Honest communication',      desc: 'If something is taking longer than planned, or a technical decision needs revisiting, we say so early — not after it has become a problem.', accent: C.violet500, bg: C.violetLight },
  { title: 'Client ownership',          desc: 'You own everything we build. Source code, designs, documentation — all of it. We are here to build your asset, not create a dependency.',   accent: '#009955',   bg: '#EDFFF7' },
  { title: 'Long-term thinking',        desc: 'We write code that your next developer can understand. Good architecture and clear documentation are not optional extras.',                   accent: '#D97706',   bg: '#FFFBEB' },
]

const timeline = [
  { year: '2019', title: 'Founded',                desc: 'AnoByte started as a two-person consultancy focused on helping small businesses get properly built software.' },
  { year: '2020', title: 'First enterprise client', desc: 'Landed our first enterprise engagement — a custom ERP integration for a manufacturing business.' },
  { year: '2021', title: 'Mobile practice',         desc: 'Built out a dedicated mobile engineering team, enabling full-stack React Native delivery.' },
  { year: '2022', title: 'Cloud & DevOps',          desc: 'Expanded into cloud architecture, infrastructure-as-code, and managed DevOps services.' },
  { year: '2023', title: 'Full-service studio',     desc: 'Grew into a full-service product studio covering strategy, design, engineering, and support.' },
  { year: '2024', title: 'Continued growth',        desc: 'Focused on deepening expertise in AI-integrated products and high-scale backend systems.' },
]

export default function About() {
  return (
    <>
      {/* Mission & Vision */}
      <Section bg="#fff">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="about-split">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ background: '#06081A', borderRadius: 20, padding: '36px 36px 40px', position: 'relative', overflow: 'hidden' }}
          >
            <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.08 }} />
            <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: C.blue500, filter: 'blur(80px)', opacity: 0.3 }} />
            <div style={{ position: 'relative' }}>
              <p style={{ fontSize: 10, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Our Mission</p>
              <h3 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(1.4rem,2.2vw,1.9rem)', letterSpacing: '-0.03em', lineHeight: 1.2, color: '#fff', marginBottom: 16 }}>
                Build software that actually works.
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.52)' }}>
                Not just software that demos well — software that performs in production, survives edge cases, and does not need to be rewritten in eighteen months.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ background: C.bg, borderRadius: 20, padding: '36px 36px 40px', border: `1px solid ${C.border}` }}
          >
            <p style={{ fontSize: 10, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted, marginBottom: 16 }}>Our Vision</p>
            <h3 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(1.4rem,2.2vw,1.9rem)', letterSpacing: '-0.03em', lineHeight: 1.2, color: C.ink, marginBottom: 16 }}>
              The most trusted engineering partner for ambitious teams.
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>
              Trusted not because we are the biggest, but because we are consistent — clear communication, solid code, and a genuine long-term interest in the products we help build.
            </p>
          </motion.div>
        </div>

        <style>{`.about-split { grid-template-columns: 1fr 1fr; } @media(max-width:740px){ .about-split { grid-template-columns: 1fr; } }`}</style>
      </Section>

      {/* Values */}
      <Section bg={C.bg}>
        <SectionHeader eyebrow="What We Stand For" title="Our" titleGrad="values" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              style={{ background: '#fff', borderRadius: 16, border: `1px solid ${C.border}`, boxShadow: S.card, overflow: 'hidden' }}
            >
              <div style={{ height: 3, background: v.accent }} />
              <div style={{ padding: '20px 22px 24px' }}>
                <div style={{ width: 40, height: 40, borderRadius: 11, background: v.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: v.accent }} />
                </div>
                <h4 style={{ fontFamily: F.head, fontWeight: 700, fontSize: 15, color: C.ink, marginBottom: 8 }}>{v.title}</h4>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: C.body }}>{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section bg="#fff">
        <SectionHeader eyebrow="Our Journey" title="How we" titleGrad="got here" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="timeline-grid">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{ display: 'flex', gap: 16, background: '#fff', borderRadius: 14, border: `1px solid ${C.border}`, boxShadow: S.card, padding: '18px 20px' }}
            >
              <div style={{ flexShrink: 0, width: 52, height: 52, borderRadius: 13, background: G.brand, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: F.head, fontWeight: 800, fontSize: 13, color: '#fff' }}>{t.year.slice(2)}'</span>
              </div>
              <div style={{ paddingTop: 2 }}>
                <p style={{ fontSize: 11, fontWeight: 600, fontFamily: F.head, color: C.blue500, marginBottom: 2 }}>{t.year}</p>
                <p style={{ fontFamily: F.head, fontWeight: 700, fontSize: 14, color: C.ink, marginBottom: 4 }}>{t.title}</p>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: C.body }}>{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <style>{`.timeline-grid { grid-template-columns: 1fr 1fr; } @media(max-width:680px){ .timeline-grid { grid-template-columns: 1fr; } }`}</style>
      </Section>
    </>
  )
}
