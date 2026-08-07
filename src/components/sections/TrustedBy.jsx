import { motion } from 'framer-motion'

const companies = [
  { name: 'TechCorp',   abbr: 'TC' },
  { name: 'Nexus',      abbr: 'NX' },
  { name: 'Meridian',   abbr: 'MD' },
  { name: 'Vertex AI',  abbr: 'VA' },
  { name: 'CloudBase',  abbr: 'CB' },
  { name: 'Orion Labs', abbr: 'OL' },
  { name: 'Pulsar',     abbr: 'PS' },
  { name: 'Synapse',    abbr: 'SY' },
  { name: 'Quantum',    abbr: 'QT' },
  { name: 'ArcNode',    abbr: 'AN' },
]

function LogoChip({ c }) {
  return (
    <div
      className="flex-shrink-0 flex items-center gap-2.5 px-5 py-3 rounded-xl mx-2 transition-all duration-300 group"
      style={{ border: '1px solid #E2E8F0', background: '#ffffff' }}
    >
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300"
        style={{ background: '#EEF0FF' }}
      >
        <span className="text-xs font-bold font-heading" style={{ color: '#4B6EF5' }}>{c.abbr}</span>
      </div>
      <span className="text-sm font-semibold whitespace-nowrap" style={{ color: '#CBD5E1' }}>{c.name}</span>
    </div>
  )
}

export default function TrustedBy() {
  const doubled = [...companies, ...companies]
  return (
    <section className="py-14 border-y" style={{ background: '#ffffff', borderColor: '#F1F5F9' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-7">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold tracking-widest uppercase"
          style={{ color: '#CBD5E1' }}
        >
          Trusted by forward-thinking companies
        </motion.p>
      </div>
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {doubled.map((c, i) => <LogoChip key={i} c={c} />)}
        </div>
      </div>
    </section>
  )
}
