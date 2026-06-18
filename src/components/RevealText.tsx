import { motion } from "framer-motion"

interface RevealTextProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
  delay?: number
}

export default function RevealText({ text, className = "", delay = 0 }: RevealTextProps) {
  const words = text.split(" ")

  return (
    <span className={className} style={{ display: "inline-flex", flexWrap: "wrap" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: delay + i * 0.04 }}
          style={{ marginRight: "0.3em" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
