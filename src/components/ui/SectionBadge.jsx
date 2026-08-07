export default function SectionBadge({ children, color = 'blue' }) {
  const map = {
    blue:   { bg: 'rgba(75,110,245,0.1)',  border: 'rgba(75,110,245,0.2)',  text: '#3A5CE8' },
    violet: { bg: 'rgba(139,63,245,0.1)',  border: 'rgba(139,63,245,0.22)', text: '#7A2EE0' },
    green:  { bg: 'rgba(0,200,122,0.1)',   border: 'rgba(0,200,122,0.22)',  text: '#009955' },
    amber:  { bg: 'rgba(245,158,11,0.1)',  border: 'rgba(245,158,11,0.22)', text: '#B45309' },
    rose:   { bg: 'rgba(239,68,68,0.1)',   border: 'rgba(239,68,68,0.22)',  text: '#DC2626' },
  }
  const s = map[color] || map.blue
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
      style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.text, fontFamily: '"Space Grotesk", sans-serif' }}
    >
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.text }} />
      {children}
    </span>
  )
}
