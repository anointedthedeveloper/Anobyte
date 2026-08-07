import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowRight, HiCheck } from 'react-icons/hi'
import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'
import { C, S, F, G, maxW, gutter } from '../../styles/tokens'

const contactDetails = [
  { Icon: HiEnvelope, label: 'Email', value: 'hello@anobyte.com',      href: 'mailto:hello@anobyte.com' },
  { Icon: HiPhone,    label: 'Phone', value: '+1 (555) 010-2030',       href: 'tel:+15550102030' },
  { Icon: HiMapPin,   label: 'Base',  value: 'Remote · Worldwide',      href: null },
]

const projectTypes = ['Web Application', 'Mobile App', 'SaaS Product', 'API / Backend', 'UI/UX Design', 'Cloud Infrastructure', 'Existing Codebase', 'Other']
const budgets      = ['Under $5,000', '$5,000 – $15,000', '$15,000 – $50,000', '$50,000 – $100,000', '$100,000+', 'Not sure yet']

const base = {
  width: '100%',
  padding: '11px 14px',
  borderRadius: 10,
  fontSize: 14,
  color: C.ink,
  background: C.bg,
  border: `1px solid ${C.border}`,
  outline: 'none',
  fontFamily: F.body,
  transition: 'border-color 0.2s, box-shadow 0.2s',
}
const focus  = { borderColor: C.blue500, boxShadow: `0 0 0 3px ${C.blue50}`, background: '#fff' }
const blur_  = { borderColor: C.border,  boxShadow: 'none',                  background: C.bg  }

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
  const [form, setForm]   = useState({ name: '', email: '', company: '', phone: '', type: '', budget: '', message: '' })
  const [sent, setSent]   = useState(false)
  const [busy, setBusy]   = useState(false)

  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setBusy(true)
    await new Promise(r => setTimeout(r, 1200))
    setSent(true)
    setBusy(false)
  }

  return (
    <section style={{ background: '#fff', padding: `clamp(64px,8vw,96px) 0` }}>
      <div style={{ maxWidth: maxW, margin: '0 auto', padding: `0 ${gutter}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, alignItems: 'start' }} className="contact-layout">

          {/* ── Sidebar ── */}
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', letterSpacing: '-0.03em', color: C.ink, marginBottom: 12, lineHeight: 1.2 }}>
              Let's talk about your project
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body, marginBottom: 32 }}>
              Fill in the form and we'll get back to you within one business day with a clear proposal.
            </p>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
              {contactDetails.map(c => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: C.blue50, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <c.Icon style={{ color: C.blue500 }} size={16} />
                  </div>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 600, fontFamily: F.head, color: C.muted, marginBottom: 1, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.label}</p>
                    {c.href
                      ? <a href={c.href} style={{ fontSize: 14, fontWeight: 600, color: C.ink }}>{c.value}</a>
                      : <p style={{ fontSize: 14, fontWeight: 600, color: C.ink }}>{c.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Response time */}
            <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 12, padding: '14px 16px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.green, marginTop: 5, flexShrink: 0 }} className="anim-pulse" />
              <div>
                <p style={{ fontFamily: F.head, fontWeight: 700, fontSize: 13, color: C.ink, marginBottom: 2 }}>Typical response: 1 business day</p>
                <p style={{ fontSize: 12, lineHeight: 1.6, color: C.muted }}>We review every enquiry personally. You will hear from a real engineer, not a sales rep.</p>
              </div>
            </div>
          </motion.aside>

          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ background: '#fff', border: `1px solid ${C.border}`, borderRadius: 20, boxShadow: S.card, overflow: 'hidden' }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ padding: '64px 40px', textAlign: 'center' }}
                >
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(0,200,122,0.12)', border: '1px solid rgba(0,200,122,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <HiCheck style={{ color: C.green }} size={26} />
                  </div>
                  <h3 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 22, color: C.ink, marginBottom: 10 }}>Message received</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: C.body, maxWidth: 360, margin: '0 auto 24px' }}>
                    Thank you for reaching out. We'll review your project details and respond within one business day.
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
                  style={{ padding: 'clamp(20px,5vw,32px) clamp(16px,5vw,36px) clamp(24px,5vw,40px)', display: 'flex', flexDirection: 'column', gap: 18 }}
                >
                  <h3 style={{ fontFamily: F.head, fontWeight: 700, fontSize: 17, color: C.ink, marginBottom: 4 }}>Project details</h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                    <Field label="Full Name" required>
                      <input name="name" type="text" required value={form.name} onChange={set} placeholder="Jane Smith"
                        style={base} onFocus={e => Object.assign(e.target.style, focus)} onBlur={e => Object.assign(e.target.style, blur_)} />
                    </Field>
                    <Field label="Email" required>
                      <input name="email" type="email" required value={form.email} onChange={set} placeholder="jane@company.com"
                        style={base} onFocus={e => Object.assign(e.target.style, focus)} onBlur={e => Object.assign(e.target.style, blur_)} />
                    </Field>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                    <Field label="Company">
                      <input name="company" type="text" value={form.company} onChange={set} placeholder="Acme Ltd"
                        style={base} onFocus={e => Object.assign(e.target.style, focus)} onBlur={e => Object.assign(e.target.style, blur_)} />
                    </Field>
                    <Field label="Phone">
                      <input name="phone" type="tel" value={form.phone} onChange={set} placeholder="+1 555 000 0000"
                        style={base} onFocus={e => Object.assign(e.target.style, focus)} onBlur={e => Object.assign(e.target.style, blur_)} />
                    </Field>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                    <Field label="Project type" required>
                      <select name="type" required value={form.type} onChange={set}
                        style={{ ...base, cursor: 'pointer' }} onFocus={e => Object.assign(e.target.style, focus)} onBlur={e => Object.assign(e.target.style, blur_)}>
                        <option value="" disabled>Select…</option>
                        {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </Field>
                    <Field label="Budget" required>
                      <select name="budget" required value={form.budget} onChange={set}
                        style={{ ...base, cursor: 'pointer' }} onFocus={e => Object.assign(e.target.style, focus)} onBlur={e => Object.assign(e.target.style, blur_)}>
                        <option value="" disabled>Select…</option>
                        {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </Field>
                  </div>

                  <Field label="Tell us about the project" required>
                    <textarea name="message" required rows={5} value={form.message} onChange={set}
                      placeholder="What are you building? What problem does it solve? Any existing systems to integrate with? Rough timeline?"
                      style={{ ...base, resize: 'vertical', lineHeight: 1.65 }}
                      onFocus={e => Object.assign(e.target.style, focus)} onBlur={e => Object.assign(e.target.style, blur_)} />
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

        <style>{`
          .contact-layout { grid-template-columns: 1fr 2fr; }
          .form-row       { grid-template-columns: 1fr 1fr; }
          @media(max-width:760px) {
            .contact-layout { grid-template-columns: 1fr; }
            .form-row       { grid-template-columns: 1fr; }
          }
        `}</style>
      </div>
    </section>
  )
}
