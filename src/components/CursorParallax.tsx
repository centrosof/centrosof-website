import { useRef, useEffect, type ReactNode } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface CursorParallaxProps {
  children: ReactNode
  strength?: number
  className?: string
}

export default function CursorParallax({ children, strength = 15, className = "" }: CursorParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 40, damping: 25 })
  const springY = useSpring(y, { stiffness: 40, damping: 25 })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMouse = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (e.clientX - centerX) / (rect.width / 2)
      const deltaY = (e.clientY - centerY) / (rect.height / 2)
      x.set(deltaX * strength)
      y.set(deltaY * strength)
    }

    const handleLeave = () => {
      x.set(0)
      y.set(0)
    }

    window.addEventListener("mousemove", handleMouse)
    el.addEventListener("mouseleave", handleLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouse)
      el.removeEventListener("mouseleave", handleLeave)
    }
  }, [x, y, strength])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          x: springX,
          y: springY,
          scale: 1.05,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
