export interface Insight {
  id: string
  title: string
  excerpt: string
  body: string
  readTime: string
  category: string
  slug: string
}

export const insights: Insight[] = [
  {
    id: "the-fracture-pattern",
    title: "The Fracture Pattern: How We Diagnose Broken Systems",
    excerpt: "Every legacy system has a fracture pattern — a root cause that manifests as slow performance, security gaps, or deployment failures. We map the pattern before we write a single line of replacement code.",
    body: `Every legacy system tells a story. The question is whether you are reading the right signals.

When we arrive at a client engagement, the symptoms are always the same: slow performance, frequent outages, security vulnerabilities, deployment failures. But these are not the problem. They are manifestations of a deeper issue — what we call the fracture pattern.

Just like a metal beam under stress, a software system develops fractures along predictable lines. These fractures start small — a slow query here, a memory leak there — but over time they propagate until the entire structure is compromised.

## Mapping the Pattern

Our diagnostic process begins before we write a single line of replacement code. We spend the first week of every engagement doing nothing but reading logs, analyzing traffic patterns, and understanding failure modes.

We look for:

Database contention: Which queries are fighting for the same resources? Where are the lock conflicts? What is the read-to-write ratio at peak load?

Logical decay: Where has the business logic rotted? Which code paths are untested? Where are the dead code paths that nobody understands?

Architectural debt: Where was the architecture stretched beyond its original design? Which components were never built to handle their current load?

Security gaps: Where are the unencrypted data paths? Which endpoints lack authentication? Where are the injection vulnerabilities?

## Why Diagnosis Matters

Most consulting firms skip the diagnostic phase. They want to start coding immediately because that is what they bill for. But coding without diagnosis is like performing surgery without knowing where the fracture is.

When we map the fracture pattern, we know exactly what to replace and what to keep. We know which systems need a complete rebuild and which just need targeted intervention. And most importantly, we know what will break if we change something.

This is not theory. This is how we have delivered every successful modernization project — from banking systems to healthcare pipelines to e-commerce platforms.

The fracture pattern is always there. You just need to know where to look.`,
    readTime: "8 min read",
    category: "Engineering Philosophy",
    slug: "the-fracture-pattern",
  },
  {
    id: "zero-downtime-migration",
    title: "Zero-Downtime Migration: A Technical Playbook",
    excerpt: "Migrating a 15-year-old monolithic system without a single outage is not magic. It is careful planning, phased deployment, and rigorous testing.",
    body: `Zero-downtime migration sounds impossible to most engineering teams. How do you replace an entire system while it is running in production? The answer is not a single technique but a combination of patterns applied in the right order.

## The Parallel Run Pattern

Every zero-downtime migration relies on one fundamental concept: the new system runs in parallel with the old system until we are confident it works.

This means deploying the new architecture alongside the existing one, routing traffic between them gradually, and maintaining data consistency across both systems until the migration is complete.

## Phase 1: Data Synchronization

Before we route any traffic to the new system, we ensure data consistency. This means:
- Establishing real-time replication between old and new databases
- Running reconciliation jobs to verify data integrity
- Building rollback mechanisms at every step

## Phase 2: Traffic Ramping

We never flip a switch. Instead, we ramp traffic in controlled increments:
- Start with 1% of traffic to the new system
- Monitor for errors, latency, and data consistency
- Increase to 5%, 10%, 25%, 50%, 75%, 100%
- Each step requires explicit sign-off

## Phase 3: The Observation Period

After 100% traffic is on the new system, we do not decommission the old one immediately. We run both systems in parallel for a minimum of two weeks, monitoring for edge cases that only appear under sustained load.

## Phase 4: Decommissioning

Only after the observation period do we shut down the legacy system. Even then, we keep the old data accessible for six months in case of unforeseen requirements.

Zero-downtime migration is not magic. It is discipline. And it is the only way to replace a system that cannot afford to stop.`,
    readTime: "12 min read",
    category: "Infrastructure Engineering",
    slug: "zero-downtime-migration",
  },
  {
    id: "why-ai-projects-fail",
    title: "Why Most AI Projects Fail in Production",
    excerpt: "AI fails in production because it is treated as research. The model works in the lab. The pipeline works in staging. But production is different.",
    body: `Every week, we talk to companies that have invested millions in AI projects that never made it to production. The pattern is always the same: a data science team builds a model that achieves impressive accuracy in the lab, but when it hits production, everything falls apart.

## The Three Failure Modes

Data drift: The model was trained on historical data, but production data looks different. Customer behavior changes. Market conditions shift. The model degrades silently.

Pipeline fragility: The model works in a Jupyter notebook with clean, curated data. But production data is messy, incomplete, and arrives on unpredictable schedules.

Latency requirements: The model takes 2 seconds to run inference in the lab, but production requires sub-100ms response times. Suddenly the model is useless.

## How We Bridge the Gap

We treat AI as an engineering problem, not a research problem. This means:

Building production pipelines first. Before we tune a single hyperparameter, we design the data pipeline, the inference infrastructure, and the monitoring system.

Testing at production scale. We do not validate models on curated datasets. We test them against real production traffic patterns.

Building for observability. Every model we deploy has built-in monitoring for data drift, performance degradation, and failure modes. When something changes, we know immediately.

AI is not magic. It is engineering. And when you treat it that way, it works in production.`,
    readTime: "10 min read",
    category: "AI & Machine Learning",
    slug: "why-ai-projects-fail",
  },
  {
    id: "security-is-not-addon",
    title: "Security Is Not an Add-On",
    excerpt: "Security breaches happen when security is bolted on after the system is built. We engineer security into every layer — from database to API to audit logging.",
    body: `Most security breaches follow the same pattern: a company builds a product, launches it, grows quickly, and then realizes they need to "add security." But security that is added later is security that was designed as an afterthought. And afterthoughts have gaps.

## The Add-On Problem

When security is added to an existing system:
- It conflicts with the existing architecture
- It creates friction for users and developers
- It misses edge cases that were not considered in the original design
- It is often disabled or bypassed because it slows things down

## Security by Design

We engineer security into every layer of the stack from day one:

Database layer: Encryption at rest. Row-level security. Encrypted backups. No plaintext secrets anywhere.

Application layer: Authentication and authorization on every endpoint. Input validation. Rate limiting. SQL injection prevention.

Network layer: Zero-trust architecture. All traffic encrypted in transit. Network segmentation. No open ports without justification.

Observability layer: Comprehensive audit logging. Anomaly detection. Automated incident response.

Compliance layer: SOC2, HIPAA, and GDPR requirements are built into the architecture, not bolted on after an audit.

## The Result

When security is the foundation instead of an add-on, systems are not just more secure. They are easier to audit, easier to maintain, and easier to scale. Compliance becomes a side effect of good engineering, not a separate project.

Security is not an add-on. It is engineering discipline.`,
    readTime: "6 min read",
    category: "Security & Compliance",
    slug: "security-is-not-addon",
  },
  {
    id: "cost-of-technical-debt",
    title: "The Cost of Technical Debt: A $2.4M Case Study",
    excerpt: "A banking client was spending $2.4M annually maintaining a legacy system that was slowing them down. We replaced it. The math changed completely.",
    body: `Technical debt is one of those terms that everyone uses but few people quantify. When we talk to clients about replacing their legacy systems, we do not use metaphors. We use spreadsheets.

## The $2.4M Problem

A regional bank came to us with a 12-year-old monolithic banking system. The system was written in Classic ASP. The original team had left. No one fully understood the codebase.

The bank was spending $2.4M per year on:
- Emergency maintenance: Six-figure invoices every quarter to patch critical vulnerabilities
- Lost productivity: Engineers spending 80% of their time keeping the old system alive instead of building new features
- Opportunity cost: Three-week deployment cycles meant features took months to ship
- Security risk: SQL injection vulnerabilities that could not be fully patched without a rewrite

## The Investment

Centrosof proposed a complete rewrite with zero-downtime migration. The cost was significant. But when we ran the numbers, the payback period was 11 months.

## The Return

After 8 weeks of engineering and a phased migration, the new system was live. The results:
- $2.4M annual maintenance cost eliminated
- Development velocity increased by 7x
- Deployment time reduced from 3 weeks to 45 minutes
- Security audit passed with zero critical findings
- Uptime improved from 95% to 99.99%

## The Lesson

Technical debt has a cost. Sometimes that cost is invisible — lost opportunities, frustrated engineers, slow feature delivery. But when you add it up, the cost of keeping a legacy system is almost always higher than the cost of replacing it.

The question is not whether you can afford to replace your legacy system. The question is whether you can afford not to.`,
    readTime: "9 min read",
    category: "Legacy Modernization",
    slug: "cost-of-technical-debt",
  },
]
