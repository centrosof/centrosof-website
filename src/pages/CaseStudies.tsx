import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import PageHero from "../components/PageHero"
import SectionImage from "../components/SectionImage"
import { caseStudies } from "../data/caseStudies"
import { caseImages } from "../data/constants"

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function CaseStudies() {
  return (
    <>
      <PageHero
        headline="Case Studies"
        subheadline="Real Problems. Real Replacements."
        description="Every project we take on is a story of transformation. Here are some of the systems we rebuilt, the problems we solved, and the outcomes we delivered."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85"
        gradient="r"
      />

      <SectionImage
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=85"
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
            className="space-y-8"
          >
            {caseStudies.map((cs) => (
              <motion.article
                key={cs.id}
                variants={item}
                className="group relative rounded-2xl border border-border/50 bg-surface-2/40 hover:bg-surface-2/80 hover:border-border transition-all duration-300 overflow-hidden"
              >
                <Link to={`/case-studies/${cs.slug}`} className="block">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-3 p-8 md:p-10">
                      <div className="flex items-start gap-3 text-xs font-mono text-text-dim uppercase tracking-wider mb-4">
                        <span className="text-accent font-semibold">{cs.industry}</span>
                        <span className="w-1 h-1 rounded-full bg-text-dim mt-1" />
                        <span>{cs.client}</span>
                        <span className="w-1 h-1 rounded-full bg-text-dim mt-1" />
                        <span>{cs.duration}</span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold font-heading tracking-tight text-text group-hover:text-accent transition-colors duration-200">
                        {cs.title}
                      </h2>
                      <p className="mt-4 text-text-muted/80 leading-relaxed line-clamp-3">
                        {cs.problem}
                      </p>
                      <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-200">
                        Read Full Case Study
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </span>

                      <div className="mt-6 hidden lg:flex gap-4">
                        {cs.metrics.slice(0, 2).map((m, j) => (
                          <div key={j} className="flex-1 flex items-start gap-2 p-3 rounded-lg bg-surface-3/40 border border-border/40">
                            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                            <span className="text-xs text-text-muted/90 leading-snug">{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-2 relative min-h-[200px] lg:min-h-full overflow-hidden">
                      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${caseImages[cs.id]})` }} />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-surface-2/90" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </SectionImage>
    </>
  )
}
