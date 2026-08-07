export default function SectionBadge({ children, color = 'blue' }) {
  const styles = {
    blue:   { bg: '#EEF0FF', text: '#3A5CE8' },
    violet: { bg: '#F3EAFF', text: '#7C3AED' },
    green:  { bg: '#ECFDF5', text: '#059669' },
    amber:  { bg: '#FFFBEB', text: '#D97706' },
    rose:   { bg: '#FFF1F2', text: '#E11D48' },
  }
  const s = styles[color] || styles.blue
  return (
    <span
      className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
      style={{ background: s.bg, color: s.text }}
    >
      {children}
    </span>
  )
}
