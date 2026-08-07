import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight, HiCheck } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'

const info = [
  { icon: HiMail,           label: 'Email',    value: 'hello@anobyte.com',        href: 'mailto:hello@anobyte.com', bg: '#EEF0FF', ic: '#4B6EF5' },
  { icon: HiPhone,          label: 'Phone',    value: '+1 (555) 123-4567',         href: 'tel:+15551234567',          bg: '#ECFDF5', ic: '#059669' },
  { icon: HiLocationMarker, label: 'Location', value: 'San Francisco, CA / Remote', href: null,                       bg: '#F3EAFF', ic: '#8B3FF5' },
]

const socials = [
  { icon: FaGithub,     href: '#', label: 'GitHub' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaTwitter,    href: '#', label: 'Twitter' },
  { icon: FaInstagram,  href: '#', label: 'Instagram' },
]

const ptypes  = ['Web Application','Mobile App','SaaS Platform','E-Commerce','UI/UX Design','API Development','Cloud Migration','Other']
const budgets = ['$2,000 – $5,000','$5,000 – $15,000','$15,000 – $50,000','$50,000 – $100,000','$100,000+','Not sure yet']

const inputCls = "w-full px-4 py-3 rounded-xl text-sm transition-all outline-none"
const inputStyle = { background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#0F172A' }
const focusStyle = { border: '1px solid #4B6EF5', background: '#ffffff', boxShadow: '0 0 0 3px rgba(75,110,245,0.12)' }

function Field({ label, required, children }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2" style={{ color: '#0F172A' }}>{label}{required && ' *'}</label>
      {children}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', company:'', phone:'', ptype:'', budget:'', message:'' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const ch = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1400))
    setStatus('ok')
    setLoading(false)
  }

  return (
    <section className="py-16 lg:py-24" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="lg:col-span-2 space-y-6">
            {info.map((i) => (
              <div key={i.label} className="flex items-center gap-4 bg-white rounded-2xl p-4" style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.05)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: i.bg }}>
                  <i.icon style={{ color: i.ic }} size={19} />
                </div>
                <div>
                  <p className="text-xs font-medium mb-0.5 uppercase tracking-wide" style={{ color: '#CBD5E1' }}>{i.label}</p>
                  {i.href ? (
                    <a href={i.href} className="text-sm font-semibold transition-colors" style={{ color: '#0F172A' }}>{i.value}</a>
                  ) : (
                    <p className="text-sm font-semibold" style={{ color: '#0F172A' }}>{i.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div>
              <p className="text-sm font-semibold font-heading mb-3" style={{ color: '#0F172A' }}>Follow Us</p>
              <div className="flex gap-2.5">
                {socials.map((s) => (
                  <motion.a key={s.label} href={s.href} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} aria-label={s.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{ background: '#ffffff', border: '1px solid #E2E8F0', color: '#475569', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                  >
                    <s.icon size={15} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl h-44 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #EEF0FF, #F3EAFF)', border: '1px solid #D9DCFF' }}>
              <div className="text-center">
                <HiLocationMarker style={{ color: '#4B6EF5', margin: '0 auto 6px' }} size={28} />
                <p className="text-sm font-medium" style={{ color: '#475569' }}>San Francisco, CA</p>
                <p className="text-xs" style={{ color: '#94A3B8' }}>& Remote Worldwide</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 lg:p-10" style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.05)' }}>
              {status === 'ok' ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-14 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: '#ECFDF5' }}>
                    <HiCheck style={{ color: '#059669' }} size={30} />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-3" style={{ color: '#0F172A' }}>Message Sent!</h3>
                  <p className="mb-7 leading-relaxed max-w-sm" style={{ color: '#475569' }}>
                    Thanks for reaching out. We'll review your project and get back to you within 24 hours.
                  </p>
                  <button onClick={() => { setStatus(null); setForm({ name:'',email:'',company:'',phone:'',ptype:'',budget:'',message:'' }) }}
                    className="px-6 py-3 text-white font-semibold rounded-xl text-sm"
                    style={{ background: 'linear-gradient(135deg,#4B6EF5,#8B3FF5)', boxShadow: '0 4px 14px rgba(75,110,245,0.38)' }}>
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <h3 className="font-heading font-bold text-xl mb-6" style={{ color: '#0F172A' }}>Tell us about your project</h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full Name" required>
                      <input name="name" type="text" required value={form.name} onChange={ch} placeholder="John Smith"
                        className={inputCls} style={inputStyle}
                        onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                        onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
                    </Field>
                    <Field label="Email Address" required>
                      <input name="email" type="email" required value={form.email} onChange={ch} placeholder="john@company.com"
                        className={inputCls} style={inputStyle}
                        onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                        onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Company">
                      <input name="company" type="text" value={form.company} onChange={ch} placeholder="Acme Corp"
                        className={inputCls} style={inputStyle}
                        onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                        onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
                    </Field>
                    <Field label="Phone">
                      <input name="phone" type="tel" value={form.phone} onChange={ch} placeholder="+1 (555) 000-0000"
                        className={inputCls} style={inputStyle}
                        onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                        onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Project Type" required>
                      <select name="ptype" required value={form.ptype} onChange={ch}
                        className={inputCls} style={inputStyle}
                        onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                        onBlur={(e) => Object.assign(e.target.style, inputStyle)}>
                        <option value="" disabled>Select type</option>
                        {ptypes.map(t => <option key={t}>{t}</option>)}
                      </select>
                    </Field>
                    <Field label="Budget Range" required>
                      <select name="budget" required value={form.budget} onChange={ch}
                        className={inputCls} style={inputStyle}
                        onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                        onBlur={(e) => Object.assign(e.target.style, inputStyle)}>
                        <option value="" disabled>Select range</option>
                        {budgets.map(b => <option key={b}>{b}</option>)}
                      </select>
                    </Field>
                  </div>
                  <Field label="Project Details" required>
                    <textarea name="message" required rows={5} value={form.message} onChange={ch}
                      placeholder="Tell us what you're building, your goals, timeline, and any specific challenges..."
                      className={inputCls + " resize-none"} style={inputStyle}
                      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                      onBlur={(e) => Object.assign(e.target.style, inputStyle)} />
                  </Field>
                  <motion.button type="submit" disabled={loading} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                    className="w-full flex items-center justify-center gap-2 py-4 text-white font-semibold rounded-xl text-base disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                    style={{ background: 'linear-gradient(135deg,#4B6EF5,#8B3FF5)', boxShadow: '0 4px 14px rgba(75,110,245,0.38)' }}>
                    {loading
                      ? <div className="w-5 h-5 border-2 rounded-full animate-spin" style={{ borderColor: 'rgba(255,255,255,0.3)', borderTopColor: '#fff' }} />
                      : <><span>Send Project Brief</span><HiArrowRight size={18} /></>
                    }
                  </motion.button>
                  <p className="text-xs text-center" style={{ color: '#94A3B8' }}>
                    We respond within 24 hours. No spam, no cold calls — just a genuine conversation.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
