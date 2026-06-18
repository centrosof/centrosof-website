import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { services } from "../data/services"
import CTASection from "../components/CTASection"
import SectionImage from "../components/SectionImage"
import { serviceIllustrations } from "../components/Illustrations"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-3xl font-bold text-text">Service Not Found</h1>
        <p className="mt-4 text-text-muted">The service you are looking for does not exist.</p>
        <Link to="/services" className="inline-block mt-6 text-primary hover:underline">
          ← Back to Services
        </Link>
      </div>
    )
  }

  const relatedServices = services.filter((s) => s.id !== service.id)

  return (
    <>
      <SectionImage
        src={service.id === "legacy-modernization" ? "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=85" : "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=85"}
        gradient="r"
        className="pt-32 pb-16 px-6"
      >
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors duration-200">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="mt-8 flex items-start gap-8">
            <div className="hidden md:block w-32 h-28 shrink-0 opacity-60">
              {(() => {
                const idx = services.findIndex((s) => s.id === service.id)
                const Illus = serviceIllustrations[idx] || serviceIllustrations[0]
                return <Illus className="w-full h-full" />
              })()}
            </div>
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-text"
              >
                {service.title}
              </motion.h1>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-text-muted/80 leading-relaxed space-y-4"
          >
            {service.fullDesc.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>
        </div>
      </SectionImage>

      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold font-heading text-text mb-8">Our Capabilities</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {service.details.map((detail, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                className="group p-5 rounded-xl border border-border/60 bg-surface-3/30 hover:border-primary/20 hover:bg-surface-3/60 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-2 h-2 rounded-full bg-primary/50 mt-2 group-hover:bg-primary transition-colors duration-300" />
                  <span className="text-sm text-text-muted/80">{detail}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative max-w-4xl mx-auto">
            <h2 className="text-xl font-bold font-heading text-text mb-6">Related Services</h2>
            <div className="space-y-4">
              {relatedServices.map((rs) => (
                <Link
                  key={rs.id}
                  to={`/services/${rs.slug}`}
                  className="group block p-6 rounded-xl border border-border/50 hover:border-primary/20 hover:bg-surface-2/60 transition-all duration-300"
                >
                  <p className="text-text font-medium group-hover:text-primary transition-colors duration-200">{rs.title}</p>
                  <p className="text-sm text-text-muted/70 mt-1">{rs.shortDesc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        headline={`Ready to Discuss ${service.shortTitle}?`}
        description="Tell us about your project. We will tell you how we can help."
        cta={service.cta}
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=85"
      />
    </>
  )
}
