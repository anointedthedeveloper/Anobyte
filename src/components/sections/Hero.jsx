import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { HiArrowRight, HiPlay, HiCheckCircle, HiStar, HiChartBar, HiBell, HiCode } from 'react-icons/hi'

const G = 'linear-gradient(135deg, #4B6EF5 0%, #8B3FF5 100%)'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.11, ease: [0.22, 1, 0.36, 1] },
  }),
}

function DashboardCard({ mouseX, mouseY }) {
  const rotateX = useTransform(mouseY, [-300, 300], [6, -6])
  const rotateY = useTransform(mouseX, [-300, 300], [-6, 6])
  const rx = useSpring(rotateX, { stiffness: 90, damping: 25 })
  const ry = useSpring(rotateY, { stiffness: 90, damping: 25 })

  return (
    <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }} className="relative">
      {/* Main card */}
      <div className="bg-white rounded-3xl overflow-hidden" style={{ boxShadow: '0 24px 80px rgba(0,0,0,0.11)', border: '1px solid #E2E8F0' }}>
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-5 py-4 border-b" style={{ borderColor: '#F1F5F9', background: '#FAFAFA' }}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-3">
            <div className="h-6 rounded-lg flex items-center px-3" style={{ background: '#F1F5F9' }}>
              <span className="text-xs font-mono" style={{ color: '#94A3B8' }}>app.anobyte.com/dashboard</span>
            </div>
          </div>
        </div>

        <div className="p-5 space-y-4">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Revenue', value: '$48.2K', bg: '#ECFDF5', color: '#059669' },
              { label: 'Users',   value: '12.4K',  bg: '#EEF0FF', color: '#4B6EF5' },
              { label: 'Tasks',   value: '94%',    bg: '#F3EAFF', color: '#8B3FF5' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-3" style={{ background: s.bg }}>
                <p className="text-xs mb-1" style={{ color: '#94A3B8' }}>{s.label}</p>
                <p className="text-base font-bold font-heading" style={{ color: s.color }}>{s.value}</p>
                <p className="text-xs mt-0.5" style={{ color: '#CBD5E1' }}>↑ 12%</p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="rounded-2xl p-4" style={{ background: 'linear-gradient(135deg, #EEF0FF, #F8FAFC)', border: '1px solid #D9DCFF' }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold font-heading" style={{ color: '#0F172A' }}>Performance</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: '#EEF0FF', color: '#4B6EF5' }}>Live</span>
            </div>
            <div className="flex items-end gap-1.5 h-16">
              {[40,65,45,80,55,90,70,85,60,95,75,88].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.6 + i * 0.05, duration: 0.5, ease: 'easeOut' }}
                  className="flex-1 rounded-t-sm"
                  style={{ background: i === 10 ? '#4B6EF5' : '#C7D2FE' }}
                />
              ))}
            </div>
          </div>

          {/* Activity */}
          <div className="space-y-2">
            {[
              { icon: HiCheckCircle, text: 'Deployment successful', time: '2m', color: '#10B981' },
              { icon: HiBell,        text: 'New client onboarded',  time: '15m', color: '#4B6EF5' },
              { icon: HiCode,        text: 'Sprint 12 completed',   time: '1h', color: '#8B3FF5' },
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-3 py-1">
                <a.icon style={{ color: a.color, flexShrink: 0 }} size={15} />
                <span className="text-xs flex-1" style={{ color: '#475569' }}>{a.text}</span>
                <span className="text-xs" style={{ color: '#CBD5E1' }}>{a.time} ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="glass absolute -top-5 -right-8 rounded-2xl p-3.5 flex items-center gap-2.5 w-40"
        style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}
      >
        <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#ECFDF5' }}>
          <HiChartBar style={{ color: '#059669' }} size={15} />
        </div>
        <div>
          <p className="text-xs font-bold" style={{ color: '#0F172A' }}>+127%</p>
          <p className="text-xs" style={{ color: '#94A3B8' }}>Growth</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.5 }}
        className="glass absolute -bottom-4 -left-8 rounded-2xl p-3.5 w-44"
        style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="flex -space-x-1.5">
            {['#4B6EF5','#8B3FF5','#EC4899'].map((c, i) => (
              <div key={i} className="w-5 h-5 rounded-full border-2 border-white" style={{ background: c }} />
            ))}
          </div>
          <span className="text-xs" style={{ color: '#475569' }}>+24 clients</span>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <HiStar key={i} style={{ color: '#F59E0B' }} size={11} />
          ))}
          <span className="text-xs ml-1" style={{ color: '#94A3B8' }}>5.0</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const fn = (e) => {
      const rect = ref.current?.getBoundingClientRect()
      if (rect) {
        mouseX.set(e.clientX - rect.left - rect.width / 2)
        mouseY.set(e.clientY - rect.top - rect.height / 2)
      }
    }
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [mouseX, mouseY])

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center pt-20 overflow-hidden" style={{ background: '#ffffff' }}>
      {/* BG layers */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #EEF0FF 0%, #ffffff 55%, #F3EAFF 100%)', opacity: 0.6 }} />

      {/* Blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ background: '#4B6EF5', animationName: 'blob', animationDuration: '7s', animationIterationCount: 'infinite' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-12" style={{ background: '#8B3FF5', animationName: 'blob', animationDuration: '7s', animationDelay: '2s', animationIterationCount: 'infinite' }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left */}
          <div className="space-y-7">
            {/* Availability pill */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: '#EEF0FF', border: '1px solid #D9DCFF' }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#4B6EF5' }} />
                <span className="text-sm font-medium" style={{ color: '#3A5CE8' }}>Available for new projects</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={1}>
              <h1 className="text-5xl sm:text-6xl lg:text-[4.25rem] font-bold font-heading leading-[1.06] tracking-tight" style={{ color: '#0F172A' }}>
                Building Software<br />
                That Moves{' '}
                <span className="text-gradient">Businesses</span>
                <br />
                <span className="text-gradient">Forward.</span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: '#475569' }}
            >
              We engineer high-performance digital products — custom web apps, mobile, cloud infrastructure, and automated workflows. Built for scale. Designed for impact.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-white font-semibold rounded-2xl text-base transition-all"
                  style={{ background: G, boxShadow: '0 4px 14px rgba(75,110,245,0.38)' }}
                >
                  Start Your Project <HiArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 font-semibold rounded-2xl text-base transition-all"
                  style={{ background: '#ffffff', color: '#0F172A', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.05)' }}
                >
                  <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: '#EEF0FF' }}>
                    <HiPlay style={{ color: '#4B6EF5', marginLeft: 1 }} size={12} />
                  </div>
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="flex items-center gap-5 pt-1">
              <div className="flex -space-x-2.5">
                {['#4B6EF5','#8B3FF5','#EC4899','#F59E0B','#10B981'].map((c, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{ background: c }}>
                    {['J','S','M','A','K'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => <HiStar key={i} style={{ color: '#F59E0B' }} size={13} />)}
                </div>
                <p className="text-sm" style={{ color: '#475569' }}>
                  <span className="font-semibold" style={{ color: '#0F172A' }}>150+</span> projects delivered
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <DashboardCard mouseX={mouseX} mouseY={mouseY} />
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: '#CBD5E1' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: '2px solid #E2E8F0' }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: '#4B6EF5' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
