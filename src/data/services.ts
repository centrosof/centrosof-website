export interface Service {
  id: string
  title: string
  shortTitle: string
  shortDesc: string
  fullDesc: string
  details: string[]
  cta: string
  slug: string
}

export const services: Service[] = [
  {
    id: "infrastructure-engineering",
    title: "Infrastructure Engineering",
    shortTitle: "Infrastructure Engineering",
    shortDesc: "High-performance backend systems built for infinite scale. We design and deploy distributed architectures that handle millions of concurrent requests without breaking.",
    fullDesc: `High-performance backend systems built for infinite scale. We design and deploy distributed architectures that handle millions of concurrent requests without breaking.

Engineering infrastructure is not about choosing the latest framework. It is about understanding load patterns, failure modes, and recovery paths. Every system we build is stress-tested before it reaches production.

We do not believe in "serverless first" or "Kubernetes always." We choose the right architecture for the right problem. Then we execute with precision.`,
    details: [
      "Microservices and event-driven architectures",
      "High-throughput API gateways",
      "Distributed database clusters (PostgreSQL, MongoDB, DynamoDB)",
      "Message queues and stream processing (Kafka, RabbitMQ)",
      "Container orchestration (Kubernetes, ECS, Nomad)",
    ],
    cta: "Discuss Your Infrastructure Needs",
    slug: "infrastructure-engineering",
  },
  {
    id: "legacy-modernization",
    title: "Legacy Modernization",
    shortTitle: "Legacy Modernization",
    shortDesc: "We map the fracture pattern. Then we replace it entirely. No patches. No band-aids. Complete ground-up rebuilds with zero downtime migration.",
    fullDesc: `We map the fracture pattern. Then we replace it entirely. No patches. No band-aids. Complete ground-up rebuilds with zero downtime migration.

Legacy systems are not just slow. They are liabilities. Security vulnerabilities. Talent repellents. Every year you keep a legacy system running, you are paying more in maintenance than you would pay to replace it.

We do not believe in "modernizing incrementally." Incremental modernization often means carrying the same architectural mistakes forward. We start from zero. We rebuild with modern engineering. And we deliver a system that will last another decade.`,
    details: [
      "Monolithic architectures (15+ years old) replaced entirely",
      "Obsolete programming languages migrated (COBOL, Delphi, Classic ASP)",
      "Unmaintainable codebases rebuilt with full test coverage",
      "Databases modernized for scale",
      "Manual deployments automated with CI/CD",
    ],
    cta: "Start Your Modernization",
    slug: "legacy-modernization",
  },
  {
    id: "secure-architecture",
    title: "Secure Architecture & Compliance",
    shortTitle: "Secure Architecture",
    shortDesc: "Clean, audited, deployment-ready code with zero bloat. Security is not an afterthought — it is engineered into every layer of the stack.",
    fullDesc: `Clean, audited, deployment-ready code with zero bloat. Security is not an afterthought — it is engineered into every layer of the stack.

Security breaches happen when security is bolted on after the system is built. We engineer security into every layer — from database encryption to API authentication to audit logging.

Every system we deliver is designed to meet enterprise compliance requirements from day one. SOC2, HIPAA, GDPR — we build to the standard before it is required.`,
    details: [
      "Zero-trust network architectures",
      "Encrypted data pipelines (at rest and in transit)",
      "Role-based access control (RBAC) systems",
      "Audit logging and monitoring",
      "SOC2, HIPAA, and GDPR-ready systems",
    ],
    cta: "Build a Secure System",
    slug: "secure-architecture",
  },
  {
    id: "full-stack-product-engineering",
    title: "Full-Stack Product Engineering",
    shortTitle: "Full-Stack Engineering",
    shortDesc: "From frontend to backend to database to deployment. We build complete, production-ready products that ship on time and scale on demand.",
    fullDesc: `From frontend to backend to database to deployment. We build complete, production-ready products that ship on time and scale on demand.

Fragmented teams build fragmented products. We own the entire stack. One team. One codebase. One deployment pipeline.

We do not hand off designs to a separate backend team. We do not outsource infrastructure. Every engineer on our team understands the full stack and takes ownership of the entire product.`,
    details: [
      "React, Next.js, and modern frontends",
      "Node.js, Python, Go, and Rust backends",
      "GraphQL and REST APIs",
      "CI/CD pipelines (GitHub Actions, GitLab, Jenkins)",
      "Monitoring and observability (Prometheus, Grafana, Datadog)",
    ],
    cta: "Build Your Product",
    slug: "full-stack-product-engineering",
  },
  {
    id: "ai-digital-transformation",
    title: "AI & Digital Transformation",
    shortTitle: "AI & Transformation",
    shortDesc: "We engineer AI systems that actually work in production — not demos that die in a Jupyter notebook.",
    fullDesc: `We engineer AI systems that actually work in production — not demos that die in a Jupyter notebook.

AI is only useful when it is deployed. We take models from research to production — reliably, securely, and at scale.

Most AI projects fail because they are treated as research. The model works in the lab. The pipeline works in staging. But production is different. We bridge that gap with engineering discipline.`,
    details: [
      "Production ML pipelines",
      "RAG (Retrieval-Augmented Generation) systems",
      "Natural language processing integrations",
      "Computer vision and automation tools",
      "Predictive analytics and forecasting",
    ],
    cta: "Explore AI for Your Business",
    slug: "ai-digital-transformation",
  },
]

export const whatWeDontDo = [
  "Cosmetic fixes that hide the real problem",
  "Bloated dependencies that slow everything down",
  "Throwaway MVPs built on unstable foundations",
  "Legacy systems carried forward with duct tape",
  "Design-first agencies that cannot write backend code",
]
