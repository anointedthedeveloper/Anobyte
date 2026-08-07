import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { C, S, F } from '../../styles/tokens'
import { Section, SectionHeader } from '../ui/Wrap'

const faqs = [
  { q: 'How long does a typical project take?',     a: 'It depends entirely on scope. A focused web application usually takes 6–10 weeks. A larger product with multiple integrations can take 3–5 months. We give you a detailed timeline in the Planning phase before any code is written.' },
  { q: 'How does your process work?',               a: 'We work in two-week sprints. Each sprint starts with a planning session and ends with a demo and written update. You always know what was built, what\'s next, and why.' },
  { q: 'Who will actually be working on my project?',a:'Senior engineers only — no juniors, no offshore handoffs. The team you meet at the start is the team that builds the product.' },
  { q: 'Do you take over existing codebases?',      a: 'Yes. We start with a code audit, give you an honest assessment, and agree on a plan before touching anything. We\'ve taken over many projects and have a clear process for it.' },
  { q: 'Who owns the code when we\'re done?',       a: 'You do. On final payment, all source code, assets, and IP transfer to you without restriction. We also hand over documentation and onboarding materials.' },
  { q: 'Do you offer ongoing support?',             a: 'Yes — we offer monthly support and maintenance retainers covering monitoring, bug fixes, dependency updates, and small improvements. Details are agreed per engagement.' },
  { q: 'What if scope needs to change mid-project?', a: 'We expect it. Small changes are absorbed into the current sprint. Larger changes go through a transparent change order — impact on time and cost is assessed, approved by you, then implemented. No hidden extras.' },
]

function Item({ q, a, open, toggle, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.38, delay: i * 0.05 }}
      style={{ borderRadius: 14, overflow: 'hidden', border: `1px solid ${open ? C.blue200 : C.border}`, background: '#fff', transition: 'border-color 0.2s' }}
    >
      <button
        onClick={toggle}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '18px 22px', textAlign: 'left', background: 'none', cursor: 'pointer' }}
        aria-expanded={open}
      >
        <span style={{ fontFamily: F.head, fontWeight: 600, fontSize: 15, color: open ? C.blue500 : C.ink, flex: 1, lineHeight: 1.4 }}>{q}</span>
        <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 8, background: open ? C.blue500 : C.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <line x1="6" y1={open ? '9' : '1'} x2="6" y2={open ? '3' : '11'} stroke={open ? '#fff' : C.muted} strokeWidth="1.8" strokeLinecap="round" />
            {!open && <line x1="1" y1="6" x2="11" y2="6" stroke={C.muted} strokeWidth="1.8" strokeLinecap="round" />}
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ padding: '0 22px 20px', borderTop: `1px solid ${C.border}` }}>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: C.body, paddingTop: 16 }}>{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <Section bg={C.bg}>
      <SectionHeader
        eyebrow="FAQ"
        title="Common"
        titleGrad="questions"
        subtitle={<>Still have questions? <Link to="/contact" style={{ color: C.blue500, fontWeight: 600 }}>Get in touch.</Link></>}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 760, margin: '0 auto' }}>
        {faqs.map((f, i) => (
          <Item key={f.q} q={f.q} a={f.a} i={i} open={open === i} toggle={() => setOpen(open === i ? -1 : i)} />
        ))}
      </div>
    </Section>
  )
}
