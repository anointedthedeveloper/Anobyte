import { motion } from 'framer-motion'
import { HiCodeBracket, HiDevicePhoneMobile, HiPaintBrush, HiCloud, HiCircleStack, HiCog6Tooth, HiComputerDesktop, HiMagnifyingGlass, HiSparkles, HiWrenchScrewdriver } from 'react-icons/hi2'
import { C, S, F } from '../../styles/tokens'
import { Section } from '../ui/Wrap'

const all = [
  { Icon: HiCodeBracket,       n:'01', title:'Custom Software Development', desc:'Bespoke software engineered around your exact business logic, designed for scale from the first line of code.',     accent: C.blue500,   bg: C.blue50 },
  { Icon: HiComputerDesktop,   n:'02', title:'Web Application Development', desc:'Fast, accessible, SEO-optimised web apps built with modern frameworks and best-practice architecture.',             accent: C.violet500, bg: C.violetLight },
  { Icon: HiDevicePhoneMobile, n:'03', title:'Mobile App Development',      desc:'Cross-platform React Native apps for iOS and Android. Native performance, shared codebase, one development team.',  accent: '#EC4899',   bg: '#FDF2F8' },
  { Icon: HiPaintBrush,        n:'04', title:'UI/UX Design',                desc:'Research-driven design. Wire­frames, interactive prototypes, and pixel-perfect UI delivered iteratively.',           accent: '#D97706',   bg: '#FFFBEB' },
  { Icon: HiCloud,             n:'05', title:'Cloud & DevOps',              desc:'AWS, GCP, and Azure architecture. Containerisation, CI/CD pipelines, and zero-downtime production deployments.',     accent: '#009955',   bg: '#EDFFF7' },
  { Icon: HiCircleStack,       n:'06', title:'API & Backend Development',   desc:'RESTful and GraphQL APIs built to handle real traffic. Relational and NoSQL databases, properly indexed and tuned.', accent: '#0284C7',   bg: '#EFF9FF' },
  { Icon: HiCog6Tooth,         n:'07', title:'Business Automation',         desc:'Workflow automation that eliminates repetitive manual work and connects the tools your team already uses.',           accent: C.blue500,   bg: C.blue50 },
  { Icon: HiSparkles,          n:'08', title:'Brand & Visual Identity',     desc:'Logo, typography, colour systems, and brand guidelines that give your product a coherent, professional presence.',   accent: C.violet500, bg: C.violetLight },
  { Icon: HiMagnifyingGlass,   n:'09', title:'SEO & Performance',           desc:'Technical SEO audits, Core Web Vitals optimisation, and structured data — the unglamorous work that actually moves rankings.',accent: '#009955', bg: '#EDFFF7' },
  { Icon: HiWrenchScrewdriver, n:'10', title:'Maintenance & Support',       desc:'Ongoing monitoring, security patching, dependency updates, and a team that responds quickly when something goes wrong.', accent: '#D97706', bg: '#FFFBEB' },
]

export default function Services() {
  return (
    <Section bg="#fff">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 18 }}>
        {all.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: '#fff', borderRadius: 16, border: `1px solid ${C.border}`, boxShadow: S.card, overflow: 'hidden', transition: 'box-shadow 0.22s, transform 0.22s' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = S.cardH; e.currentTarget.style.transform = 'translateY(-3px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = S.card; e.currentTarget.style.transform = 'none' }}
          >
            <div style={{ height: 3, background: s.accent }} />
            <div style={{ padding: '20px 22px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{ width: 42, height: 42, borderRadius: 11, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <s.Icon style={{ color: s.accent }} size={19} />
                </div>
                <span style={{ fontFamily: F.head, fontWeight: 800, fontSize: 26, color: '#F0F1F8', lineHeight: 1 }}>{s.n}</span>
              </div>
              <h3 style={{ fontFamily: F.head, fontWeight: 700, fontSize: 15, color: C.ink, marginBottom: 8, lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: C.body }}>{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
