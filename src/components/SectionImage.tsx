import type { ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { gradientMap, type GradientDir } from "../data/constants"

interface SectionImageProps {
  children: ReactNode
  src: string
  gradient?: GradientDir
  className?: string
  id?: string
}

export default function SectionImage({ children, src, gradient = "r", className = "", id }: SectionImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section ref={ref} id={id} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${src})`, y }}
      />
      <div className={`absolute inset-0 ${gradientMap[gradient]}`} />
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}
