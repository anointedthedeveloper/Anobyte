import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiPlus, HiMinus } from 'react-icons/hi'
import SectionBadge from '../ui/SectionBadge'

const faqs = [
  { q: 'How long does a typical project take?',       a: 'Timelines vary by scope. A simple web app takes 4–8 weeks; a full-featured SaaS platform may take 3–6 months. During Discovery, we create a detailed timeline with milestones you can track live.' },
  { q: 'What is your development process?',           a: 'We follow an agile, iterative approach: Discovery → Planning → Design → Development → Testing → Deployment. Two-week sprints with working builds and progress updates delivered throughout.' },
  { q: 'Do you provide post-launch support?',         a: 'Yes. We offer post-launch support packages and ongoing maintenance retainers covering bug fixes, updates, performance monitoring, and continuous improvements.' },
  { q: 'Who owns the code after the project?',        a: 'You do — completely. Upon final payment, all source code, assets, and IP transfer to you with no restrictions. We also provide full documentation and onboarding.' },
  { q: 'Can you work with an existing codebase?',     a: 'Absolutely. We regularly take over legacy projects, conduct audits, and continue development. We start with a thorough code review and recommend the best path forward.' },
  { q: 'What technologies do you specialize in?',     a: 'Our core stack includes React, Next.js, Node.js, Python, and .NET on backend; PostgreSQL and MongoDB for databases; AWS/GCP for cloud; and React Native for mobile.' },
  { q: 'How do you handle project communication?',    a: 'Dedicated Slack channel, weekly video calls, and a live project dashboard. You always know what\'s being built, what\'s next, and where your investment stands.' },
  { q: 'What happens if requirements change?',        a: 'We expect it. Small changes are absorbed into the current sprint. Larger scope changes go through a transparent change order — impact assessed, approved, then executed. No surprises.' },
]

function Item({ faq, open, onToggle }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden transition-shadow duration-300" style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left" aria-expanded={open}>
        <span className="font-heading font-semibold text-sm" style={{ color: '#0F172A' }}>{faq.q}</span>
        <div className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300"
          style={{ background: open ? 'linear-gradient(135deg,#4B6EF5,#8B3FF5)' : '#F8FAFC', color: open ? '#fff' : '#475569' }}>
          {open ? <HiMinus size={13} /> : <HiPlus size={13} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}>
            <div className="px-6 pb-5">
              <div className="h-px mb-4" style={{ background: '#F1F5F9' }} />
              <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="py-24 lg:py-32" style={{ background: '#ffffff' }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="text-center mb-12">
          <div className="flex justify-center mb-5"><SectionBadge color="green">Got Questions?</SectionBadge></div>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading tracking-tight mb-5" style={{ color: '#0F172A' }}>
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#475569' }}>
            Can't find an answer?{' '}
            <a href="/contact" className="font-semibold" style={{ color: '#4B6EF5' }}>Ask us directly.</a>
          </p>
        </motion.div>
        <div className="space-y-2.5">
          {faqs.map((f, i) => (
            <motion.div key={f.q} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: i * 0.05 }}>
              <Item faq={f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
