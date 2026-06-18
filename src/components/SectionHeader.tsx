import { motion } from "framer-motion"

interface SectionHeaderProps {
  headline: string
  centered?: boolean
  eyebrow?: string
}

export default function SectionHeader({ headline, centered = true, eyebrow }: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs tracking-[0.2em] uppercase text-text-dim mb-3"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-text"
      >
        {headline}
      </motion.h2>
    </div>
  )
}
