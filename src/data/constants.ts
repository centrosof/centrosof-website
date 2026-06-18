export const gradientMap = {
  l: "bg-gradient-to-r from-surface via-surface/90 via-60% to-transparent",
  r: "bg-gradient-to-l from-surface via-surface/90 via-60% to-transparent",
  tl: "bg-gradient-to-br from-surface via-surface/90 via-50% to-transparent",
  br: "bg-gradient-to-tl from-surface via-surface/90 via-50% to-transparent",
  t: "bg-gradient-to-b from-surface via-surface/90 via-50% to-transparent",
  b: "bg-gradient-to-t from-surface via-surface/90 via-50% to-transparent",
  d: "bg-surface",
} as const

export type GradientDir = keyof typeof gradientMap

export const caseImages: Record<string, string> = {
  "legacy-banking-migration": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80",
  "ecommerce-platform-scale": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
  "healthcare-data-pipeline": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
  "fintech-api-gateway": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80",
}

export const caseHeroImages: Record<string, string> = {
  "legacy-banking-migration": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=85",
  "ecommerce-platform-scale": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=85",
  "healthcare-data-pipeline": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=85",
  "fintech-api-gateway": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=85",
}

export const statsData = [
  { value: 12, suffix: "+", label: "Years of Engineering Excellence" },
  { value: 200, suffix: "+", label: "Production Systems Deployed" },
  { value: 50, suffix: "M+", label: "Users Supported" },
  { value: 99.99, suffix: "%", label: "Uptime Guaranteed", decimals: 2 },
]

export const aboutStatsData = [
  { value: 12, suffix: "+", label: "Years Engineering" },
  { value: 200, suffix: "+", label: "Systems Deployed" },
  { value: 50, suffix: "M+", label: "Users Supported" },
  { value: 99.99, suffix: "%", label: "Uptime Avg", decimals: 2 },
]
