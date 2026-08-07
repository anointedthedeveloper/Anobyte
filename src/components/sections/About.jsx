import { motion } from 'framer-motion'
import { HiHeart, HiLightBulb, HiShieldCheck, HiTrendingUp } from 'react-icons/hi'

const values = [
  { icon: HiLightBulb,   title: 'Innovation First',          desc: 'We constantly explore emerging tech to deliver solutions ahead of the curve.',           bg: '#FFFBEB', ic: '#D97706' },
  { icon: HiShieldCheck, title: 'Quality Without Compromise', desc: 'Every line of code is clean, tested, and production-ready. We take pride in excellence.', bg: '#EEF0FF', ic: '#4B6EF5' },
  { icon: HiHeart,       title: 'Client Partnership',         desc: 'We treat every client\'s project as our own. Your success is our success.',               bg: '#FFF1F2', ic: '#E11D48' },
  { icon: HiTrendingUp,  title: 'Results-Driven',             desc: 'Great code is the means, not the end. We measure our work by the business impact created.',bg: '#ECFDF5', ic: '#059669' },
]

const timeline = [
  { year: '2019', title: 'Founded',            desc: 'AnoByte launched with a mission to bridge the gap between great ideas and great software.' },
  { year: '2020', title: 'First 20 Clients',   desc: 'Rapidly grew across fintech, healthcare, and e-commerce with high client retention.' },
  { year: '2021', title: 'Mobile Division',    desc: 'Launched a dedicated mobile team enabling full-stack iOS and Android solutions.' },
  { year: '2022', title: 'Cloud & DevOps',     desc: 'Expanded into cloud architecture and DevOps, offering end-to-end infrastructure.' },
  { year: '2023', title: '100+ Projects',      desc: 'Crossed 100 successfully delivered projects with 98% client satisfaction rate.' },
  { year: '2024', title: 'AI Integration',     desc: 'Integrated AI/ML capabilities into our service stack, future-proofing client solutions.' },
]

export default function About() {
  return (
    <section className="py-16 lg:py-24" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 text-white"
            style={{ background: 'linear-gradient(135deg, #4B6EF5 0%, #8B3FF5 100%)' }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(255,255,255,0.18)' }}>
              <HiLightBulb size={22} className="text-white" />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-3">Our Mission</h3>
            <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
              To empower businesses of every size with world-class digital products that drive growth, efficiency, and competitive advantage — delivering engineering excellence on every engagement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8"
            style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.05)' }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: '#F3EAFF' }}>
              <HiTrendingUp style={{ color: '#8B3FF5' }} size={22} />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-3" style={{ color: '#0F172A' }}>Our Vision</h3>
            <p className="leading-relaxed" style={{ color: '#475569' }}>
              To become the most trusted technology partner for ambitious businesses globally — recognized for technical excellence and the measurable, lasting outcomes we create for every client.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div>
          <motion.h3 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-bold font-heading text-center mb-8" style={{ color: '#0F172A' }}>
            Core Values
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.48, delay: i * 0.09 }}
                className="bg-white rounded-2xl p-5"
                style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.05)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: v.bg }}>
                  <v.icon style={{ color: v.ic }} size={20} />
                </div>
                <h4 className="font-heading font-semibold mb-2" style={{ color: '#0F172A' }}>{v.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <motion.h3 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-bold font-heading text-center mb-10" style={{ color: '#0F172A' }}>
            Company Timeline
          </motion.h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block" style={{ background: 'linear-gradient(to bottom, #C7D2FE, #D9DCFF, transparent)' }} />
            <div className="space-y-5">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -28 : 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className={`flex gap-6 items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <div className={`inline-block bg-white rounded-2xl p-5 ${i % 2 === 0 ? 'md:ml-auto md:mr-6' : 'md:mr-auto md:ml-6'}`} style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.05)' }}>
                      <span className="text-xs font-bold font-heading" style={{ color: '#4B6EF5' }}>{item.year}</span>
                      <h4 className="font-heading font-bold mt-1 mb-1.5" style={{ color: '#0F172A' }}>{item.title}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-9 h-9 flex-shrink-0 rounded-full items-center justify-center z-10 text-white text-xs font-bold font-heading" style={{ background: 'linear-gradient(135deg, #4B6EF5, #8B3FF5)', boxShadow: '0 4px 14px rgba(75,110,245,0.38)' }}>
                    {item.year.slice(2)}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
