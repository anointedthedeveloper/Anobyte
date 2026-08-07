import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { C, S, F } from '../../styles/tokens'
import { Section, SectionHeader } from '../ui/Wrap'

const faqs = [
  { q: 'How much does software development cost?',   a: 'It depends on what you need. A business website and a custom management system are very different in scope and therefore cost. We don\'t use fixed packages for custom work because every project is different. Get in touch and tell us what you\'re trying to build — we\'ll give you a clear, honest estimate.' },
  { q: 'How long does development take?',            a: 'A standard business website typically takes 2–4 weeks. A web application or custom system usually takes 6–12 weeks depending on scope. We give you a clear timeline before any work begins.' },
  { q: 'Can you work with an existing system?',      a: 'Yes. If you already have software that needs improving, extending, or fixing, we can work with it. We start by understanding what you have before suggesting what to change.' },
  { q: 'Do I need to know exactly what I want?',     a: 'Not at all. Many clients come to us with a problem or an idea rather than a specification. Part of our job is helping you figure out what needs to be built. We ask the right questions and turn that into a clear plan.' },
  { q: 'Do you provide support after launch?',       a: 'Yes. We can continue maintaining and improving the system after it goes live. Whether that\'s fixing issues, adding features, or keeping things updated — we can stay involved as much or as little as you need.' },
  { q: 'Can you work with businesses outside Nigeria?', a: 'Yes. We work remotely with clients wherever they are. Communication is done through whatever works best for you — video calls, messaging, or email.' },
  { q: 'Who owns the software when it\'s finished?', a: 'You do. Everything we build for you belongs to you — source code, designs, and all related assets are handed over at project completion.' },
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
