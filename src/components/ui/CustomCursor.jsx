import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const dx = useMotionValue(-100), dy = useMotionValue(-100)
  const rx = useMotionValue(-100), ry = useMotionValue(-100)
  const sx = useSpring(rx, { stiffness: 140, damping: 18 })
  const sy = useSpring(ry, { stiffness: 140, damping: 18 })

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia('(max-width: 1024px)').matches) return
    const fn = e => {
      dx.set(e.clientX - 4)
      dy.set(e.clientY - 4)
      rx.set(e.clientX - 15)
      ry.set(e.clientY - 15)
    }
    window.addEventListener('mousemove', fn, { passive: true })
    return () => window.removeEventListener('mousemove', fn)
  }, [dx, dy, rx, ry])

  // Hide on mobile
  if (typeof window !== 'undefined' && window.matchMedia('(max-width:1024px)').matches) return null

  return (
    <>
      <motion.div className="cdot" style={{ x: dx, y: dy, pointerEvents: 'none' }} />
      <motion.div className="cring" style={{ x: sx, y: sy, pointerEvents: 'none' }} />
    </>
  )
}
