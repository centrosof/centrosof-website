import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    q: "What is Centrosof's approach to software engineering?",
    a: "We engineer for stability at scale. Every system we build is stress-tested before it reaches production, security is engineered into every layer, and we eliminate patchwork solutions entirely. No band-aids. No technical debt carried forward.",
  },
  {
    q: "How do you handle legacy modernization without downtime?",
    a: "We execute zero-downtime migrations using a phased parallel-run approach. The new system runs alongside the old one, traffic is ramped incrementally (1% → 100%), and only after a two-week observation period do we decommission the legacy system. No outages. No data loss.",
  },
  {
    q: "What industries do you serve?",
    a: "Finance, healthcare, and logistics — high-compliance industries where 'good enough' isn't an option. Our engineers come from these sectors and bring that discipline to every project.",
  },
  {
    q: "How do you ensure security and compliance?",
    a: "We build SOC 2, HIPAA, and GDPR-ready systems from day one. Security is not bolted on after the fact — it's engineered into every layer: database encryption, zero-trust networks, RBAC, audit logging, and automated compliance validation.",
  },
  {
    q: "What's the benefit of working with a founder-operated team?",
    a: "No middle layers. No project managers who can't read logs. Every team member writes code. You talk directly to the engineers building your system. Decisions are faster, execution is cleaner, and accountability is absolute.",
  },
]

export default function ServiceFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-3xl mx-auto">
        <p className="text-xs font-mono text-accent/70 tracking-[0.2em] uppercase text-center mb-3">FAQs</p>
        <h2 className="text-3xl font-bold font-heading text-text text-center">Common Questions</h2>
        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-border/50 bg-surface-2/40 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left text-sm font-medium text-text hover:text-accent transition-colors"
              >
                <span>{faq.q}</span>
                <svg
                  aria-hidden="true"
                  className={`w-4 h-4 shrink-0 text-text-dim transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-sm text-text-muted/80 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
