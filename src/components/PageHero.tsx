import { motion } from "framer-motion"
import { gradientMap, type GradientDir } from "../data/constants"

interface PageHeroProps {
  headline: string
  subheadline?: string
  description?: string
  accent?: string
  children?: React.ReactNode
  compact?: boolean
  image?: string
  gradient?: GradientDir
}

export default function PageHero({ headline, subheadline, description, accent, children, compact, image, gradient = "r" }: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden ${compact ? "pt-28 pb-16" : "pt-36 pb-24"}`}>
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className={`absolute inset-0 ${image ? gradientMap[gradient] : ""}`} />
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {accent && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-mono text-xs tracking-[0.2em] uppercase mb-5"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-dim border border-accent/10">
              {accent}
            </span>
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight leading-[0.95] text-text"
        >
          {headline}
        </motion.h1>
        {subheadline && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-lg md:text-xl text-text-muted max-w-2xl mx-auto"
          >
            {subheadline}
          </motion.p>
        )}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-base text-text-muted/80 max-w-xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
