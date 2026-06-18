import { useState } from "react"
import { motion } from "framer-motion"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    window.open(`https://formsubmit.co/hello.centrosof@gmail.com?subject=Newsletter signup&message=${encodeURIComponent(email)}`)
    setDone(true)
  }

  if (done) {
    return (
      <section className="py-20 px-6 border-t border-border/30">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-text-muted">You're on the list. We'll send engineering insights — no spam, no sales pitches.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-6 border-t border-border/30">
      <div className="max-w-lg mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono text-accent/70 tracking-[0.2em] uppercase mb-3"
        >
          Stay in the Loop
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-2xl font-bold font-heading text-text"
        >
          Get monthly engineering insights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-2 text-sm text-text-muted"
        >
          Case studies, architecture deep dives, and engineering philosophy. No fluff. Just engineering.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          onSubmit={handleSubmit}
          className="mt-8 flex gap-3 max-w-sm mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3 rounded-xl bg-surface-2/80 border border-border/60 text-text placeholder:text-text-dim/50 focus:outline-none focus:border-accent/50 transition-all text-sm"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </section>
  )
}
