import { useEffect } from 'react'

/* ── Global ripple effect ────────────────────────────────────
   Listens for clicks on any <a> or <button> that has both
   padding and border-radius in its inline style (i.e. a
   styled button/link). Injects a ripple ink div at the
   click position, then removes it after the animation.
─────────────────────────────────────────────────────────── */
function isStyledButton(el) {
  if (!el) return false
  const tag = el.tagName?.toLowerCase()
  if (tag !== 'a' && tag !== 'button') return false
  // Check it has padding and border-radius (our styled buttons do)
  const s = el.getAttribute('style') || ''
  return s.includes('border-radius') && (s.includes('padding') || el.classList.contains('btn-ripple'))
}

function spawnRipple(el, e) {
  const rect = el.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height) * 1.6
  const x    = (e.clientX - rect.left) - size / 2
  const y    = (e.clientY - rect.top)  - size / 2

  // Pick ripple colour based on button background
  const style    = el.getAttribute('style') || ''
  const isDark   = style.includes('#fff') && style.includes('color: #fff') ||
                   style.includes('color:#fff') ||
                   style.includes('color: rgb(255') ||
                   el.style.color === 'rgb(255, 255, 255)'
  const rippleColor = isDark
    ? 'rgba(255,255,255,0.30)'
    : 'rgba(79,114,248,0.22)'

  const ink = document.createElement('span')
  ink.className = 'ripple-ink'
  ink.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    background: ${rippleColor};
  `
  el.appendChild(ink)
  // Remove after animation
  setTimeout(() => ink.remove(), 600)
}

export default function RippleProvider() {
  useEffect(() => {
    const handler = (e) => {
      // Walk up the DOM to find a styled button/link
      let el = e.target
      let depth = 0
      while (el && depth < 5) {
        if (isStyledButton(el)) {
          spawnRipple(el, e)
          return
        }
        el = el.parentElement
        depth++
      }
    }

    document.addEventListener('click', handler, { passive: true })
    return () => document.removeEventListener('click', handler)
  }, [])

  return null  // renders nothing
}
