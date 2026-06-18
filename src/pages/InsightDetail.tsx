import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { insights } from "../data/insights"

export default function InsightDetail() {
  const { slug } = useParams()
  const post = insights.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-3xl font-bold text-text">Article Not Found</h1>
        <p className="mt-4 text-text-muted">The article you are looking for does not exist.</p>
        <Link to="/insights" className="inline-block mt-6 text-primary hover:underline">
          ← Back to Insights
        </Link>
      </div>
    )
  }

  return (
    <>
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=85)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 via-60% to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <Link to="/insights" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors duration-200">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Insights
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 text-xs font-mono text-text-dim uppercase tracking-wider mt-6"
          >
            <span className="text-primary">{post.category}</span>
            <span className="w-1 h-1 rounded-full bg-text-dim" />
            <span>{post.readTime}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 text-3xl md:text-4xl font-bold font-heading tracking-tight text-text"
          >
            {post.title}
          </motion.h1>
        </div>
      </section>

      <article className="relative py-10 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-muted/80 leading-[1.8] space-y-5"
          >
            {post.body.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold font-heading text-text mt-10 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              if (paragraph.startsWith("**")) {
                const boldMatch = paragraph.match(/\*\*(.*?)\*\*/)
                if (boldMatch) {
                  const [full, bold] = boldMatch
                  const rest = paragraph.replace(full, "")
                  return (
                    <p key={i}>
                      <strong className="text-text">{bold}</strong>
                      {rest}
                    </p>
                  )
                }
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").map(l => l.replace(/^- /, ""))
                return (
                  <ul key={i} className="space-y-2 pl-5">
                    {items.map((li, j) => (
                      <li key={j} className="list-disc text-text-muted/80">{li}</li>
                    ))}
                  </ul>
                )
              }
              return <p key={i}>{paragraph}</p>
            })}
          </motion.div>
        </div>
      </article>
    </>
  )
}
