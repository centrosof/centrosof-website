import { useState } from "react"
import { motion } from "framer-motion"
import PageHero from "../components/PageHero"
import { companyInfo } from "../data/navigation"

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

interface FieldProps {
  label: string
  name: string
  type?: string
  required?: boolean
  textarea?: boolean
}

function Field({ label, name, type = "text", required = false, textarea = false }: FieldProps) {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState("")
  const active = focused || value.length > 0

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          active
            ? "-top-2.5 text-[11px] bg-surface px-1.5 text-accent"
            : "top-3.5 text-sm text-text-dim"
        } ${textarea && active ? "-top-2.5" : ""}`}
      >
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={5}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full px-4 pt-3.5 pb-2.5 rounded-xl bg-surface-2/80 border border-border/60 text-text placeholder:text-transparent focus:outline-none focus:border-accent/50 focus:shadow-[0_0_20px_rgba(202,138,4,0.08)] transition-all duration-200 resize-none"
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full px-4 pt-3.5 pb-2.5 rounded-xl bg-surface-2/80 border border-border/60 text-text placeholder:text-transparent focus:outline-none focus:border-accent/50 focus:shadow-[0_0_20px_rgba(202,138,4,0.08)] transition-all duration-200"
        />
      )}
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero
        headline="Start a Conversation"
        subheadline="Tell Us What's Broken. We'll Tell You How to Fix It."
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=85"
        gradient="l"
      />

      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-2xl mx-auto">
          <motion.form
            action={`https://formsubmit.co/${companyInfo.email}`}
            method="POST"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
            className="space-y-6"
          >
            <input type="hidden" name="_subject" value="New inquiry from Centrosof website" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={`${typeof window !== "undefined" ? window.location.origin : "https://centrosof.com"}/thank-you`} />
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </motion.div>
            <motion.div variants={fadeUp}>
              <Field label="Company" name="company" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <Field label="What needs to be built or broken?" name="message" required textarea />
            </motion.div>
            <motion.div variants={fadeUp}>
              <button
                type="submit"
                className="group relative w-full bg-accent text-white px-8 py-3.5 rounded-xl font-medium shadow-lg shadow-accent/20 transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_32px_rgba(202,138,4,0.35)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <svg aria-hidden="true" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </motion.div>
            <motion.p variants={fadeUp} className="text-center text-xs text-text-dim/60">
              We respond within 24 hours. No automated replies. No sales scripts. Just engineering.
            </motion.p>
          </motion.form>
        </div>
      </section>

      <section className="relative py-20 px-6 overflow-hidden border-t border-border/30">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-text">Or Reach Us Directly</h2>
            <a
              href={`mailto:${companyInfo.email}`}
              className="inline-block mt-4 text-lg text-accent hover:text-accent-hover transition-colors font-medium"
            >
              {companyInfo.email}
            </a>
            <p className="mt-3 text-sm text-text-muted/70">
              Every email is read by an engineer. Not a receptionist. Not a bot. An engineer.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
