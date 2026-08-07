import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiCheckCircle, HiLightningBolt, HiShieldCheck, HiUserGroup, HiClock } from 'react-icons/hi'
import SectionBadge from '../ui/SectionBadge'

const stats = [
  { value: 150, suffix: '+',   label: 'Projects Completed', icon: HiCheckCircle, bg: '#EEF0FF', ic: '#4B6EF5' },
  { value: 98,  suffix: '%',   label: 'Happy Clients',      icon: HiUserGroup,   bg: '#F3EAFF', ic: '#8B3FF5' },
  { value: 5,   suffix: '+',   label: 'Years Experience',   icon: HiClock,       bg: '#ECFDF5', ic: '#059669' },
  { value: 99,  suffix: '.9%', label: 'Uptime Guarantee',   icon: HiShieldCheck, bg: '#FFFBEB', ic: '#D97706' },
  { value: 24,  suffix: '/7',  label: 'Support Available',  icon: HiLightningBolt, bg: '#FFF1F2', ic: '#E11D48' },
]

const advantages = [
  { title: 'Senior-only engineering',       desc: 'Every project is led by senior engineers with 5+ years of production experience — no juniors learning on your dime.' },
  { title: 'Transparent communication',     desc: 'Weekly updates, dedicated Slack channels, and live dashboards mean you\'re never in the dark.' },
  { title: 'On-time, on-budget delivery',   desc: 'Structured sprint planning and rigorous process ensure we hit milestones without quality compromise.' },
  { title: 'Post-launch support',           desc: 'Our relationship doesn\'t end at launch — we provide ongoing maintenance, monitoring, and iteration.' },
]

function Counter({ value, suffix, duration = 1.8 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    const step = value / (duration * 60)
    let cur = 0
    const t = setInterval(() => {
      cur = Math.min(cur + step, value)
      setCount(Math.floor(cur))
      if (cur >= value) clearInterval(t)
    }, 1000 / 60)
    return () => clearInterval(t)
  }, [inView, value, duration])
  return <span ref={ref}>{count}{suffix}</span>
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mb-6"><SectionBadge color="green">Why AnoByte</SectionBadge></div>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading tracking-tight mb-6" style={{ color: '#0F172A' }}>
              The difference is in <span className="text-gradient">the details</span>
            </h2>
            <p className="text-lg leading-relaxed mb-9" style={{ color: '#475569' }}>
              We combine deep technical expertise with a relentless focus on business outcomes. We don't just write code — we solve problems, create value, and build lasting digital assets.
            </p>
            <div className="space-y-5">
              {advantages.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.48, delay: i * 0.09 }}
                  className="flex gap-3.5"
                >
                  <HiCheckCircle style={{ color: '#4B6EF5', flexShrink: 0, marginTop: 2 }} size={18} />
                  <div>
                    <h4 className="font-semibold font-heading mb-1" style={{ color: '#0F172A' }}>{a.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{a.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — stats */}
          <motion.div initial={{ opacity: 0, x: 36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="relative">
            <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, #EEF0FF 0%, #F3EAFF 100%)' }} />
            <div className="absolute inset-0 rounded-3xl bg-grid opacity-30" />
            <div className="relative p-8 lg:p-10">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.09 }}
                    className={`bg-white rounded-2xl p-5 text-center ${i === 4 ? 'col-span-2' : ''}`}
                    style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.05)' }}
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: s.bg }}>
                      <s.icon style={{ color: s.ic }} size={20} />
                    </div>
                    <div className="text-2xl font-black font-heading mb-1" style={{ color: s.ic }}>
                      <Counter value={s.value} suffix={s.suffix} />
                    </div>
                    <p className="text-xs font-medium" style={{ color: '#475569' }}>{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
