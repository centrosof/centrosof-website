import { motion } from "framer-motion"
import PageHero from "../components/PageHero"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Legal() {
  return (
    <>
      <PageHero
        headline="Legal"
        subheadline="Privacy Policy, Terms of Service, and Cookie Policy"
        description="Transparency is part of our engineering discipline. Here is how we handle your data, terms of engagement, and our legal framework."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85"
        gradient="r"
        compact
      />

      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-3xl mx-auto space-y-24">
          {[
            {
              title: "Privacy Policy",
              date: "June 2026",
              sections: [
                {
                  heading: "Information We Collect",
                  items: [
                    "Contact information (name, email, company name) when you submit forms",
                    "Technical information (IP address, browser type, device) via cookies and analytics",
                    "Communication history when you email or contact us",
                  ],
                },
                {
                  heading: "How We Use Your Information",
                  items: [
                    "To respond to your inquiries and provide services",
                    "To improve our website and services",
                    "To send occasional updates (only with your consent)",
                  ],
                },
                {
                  heading: "Data Protection",
                  items: [
                    "We do not sell your data to third parties",
                    "We use industry-standard encryption for data transmission",
                    "We retain data only as long as necessary to serve you",
                  ],
                },
                {
                  heading: "Your Rights",
                  items: [
                    "You may request deletion of your data at any time",
                    "You may opt out of marketing communications",
                    "You may request a copy of your data",
                  ],
                },
              ],
              contact: "hello.centrosof@gmail.com",
            },
            {
              title: "Terms of Service",
              date: "June 2026",
              sections: [
                {
                  heading: "Services",
                  items: [
                    "Centrosof provides software engineering services as described on our website",
                    "All work is governed by a separate Master Services Agreement (MSA) and Statement of Work (SOW)",
                    "Estimates and proposals are non-binding until a contract is executed",
                  ],
                },
                {
                  heading: "Intellectual Property",
                  items: [
                    "Code, systems, and deliverables are owned by Centrosof until full payment is received",
                    "Upon payment, source code and system ownership transfers to the client",
                    "Centrosof retains the right to use anonymized case studies for marketing purposes",
                  ],
                },
                {
                  heading: "Confidentiality",
                  items: [
                    "Both parties agree to protect confidential information shared during engagement",
                    "Client data and proprietary business logic are never shared or reused",
                  ],
                },
                {
                  heading: "Limitation of Liability",
                  items: [
                    'Centrosof provides services "as is" with a warranty of professional diligence',
                    "Liability is limited to the total value of the engagement",
                    "We are not liable for indirect or consequential losses beyond our control",
                  ],
                },
                {
                  heading: "Governing Law",
                  items: ["These terms are governed by the laws of the United Kingdom"],
                },
              ],
              contact: "hello.centrosof@gmail.com",
            },
            {
              title: "Cookie Policy",
              date: "June 2026",
              sections: [
                {
                  heading: "What Are Cookies?",
                  items: ["Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and track usage patterns."],
                },
                {
                  heading: "Cookies We Use",
                  items: [
                    "Essential: Required for site functionality (login, forms, security)",
                    "Analytics: Used to understand how visitors use our site",
                    "Preference: Remember your settings and language choices",
                  ],
                },
                {
                  heading: "Third-Party Cookies",
                  items: [
                    "We use minimal third-party cookies for analytics",
                    "We do not use advertising or tracking cookies",
                  ],
                },
                {
                  heading: "Your Choices",
                  items: [
                    "You may disable cookies in your browser settings",
                    "Disabling cookies may affect some site functionality",
                  ],
                },
              ],
              contact: "hello.centrosof@gmail.com",
            },
          ].map((section, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
              }}
            >
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold font-heading text-text">
                {section.title}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-2 text-sm text-text-dim font-mono">
                Effective Date: {section.date}
              </motion.p>
              <motion.p variants={fadeUp} className="mt-2 text-sm text-text-muted/60">
                At Centrosof, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.
              </motion.p>
              <div className="mt-8 space-y-8">
                {section.sections.map((sub, i) => (
                  <motion.div key={i} variants={fadeUp}>
                    <h3 className="text-sm font-semibold text-text uppercase tracking-widest mb-3">
                      {sub.heading}
                    </h3>
                    <ul className="space-y-2">
                      {sub.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-text-muted/70">
                          <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary/40 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
              <motion.p variants={fadeUp} className="mt-6 text-sm text-text-muted/60">
                For questions, contact{' '}
                <a href={`mailto:${section.contact}`} className="text-primary hover:text-primary-hover transition-colors">
                  {section.contact}
                </a>
                .
              </motion.p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
