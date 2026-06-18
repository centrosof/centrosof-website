import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import PageHero from "../components/PageHero"
import { services } from "../data/services"
import SectionImage from "../components/SectionImage"
import { serviceIllustrations } from "../components/Illustrations"

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Services() {
  return (
    <>
      <PageHero
        headline="Services & Capabilities"
        subheadline="Full-Stack Engineering. Zero Compromise."
        description="We do not offer 'website development.' We offer infrastructure engineering, legacy replacement, and production-grade architecture. These are our core competencies."
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=85"
        gradient="l"
      />

      <SectionImage
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=85"
        gradient="d"
        className="py-28 px-6"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                variants={item}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 md:p-10 rounded-2xl border border-border/50 hover:border-primary/20 hover:bg-surface-2/40 transition-all duration-500"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="font-mono text-xs text-text-dim tracking-wider">0{i + 1}</span>
                  <h2 className="mt-2 text-2xl md:text-3xl font-bold font-heading tracking-tight text-text group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-text-muted/80 leading-relaxed">{service.shortDesc}</p>
                  <ul className="mt-6 space-y-3">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-text-muted/70">
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary/60 mt-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary hover:text-primary-hover transition-colors duration-200"
                  >
                    {service.cta}
                    <svg aria-hidden="true" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""} aspect-[4/3] rounded-xl border border-border/50 bg-gradient-to-br from-surface-3/80 to-surface-2/80 flex items-center justify-center overflow-hidden p-8`}>
                  {(() => {
                    const Illus = serviceIllustrations[i]
                    return <Illus className="w-full h-full max-w-[200px] max-h-[160px]" />
                  })()}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionImage>
    </>
  )
}
