import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import PageHero from "../components/PageHero"
import SectionHeader from "../components/SectionHeader"
import SectionImage from "../components/SectionImage"
import AnimatedCounter from "../components/AnimatedCounter"
import { aboutStatsData } from "../data/constants"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const team = [
  { name: "dev_moe", role: "Founder & Lead Engineer", area: "Systems Architecture", cta: "Technical Inquiry" },
  { name: "Marcus R.", role: "Senior Backend Architect", area: "Distributed Systems", cta: "Architecture Consultation" },
  { name: "Dora V.", role: "DevOps & Infrastructure Lead", area: "Cloud & CI/CD", cta: "Infrastructure Audit" },
  { name: "Sofia L.", role: "Full-Stack Engineer", area: "Frontend & API Design", cta: "Project Proposal" },
]

export default function About() {
  return (
    <>
      <PageHero
        headline="About Centrosof"
        subheadline="Engineering Is Not a Service. It Is a Discipline."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85"
        gradient="l"
      />

      <SectionImage
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=85"
        gradient="d"
        className="py-24 px-6"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent/70 mb-4 block">Our Purpose</span>
            <p className="text-2xl md:text-3xl lg:text-4xl text-text font-heading font-bold leading-tight">
              We map the fracture pattern — logical decay, database contention, architectural debt —{" "}
              <span className="text-accent">then replace</span> with clean, secure, infinitely scalable systems.
            </p>
          </motion.div>
        </div>
      </SectionImage>

      <SectionImage
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=75"
        gradient="d"
        className="py-24 px-6"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-5xl mx-auto">
          <SectionHeader headline="Our Philosophy" eyebrow="Why We Exist" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { num: "01", title: "Engineer, Don't Decorate", desc: "We do not build shallow web layouts or chase design trends. We write backend logic, design database architectures, and deploy workflows that scale infinitely without collapsing." },
              { num: "02", title: "Absolute Code Discipline", desc: "Clean. Optimized. Secure. Audited. If a legacy system is slow, inefficient, or structurally flawed, we dismantle it and engineer a high-caliber replacement from ground zero." },
              { num: "03", title: "Stability at Scale", desc: "Every line of code we write serves one purpose: systems that don't break when traffic spikes. Not theory. Practice." },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="p-6 md:p-8 rounded-2xl border border-border/50 bg-surface-2/60 hover:border-accent/20 transition-all duration-300"
              >
                <span className="font-mono text-xs text-accent/60">{item.num}</span>
                <h3 className="text-lg font-bold font-heading text-text mt-2">{item.title}</h3>
                <p className="mt-3 text-sm text-text-muted/80 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionImage>

      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto">
          <SectionHeader headline="The Name" eyebrow="Etymology" />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl border border-primary/20 bg-primary-glow/30"
            >
              <div className="text-4xl font-bold font-heading text-primary mb-4">Centro</div>
              <p className="text-text-muted/80 leading-relaxed">
                The central nexus where all technical streams converge. Databases. Server logic. User interfaces. Every component connected through a single engineering axis.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl border border-accent/20 bg-accent-dim/20"
            >
              <div className="text-4xl font-bold font-heading text-accent mb-4">Sof</div>
              <p className="text-text-muted/80 leading-relaxed">
                A deliberate truncation of "software." A sharp break from agency clichés. We stripped away the trailing noise to focus on what matters: core engineering.
              </p>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 text-sm text-text-dim text-center max-w-lg mx-auto"
          >
            Centrosof is balanced, memorable, and clear across borders. A firm that has stripped away all unnecessary noise to focus on what works.
          </motion.p>
        </div>
      </section>

      <SectionImage
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=75"
        gradient="d"
        className="py-24 px-6"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-4xl mx-auto">
          <SectionHeader headline="The Engineering Team" eyebrow="Who We Are" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-6 text-text-muted/80 leading-relaxed text-center max-w-2xl mx-auto"
          >
            Founder-operated and engineering-led. We write the code we deploy. No middle layers. Every team member is a builder from high-compliance industries: finance, healthcare, logistics.
          </motion.p>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className="p-6 rounded-2xl border border-border/50 bg-surface-2/60 hover:border-accent/20 hover:bg-surface-3/40 transition-all duration-300 text-center group"
              >
                <div className="relative w-20 h-20 mx-auto rounded-2xl overflow-hidden border border-border/50">
                  <img
                    src={[
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
                      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
                    ][team.indexOf(member)]}
                    alt={`Photo of ${member.name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-medium text-text mt-4 group-hover:text-accent transition-colors">{member.name}</p>
                <p className="text-xs text-text-muted mt-1">{member.role}</p>
                <p className="text-xs text-text-dim mt-2 font-mono">{member.area}</p>
                <a
                  href={`mailto:hello.centrosof@gmail.com?subject=${encodeURIComponent(member.cta)}`}
                  className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  Book a Meeting →
                </a>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link to="/work-with-us" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors font-medium">
              Join the team →
            </Link>
          </motion.div>
        </div>
      </SectionImage>

      <SectionImage
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85"
        gradient="d"
        className="py-24 px-6"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-5xl mx-auto text-center">
          <SectionHeader headline="By the Numbers" eyebrow="Engineering Discipline" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {aboutStatsData.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="p-6 rounded-xl border border-border/50 bg-surface-2/50">
                <div className="text-3xl md:text-4xl font-bold font-heading text-accent">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} />
                </div>
                <div className="mt-2 text-xs text-text-muted/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionImage>

      <SectionImage
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=75"
        gradient="d"
        className="py-24 px-6"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-4xl mx-auto text-center">
          <SectionHeader headline="Global Presence" eyebrow="Where We Operate" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-8 text-text-muted/80 leading-relaxed max-w-2xl mx-auto"
          >
            <p>Headquartered in London. Operating across time zones. Serving clients across North America, Europe, and Asia-Pacific.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-12 flex justify-center"
          >
            <div className="flex items-end gap-6 md:gap-12">
              {[
                { city: "London", tz: "UTC+1", flag: "🇬🇧" },
                { city: "New York", tz: "UTC-4", flag: "🇺🇸" },
                { city: "Singapore", tz: "UTC+8", flag: "🇸🇬" },
              ].map((loc) => (
                <div key={loc.city} className="text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border border-border/50 bg-surface-2/60 mb-3">
                    <span className="text-xl md:text-2xl">{loc.flag}</span>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                  <p className="text-sm font-medium text-text">{loc.city}</p>
                  <p className="text-xs font-mono text-text-dim/60">{loc.tz}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-10 text-sm text-text-dim"
          >
            We work where our clients need us — on their schedule, in their compliance framework.
          </motion.p>
        </div>
      </SectionImage>
    </>
  )
}
