import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { caseStudies } from "../data/caseStudies"
import CTASection from "../components/CTASection"
import SectionImage from "../components/SectionImage"
import { caseHeroImages } from "../data/constants"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const cs = caseStudies.find((c) => c.slug === slug)

  if (!cs) {
    return (
      <div className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-3xl font-bold text-text">Case Study Not Found</h1>
        <p className="mt-4 text-text-muted">The case study you are looking for does not exist.</p>
        <Link to="/case-studies" className="inline-block mt-6 text-primary hover:underline">
          ← Back to Case Studies
        </Link>
      </div>
    )
  }

  return (
    <>
      <SectionImage
        src={caseHeroImages[cs.id] || "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=85"}
        gradient="r"
        className="pt-32 pb-20 px-6"
      >
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <Link to="/case-studies" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors duration-200">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 flex flex-wrap gap-3 text-xs font-mono text-text-dim uppercase tracking-wider"
          >
            <span className="text-accent font-semibold">{cs.industry}</span>
            <span className="w-1 h-1 rounded-full bg-text-dim self-center" />
            <span>{cs.client}</span>
            <span className="w-1 h-1 rounded-full bg-text-dim self-center" />
            <span>{cs.duration}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 text-4xl md:text-5xl font-bold font-heading tracking-tight text-text"
          >
            {cs.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {cs.metrics.slice(0, 4).map((m, i) => {
              const num = m.match(/^[\d,.]+%?/)
              return (
                <div key={i} className="p-5 rounded-xl border border-border/50 bg-surface-3/30">
                  {num && (
                    <div className="text-2xl font-bold font-heading text-accent">{num[0]}</div>
                  )}
                  <div className="text-xs text-text-muted/70 mt-1 leading-snug">
                    {num ? m.replace(num[0], "").trim() : m}
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </SectionImage>

      <nav className="sticky top-18 z-20 bg-surface/80 backdrop-blur-xl border-b border-border/30">
        <div className="max-w-4xl mx-auto px-6 flex gap-8 py-3">
          {[
            { label: "Problem", href: "#problem" },
            { label: "Solution", href: "#solution" },
            { label: "Outcome", href: "#outcome" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-mono text-text-dim hover:text-accent transition-colors uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <SectionImage
        id="problem"
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=85"
        gradient="l"
        className="py-24 px-6"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent/70 mb-4 block">01 — The Problem</span>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-text mb-8">
              What Went Wrong
            </h2>
            <div className="text-text-muted/80 leading-relaxed whitespace-pre-line">
              {cs.problem}
            </div>
          </motion.div>
        </div>
      </SectionImage>

      <SectionImage
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=85"
        gradient="tl"
        className="py-24 px-6"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent/70 mb-4 block">02 — The Solution</span>
            <h2 id="solution" className="text-2xl md:text-3xl font-bold font-heading text-text mb-8">
              How We Fixed It
            </h2>
            <div className="text-text-muted/80 leading-relaxed whitespace-pre-line">
              {cs.solution}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 p-6 md:p-8 rounded-2xl border border-border/50 bg-surface-2/40"
          >
            <p className="text-xs font-mono text-text-dim tracking-wider mb-6">Architecture Transition</p>
            <div className="flex items-center gap-4 md:gap-8 justify-center">
              <div className="flex-1 text-center">
                <div className="w-full aspect-[3/2] rounded-xl border border-red-500/20 bg-red-500/[0.03] flex flex-col items-center justify-center p-4 gap-2">
                  <svg viewBox="0 0 60 60" className="w-10 h-10 opacity-40" fill="none">
                    <rect x="5" y="5" width="50" height="50" rx="4" stroke="#ef4444" strokeWidth="1" />
                    <rect x="15" y="15" width="30" height="5" rx="1" fill="#ef4444" opacity="0.2" />
                    <rect x="15" y="25" width="30" height="5" rx="1" fill="#ef4444" opacity="0.15" />
                    <rect x="15" y="35" width="30" height="5" rx="1" fill="#ef4444" opacity="0.1" />
                    <rect x="15" y="45" width="30" height="5" rx="1" fill="#ef4444" opacity="0.08" />
                  </svg>
                  <span className="text-xs font-mono text-red-500/60">Legacy Monolith</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <svg aria-hidden="true" className="w-6 h-6 text-accent/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
                <span className="text-[10px] font-mono text-accent/40">8 weeks</span>
              </div>
              <div className="flex-1 text-center">
                <div className="w-full aspect-[3/2] rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] flex flex-col items-center justify-center p-4 gap-2">
                  <svg viewBox="0 0 60 60" className="w-10 h-10 opacity-40" fill="none">
                    <rect x="3" y="3" width="16" height="16" rx="3" stroke="#10b981" strokeWidth="1" />
                    <rect x="25" y="3" width="16" height="16" rx="3" stroke="#10b981" strokeWidth="1" />
                    <rect x="14" y="22" width="16" height="16" rx="3" stroke="#10b981" strokeWidth="1" />
                    <rect x="36" y="22" width="16" height="16" rx="3" stroke="#10b981" strokeWidth="1" />
                    <rect x="3" y="41" width="16" height="16" rx="3" stroke="#10b981" strokeWidth="1" />
                    <rect x="25" y="41" width="16" height="16" rx="3" stroke="#10b981" strokeWidth="1" />
                  </svg>
                  <span className="text-xs font-mono text-emerald-500/60">Microservices</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionImage>

      <SectionImage
        id="outcome"
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=85"
        gradient="r"
        className="py-24 px-6"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent/70 mb-4 block">03 — The Outcome</span>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-text mb-8">
              The Results
            </h2>
            <div className="text-text-muted/80 leading-relaxed">
              {cs.outcome}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
            className="mt-10 space-y-3"
          >
            {cs.metrics.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-surface-3/40"
              >
                <span className="shrink-0 w-7 h-7 rounded-lg bg-accent-dim border border-accent/10 flex items-center justify-center text-accent text-sm font-bold">
                  ✓
                </span>
                <span className="text-sm text-text-muted/90 pt-0.5">{m}</span>
              </motion.div>
            ))}
          </motion.div>

          {cs.testimonial && (
            <motion.blockquote
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-12 p-8 rounded-2xl border border-accent/15 bg-accent-dim/20"
            >
              <svg aria-hidden="true" className="w-7 h-7 text-accent/30 mb-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} aria-hidden="true" className="w-4 h-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.6l5.34-.78L10 1z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-muted/80 italic leading-relaxed text-lg">"{cs.testimonial.quote}"</p>
              <footer className="mt-4">
                <p className="text-sm text-text font-medium">{cs.testimonial.author}</p>
                <p className="text-xs text-text-dim">{cs.testimonial.title}, {cs.testimonial.company}</p>
              </footer>
            </motion.blockquote>
          )}
        </div>
      </SectionImage>

      <CTASection
        headline="Want Results Like This?"
        description="Tell us about your legacy system, your scaling problems, or your infrastructure debt."
        cta="Start the Conversation"
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=85"
      />
    </>
  )
}
