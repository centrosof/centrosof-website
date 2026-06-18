import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <section className="relative pt-40 pb-28 px-6 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=85)" }} />
      <div className="absolute inset-0 bg-gradient-to-tl from-surface via-surface/90 via-50% to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-text-dim">Error 404</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-6xl md:text-8xl font-bold font-heading tracking-tight text-text"
        >
          System Not Found
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-text-muted/80 leading-relaxed"
        >
          The page you are looking for does not exist. It may have been moved, renamed, or never existed in the first place.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-3 text-sm text-text-dim/60 font-mono"
        >
          Unlike legacy systems, we do not leave broken things behind.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-medium transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_32px_rgba(99,102,241,0.25)]"
          >
            Return to Homepage
            <svg aria-hidden="true" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/case-studies"
            className="group inline-flex items-center gap-2 border border-border text-text px-8 py-3.5 rounded-xl font-medium transition-all duration-300 hover:border-primary/40 hover:text-primary hover:bg-surface-3/60"
          >
            Browse Case Studies
            <svg aria-hidden="true" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 border border-border text-text px-8 py-3.5 rounded-xl font-medium transition-all duration-300 hover:border-primary/40 hover:text-primary hover:bg-surface-3/60"
          >
            Contact Us
            <svg aria-hidden="true" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
