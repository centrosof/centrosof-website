import { motion } from "framer-motion"

const clients = [
  { name: "Meridian Banking Group", tag: "Financial Services" },
  { name: "Voxa Retail Group", tag: "E-Commerce" },
  { name: "NovaMed Analytics", tag: "Healthcare" },
  { name: "PayBridge Technologies", tag: "FinTech" },
  { name: "StreamLine Logistics", tag: "Logistics" },
  { name: "Atlas Media Group", tag: "Media" },
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
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 px-4 py-2 rounded-lg border border-border/30 bg-surface-2/40"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/10 flex items-center justify-center text-accent text-sm font-bold font-heading">
                {client.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm text-text-muted/80 font-medium leading-tight">{client.name}</div>
                <div className="text-[10px] font-mono text-text-dim/50 tracking-wide">{client.tag}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
