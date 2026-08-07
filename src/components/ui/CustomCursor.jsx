import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cx = useMotionValue(-100), cy = useMotionValue(-100)
  const fx = useMotionValue(-100), fy = useMotionValue(-100)
  const sx = useSpring(fx, { stiffness: 140, damping: 18 })
  const sy = useSpring(fy, { stiffness: 140, damping: 18 })

  useEffect(() => {
    if (window.matchMedia('(max-width: 1024px)').matches) return
    const fn = (e) => {
      cx.set(e.clientX - 4.5)
      cy.set(e.clientY - 4.5)
      fx.set(e.clientX - 17)
      fy.set(e.clientY - 17)
    }
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [cx, cy, fx, fy])

  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 1024px)').matches) return null

  return (
    <>
      <motion.div className="cursor-dot hidden lg:block" style={{ x: cx, y: cy }} />
      <motion.div className="cursor-ring hidden lg:block" style={{ x: sx, y: sy }} />
    </>
  )
}
