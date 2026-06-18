import { Link } from "react-router-dom"
import { motion } from "framer-motion"

interface CTASectionProps {
  headline: string
  description: string
  cta: string
  ctaTo?: string
  image?: string
}

export default function CTASection({ headline, description, cta, ctaTo = "/contact", image }: CTASectionProps) {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className={`absolute inset-0 ${image ? "bg-gradient-to-tl from-surface via-surface/90 via-50% to-transparent" : ""}`} />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-text"
        >
          {headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-base text-text-muted leading-relaxed"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Link
            to={ctaTo}
            className="relative group inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-xl font-medium shadow-lg shadow-accent/20 transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_32px_rgba(202,138,4,0.35)]"
          >
            <span className="relative z-10">{cta}</span>
            <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
