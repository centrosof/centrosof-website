import { motion } from "framer-motion"

const clients = [
  "Meridian Banking",
  "Voxa Retail",
  "NovaMed",
  "PayBridge",
  "StreamLine Logistics",
  "Atlas Media Group",
]

export default function ClientLogoBar() {
  return (
    <section className="py-16 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono text-text-dim/50 uppercase tracking-[0.2em] text-center mb-10"
        >
          Trusted by engineering teams at
        </motion.p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {clients.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/10 flex items-center justify-center text-accent text-xs font-bold font-heading">
                {name.charAt(0)}
              </div>
              <span className="text-sm text-text-muted/60 font-medium">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
