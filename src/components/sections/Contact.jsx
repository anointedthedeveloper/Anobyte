import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowRight, HiCheck } from 'react-icons/hi'
import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'
import { C, S, F, G, maxW, gutter } from '../../styles/tokens'

const contactDetails = [
  { Icon: HiEnvelope, label: 'Email', value: 'hello@anobyte.com',  href: 'mailto:hello@anobyte.com' },
  { Icon: HiPhone,    label: 'Phone', value: '+1 (555) 010-2030',  href: 'tel:+15550102030'         },
  { Icon: HiMapPin,   label: 'Base',  value: 'Remote · Worldwide', href: null                       },
]

const projectTypes = ['Web Application', 'Mobile App', 'SaaS Product', 'API / Backend', 'UI/UX Design', 'Business System', 'Existing Codebase', 'Other']
const budgets      = ['Under $5,000', '$5,000 – $15,000', '$15,000 – $50,000', '$50,000 – $100,000', '$100,000+', 'Not sure yet']

const baseInput = {
  width: '100%', padding: '11px 14px', borderRadius: 10,
  fontSize: 14, color: C.ink, background: C.bg,
  border: `1px solid ${C.border}`, outline: 'none',
  fontFamily: F.body, transition: 'border-color 0.2s, box-shadow 0.2s',
}
const onFocus = e => { e.target.style.borderColor = C.blue500; e.target.style.boxShadow = `0 0 0 3px ${C.blue50}`; e.target.style.background = '#fff' }
const onBlur  = e => { e.target.style.borderColor = C.border;  e.target.style.boxShadow = 'none';                  e.target.style.background = C.bg  }

function Field({ label, required, children }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, fontFamily: F.head, color: C.ink2, marginBottom: 6 }}>
        {label}{required && <span style={{ color: C.blue500, marginLeft: 2 }}>*</span>}
      </label>
      {children}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', type: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)

  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setBusy(true)
    await new Promise(r => setTimeout(r, 1200))
    setSent(true)
    setBusy(false)
  }

  return (
    <section style={{
      background: '#fff',
      minHeight: '100svh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 'clamp(80px,10vw,96px)',
      paddingBottom: 'clamp(48px,6vw,72px)',
    }}>
      <div style={{ width: '100%', maxWidth: maxW, margin: '0 auto', padding: `0 ${gutter}` }}>

        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 40 }}
        >
          <p style={{ fontSize: 11, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.blue500, marginBottom: 10 }}>
            Contact
          </p>
          <h1 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(2rem,3.5vw,3rem)', letterSpacing: '-0.04em', lineHeight: 1.1, color: C.ink, marginBottom: 10 }}>
            Let's build something together.
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: C.body, maxWidth: 520 }}>
            Tell us what you need. We'll get back to you within one business day — no sales scripts, just a real conversation.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="contact-layout">

          {/* ── Left sidebar ── */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {contactDetails.map(c => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: C.blue50, border: `1px solid ${C.blue100}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <c.Icon style={{ color: C.blue500 }} size={18} />
                  </div>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 600, fontFamily: F.head, color: C.muted, marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.label}</p>
                    {c.href
                      ? <a href={c.href} style={{ fontSize: 14, fontWeight: 600, color: C.ink, textDecoration: 'none' }}>{c.value}</a>
                      : <p style={{ fontSize: 14, fontWeight: 600, color: C.ink }}>{c.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Response time badge */}
            <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 14, padding: '16px 18px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.green, marginTop: 4, flexShrink: 0 }} className="anim-pulse" />
              <div>
                <p style={{ fontFamily: F.head, fontWeight: 700, fontSize: 13, color: C.ink, marginBottom: 4 }}>We respond within 1 business day</p>
                <p style={{ fontSize: 12, lineHeight: 1.65, color: C.muted }}>Every enquiry is reviewed personally. You'll hear from an engineer, not a sales rep.</p>
              </div>
            </div>

            {/* What happens next */}
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.muted, marginBottom: 14 }}>What happens next</p>
              {[
                { n: '01', t: 'We review your brief',       d: 'We read every submission carefully and come back with questions if needed.' },
                { n: '02', t: 'Discovery call',             d: 'A short call to understand the scope, timeline, and budget.' },
                { n: '03', t: 'Proposal & timeline',        d: 'We send a clear proposal — what we\'ll build, when, and what it costs.' },
              ].map(s => (
                <div key={s.n} style={{ display: 'flex', gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: G.brand, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: 10, fontWeight: 800, fontFamily: F.head, color: '#fff' }}>{s.n}</span>
                  </div>
                  <div style={{ paddingTop: 2 }}>
                    <p style={{ fontSize: 13, fontWeight: 700, fontFamily: F.head, color: C.ink, marginBottom: 3 }}>{s.t}</p>
                    <p style={{ fontSize: 12, lineHeight: 1.6, color: C.muted }}>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>

          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: '#fff', border: `1px solid ${C.border}`, borderRadius: 20, boxShadow: S.card, overflow: 'hidden' }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ padding: 'clamp(40px,6vw,64px)', textAlign: 'center' }}
                >
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(0,200,122,0.1)', border: '1px solid rgba(0,200,122,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <HiCheck style={{ color: C.green }} size={28} />
                  </div>
                  <h3 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 22, color: C.ink, marginBottom: 10 }}>Message sent</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: C.body, maxWidth: 340, margin: '0 auto 24px' }}>
                    Thanks for reaching out. We'll review your brief and get back to you within one business day.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name:'',email:'',company:'',phone:'',type:'',budget:'',message:'' }) }}
                    style={{ padding: '10px 24px', borderRadius: 10, fontSize: 14, fontWeight: 600, fontFamily: F.head, color: '#fff', background: G.brand, boxShadow: S.btn, cursor: 'pointer' }}
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={submit}
                  style={{ padding: 'clamp(24px,4vw,36px)', display: 'flex', flexDirection: 'column', gap: 16 }}
                >
                  <div style={{ marginBottom: 4 }}>
                    <h3 style={{ fontFamily: F.head, fontWeight: 700, fontSize: 17, color: C.ink, marginBottom: 4 }}>Project details</h3>
                    <p style={{ fontSize: 13, color: C.muted }}>Tell us about what you're working on.</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="form-row">
                    <Field label="Full Name" required>
                      <input name="name" type="text" required value={form.name} onChange={set} placeholder="Jane Smith" style={baseInput} onFocus={onFocus} onBlur={onBlur} />
                    </Field>
                    <Field label="Email" required>
                      <input name="email" type="email" required value={form.email} onChange={set} placeholder="jane@company.com" style={baseInput} onFocus={onFocus} onBlur={onBlur} />
                    </Field>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="form-row">
                    <Field label="Company">
                      <input name="company" type="text" value={form.company} onChange={set} placeholder="Acme Ltd" style={baseInput} onFocus={onFocus} onBlur={onBlur} />
                    </Field>
                    <Field label="Phone">
                      <input name="phone" type="tel" value={form.phone} onChange={set} placeholder="+1 555 000 0000" style={baseInput} onFocus={onFocus} onBlur={onBlur} />
                    </Field>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="form-row">
                    <Field label="Project type" required>
                      <select name="type" required value={form.type} onChange={set} style={{ ...baseInput, cursor: 'pointer' }} onFocus={onFocus} onBlur={onBlur}>
                        <option value="" disabled>Select…</option>
                        {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </Field>
                    <Field label="Budget" required>
                      <select name="budget" required value={form.budget} onChange={set} style={{ ...baseInput, cursor: 'pointer' }} onFocus={onFocus} onBlur={onBlur}>
                        <option value="" disabled>Select…</option>
                        {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </Field>
                  </div>

                  <Field label="Tell us about the project" required>
                    <textarea name="message" required rows={4} value={form.message} onChange={set}
                      placeholder="What are you building? What problem does it solve? Any existing systems to integrate with? Rough timeline?"
                      style={{ ...baseInput, resize: 'vertical', lineHeight: 1.65 }}
                      onFocus={onFocus} onBlur={onBlur}
                    />
                  </Field>

                  <motion.button
                    type="submit"
                    disabled={busy}
                    whileHover={{ scale: busy ? 1 : 1.01 }}
                    whileTap={{ scale: busy ? 1 : 0.98 }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '13px 24px', borderRadius: 12, fontSize: 15, fontWeight: 700, fontFamily: F.head, color: '#fff', background: G.brand, boxShadow: S.btn, cursor: busy ? 'not-allowed' : 'pointer', opacity: busy ? 0.7 : 1, transition: 'opacity 0.2s' }}
                  >
                    {busy
                      ? <span className="anim-spin" style={{ display: 'inline-block', width: 18, height: 18, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%' }} />
                      : <><span>Send Project Brief</span><HiArrowRight size={16} /></>
                    }
                  </motion.button>

                  <p style={{ fontSize: 12, textAlign: 'center', color: C.muted }}>No spam. No sales calls. Just a real conversation about your project.</p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>

      <style>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: clamp(32px, 5vw, 56px);
          align-items: start;
        }
        .form-row { grid-template-columns: 1fr 1fr; }
        @media (max-width: 860px) {
          .contact-layout { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
