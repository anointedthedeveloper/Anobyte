import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { C, G, F, S } from '../../styles/tokens'
import { Section, SectionHeader } from '../ui/Wrap'

/* ── Process steps ── */
const steps = [
  { n: '01', title: 'Understand', desc: 'We start by understanding your idea, your business, your users, and what you actually need the software to do.', color: C.blue500,   bg: C.blue50 },
  { n: '02', title: 'Plan',       desc: 'We define the features, technology, scope, and development timeline before a single line of code is written.',   color: C.violet500, bg: C.violetLight },
  { n: '03', title: 'Build',      desc: 'We design and develop the solution in clear stages, keeping you involved and updated throughout the process.',    color: '#009955',   bg: '#EDFFF7' },
  { n: '04', title: 'Launch',     desc: 'We test thoroughly, deploy carefully, and make sure everything works the way it should before going live.',       color: '#D97706',   bg: '#FFFBEB' },
  { n: '05', title: 'Improve',    desc: 'After launch we can continue maintaining, improving, and expanding the system as your business grows.',          color: '#0284C7',   bg: '#EFF9FF' },
]

/* ── What you get working with us ── */
const reasons = [
  { title: 'Software built around you',   desc: "We don't apply a template to your problem. We understand what you need first, then figure out the best way to build it.", icon: '◎' },
  { title: 'Clear communication',         desc: 'You know what we are working on, what is done, and what comes next. No surprises.',                                        icon: '◈' },
  { title: 'Practical choices',           desc: 'We choose technologies and approaches that fit the project, not whatever is trending.',                                    icon: '⬡' },
  { title: 'Built to last',               desc: 'We write software that can be maintained, improved, and handed over without headaches.',                                  icon: '⊞' },
  { title: 'You work with the builders',  desc: 'No middlemen. The people you talk to are the same people building your product.',                                         icon: '◉' },
  { title: 'We stay after launch',        desc: 'Delivery is not the end. We can continue maintaining and improving the system after it goes live.',                       icon: '◐' },
]

/* ── Step slideshow ── */
function ProcessSlider() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setActive(a => (a + 1) % steps.length), [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 3200)
    return () => clearInterval(t)
  }, [paused, next])

  const s = steps[active]

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ userSelect: 'none' }}
    >
      {/* Step number pills row */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
        {steps.map((st, i) => (
          <button
            key={st.n}
            onClick={() => { setActive(i); setPaused(true) }}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '6px 14px', borderRadius: 100,
              border: 'none', cursor: 'pointer',
              fontFamily: F.head, fontWeight: 700, fontSize: 13,
              transition: 'all 0.22s',
              background: i === active ? s.color : C.bg,
              color: i === active ? '#fff' : C.muted,
              boxShadow: i === active ? `0 2px 10px ${s.color}44` : 'none',
            }}
          >
            {st.n} {st.title}
          </button>
        ))}
      </div>

      {/* Animated step content */}
      <div style={{
        position: 'relative',
        borderRadius: 20,
        overflow: 'hidden',
        background: s.bg,
        border: `1px solid ${s.color}22`,
        minHeight: 200,
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{   opacity: 0, x: -32 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ padding: 'clamp(28px,4vw,44px)' }}
          >
            {/* Number + title row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                background: s.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 4px 16px ${s.color}44`,
              }}>
                <span style={{ fontFamily: F.head, fontWeight: 900, fontSize: 16, color: '#fff' }}>{s.n}</span>
              </div>
              <h3 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(1.4rem,2.5vw,2rem)', color: C.ink, letterSpacing: '-0.03em' }}>
                {s.title}
              </h3>
            </div>
            <p style={{ fontSize: 'clamp(14px,1.4vw,17px)', lineHeight: 1.8, color: C.body, maxWidth: 560 }}>
              {s.desc}
            </p>

            {/* Progress bar */}
            <div style={{ marginTop: 28, height: 3, borderRadius: 2, background: `${s.color}20`, overflow: 'hidden' }}>
              <motion.div
                key={`bar-${active}-${paused}`}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: paused ? 0 : 3.2, ease: 'linear' }}
                style={{ height: '100%', background: s.color, borderRadius: 2 }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next arrows */}
        <div style={{ position: 'absolute', bottom: 20, right: 20, display: 'flex', gap: 8 }}>
          {[
            { label: '←', fn: () => { setActive(a => (a - 1 + steps.length) % steps.length); setPaused(true) } },
            { label: '→', fn: () => { next(); setPaused(true) } },
          ].map(btn => (
            <button
              key={btn.label}
              onClick={btn.fn}
              style={{
                width: 32, height: 32, borderRadius: 9, border: `1px solid ${s.color}40`,
                background: '#fff', color: s.color, cursor: 'pointer',
                fontFamily: F.head, fontWeight: 700, fontSize: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.18s, color 0.18s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = s.color; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = s.color }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function WhyChooseUs() {
  return (
    <>
      {/* ── How We Work ── */}
      <Section bg="#fff">
        <SectionHeader
          eyebrow="How We Work"
          title="A Straightforward Way"
          titleGrad="to Build Software"
          subtitle="From the first conversation to deployment, we keep the process clear and predictable."
        />
        <ProcessSlider />
      </Section>

      {/* ── What you get ── */}
      <Section bg={C.bg}>
        <SectionHeader
          eyebrow="Working With Us"
          title="What You Can"
          titleGrad="Expect"
          subtitle="No agency jargon. Here is what working with Anobyte Technologies actually looks like."
        />

        <div className="expect-grid">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{
                background: '#fff',
                borderRadius: 16,
                border: `1px solid ${C.border}`,
                padding: '24px 22px 28px',
                boxShadow: S.card,
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = S.cardH; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = S.card;  e.currentTarget.style.transform = 'none' }}
            >
              {/* Icon circle with gradient */}
              <div style={{
                width: 36, height: 36, borderRadius: 10, marginBottom: 14,
                background: G.brand,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 15, color: '#fff', lineHeight: 1 }}>{r.icon}</span>
              </div>
              <p style={{ fontFamily: F.head, fontWeight: 700, fontSize: 15, color: C.ink, marginBottom: 8 }}>{r.title}</p>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: C.body }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <style>{`
        .expect-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(12px, 2vw, 20px);
        }
        @media (max-width: 860px) { .expect-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 480px) { .expect-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  )
}
