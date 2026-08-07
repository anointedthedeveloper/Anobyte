import { motion } from 'framer-motion'
import { C, G, F } from '../../styles/tokens'
import { Section, SectionHeader } from '../ui/Wrap'

const steps = [
  { n: '01', title: 'Understand', desc: 'We start by understanding your idea, business, users, and requirements.' },
  { n: '02', title: 'Plan',       desc: 'We define the features, technology, scope, and development plan before building.' },
  { n: '03', title: 'Build',      desc: 'We design and develop the solution in clear stages, keeping you involved throughout.' },
  { n: '04', title: 'Launch',     desc: 'We test, deploy, and make sure everything is ready for real-world use.' },
  { n: '05', title: 'Improve',    desc: 'After launch, we can continue maintaining, improving, and expanding the system as your needs change.' },
]

const reasons = [
  { title: 'Built around your requirements', desc: "We don't force every project into the same template. The solution starts with what you actually need." },
  { title: 'Clear communication',            desc: 'You know what we\'re working on, what\'s completed, and what comes next.' },
  { title: 'Practical technology',           desc: 'We choose technologies based on the project rather than using technology simply because it\'s popular.' },
  { title: 'Built to grow',                  desc: 'We aim to create software that can be maintained, improved, and expanded as your requirements change.' },
  { title: 'Direct collaboration',           desc: 'You work directly with the people building your product.' },
  { title: 'Support after launch',           desc: "Our relationship doesn't have to end when the software goes live. We can continue maintaining and improving it." },
]

export default function WhyChooseUs() {
  return (
    <>
      {/* ── Section 4: How We Work ── */}
      <Section bg="#fff">
        <SectionHeader
          eyebrow="How We Work"
          title="A Straightforward Way"
          titleGrad="to Build Software"
          subtitle="From the first conversation to deployment, we keep the process clear."
        />

        <div className="process-strip">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{ position: 'relative' }}
            >
              {/* connector line */}
              {i < steps.length - 1 && (
                <div className="step-line" />
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: G.brand, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: F.head, fontWeight: 800, fontSize: 13, color: '#fff' }}>{s.n}</span>
                </div>
                <div>
                  <p style={{ fontFamily: F.head, fontWeight: 700, fontSize: 15, color: C.ink, marginBottom: 6 }}>{s.title}</p>
                  <p style={{ fontSize: 13, lineHeight: 1.7, color: C.body }}>{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Section 5: Why Work With Anobyte ── */}
      <Section bg={C.bg}>
        <SectionHeader
          eyebrow="Why Anobyte"
          title="Why Work With"
          titleGrad="Anobyte?"
          subtitle="We build software the way you'd want it built — clearly, practically, and around your actual requirements."
        />

        <div className="why-grid">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: i * 0.07 }}
              style={{
                background: '#fff',
                borderRadius: 16,
                border: `1px solid ${C.border}`,
                padding: '22px 24px 26px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: G.brand, marginBottom: 14,
                background: 'linear-gradient(135deg, #4F72F8, #8B3FF5)'
              }} />
              <p style={{ fontFamily: F.head, fontWeight: 700, fontSize: 15, color: C.ink, marginBottom: 8 }}>{r.title}</p>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: C.body }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <style>{`
        .process-strip {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: clamp(16px, 2.5vw, 28px);
          position: relative;
        }
        .step-line {
          display: none;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(14px, 2vw, 20px);
        }
        @media (max-width: 900px) {
          .process-strip { grid-template-columns: repeat(3, 1fr); }
          .why-grid      { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .process-strip { grid-template-columns: 1fr; gap: 20px; }
          .why-grid      { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
