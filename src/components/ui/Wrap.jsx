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
export function Section({ children, bg = '#fff', py = 'clamp(40px,5vw,72px)', style = {} }) {
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
      margin: center ? '0 auto clamp(24px,3.5vw,40px)' : '0 0 clamp(20px,3vw,36px)',
    }}>
      {eyebrow && (
        <p style={{ fontSize: 11, fontWeight: 700, fontFamily: F.head, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.blue500, marginBottom: 12 }}>
          {eyebrow}
        </p>
      )}
      <h2 style={{ fontFamily: F.head, fontWeight: 800, fontSize: 'clamp(1.5rem,2.8vw,2.4rem)', letterSpacing: '-0.033em', lineHeight: 1.12, color: C.ink, marginBottom: subtitle ? 12 : 0 }}>
        {title}{titleGrad && <> <span className="tg">{titleGrad}</span></>}
      </h2>
      {subtitle && (
        <p style={{ fontSize: 'clamp(13px,1.3vw,15px)', lineHeight: 1.7, color: C.body, marginTop: 0 }}>{subtitle}</p>
      )}
    </div>
  )
}
