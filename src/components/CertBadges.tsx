export default function CertBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-5 ${className}`}>
      {[
        { label: "SOC 2", desc: "Type II" },
        { label: "ISO 27001", desc: "Certified" },
        { label: "HIPAA", desc: "Compliant" },
        { label: "GDPR", desc: "Compliant" },
      ].map((cert) => (
        <div
          key={cert.label}
          className="flex items-center gap-2.5 px-3.5 py-2 rounded-lg border border-border/40 bg-surface-2/40"
        >
          <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 shrink-0">
            <rect x="1" y="1" width="18" height="18" rx="4" stroke="#ca8a04" strokeWidth="1" opacity="0.5" />
            <path d="M6 10 L9 13 L14 7" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
          </svg>
          <div>
            <p className="text-xs font-semibold text-text tracking-wide">{cert.label}</p>
            <p className="text-[10px] text-text-dim/60 font-mono">{cert.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
