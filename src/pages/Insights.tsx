import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import PageHero from "../components/PageHero"
import { insights } from "../data/insights"

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const categoryColors: Record<string, string> = {
  "Engineering Philosophy": "border-l-primary",
  "Infrastructure Engineering": "border-l-accent",
  "AI & Machine Learning": "border-l-emerald-500",
  "Security & Compliance": "border-l-red-500",
  "Legacy Modernization": "border-l-amber-500",
}

export default function Insights() {
  const featured = insights[0]
  const rest = insights.slice(1)

  return (
    <>
      <PageHero
        headline="Insights"
        subheadline="Engineering Thought Leadership"
        description="Technical deep dives, engineering philosophy, and practical guides from the Centrosof team."
        image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=85"
        gradient="l"
      />

      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-5xl mx-auto">
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent/70 mb-6 block">Featured Article</span>
              <Link
                to={`/insights/${featured.slug}`}
                className="group block p-8 md:p-10 rounded-2xl border border-border/50 bg-surface-2/60 hover:bg-surface-2/90 hover:border-border transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-text-dim uppercase tracking-wider mb-4">
                  <span className="text-accent font-semibold">{featured.category}</span>
                  <span className="w-1 h-1 rounded-full bg-text-dim" />
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-heading tracking-tight text-text group-hover:text-accent transition-colors duration-200">
                  {featured.title}
                </h2>
                <p className="mt-4 text-text-muted/80 leading-relaxed max-w-3xl">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-200">
                  Read Article
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          )}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {rest.map((post) => (
              <motion.article
                key={post.id}
                variants={item}
                className="group"
              >
                <Link
                  to={`/insights/${post.slug}`}
                  className={`block p-6 rounded-2xl border border-border/50 bg-surface-2/40 hover:bg-surface-2/80 hover:border-border transition-all duration-300 border-l-4 ${categoryColors[post.category] || "border-l-primary"}`}
                >
                  <div className="flex items-center gap-3 text-xs font-mono text-text-dim uppercase tracking-wider mb-3">
                    <span className="text-accent">{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-text-dim" />
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold font-heading tracking-tight text-text group-hover:text-accent transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-text-muted/70 leading-relaxed line-clamp-2">{post.excerpt}</p>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
