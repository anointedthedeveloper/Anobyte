import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'
import { C, G, S, F } from '../../styles/tokens'
import { Section, SectionHeader } from '../ui/Wrap'

const reasons = [
  { title: 'Senior engineers only',        desc: 'Every engagement is led by engineers with 5+ years of production experience. No juniors learning on your budget.' },
  { title: 'Transparent by default',       desc: 'Weekly updates, a shared project board, and an open line of communication. You always know exactly where things stand.' },
  { title: 'Milestones, not surprises',    desc: 'We scope carefully and plan rigorously. Deliverables are agreed upfront. Scope changes go through a clear change process.' },
  { title: 'Built for the long term',      desc: "Clean code, good documentation, proper tests. We hand over software you can maintain and grow — not a black box." },
  { title: 'Post-launch support included', desc: 'We stay around after launch. Monitoring, bug fixes, and iterative improvements are part of how we work.' },
  { title: 'One team, full ownership',     desc: 'We own the outcome end-to-end — design, engineering, QA, and deployment — so nothing falls through the cracks.' },
]

const pillars = [
  { label: 'Code Quality',    desc: 'Clean, tested, documented',           accent: C.blue500,   bg: C.blue50 },
  { label: 'Communication',   desc: 'Weekly syncs + shared board',         accent: C.violet500, bg: C.violetLight },
  { label: 'Delivery',        desc: 'On scope, on schedule',               accent: '#009955',   bg: '#EDFFF7' },
  { label: 'Support',         desc: 'Post-launch & ongoing maintenance',   accent: '#D97706',   bg: '#FFFBEB' },
]

export default function WhyChooseUs() {
  return (
    <Section bg={C.bg}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="why-grid">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p style={{ fontSize: 11, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.blue500, marginBottom: 14 }}>
            Why AnoByte
          </p>
          <h2 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(1.8rem,3vw,2.6rem)', letterSpacing: '-0.033em', lineHeight: 1.12, color: C.ink, marginBottom: 18 }}>
            How we're different
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: C.body, marginBottom: 36 }}>
            We've seen what goes wrong on software projects — poor communication, scope creep, brittle code. We've built our process specifically to avoid all of it.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                style={{ display: 'flex', gap: 14 }}
              >
                <HiCheckCircle style={{ color: C.blue500, flexShrink: 0, marginTop: 2 }} size={18} />
                <div>
                  <p style={{ fontFamily: F.head, fontWeight: 700, fontSize: 15, color: C.ink, marginBottom: 3 }}>{r.title}</p>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.body }}>{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — dark panel */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', borderRadius: 24, overflow: 'hidden' }}
        >
          <div style={{ background: '#06081A', padding: 36, position: 'relative' }}>
            <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.1 }} />
            <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: C.blue500, filter: 'blur(80px)', opacity: 0.3 }} />
            <div style={{ position: 'absolute', bottom: -30, left: -30, width: 160, height: 160, borderRadius: '50%', background: C.violet500, filter: 'blur(70px)', opacity: 0.22 }} />

            <div style={{ position: 'relative' }}>
              <p style={{ fontSize: 11, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>
                Our Four Pillars
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {pillars.map((p, i) => (
                  <motion.div
                    key={p.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '18px 18px 20px' }}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: `${p.accent}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: p.accent }} />
                    </div>
                    <p style={{ fontFamily: F.head, fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 4 }}>{p.label}</p>
                    <p style={{ fontSize: 12, lineHeight: 1.55, color: 'rgba(255,255,255,0.42)' }}>{p.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', margin: '24px 0' }} />

              <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.45)', fontStyle: 'italic' }}>
                "We treat every project like it's our own product — because if it fails, that's on us too."
              </p>
              <p style={{ fontSize: 12, fontWeight: 600, fontFamily: F.head, color: 'rgba(255,255,255,0.28)', marginTop: 8 }}>
                — AnoByte Engineering Team
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .why-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 840px) { .why-grid { grid-template-columns: 1fr; } }
      `}</style>
    </Section>
  )
}
