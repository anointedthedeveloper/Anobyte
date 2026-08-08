import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowRight, HiCheck } from 'react-icons/hi'
import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'
import { C, S, F, G, maxW, gutter } from '../../styles/tokens'

const WHATSAPP_NUMBER = '2348101209470'
const WHATSAPP_URL    = `https://wa.me/${WHATSAPP_NUMBER}`

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L.057 23.882l6.231-1.635A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.88 9.88 0 01-5.031-1.375l-.361-.214-3.741.981.999-3.648-.235-.374A9.859 9.859 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118c5.467 0 9.882 4.415 9.882 9.882 0 5.468-4.415 9.882-9.882 9.882z"/>
  </svg>
)

const contactDetails = [
  { Icon: HiEnvelope,   label: 'Email',     value: 'anobytetechnologies@gmail.com', href: 'mailto:anobytetechnologies@gmail.com', color: C.blue500, bg: C.blue50,  border: C.blue100 },
  { Icon: HiPhone,      label: 'Phone',     value: '+234 810 120 9470',              href: 'tel:+2348101209470',                   color: C.blue500, bg: C.blue50,  border: C.blue100 },
  { Icon: WhatsAppIcon, label: 'WhatsApp',  value: 'Chat with us',                  href: WHATSAPP_URL,                           color: '#25D366', bg: '#EDFFF5', border: '#B3F0CF' },
  { Icon: HiMapPin,     label: 'Base',      value: 'Nigeria · Remote Worldwide',     href: null,                                   color: C.blue500, bg: C.blue50,  border: C.blue100 },
]

const projectTypes = [
  'Business Website',
  'Web Application',
  'Mobile Application',
  'Custom Software Development',
  'Enterprise / Management System',
  'API Development & Integration',
  'UI/UX Design',
  'Process Automation',
  'Maintenance & Support',
  'Not sure yet — need guidance',
]

const baseInput = {
  width: '100%', padding: '10px 13px', borderRadius: 9,
  fontSize: 13.5, color: C.ink, background: '#FAFBFF',
  border: `1.5px solid ${C.border}`, outline: 'none',
  fontFamily: F.body, transition: 'border-color 0.2s, box-shadow 0.2s, background 0.2s',
  boxSizing: 'border-box',
}
const onFocus = e => { e.target.style.borderColor = C.blue500; e.target.style.boxShadow = `0 0 0 3px ${C.blue50}`; e.target.style.background = '#fff' }
const onBlur  = e => { e.target.style.borderColor = C.border;  e.target.style.boxShadow = 'none';                  e.target.style.background = '#FAFBFF' }

function Field({ label, required, hint, children }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 5 }}>
        <label style={{ fontSize: 12, fontWeight: 700, fontFamily: F.head, color: C.ink2, letterSpacing: '0.01em' }}>
          {label}{required && <span style={{ color: C.blue500, marginLeft: 2 }}>*</span>}
        </label>
        {hint && <span style={{ fontSize: 10.5, color: C.muted, fontFamily: F.body }}>{hint}</span>}
      </div>
      {children}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', budget: '', message: '' })
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
    <section className="contact-section">
      {/* Background image + overlay */}
      <div className="contact-bg" />
      <div className="contact-overlay" />

      <div className="contact-inner">

        {/* ── Left column ── */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Heading */}
          <div style={{ marginBottom: 32 }}>
            <p style={{ fontSize: 11, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.blue500, marginBottom: 10 }}>
              Get in Touch
            </p>
            <h1 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(1.9rem,3vw,2.6rem)', letterSpacing: '-0.04em', lineHeight: 1.1, color: C.ink, marginBottom: 12 }}>
              Let's build something<span className="tg"> together.</span>
            </h1>
            <p style={{ fontSize: 14.5, lineHeight: 1.75, color: C.body }}>
              Tell us what you need. We'll get back to you within one business day.
            </p>
          </div>

          {/* Contact info card */}
          <div style={{ background: '#fff', border: `1px solid ${C.border}`, borderRadius: 16, padding: '20px 20px', boxShadow: S.card, marginBottom: 16 }}>
            <p style={{ fontSize: 10.5, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted, marginBottom: 16 }}>
              Contact Info
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {contactDetails.map(c => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: c.bg, border: `1px solid ${c.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <c.Icon size={16} style={{ color: c.color }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 600, fontFamily: F.head, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 1 }}>{c.label}</p>
                    {c.href
                      ? <a href={c.href} target={c.label === 'WhatsApp' ? '_blank' : undefined} rel="noopener noreferrer" style={{ fontSize: 13, fontWeight: 600, color: C.ink, textDecoration: 'none', transition: 'color 0.16s' }}
                          onMouseEnter={e => { e.currentTarget.style.color = c.color }}
                          onMouseLeave={e => { e.currentTarget.style.color = C.ink }}
                        >{c.value}</a>
                      : <p style={{ fontSize: 13, fontWeight: 600, color: C.ink }}>{c.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#EDFFF5', border: '1px solid #B3F0CF', borderRadius: 14, padding: '14px 18px', textDecoration: 'none', boxShadow: S.card, transition: 'box-shadow 0.2s, transform 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 18px rgba(37,211,102,0.18)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = S.card; e.currentTarget.style.transform = 'none' }}
          >
            <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(37,211,102,0.35)' }}>
              <WhatsAppIcon size={18} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: F.head, fontWeight: 700, fontSize: 13, color: '#166534', marginBottom: 1 }}>Chat on WhatsApp</p>
              <p style={{ fontSize: 11.5, color: '#4CAF50' }}>Typically replies within an hour</p>
            </div>
            <HiArrowRight size={14} style={{ color: '#25D366', flexShrink: 0 }} />
          </a>
        </motion.div>

        {/* ── Form card ── */}
        <motion.div
          className="contact-form-card"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ padding: '48px 32px', textAlign: 'center' }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                  style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(0,200,122,0.1)', border: '1.5px solid rgba(0,200,122,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}
                >
                  <HiCheck style={{ color: C.green }} size={28} />
                </motion.div>
                <h3 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 20, color: C.ink, marginBottom: 8 }}>Brief received!</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: C.body, maxWidth: 320, margin: '0 auto 24px' }}>
                  We'll review your project brief and get back to you within one business day.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name:'',email:'',phone:'',type:'',budget:'',message:'' }) }}
                  style={{ padding: '10px 24px', borderRadius: 10, fontSize: 13.5, fontWeight: 700, fontFamily: F.head, color: '#fff', background: G.brand, boxShadow: S.btn, cursor: 'pointer', border: 'none' }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={submit}
                style={{ padding: 'clamp(20px,3vw,32px)', display: 'flex', flexDirection: 'column', gap: 14 }}
              >
                {/* Header */}
                <div style={{ paddingBottom: 12, borderBottom: `1px solid ${C.border}` }}>
                  <h3 style={{ fontFamily: F.head, fontWeight: 700, fontSize: 17, color: C.ink, marginBottom: 2 }}>Project Brief</h3>
                  <p style={{ fontSize: 12.5, color: C.muted }}>Fill this out and we'll come back with a clear plan.</p>
                </div>

                {/* Name + Email */}
                <div className="form-row">
                  <Field label="Full Name" required>
                    <input name="name" type="text" required value={form.name} onChange={set} placeholder="Your name" style={baseInput} onFocus={onFocus} onBlur={onBlur} />
                  </Field>
                  <Field label="Email Address" required>
                    <input name="email" type="email" required value={form.email} onChange={set} placeholder="you@yourcompany.com" style={baseInput} onFocus={onFocus} onBlur={onBlur} />
                  </Field>
                </div>

                {/* Phone + Project type */}
                <div className="form-row">
                  <Field label="Phone Number">
                    <input name="phone" type="tel" value={form.phone} onChange={set} placeholder="+234 801 234 5678" style={baseInput} onFocus={onFocus} onBlur={onBlur} />
                  </Field>
                  <Field label="Service Required" required>
                    <select name="type" required value={form.type} onChange={set} style={{ ...baseInput, cursor: 'pointer' }} onFocus={onFocus} onBlur={onBlur}>
                      <option value="" disabled>Select a service</option>
                      {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </Field>
                </div>

                {/* Budget */}
                <Field label="Budget Range" hint="e.g. ₦500k – ₦2M">
                  <input name="budget" type="text" value={form.budget} onChange={set} placeholder="₦500,000 – ₦2,000,000" style={baseInput} onFocus={onFocus} onBlur={onBlur} />
                </Field>

                {/* Message */}
                <Field label="Project Description" required>
                  <textarea
                    name="message" required rows={4}
                    value={form.message} onChange={set}
                    placeholder="What problem are you solving? Who will use it? Any existing systems? Rough timeline?"
                    style={{ ...baseInput, resize: 'vertical', lineHeight: 1.65 }}
                    onFocus={onFocus} onBlur={onBlur}
                  />
                </Field>

                {/* Submit */}
                <div style={{ paddingTop: 2 }}>
                  <motion.button
                    type="submit"
                    disabled={busy}
                    whileHover={{ scale: busy ? 1 : 1.01 }}
                    whileTap={{ scale: busy ? 1 : 0.98 }}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '13px 24px', borderRadius: 11, fontSize: 14.5, fontWeight: 700, fontFamily: F.head, color: '#fff', background: G.brand, boxShadow: S.btn, border: 'none', cursor: busy ? 'not-allowed' : 'pointer', opacity: busy ? 0.75 : 1, transition: 'opacity 0.2s, box-shadow 0.2s' }}
                    onMouseEnter={e => { if (!busy) e.currentTarget.style.boxShadow = '0 6px 22px rgba(79,114,248,0.54)' }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = S.btn }}
                  >
                    {busy
                      ? <span style={{ display: 'inline-block', width: 17, height: 17, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%' }} className="anim-spin" />
                      : <><span>Send Project Brief</span><HiArrowRight size={15} /></>
                    }
                  </motion.button>
                  <p style={{ fontSize: 11.5, textAlign: 'center', color: C.muted, marginTop: 10 }}>
                    No spam. No sales calls. Just a real conversation.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

      </div>

      <style>{`
        .contact-section {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
        }
        .contact-bg {
          position: absolute;
          inset: 0;
          background: url('/contactbg.png') center / cover no-repeat;
          z-index: 0;
        }
        .contact-overlay {
          position: absolute;
          inset: 0;
          background: rgba(245, 247, 252, 0.82);
          z-index: 1;
        }
        .contact-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: ${maxW};
          margin: 0 auto;
          padding: clamp(80px, 10vw, 100px) ${gutter} clamp(40px, 5vw, 60px);
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: clamp(24px, 4vw, 44px);
          align-items: start;
        }
        .contact-left {
          display: flex;
          flex-direction: column;
        }
        .contact-form-card {
          background: #fff;
          border: 1px solid ${C.border};
          border-radius: 20px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.08);
          overflow: hidden;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 960px) {
          .contact-inner { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
