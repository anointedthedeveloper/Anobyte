import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'

const links = {
  Company:   [{ l:'About',    to:'/about'    },{ l:'Process', to:'/process' },{ l:'Careers', to:'#' },{ l:'Blog',    to:'#' }],
  Services:  [{ l:'Custom Software', to:'/services' },{ l:'Web Development', to:'/services' },{ l:'Mobile Apps', to:'/services' },{ l:'UI/UX Design', to:'/services' },{ l:'Cloud Solutions', to:'/services' }],
  Resources: [{ l:'Projects',  to:'/projects' },{ l:'Process',  to:'/process' },{ l:'FAQ',      to:'/process'  },{ l:'Contact',  to:'/contact'  }],
  Legal:     [{ l:'Privacy Policy', to:'#' },{ l:'Terms of Service', to:'#' },{ l:'Cookie Policy', to:'#' }],
}

const socials = [
  { icon: FaGithub,     href: '#', label: 'GitHub' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaTwitter,    href: '#', label: 'Twitter' },
  { icon: FaInstagram,  href: '#', label: 'Instagram' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subbed, setSubbed] = useState(false)

  return (
    <footer style={{ background: '#0A0E1A', color: '#ffffff' }}>
      {/* CTA band */}
      <div className="border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-7">
            <div>
              <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-1.5 text-white">Ready to build something great?</h3>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.48)' }}>Let's turn your vision into a high-performance digital product.</p>
            </div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 font-semibold rounded-xl text-sm text-white transition-all"
                style={{ background: 'linear-gradient(135deg, #4B6EF5, #8B3FF5)', boxShadow: '0 4px 14px rgba(75,110,245,0.38)' }}
              >
                Start Your Project <HiArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10 pb-12 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="inline-flex items-center mb-5">
              <img src="/logo.png" alt="AnoByte Technologies" className="h-9 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: 'rgba(255,255,255,0.42)' }}>
              Engineering tomorrow's digital solutions. Precision in every byte.
            </p>
            {/* Newsletter */}
            {subbed ? (
              <p className="text-sm font-medium" style={{ color: '#10B981' }}>✓ Subscribed — thank you!</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) setSubbed(true) }} className="flex gap-2">
                <div className="flex-1 relative">
                  <HiMail className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'rgba(255,255,255,0.25)' }} size={14} />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }} />
                </div>
                <button type="submit" className="px-4 py-2.5 rounded-xl text-white text-sm font-semibold flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#4B6EF5,#8B3FF5)' }}>
                  Join
                </button>
              </form>
            )}
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <h4 className="font-heading font-semibold text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>{cat}</h4>
              <ul className="space-y-2.5">
                {items.map(({ l, to }) => (
                  <li key={l}>
                    <Link to={to} className="text-sm transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.36)' }}
                      onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                      onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.36)')}>
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-7">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} AnoByte Technologies. All rights reserved.
          </p>
          <div className="flex gap-2">
            {socials.map((s) => (
              <motion.a key={s.label} href={s.href} whileHover={{ scale: 1.1, y: -2 }} aria-label={s.label}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.35)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(75,110,245,0.3)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}>
                <s.icon size={13} />
              </motion.a>
            ))}
          </div>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.18)' }}>Precision in Every Byte ✦</p>
        </div>
      </div>
    </footer>
  )
}
