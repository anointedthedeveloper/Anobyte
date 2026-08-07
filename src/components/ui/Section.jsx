import { C, maxW, px } from '../../styles/tokens'

export default function Section({ children, bg = '#fff', style = {} }) {
  return (
    <section style={{ background: bg, padding: `clamp(64px,8vw,96px) 0`, ...style }}>
      <div style={{ maxWidth: maxW, margin: '0 auto', padding: `0 ${px}` }}>
        {children}
      </div>
    </section>
  )
}
