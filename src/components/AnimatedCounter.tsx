import { useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform, useInView, animate } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
}

export default function AnimatedCounter({ value, suffix = "", prefix = "", decimals = 0 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 })
  const rounded = useTransform(springValue, (v) => {
    if (decimals > 0) return v.toFixed(decimals)
    return Math.round(v).toString()
  })

  useEffect(() => {
    if (isInView) {
      motionValue.set(0)
      animate(motionValue, value, { duration: 2 })
    }
  }, [isInView, motionValue, value])

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}
