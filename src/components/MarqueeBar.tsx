import { motion } from "framer-motion"

const items = [
  "SOC 2", "ISO 27001", "HIPAA", "PCI DSS", "GDPR",
  "AWS Partner", "Kubernetes", "PostgreSQL", "React", "Go",
]

export default function MarqueeBar() {
  return (
    <div className="relative overflow-hidden py-6 border-y border-border/30 bg-surface-2/40">
      <motion.div
        className="flex gap-16 items-center"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-xs font-mono text-text-dim/50 uppercase tracking-[0.2em] whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
