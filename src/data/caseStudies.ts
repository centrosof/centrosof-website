export interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
}

export interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  duration: string
  problem: string
  solution: string
  outcome: string
  metrics: string[]
  testimonial?: Testimonial
  slug: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: "legacy-banking-migration",
    title: "Legacy Banking Migration",
    client: "Meridian Banking Group",
    industry: "Financial Services",
    duration: "8 Weeks",
    problem: `A 12-year-old monolithic banking system was failing every quarter. Transaction delays. Security vulnerabilities. Deployment cycles taking three weeks.

The codebase was written in Classic ASP. The original team had left. No one fully understood the system. Every deployment introduced new bugs. The bank's CTO described it as "a house of cards that we are terrified to touch."

Key issues:
- 95% uptime (below industry standard)
- 3-week deployment cycles
- SQL injection vulnerabilities
- No test coverage
- Single point of failure architecture
- $2.4M annual maintenance cost

Three previous consulting firms had tried to fix it. All three failed.`,
    solution: `Centrosof engineered a complete rewrite in 8 weeks with zero downtime migration.

Phase 1: Diagnosis (Week 1)
- Mapped the fracture pattern: database contention, business logic sprawl, and security gaps
- Documented all API contracts and data flows
- Identified migration risk areas

Phase 2: Architecture Design (Week 2)
- Designed a modern microservices architecture
- Selected Node.js and Go for backend services
- Chose PostgreSQL with read replicas for the database layer
- Designed Kubernetes-based deployment with auto-scaling

Phase 3: Parallel Build (Weeks 3-6)
- Built the new system from scratch
- Implemented 100% test coverage
- Deployed in parallel alongside the legacy system
- Ran reconciliation between old and new systems

Phase 4: Zero-Downtime Migration (Weeks 7-8)
- Migrated data incrementally with validation
- Started with 10% of traffic, increased to 100%
- Monitored for errors and performance degradation
- Decommissioned the legacy system`,
    outcome: `The bank's infrastructure was completely modernized. What was a fragile, unmaintainable monolith became a scalable, secure, and auditable system. Development velocity increased by 7x. The bank's CTO described it as the single best investment the bank had made in a decade.`,
    metrics: [
      "99.99% uptime for 14 consecutive months",
      "Deployment time reduced from 3 weeks to 45 minutes",
      "Security audit passed with zero critical findings",
      "$2.4M annual maintenance cost eliminated",
      "Development velocity increased by 7x",
    ],
    testimonial: {
      quote: "Centrosof did what three other firms said was impossible. They rebuilt our entire core banking system without a single outage. That is not consulting. That is engineering.",
      author: "James Mitchell",
      title: "CTO",
      company: "Meridian Banking Group",
    },
    slug: "legacy-banking-migration",
  },
  {
    id: "ecommerce-platform-scale",
    title: "E-Commerce Platform at Scale",
    client: "Voxa Retail Group",
    industry: "E-Commerce / Retail",
    duration: "12 Weeks",
    problem: `Black Friday traffic would cripple the system every year. Database contention. Slow API responses. Checkout failures during peak load. The existing architecture could not handle 10x traffic spikes.

The platform was built by a previous agency on a monolithic Ruby on Rails stack. Every holiday season, the engineering team would work 80-hour weeks just to keep the site alive. The CEO described Black Friday as "the most profitable and most terrifying day of the year."

Key issues:
- 12-second page load times during peak
- 8% cart abandonment due to checkout failures
- Database bottlenecks on every major endpoint
- No horizontal scaling capability
- Cache invalidation problems weekly`,
    solution: `Centrosof redesigned the entire backend architecture. We replaced the monolithic Rails application with a distributed, event-driven system built for elastic scale.

The new architecture included:
- Distributed PostgreSQL clusters with read replicas
- Redis caching layer reducing database queries by 80%
- Event-driven inventory management via Kafka
- Auto-scaling Kubernetes deployment
- CDN integration for static and semi-static content

The migration was executed in phases over 12 weeks, with the new system handling increasing traffic percentages until the old system was fully retired — all before the next Black Friday cycle.`,
    outcome: `The platform handled peak traffic without a single incident. The CTO described the transformation as "the difference between a car with square wheels and a bullet train." Revenue increased directly due to improved conversion rates.

The new infrastructure costs were 30% lower than the previous hosting, despite handling 10x the traffic.`,
    metrics: [
      "Handled 12 million requests per hour during peak",
      "Zero checkout failures during Black Friday",
      "Page load times reduced from 4.2s to 340ms",
      "Revenue increased by 18% due to improved conversion",
      "Infrastructure costs reduced by 30%",
    ],
    testimonial: {
      quote: "Centrosof transformed our entire platform in 12 weeks — something our previous agency said would take two years. The system handled Black Friday without a single hiccup. That level of engineering is rare.",
      author: "Sarah Chen",
      title: "VP of Engineering",
      company: "Voxa Retail Group",
    },
    slug: "ecommerce-platform-scale",
  },
  {
    id: "healthcare-data-pipeline",
    title: "Healthcare Data Pipeline",
    client: "NovaMed Analytics",
    industry: "Healthcare",
    duration: "10 Weeks",
    problem: `The firm processed sensitive patient data across multiple systems. Ingestion was slow. Compliance was fragile. Data quality issues plagued every report. The pipeline was held together with scripts and manual interventions.

The existing system processed healthcare data in batch jobs that ran overnight. If a job failed — which happened frequently — the entire pipeline had to be restarted. Data analysts spent 60% of their time cleaning data instead of analyzing it.

Key issues:
- 18-hour data processing cycles
- Frequent pipeline failures requiring manual restart
- No audit trail for compliance
- HIPAA compliance was fragile
- Data quality issues in every report`,
    solution: `Centrosof engineered a HIPAA-ready data pipeline from the ground up. Automated ingestion. Encrypted storage. Real-time validation. Every step was auditable and compliant.

We replaced the fragile batch processing system with:
- Event-driven architecture using Kafka for real-time data ingestion
- Automated validation and quality checks at every stage
- End-to-end encryption (at rest and in transit)
- Comprehensive audit logging for HIPAA compliance
- Self-healing pipeline with automatic retries and failure notifications

The new pipeline processed data in real-time instead of overnight batches. Data quality checks were automated, eliminating the manual cleanup work that had consumed so much of the analytics team's time.`,
    outcome: `The firm transformed its data operations. What used to take nearly a full day now completed in under an hour. Compliance audits that used to take weeks of preparation became straightforward — every data transformation was logged and auditable.

The improved data pipeline enabled the firm to scale from 5 clients to 47 clients within 6 months without adding headcount.`,
    metrics: [
      "Data processing time reduced from 18 hours to 45 minutes",
      "100% audit compliance (HIPAA)",
      "Scaled from 5 clients to 47 clients within 6 months",
      "Data analyst productivity increased by 4x",
      "Zero data quality issues post-migration",
    ],
    testimonial: {
      quote: "Centrosof didn't just build us a data pipeline — they built a foundation that allowed us to grow from 5 clients to 47 in six months. Our compliance audit went from a nightmare to a non-event.",
      author: "Dr. Priya Patel",
      title: "Director of Data Engineering",
      company: "NovaMed Analytics",
    },
    slug: "healthcare-data-pipeline",
  },
  {
    id: "fintech-api-gateway",
    title: "FinTech API Gateway",
    client: "PayBridge Technologies",
    industry: "Financial Technology",
    duration: "6 Weeks",
    problem: `The startup's API gateway was failing under load. Partners were complaining. Rate limiting was non-existent. The system was built by a previous agency and was already collapsing at 100 concurrent users.

The startup was preparing for a Series A raise, but their technical infrastructure was a liability. Partner integrations were breaking daily. The CTO was spending 80% of their time firefighting instead of building product.

Key issues:
- System collapsed at 100 concurrent users
- No rate limiting or authentication on API endpoints
- Partners experiencing daily downtime
- No monitoring or observability
- Manual deployment process with frequent errors`,
    solution: `Centrosof designed and deployed a high-throughput API gateway in 6 weeks. Rate limiting. Authentication. Observability. Deployed on Kubernetes with auto-scaling.

The new architecture included:
- API gateway with built-in rate limiting and authentication
- Kubernetes-based deployment with horizontal auto-scaling
- Comprehensive monitoring with Prometheus and Grafana
- Automated CI/CD pipeline with GitHub Actions
- Blue-green deployments for zero-downtime releases

The gateway was designed to handle 100x the current traffic, giving the startup room to grow without infrastructure changes. Partner onboarding was automated with self-service API keys and documentation.`,
    outcome: `The startup's infrastructure went from a liability to a competitive advantage. Partner integrations that used to take two weeks of back-and-forth became a two-hour self-service process.

Three months after the new gateway was deployed, the startup closed its Series A round. The investors cited the robust technical infrastructure as a key factor in their decision.`,
    metrics: [
      "Scaled to 10,000 concurrent users without degradation",
      "Partner onboarding reduced from 2 weeks to 2 hours",
      "Series A raised 3 months later",
      "Zero downtime since deployment",
      "API response times under 50ms at peak load",
    ],
    testimonial: {
      quote: "Centrosof's API gateway was the difference between us failing our Series A diligence and closing it. Investors specifically mentioned our infrastructure as a strength. Six weeks to go from collapsing to Series A ready.",
      author: "Marcus Adeyemi",
      title: "CTO",
      company: "PayBridge Technologies",
    },
    slug: "fintech-api-gateway",
  },
]
