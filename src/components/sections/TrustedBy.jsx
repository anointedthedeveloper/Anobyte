import { motion } from 'framer-motion'
import { C, F, maxW, px } from '../../styles/tokens'

const companies = ['TechCorp','Nexus','Meridian','Vertex AI','CloudBase','Orion Labs','Pulsar','Synapse','Quantum','ArcNode']
const doubled   = [...companies, ...companies]

function Chip({ name }) {
  return (
    <div style={{
      flexShrink: 0,
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '10px 20px', borderRadius: 12, margin: '0 6px',
      background: '#fff', border: `1px solid ${C.border}`,
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    }}>
      <div style={{
        width: 30, height: 30, borderRadius: 8,
        background: 'linear-gradient(135deg,#4B6EF5,#8B3FF5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', fontSize: 11, fontWeight: 800, fontFamily: F.head, flexShrink: 0,
      }}>
        {name.charAt(0)}
      </div>
      <span style={{ fontSize: 13, fontWeight: 600, fontFamily: F.head, color: C.subtle, whiteSpace: 'nowrap' }}>
        {name}
      </span>
    </div>
  )
}

export default function TrustedBy() {
  return (
    <section style={{ background: '#fff', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '52px 0' }}>
      <div style={{ maxWidth: maxW, margin: '0 auto', padding: `0 ${px}`, marginBottom: 24 }}>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', fontSize: 11, fontWeight: 600, fontFamily: F.head, color: C.subtle, letterSpacing: '0.18em', textTransform: 'uppercase' }}
        >
          Trusted by forward-thinking companies
        </motion.p>
      </div>
      <div
        className="ticker-wrap"
        style={{
          maskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div className="ticker-track">
          {doubled.map((n, i) => <Chip key={i} name={n} />)}
        </div>
      </div>
    </section>
  )
}
