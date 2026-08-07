import { C, F, maxW, gutter } from '../../styles/tokens'

/** Keeps content inside max-width + horizontal padding — use on every section */
export function Wrap({ children, style = {} }) {
  return (
    <div style={{ maxWidth: maxW, margin: '0 auto', padding: `0 ${gutter}`, width: '100%', ...style }}>
      {children}
    </div>
  )
}

/** Full section with consistent vertical rhythm */
export function Section({ children, bg = '#fff', py = 'clamp(72px,9vw,104px)', style = {} }) {
  return (
    <section style={{ background: bg, padding: `${py} 0`, overflow: 'hidden', ...style }}>
      <Wrap>{children}</Wrap>
    </section>
  )
}

/** Reusable section header */
export function SectionHeader({ eyebrow, title, titleGrad, subtitle, center = true }) {
  return (
    <div style={{
      textAlign: center ? 'center' : 'left',
      maxWidth: center ? 640 : '100%',
      margin: center ? '0 auto 56px' : '0 0 48px',
    }}>
      {eyebrow && (
        <p style={{ fontSize: 11, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.blue500, marginBottom: 14 }}>
          {eyebrow}
        </p>
      )}
      <h2 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(1.8rem,3vw,2.75rem)', letterSpacing: '-0.033em', lineHeight: 1.12, color: C.ink, marginBottom: subtitle ? 16 : 0 }}>
        {title}{titleGrad && <> <span className="tg">{titleGrad}</span></>}
      </h2>
      {subtitle && (
        <p style={{ fontSize: 17, lineHeight: 1.75, color: C.body, marginTop: 0 }}>{subtitle}</p>
      )}
    </div>
  )
}
