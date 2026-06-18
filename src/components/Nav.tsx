import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { navLinks, companyInfo } from "../data/navigation"
import ThemeToggle from "./ThemeToggle"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/"
    return location.pathname.startsWith(path)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-2xl border-b border-border/50 shadow-[0_1px_0_0_rgba(99,102,241,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        <Link to="/" className="group">
          <span className="text-lg font-bold font-heading tracking-tight text-text group-hover:text-primary transition-colors duration-200">
            {companyInfo.name}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.path)
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                  active
                    ? "text-text bg-surface-3/80"
                    : "text-text-muted hover:text-text hover:bg-surface-3/40"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
                )}
              </Link>
            )
          })}
          <ThemeToggle />
          <div className="ml-3 pl-3 border-l border-border">
            <Link
              to="/contact"
              className="relative group/btn inline-flex items-center gap-2 bg-primary text-white text-sm px-5 py-2.5 rounded-lg font-medium overflow-hidden transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_24px_rgba(99,102,241,0.25)]"
            >
              <span className="relative z-10">Start a Project</span>
              <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-10 h-10 rounded-lg bg-surface-3/60 border border-border flex items-center justify-center text-text-muted hover:text-text transition-colors"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        role="navigation"
        aria-label="Mobile navigation"
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass mx-4 mb-4 rounded-xl p-4 space-y-1">
          {navLinks.map((link) => {
            const active = isActive(link.path)
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                  active ? "text-primary bg-primary-glow" : "text-text-muted hover:text-text hover:bg-surface-3/60"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="flex items-center gap-3 pt-3 mt-3 border-t border-border">
            <ThemeToggle />
            <Link
              to="/contact"
              className="flex-1 text-center bg-primary text-white text-sm px-5 py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
