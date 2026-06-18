import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function MouseTracker() {
  const [isDesktop, setIsDesktop] = useState(false)

  const glowX = useMotionValue(-200)
  const glowY = useMotionValue(-200)

  const springConfig = { stiffness: 80, damping: 25, mass: 0.8 }
  const glowXSpring = useSpring(glowX, springConfig)
  const glowYSpring = useSpring(glowY, springConfig)

  useEffect(() => {
    const desktop = window.matchMedia("(pointer: fine)").matches
    setIsDesktop(desktop)
    if (!desktop) return

    const handleMouse = (e: MouseEvent) => {
      glowX.set(e.clientX)
      glowY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouse, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [glowX, glowY])

  if (!isDesktop) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9997] w-80 h-80 -translate-x-1/2 -translate-y-1/2"
      style={{
        x: glowXSpring,
        y: glowYSpring,
      }}
    >
      <div className="w-full h-full rounded-full bg-primary/12 blur-3xl" />
    </motion.div>
  )
}
