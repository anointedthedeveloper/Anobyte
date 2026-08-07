import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { HiCodeBracket, HiDevicePhoneMobile, HiPaintBrush, HiCloud, HiCircleStack, HiCog6Tooth } from 'react-icons/hi2'
import { C, G, S, F } from '../../styles/tokens'
import { Section, SectionHeader } from '../ui/Wrap'

const services = [
  { Icon: HiCodeBracket,       title: 'Custom Software',   desc: 'End-to-end software built precisely around your business logic and engineered to scale.',        accent: C.blue500,   bg: C.blue50 },
  { Icon: HiDevicePhoneMobile, title: 'Web & Mobile Apps', desc: 'Performant, SEO-ready web apps and cross-platform mobile apps users actually enjoy.',             accent: C.violet500, bg: C.violetLight },
  { Icon: HiPaintBrush,        title: 'UI/UX Design',      desc: 'Research-backed interfaces that convert. Clean, purposeful, and delightful to use.',              accent: '#EC4899',   bg: '#FDF2F8' },
  { Icon: HiCloud,             title: 'Cloud & DevOps',    desc: 'AWS, GCP and Azure infrastructure. CI/CD pipelines. Zero-downtime deployments.',                  accent: '#009955',   bg: '#EDFFF7' },
  { Icon: HiCircleStack,       title: 'API & Backend',     desc: 'Robust REST and GraphQL APIs. Database design. Microservices. Built to handle real traffic.',      accent: '#D97706',   bg: '#FFFBEB' },
  { Icon: HiCog6Tooth,         title: 'Automation',        desc: 'Workflow automation that cuts manual work, reduces cost, and lets your team focus on what matters.',accent: '#0284C7',   bg: '#EFF9FF' },
]

export default function ServicesOverview() {
  return (
    <Section bg={C.bg}>
      <SectionHeader
        eyebrow="What We Build"
        title="Services that solve"
        titleGrad="real problems"
        subtitle="We cover the full product lifecycle — from the first wireframe to production infrastructure."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: '#fff',
              borderRadius: 16,
              border: `1px solid ${C.border}`,
              boxShadow: S.card,
              overflow: 'hidden',
              transition: 'box-shadow 0.25s, transform 0.25s',
              cursor: 'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = S.cardH; e.currentTarget.style.transform = 'translateY(-3px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = S.card; e.currentTarget.style.transform = 'none' }}
          >
            {/* colour accent bar */}
            <div style={{ height: 3, background: s.accent }} />
            <div style={{ padding: '22px 24px 26px' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <s.Icon style={{ color: s.accent }} size={20} />
              </div>
              <h3 style={{ fontFamily: F.head, fontWeight: 700, fontSize: 16, color: C.ink, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: C.body }}>{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 44 }}>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
          <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 12, fontSize: 15, fontWeight: 700, fontFamily: F.head, color: '#fff', background: G.brand, boxShadow: S.btn }}>
            All Services <HiArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </Section>
  )
}
