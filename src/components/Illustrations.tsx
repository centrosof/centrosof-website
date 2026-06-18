interface IllusProps {
  className?: string
}

export function HeroNetwork({ className }: IllusProps) {
  return (
    <svg viewBox="0 0 800 600" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="hn1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id="hn2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="hn3" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="400" cy="280" r="200" stroke="url(#hn1)" strokeWidth="0.5" opacity="0.2" />
      <circle cx="400" cy="280" r="140" stroke="url(#hn1)" strokeWidth="0.5" opacity="0.15" />
      <circle cx="400" cy="280" r="80" stroke="url(#hn1)" strokeWidth="0.5" opacity="0.1" />

      <circle cx="400" cy="280" r="240" fill="url(#hn3)" />

      <line x1="400" y1="80" x2="200" y2="280" stroke="url(#hn2)" strokeWidth="0.5" opacity="0.2" />
      <line x1="400" y1="80" x2="600" y2="280" stroke="url(#hn2)" strokeWidth="0.5" opacity="0.2" />
      <line x1="200" y1="280" x2="400" y2="480" stroke="url(#hn2)" strokeWidth="0.5" opacity="0.2" />
      <line x1="600" y1="280" x2="400" y2="480" stroke="url(#hn2)" strokeWidth="0.5" opacity="0.2" />
      <line x1="200" y1="280" x2="600" y2="280" stroke="url(#hn2)" strokeWidth="0.5" opacity="0.15" />
      <line x1="400" y1="80" x2="400" y2="480" stroke="url(#hn2)" strokeWidth="0.5" opacity="0.1" />

      <circle cx="400" cy="80" r="5" fill="#818cf8" opacity="0.5" />
      <circle cx="400" cy="80" r="10" fill="#818cf8" opacity="0.1" />

      <circle cx="200" cy="280" r="5" fill="#818cf8" opacity="0.5" />
      <circle cx="200" cy="280" r="10" fill="#818cf8" opacity="0.1" />

      <circle cx="600" cy="280" r="5" fill="#818cf8" opacity="0.5" />
      <circle cx="600" cy="280" r="10" fill="#818cf8" opacity="0.1" />

      <circle cx="400" cy="480" r="5" fill="#818cf8" opacity="0.5" />
      <circle cx="400" cy="480" r="10" fill="#818cf8" opacity="0.1" />

      <circle cx="400" cy="280" r="6" fill="#a78bfa" opacity="0.8" />
      <circle cx="400" cy="280" r="15" fill="#a78bfa" opacity="0.08" />

      <circle cx="550" cy="150" r="3" fill="#818cf8" opacity="0.35" />
      <circle cx="250" cy="150" r="3" fill="#818cf8" opacity="0.35" />
      <circle cx="150" cy="380" r="3" fill="#818cf8" opacity="0.35" />
      <circle cx="650" cy="380" r="3" fill="#818cf8" opacity="0.35" />
      <circle cx="300" cy="420" r="2.5" fill="#818cf8" opacity="0.25" />
      <circle cx="500" cy="420" r="2.5" fill="#818cf8" opacity="0.25" />
      <circle cx="320" cy="120" r="2.5" fill="#818cf8" opacity="0.25" />
      <circle cx="480" cy="120" r="2.5" fill="#818cf8" opacity="0.25" />
    </svg>
  )
}

export function ServiceInfra({ className }: IllusProps) {
  return (
    <svg viewBox="0 0 240 180" fill="none" className={className} aria-hidden="true">
      <rect x="30" y="15" width="180" height="35" rx="6" stroke="#6366f1" strokeWidth="1.5" opacity="0.3" fill="#6366f1" fillOpacity="0.03" />
      <rect x="42" y="25" width="48" height="15" rx="3" fill="#6366f1" opacity="0.2" />
      <rect x="98" y="25" width="48" height="15" rx="3" fill="#6366f1" opacity="0.13" />
      <rect x="154" y="25" width="36" height="15" rx="3" fill="#6366f1" opacity="0.08" />
      <line x1="120" y1="15" x2="120" y2="50" stroke="#6366f1" strokeWidth="0.5" opacity="0.1" />

      <rect x="20" y="70" width="200" height="35" rx="6" stroke="#818cf8" strokeWidth="1.5" opacity="0.25" fill="#818cf8" fillOpacity="0.03" />
      <rect x="32" y="80" width="72" height="15" rx="3" fill="#818cf8" opacity="0.17" />
      <rect x="112" y="80" width="72" height="15" rx="3" fill="#818cf8" opacity="0.1" />
      <line x1="120" y1="70" x2="120" y2="105" stroke="#818cf8" strokeWidth="0.5" opacity="0.1" />

      <rect x="40" y="125" width="160" height="35" rx="6" stroke="#a78bfa" strokeWidth="1.5" opacity="0.2" fill="#a78bfa" fillOpacity="0.03" />
      <rect x="52" y="135" width="96" height="15" rx="3" fill="#a78bfa" opacity="0.15" />
      <rect x="156" y="135" width="30" height="15" rx="3" fill="#a78bfa" opacity="0.08" />
      <line x1="120" y1="125" x2="120" y2="160" stroke="#a78bfa" strokeWidth="0.5" opacity="0.1" />

      <line x1="120" y1="50" x2="120" y2="70" stroke="#6366f1" strokeWidth="1" opacity="0.15" strokeDasharray="4 3" />
      <line x1="120" y1="105" x2="120" y2="125" stroke="#818cf8" strokeWidth="1" opacity="0.12" strokeDasharray="4 3" />

      <circle cx="120" cy="60" r="3" fill="#818cf8" opacity="0.3" />
      <circle cx="120" cy="115" r="3" fill="#a78bfa" opacity="0.25" />
    </svg>
  )
}

export function ServiceModernize({ className }: IllusProps) {
  return (
    <svg viewBox="0 0 240 180" fill="none" className={className} aria-hidden="true">
      <rect x="15" y="40" width="65" height="95" rx="6" stroke="#f59e0b" strokeWidth="1.5" opacity="0.4" fill="#f59e0b" fillOpacity="0.04" />
      <line x1="27" y1="58" x2="68" y2="58" stroke="#f59e0b" strokeWidth="1" opacity="0.3" />
      <line x1="27" y1="70" x2="60" y2="70" stroke="#f59e0b" strokeWidth="1" opacity="0.2" />
      <line x1="27" y1="82" x2="65" y2="82" stroke="#f59e0b" strokeWidth="1" opacity="0.15" />
      <line x1="27" y1="94" x2="55" y2="94" stroke="#f59e0b" strokeWidth="1" opacity="0.12" />
      <line x1="27" y1="106" x2="62" y2="106" stroke="#f59e0b" strokeWidth="1" opacity="0.1" />
      <line x1="27" y1="118" x2="50" y2="118" stroke="#f59e0b" strokeWidth="1" opacity="0.08" />

      <path d="M88 87 L98 75 L118 75 L128 87 L128 115 L88 115 Z" stroke="#6366f1" strokeWidth="1.5" opacity="0.4" fill="#6366f1" fillOpacity="0.04" />
      <line x1="98" y1="83" x2="118" y2="83" stroke="#6366f1" strokeWidth="1" opacity="0.25" />
      <line x1="98" y1="92" x2="125" y2="92" stroke="#6366f1" strokeWidth="1" opacity="0.18" />
      <line x1="98" y1="101" x2="115" y2="101" stroke="#6366f1" strokeWidth="1" opacity="0.12" />
      <circle cx="108" cy="83" r="4" fill="#818cf8" opacity="0.3" />

      <rect x="138" y="28" width="85" height="115" rx="6" stroke="#6366f1" strokeWidth="1.5" opacity="0.5" fill="#6366f1" fillOpacity="0.05" />
      <line x1="152" y1="46" x2="210" y2="46" stroke="#6366f1" strokeWidth="1" opacity="0.4" />
      <line x1="152" y1="58" x2="200" y2="58" stroke="#6366f1" strokeWidth="1" opacity="0.35" />
      <line x1="152" y1="70" x2="195" y2="70" stroke="#6366f1" strokeWidth="1" opacity="0.25" />
      <line x1="152" y1="82" x2="190" y2="82" stroke="#6366f1" strokeWidth="1" opacity="0.2" />
      <line x1="152" y1="94" x2="205" y2="94" stroke="#6366f1" strokeWidth="1" opacity="0.18" />
      <line x1="152" y1="106" x2="185" y2="106" stroke="#6366f1" strokeWidth="1" opacity="0.15" />
      <line x1="152" y1="118" x2="195" y2="118" stroke="#6366f1" strokeWidth="1" opacity="0.12" />
      <line x1="152" y1="130" x2="170" y2="130" stroke="#6366f1" strokeWidth="1" opacity="0.1" />

      <path d="M80 75 L95 62" stroke="#f59e0b" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      <path d="M80 105 L95 95" stroke="#f59e0b" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />

      <polygon points="95,60 100,65 95,70 90,65" fill="#f59e0b" opacity="0.4" />
      <polygon points="95,93 100,98 95,103 90,98" fill="#f59e0b" opacity="0.4" />

      <rect x="85" y="30" width="8" height="8" rx="2" fill="#f59e0b" opacity="0.15" />
      <rect x="85" y="40" width="8" height="8" rx="2" fill="#f59e0b" opacity="0.15" />
      <rect x="85" y="50" width="8" height="8" rx="2" fill="#f59e0b" opacity="0.15" />
    </svg>
  )
}

export function ServiceSecure({ className }: IllusProps) {
  return (
    <svg viewBox="0 0 240 180" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="sc1" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      <path
        d="M120 15 L208 55 L208 100 C208 140 168 165 120 175 C72 165 32 140 32 100 L32 55 Z"
        stroke="#6366f1"
        strokeWidth="1.5"
        opacity="0.35"
        fill="url(#sc1)"
      />
      <path
        d="M120 35 L185 62 L185 95 C185 122 156 140 120 148 C84 140 55 122 55 95 L55 62 Z"
        stroke="#818cf8"
        strokeWidth="1"
        opacity="0.2"
        fill="#818cf8"
        fillOpacity="0.03"
      />

      <circle cx="120" cy="92" r="22" stroke="#6366f1" strokeWidth="1.5" opacity="0.3" fill="#6366f1" fillOpacity="0.06" />
      <circle cx="120" cy="92" r="14" stroke="#818cf8" strokeWidth="0.8" opacity="0.2" fill="#818cf8" fillOpacity="0.04" />

      <path d="M110 92 L117 100 L131 84" stroke="#6366f1" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" strokeLinejoin="round" />

      <line x1="120" y1="15" x2="120" y2="30" stroke="#6366f1" strokeWidth="1" opacity="0.2" />
      <line x1="120" y1="15" x2="135" y2="20" stroke="#6366f1" strokeWidth="0.5" opacity="0.12" />
      <line x1="120" y1="15" x2="105" y2="20" stroke="#6366f1" strokeWidth="0.5" opacity="0.12" />

      <circle cx="120" cy="92" r="28" fill="#6366f1" opacity="0.04" />
    </svg>
  )
}

export function ServiceFullstack({ className }: IllusProps) {
  return (
    <svg viewBox="0 0 240 180" fill="none" className={className} aria-hidden="true">
      <rect x="65" y="10" width="110" height="28" rx="5" stroke="#6366f1" strokeWidth="1.5" opacity="0.35" fill="#6366f1" fillOpacity="0.04" />
      <rect x="72" y="16" width="16" height="16" rx="3" fill="#818cf8" opacity="0.3" />
      <rect x="93" y="16" width="16" height="16" rx="3" fill="#818cf8" opacity="0.2" />
      <rect x="114" y="16" width="16" height="16" rx="3" fill="#818cf8" opacity="0.15" />
      <rect x="135" y="16" width="16" height="16" rx="3" fill="#818cf8" opacity="0.1" />
      <rect x="156" y="16" width="12" height="16" rx="3" fill="#818cf8" opacity="0.07" />
      <text x="120" y="5" textAnchor="middle" fill="#818cf8" opacity="0.2" fontSize="6" fontFamily="monospace" fontWeight="600">UI</text>

      <rect x="40" y="48" width="160" height="28" rx="5" stroke="#818cf8" strokeWidth="1.5" opacity="0.3" fill="#818cf8" fillOpacity="0.04" />
      <rect x="48" y="54" width="28" height="16" rx="3" fill="#a78bfa" opacity="0.25" />
      <rect x="82" y="54" width="28" height="16" rx="3" fill="#a78bfa" opacity="0.18" />
      <rect x="116" y="54" width="28" height="16" rx="3" fill="#a78bfa" opacity="0.13" />
      <rect x="150" y="54" width="40" height="16" rx="3" fill="#a78bfa" opacity="0.08" />
      <text x="120" y="43" textAnchor="middle" fill="#a78bfa" opacity="0.2" fontSize="6" fontFamily="monospace" fontWeight="600">API</text>

      <rect x="25" y="86" width="190" height="28" rx="5" stroke="#a78bfa" strokeWidth="1.5" opacity="0.25" fill="#a78bfa" fillOpacity="0.03" />
      <rect x="34" y="92" width="50" height="16" rx="3" fill="#c4b5fd" opacity="0.2" />
      <rect x="90" y="92" width="60" height="16" rx="3" fill="#c4b5fd" opacity="0.14" />
      <rect x="156" y="92" width="48" height="16" rx="3" fill="#c4b5fd" opacity="0.08" />
      <text x="120" y="81" textAnchor="middle" fill="#c4b5fd" opacity="0.2" fontSize="6" fontFamily="monospace" fontWeight="600">SERVICES</text>

      <rect x="15" y="124" width="210" height="28" rx="5" stroke="#c4b5fd" strokeWidth="1.5" opacity="0.2" fill="#c4b5fd" fillOpacity="0.03" />
      <rect x="24" y="130" width="80" height="16" rx="3" fill="#ddd6fe" opacity="0.15" />
      <rect x="110" y="130" width="80" height="16" rx="3" fill="#ddd6fe" opacity="0.1" />
      <rect x="196" y="130" width="18" height="16" rx="3" fill="#ddd6fe" opacity="0.06" />
      <text x="120" y="119" textAnchor="middle" fill="#ddd6fe" opacity="0.2" fontSize="6" fontFamily="monospace" fontWeight="600">DATABASE</text>

      <rect x="20" y="162" width="200" height="10" rx="3" stroke="#6366f1" strokeWidth="0.5" opacity="0.08" fill="#6366f1" fillOpacity="0.02" />
    </svg>
  )
}

export function ServiceAI({ className }: IllusProps) {
  return (
    <svg viewBox="0 0 240 180" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="ai1" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="75" cy="55" r="28" fill="url(#ai1)" />
      <circle cx="165" cy="55" r="28" fill="url(#ai1)" />
      <circle cx="120" cy="130" r="28" fill="url(#ai1)" />

      <circle cx="75" cy="55" r="16" stroke="#6366f1" strokeWidth="1.5" opacity="0.35" fill="#6366f1" fillOpacity="0.04" />
      <circle cx="165" cy="55" r="16" stroke="#6366f1" strokeWidth="1.5" opacity="0.35" fill="#6366f1" fillOpacity="0.04" />
      <circle cx="120" cy="130" r="16" stroke="#6366f1" strokeWidth="1.5" opacity="0.35" fill="#6366f1" fillOpacity="0.04" />

      <circle cx="75" cy="55" r="6" fill="#818cf8" opacity="0.5" />
      <circle cx="165" cy="55" r="6" fill="#818cf8" opacity="0.5" />
      <circle cx="120" cy="130" r="6" fill="#818cf8" opacity="0.5" />

      <line x1="91" y1="63" x2="149" y2="63" stroke="#6366f1" strokeWidth="1" opacity="0.25" strokeDasharray="4 4" />
      <line x1="82" y1="68" x2="113" y2="115" stroke="#6366f1" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
      <line x1="158" y1="68" x2="127" y2="115" stroke="#6366f1" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />

      <line x1="75" y1="39" x2="75" y2="25" stroke="#6366f1" strokeWidth="0.8" opacity="0.15" />
      <line x1="75" y1="71" x2="75" y2="85" stroke="#6366f1" strokeWidth="0.8" opacity="0.15" />
      <line x1="165" y1="39" x2="165" y2="25" stroke="#6366f1" strokeWidth="0.8" opacity="0.15" />
      <line x1="165" y1="71" x2="165" y2="85" stroke="#6366f1" strokeWidth="0.8" opacity="0.15" />
      <line x1="120" y1="114" x2="120" y2="100" stroke="#6366f1" strokeWidth="0.8" opacity="0.15" />
      <line x1="120" y1="146" x2="120" y2="160" stroke="#6366f1" strokeWidth="0.8" opacity="0.15" />

      <circle cx="75" cy="20" r="3" fill="#a78bfa" opacity="0.3" />
      <circle cx="75" cy="90" r="3" fill="#a78bfa" opacity="0.3" />
      <circle cx="165" cy="20" r="3" fill="#a78bfa" opacity="0.3" />
      <circle cx="165" cy="90" r="3" fill="#a78bfa" opacity="0.3" />
      <circle cx="120" cy="95" r="3" fill="#a78bfa" opacity="0.3" />
      <circle cx="120" cy="165" r="3" fill="#a78bfa" opacity="0.3" />

      <circle cx="40" cy="55" r="3" fill="#a78bfa" opacity="0.2" />
      <circle cx="200" cy="55" r="3" fill="#a78bfa" opacity="0.2" />
      <circle cx="95" cy="148" r="3" fill="#a78bfa" opacity="0.2" />
      <circle cx="145" cy="148" r="3" fill="#a78bfa" opacity="0.2" />

      <line x1="43" y1="55" x2="59" y2="55" stroke="#a78bfa" strokeWidth="0.5" opacity="0.15" />
      <line x1="181" y1="55" x2="197" y2="55" stroke="#a78bfa" strokeWidth="0.5" opacity="0.15" />
      <line x1="104" y1="142" x2="95" y2="148" stroke="#a78bfa" strokeWidth="0.5" opacity="0.15" />
      <line x1="136" y1="142" x2="145" y2="148" stroke="#a78bfa" strokeWidth="0.5" opacity="0.15" />

      <line x1="80" y1="75" x2="75" y2="90" stroke="#a78bfa" strokeWidth="0.5" opacity="0.1" />
      <line x1="160" y1="75" x2="165" y2="90" stroke="#a78bfa" strokeWidth="0.5" opacity="0.1" />
    </svg>
  )
}

export function CaseStudyImage({ index, className }: IllusProps & { index: number }) {
  const icons = [
    <svg key="bank" viewBox="0 0 180 120" fill="none" aria-hidden="true" className="w-full h-full">
      <rect x="20" y="50" width="140" height="55" rx="4" stroke="#6366f1" strokeWidth="1" opacity="0.35" fill="#6366f1" fillOpacity="0.03" />
      <rect x="30" y="58" width="22" height="40" rx="2" fill="#818cf8" opacity="0.2" />
      <rect x="58" y="58" width="22" height="40" rx="2" fill="#818cf8" opacity="0.15" />
      <rect x="86" y="58" width="22" height="40" rx="2" fill="#818cf8" opacity="0.12" />
      <rect x="114" y="58" width="22" height="40" rx="2" fill="#818cf8" opacity="0.08" />
      <rect x="55" y="15" width="70" height="35" rx="4" stroke="#f59e0b" strokeWidth="1" opacity="0.35" fill="#f59e0b" fillOpacity="0.03" />
      <polygon points="65,25 80,35 95,25" fill="#f59e0b" opacity="0.25" />
      <line x1="80" y1="15" x2="80" y2="25" stroke="#f59e0b" strokeWidth="0.5" opacity="0.3" />
      <line x1="30" y1="58" x2="30" y2="50" stroke="#6366f1" strokeWidth="0.5" opacity="0.15" />
      <line x1="150" y1="58" x2="150" y2="50" stroke="#6366f1" strokeWidth="0.5" opacity="0.15" />
      <text x="90" y="45" textAnchor="middle" fill="#f59e0b" opacity="0.15" fontSize="8" fontFamily="monospace">BANK</text>
    </svg>,
    <svg key="ecom" viewBox="0 0 180 120" fill="none" aria-hidden="true" className="w-full h-full">
      <rect x="18" y="15" width="38" height="50" rx="3" stroke="#6366f1" strokeWidth="1" opacity="0.35" fill="#6366f1" fillOpacity="0.03" />
      <rect x="64" y="15" width="38" height="50" rx="3" stroke="#818cf8" strokeWidth="1" opacity="0.3" fill="#818cf8" fillOpacity="0.03" />
      <rect x="110" y="15" width="38" height="50" rx="3" stroke="#a78bfa" strokeWidth="1" opacity="0.25" fill="#a78bfa" fillOpacity="0.03" />
      <rect x="24" y="22" width="26" height="12" rx="2" fill="#818cf8" opacity="0.2" />
      <rect x="70" y="22" width="26" height="12" rx="2" fill="#a78bfa" opacity="0.15" />
      <rect x="116" y="22" width="26" height="12" rx="2" fill="#c4b5fd" opacity="0.1" />
      <line x1="18" y1="44" x2="56" y2="44" stroke="#6366f1" strokeWidth="0.3" opacity="0.1" />
      <line x1="64" y1="44" x2="102" y2="44" stroke="#818cf8" strokeWidth="0.3" opacity="0.08" />
      <line x1="110" y1="44" x2="148" y2="44" stroke="#a78bfa" strokeWidth="0.3" opacity="0.06" />
      <path d="M10 85 L170 85" stroke="#6366f1" strokeWidth="0.5" opacity="0.12" />
      <path d="M10 92 L170 92" stroke="#6366f1" strokeWidth="0.5" opacity="0.08" />
      <path d="M10 99 L170 99" stroke="#6366f1" strokeWidth="0.5" opacity="0.06" />
      <circle cx="40" cy="105" r="4" stroke="#6366f1" strokeWidth="0.5" opacity="0.2" />
      <circle cx="90" cy="105" r="4" stroke="#6366f1" strokeWidth="0.5" opacity="0.2" />
      <circle cx="140" cy="105" r="4" stroke="#6366f1" strokeWidth="0.5" opacity="0.2" />
      <text x="90" y="78" textAnchor="middle" fill="#6366f1" opacity="0.12" fontSize="7" fontFamily="monospace">E-COMMERCE</text>
    </svg>,
    <svg key="health" viewBox="0 0 180 120" fill="none" aria-hidden="true" className="w-full h-full">
      <circle cx="90" cy="55" r="38" stroke="#6366f1" strokeWidth="1" opacity="0.25" fill="#6366f1" fillOpacity="0.03" />
      <circle cx="90" cy="55" r="28" stroke="#818cf8" strokeWidth="0.8" opacity="0.18" fill="#818cf8" fillOpacity="0.03" />
      <circle cx="90" cy="55" r="18" stroke="#a78bfa" strokeWidth="0.5" opacity="0.12" fill="#a78bfa" fillOpacity="0.03" />
      <line x1="90" y1="30" x2="90" y2="80" stroke="#6366f1" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
      <line x1="65" y1="55" x2="115" y2="55" stroke="#6366f1" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
      <rect x="30" y="98" width="120" height="14" rx="3" stroke="#f59e0b" strokeWidth="0.8" opacity="0.2" fill="#f59e0b" fillOpacity="0.03" />
      <rect x="35" y="101" width="30" height="8" rx="2" fill="#f59e0b" opacity="0.15" />
      <rect x="70" y="101" width="30" height="8" rx="2" fill="#f59e0b" opacity="0.1" />
      <rect x="105" y="101" width="30" height="8" rx="2" fill="#f59e0b" opacity="0.06" />
      <text x="90" y="18" textAnchor="middle" fill="#6366f1" opacity="0.12" fontSize="7" fontFamily="monospace">HEALTHCARE</text>
    </svg>,
    <svg key="fintech" viewBox="0 0 180 120" fill="none" aria-hidden="true" className="w-full h-full">
      <rect x="25" y="30" width="130" height="55" rx="4" stroke="#6366f1" strokeWidth="1" opacity="0.35" fill="#6366f1" fillOpacity="0.03" />
      <rect x="38" y="42" width="22" height="14" rx="2" fill="#818cf8" opacity="0.25" />
      <rect x="66" y="42" width="22" height="14" rx="2" fill="#818cf8" opacity="0.2" />
      <rect x="94" y="42" width="22" height="14" rx="2" fill="#818cf8" opacity="0.15" />
      <rect x="122" y="42" width="16" height="14" rx="2" fill="#818cf8" opacity="0.1" />
      <line x1="38" y1="65" x2="142" y2="65" stroke="#6366f1" strokeWidth="0.5" opacity="0.2" />
      <line x1="38" y1="73" x2="120" y2="73" stroke="#6366f1" strokeWidth="0.5" opacity="0.12" />
      <polygon points="75,10 82,18 89,10" fill="#f59e0b" opacity="0.3" />
      <polygon points="95,10 102,18 109,10" fill="#f59e0b" opacity="0.2" />
      <line x1="82" y1="18" x2="82" y2="30" stroke="#f59e0b" strokeWidth="0.5" opacity="0.2" />
      <line x1="102" y1="18" x2="102" y2="30" stroke="#f59e0b" strokeWidth="0.5" opacity="0.2" />
      <text x="90" y="102" textAnchor="middle" fill="#6366f1" opacity="0.12" fontSize="7" fontFamily="monospace">FINTECH</text>
    </svg>,
  ]

  return (
    <div className={`flex items-center justify-center ${className || ""}`}>
      {icons[index % icons.length]}
    </div>
  )
}

export function TeamAvatar({ initial, className }: IllusProps & { initial: string }) {
  return (
    <svg viewBox="0 0 72 72" fill="none" className={className} aria-hidden="true">
      <circle cx="36" cy="36" r="34" stroke="#6366f1" strokeWidth="1" opacity="0.3" fill="#6366f1" fillOpacity="0.04" />
      <circle cx="36" cy="26" r="12" fill="#818cf8" opacity="0.15" />
      <ellipse cx="36" cy="56" rx="20" ry="12" fill="#818cf8" opacity="0.1" />
      <circle cx="36" cy="26" r="12" stroke="#818cf8" strokeWidth="0.5" opacity="0.2" />
      <ellipse cx="36" cy="56" rx="20" ry="12" stroke="#818cf8" strokeWidth="0.5" opacity="0.12" />
      <text x="36" y="31" textAnchor="middle" fill="#818cf8" fontSize="22" fontWeight="700" fontFamily="Syne, system-ui, sans-serif" opacity="0.5">
        {initial}
      </text>
      <circle cx="36" cy="36" r="34" stroke="#818cf8" strokeWidth="0.3" opacity="0.1" strokeDasharray="3 3" />
    </svg>
  )
}

export const serviceIllustrations = [
  ServiceInfra,
  ServiceModernize,
  ServiceSecure,
  ServiceFullstack,
  ServiceAI,
]
