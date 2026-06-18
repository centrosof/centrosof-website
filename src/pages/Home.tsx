import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import SectionHeader from "../components/SectionHeader"
import CTASection from "../components/CTASection"
import AnimatedCounter from "../components/AnimatedCounter"
import SectionImage from "../components/SectionImage"
import RevealText from "../components/RevealText"
import MarqueeBar from "../components/MarqueeBar"
import CursorParallax from "../components/CursorParallax"
import CertBadges from "../components/CertBadges"
import ClientLogoBar from "../components/ClientLogoBar"
import Newsletter from "../components/Newsletter"
import { services, whatWeDontDo } from "../data/services"
import { statsData, serviceImages } from "../data/constants"
import { caseStudies } from "../data/caseStudies"

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface">
        <CursorParallax strength={12} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15]"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=85)" }}
          />
        </CursorParallax>
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-[60%] left-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-4xl mx-auto px-6 py-32 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs tracking-[0.25em] uppercase text-accent/80 mb-8"
          >
            Global Full-Stack Software Engineering
          </motion.p>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-heading tracking-tight leading-[0.85] text-text">
            <RevealText
              text="CENTROSOF"
              delay={0.1}
            />
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-accent/40" />
            <span className="text-sm md:text-base text-accent font-mono font-medium tracking-wide">
              Build what works. Break what's broken.
            </span>
            <span className="h-px w-8 bg-accent/40" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base md:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            We map the fracture pattern — logical decay, database contention, architectural debt — then replace with clean, secure, infinitely scalable systems.
          </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 flex flex-wrap justify-center gap-4"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-xl font-medium shadow-lg shadow-accent/20 transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_32px_rgba(202,138,4,0.35)]"
                >
                  Book a Free Architecture Audit
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/case-studies"
                  className="group inline-flex items-center gap-2 border border-border-light text-text-muted px-8 py-3.5 rounded-xl font-medium transition-all duration-300 hover:border-accent/50 hover:text-accent hover:bg-accent-dim/30"
                >
                  See Our Work
              <svg aria-hidden="true" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-20 flex flex-col items-center gap-4"
          >
            <div className="flex -space-x-3">
              {["A", "M", "D", "S"].map((letter) => (
                <div key={letter} className="w-10 h-10 rounded-full border-2 border-surface bg-surface-3 flex items-center justify-center text-xs font-mono text-text-muted">
                  {letter}
                </div>
              ))}
            </div>
            <p className="text-xs font-mono tracking-wide text-text-dim">Trusted by engineering teams across finance, healthcare, and logistics</p>
            <div className="flex gap-6 mt-1">
              <span className="text-[11px] font-mono text-text-dim/50 tracking-widest uppercase">SOC 2</span>
              <span className="text-[11px] font-mono text-text-dim/50 tracking-widest uppercase">ISO 27001</span>
              <span className="text-[11px] font-mono text-text-dim/50 tracking-widest uppercase">HIPAA</span>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionImage
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=85"
        gradient="tl"
        className="py-28 px-6"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-6xl mx-auto">
          <SectionHeader headline="What We Engineer" eyebrow="Core Capabilities" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {services.slice(0, 3).map((service) => (
              <motion.div key={service.id} variants={itemUp}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group relative block h-full rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.06)]"
                >
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${serviceImages[service.id]})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/90 to-surface/80" />
                  <div className="absolute inset-0 bg-surface/40" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative p-8 flex flex-col justify-end min-h-[280px]">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold text-lg font-heading mb-4">
                      {service.title.charAt(0)}
                    </div>
                    <h3 className="text-xl font-bold font-heading tracking-tight text-text group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted/90 leading-relaxed">
                      {service.shortDesc}
                    </p>
                    <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-accent opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Learn more
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionImage>

      <SectionImage
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=85"
        gradient="r"
        className="py-28 px-6"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-5xl mx-auto">
          <SectionHeader headline="What We Don't Do" eyebrow="Clear Positioning" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 text-sm font-bold shrink-0">✕</span>
                <span className="text-sm font-semibold text-text font-heading tracking-wide uppercase">We Don't</span>
              </div>
              {whatWeDontDo.slice(0, 4).map((item) => (
                <motion.div
                  key={item}
                  variants={itemUp}
                  className="flex items-start gap-4 p-4 rounded-xl bg-red-500/[0.03] border border-red-500/10 transition-all duration-300"
                >
                  <span className="shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500/60 text-xs mt-0.5">✕</span>
                  <span className="text-sm text-text-muted leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 text-sm font-bold shrink-0">✓</span>
                <span className="text-sm font-semibold text-text font-heading tracking-wide uppercase">We Do</span>
              </div>
              {[
                "Full rewrites that eliminate technical debt completely",
                "Clean, audited code with zero unnecessary dependencies",
                "Production-ready systems engineered for infinite scale",
                "Complete legacy replacement with zero-downtime migration",
              ].map((item) => (
                <motion.div
                  key={item}
                  variants={itemUp}
                  className="flex items-start gap-4 p-4 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/10 transition-all duration-300"
                >
                  <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500/60 text-xs mt-0.5">✓</span>
                  <span className="text-sm text-text-muted leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionImage>

      <SectionImage
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85"
        gradient="br"
        className="py-28 px-6"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center">
          <SectionHeader headline="Engineering That Speaks for Itself" eyebrow="By the Numbers" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {statsData.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemUp}
                className="p-8 rounded-2xl border border-border bg-surface-2/60"
              >
                <div className="text-4xl md:text-5xl font-bold font-heading text-gradient-primary">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} />
                </div>
                <div className="mt-3 text-sm text-text-muted/70 leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-14 flex flex-wrap justify-center gap-6">
            <CertBadges />
          </div>
        </div>
      </SectionImage>

      <SectionImage
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85"
        gradient="d"
        className="py-28 px-6"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-5xl mx-auto">
          <SectionHeader headline="What Our Clients Say" eyebrow="Testimonials" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {caseStudies.filter(s => s.testimonial).slice(0, 2).map((item) => (
              <motion.div
                key={item.slug}
                variants={itemUp}
                className="p-8 rounded-2xl border border-border/60 bg-surface-2/60 hover:border-accent/20 transition-all duration-300"
              >
                <svg aria-hidden="true" className="w-6 h-6 text-accent/30 mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} aria-hidden="true" className="w-4 h-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.6l5.34-.78L10 1z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-muted/80 leading-relaxed italic">"{item.testimonial!.quote}"</p>
                <div className="mt-6 pt-4 border-t border-border/40">
                  <p className="text-sm text-text font-medium">{item.testimonial!.author}</p>
                  <p className="text-xs text-text-dim">{item.testimonial!.title}, {item.testimonial!.company}</p>
                  <Link to={`/case-studies/${item.slug}`} className="text-xs text-accent hover:underline mt-2 inline-block">
                    Read case study →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionImage>

      <ClientLogoBar />

      <section className="relative py-20 px-6 overflow-hidden border-t border-border/30">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-5xl mx-auto text-center">
          <SectionHeader headline="Our Engineering Stack" eyebrow="Technology Landscape" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { count: "12+", label: "Languages", desc: "Go, Rust, Python, TypeScript, Node.js, Elixir, and more" },
              { count: "20+", label: "Frameworks", desc: "React, Next.js, Django, FastAPI, Spring Boot, Phoenix" },
              { count: "8+", label: "Infrastructure", desc: "AWS, GCP, Kubernetes, Terraform, Docker, Cloudflare" },
              { count: "6+", label: "Data Systems", desc: "PostgreSQL, MongoDB, Redis, Kafka, DynamoDB, Elasticsearch" },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                className="p-6 rounded-2xl border border-border/50 bg-surface-2/40 hover:border-accent/20 transition-all duration-300"
              >
                <div className="text-3xl font-bold font-heading text-accent">{item.count}</div>
                <div className="mt-1 text-sm font-medium text-text">{item.label}</div>
                <div className="mt-2 text-xs text-text-dim/60 leading-relaxed">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <MarqueeBar />

      <Newsletter />

      <CTASection
        headline="Ready to Break What's Broken?"
        description="Tell us about your legacy system, your scaling problems, or your infrastructure debt. We will tell you how to fix it."
        cta="Start the Conversation"
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=85"
      />
    </>
  )
}
