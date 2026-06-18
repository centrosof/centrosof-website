import { motion } from "framer-motion"
import PageHero from "../components/PageHero"
import SectionHeader from "../components/SectionHeader"

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const positions = [
  {
    title: "Senior Backend Engineer",
    description: "Build high-performance backend systems for enterprise clients. Microservices. Distributed databases. API design. Security-first.",
    requirements: [
      "5+ years of professional backend engineering",
      "Experience with Go, Rust, Python, or Node.js",
      "Production experience with distributed systems",
      "Strong understanding of database design and optimization",
      "Fluency in English",
    ],
    preferred: ["Experience in finance, healthcare, or logistics", "Kubernetes and cloud-native deployments", "Open-source contributions"],
  },
  {
    title: "Full-Stack Engineer",
    description: "Own the entire stack from frontend to database. React, Next.js, Node.js, Python, and modern deployment pipelines.",
    requirements: [
      "4+ years of full-stack engineering",
      "Strong React and TypeScript experience",
      "Backend experience with Node.js, Python, or Go",
      "Experience with CI/CD and deployment pipelines",
      "Fluency in English",
    ],
    preferred: ["Experience with GraphQL or gRPC", "Cloud experience (AWS, GCP, or Azure)", "Monitoring and observability"],
  },
  {
    title: "DevOps Engineer",
    description: "Design and maintain deployment pipelines, infrastructure automation, and observability platforms. Kubernetes, Terraform, CI/CD, and monitoring.",
    requirements: [
      "4+ years of DevOps/SRE experience",
      "Production experience with Kubernetes",
      "Infrastructure-as-code (Terraform, Pulumi, or CDK)",
      "CI/CD pipeline design (GitHub Actions, GitLab, Jenkins)",
      "Fluency in English",
    ],
    preferred: ["Monitoring and observability (Prometheus, Grafana, Datadog)", "Multi-cloud experience", "Security compliance background"],
  },
]

const hiringSteps = [
  { step: "01", title: "Initial conversation", desc: "30 min — engineering discussion, no HR filters" },
  { step: "02", title: "Technical assessment", desc: "1 hour — real problem, not a LeetCode puzzle" },
  { step: "03", title: "Final interview", desc: "1 hour — architecture and systems design with the team" },
  { step: "04", title: "Offer", desc: "" },
]

export default function WorkWithUs() {
  return (
    <>
      <PageHero
        headline="Work With Us"
        subheadline="Engineer the Future. Not the Feature."
        description="We are looking for builders. Not managers. Not paper-pushers. Engineers who write code, solve problems, and ship systems that matter."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85"
        gradient="r"
      />

      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-3xl mx-auto">
          <SectionHeader headline="Our Culture" eyebrow="How We Work" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 space-y-5 text-text-muted/80 leading-relaxed"
          >
            {[
              "We are a remote-first engineering firm. We value discipline over meetings. Code over PowerPoint. Outcomes over hours.",
              "Every engineer at Centrosof owns their work — from architecture to deployment to maintenance. We do not have layers of project managers between you and the client. You talk to the client. You solve the problem. You ship the code.",
              "If you are tired of writing CRUD apps for agencies that do not respect engineering, talk to us.",
            ].map((p, i) => (
              <motion.p key={i} variants={fadeUp}>{p}</motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-4xl mx-auto">
          <SectionHeader headline="Open Positions" eyebrow="Join the Team" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-14 space-y-8"
          >
            {positions.map((pos) => (
              <motion.div
                key={pos.title}
                variants={fadeUp}
                className="p-8 rounded-2xl border border-border/50 bg-surface-2/60 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.04)] transition-all duration-300"
              >
                <h3 className="text-2xl font-bold font-heading text-text">{pos.title}</h3>
                <p className="mt-3 text-text-muted/80 leading-relaxed">{pos.description}</p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-semibold text-text uppercase tracking-widest mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {pos.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-muted/70">
                          <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary/50 mt-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-text uppercase tracking-widest mb-3">Preferred</h4>
                    <ul className="space-y-2">
                      {pos.preferred.map((pref, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-muted/70">
                          <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-accent/50 mt-2" />
                          {pref}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border/40">
                  <p className="text-sm text-text-dim">
                    Apply:{' '}
                    <a href="mailto:hello.centrosof@gmail.com" className="text-primary hover:text-primary-hover transition-colors">
                      hello.centrosof@gmail.com
                    </a>
                    {' '}— Send your GitHub profile and resume.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-3xl mx-auto">
          <SectionHeader headline="Our Hiring Process" eyebrow="What to Expect" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 space-y-6"
          >
            {hiringSteps.map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="flex items-start gap-6 p-5 rounded-xl border border-border/40 hover:border-primary/20 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold font-heading text-sm">
                  {item.step}
                </div>
                <div className="pt-1">
                  <p className="text-text font-medium">{item.title}</p>
                  {item.desc && <p className="text-sm text-text-muted/70 mt-1">{item.desc}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-sm text-text-dim text-center"
          >
            No whiteboard coding. No trick questions. We build together.
          </motion.p>
        </div>
      </section>

      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <SectionHeader headline="Don't See a Role That Fits?" eyebrow="Still Interested?" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-text-muted/80"
          >
            We are always looking for exceptional engineers. Send us your GitHub profile, a brief note about what you build, and what you want to build next.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8"
          >
            <a
              href="mailto:hello.centrosof@gmail.com"
              className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-medium transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_32px_rgba(99,102,241,0.25)]"
            >
              Send Your Profile
              <svg aria-hidden="true" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
