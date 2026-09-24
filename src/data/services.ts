export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: "Monitor" | "Smartphone" | "Award" | "PenTool" | "Box" | "Share2";
  number?: string;
  tagline?: string;
  deliverables?: string[];
  features?: string[];
}

export const servicesData: Service[] = [
  {
    id: "full-stack-web",
    number: "01",
    title: "Full-Stack Web Development",
    description: "Building end-to-end, high-performance web applications from database architecture to interactive UI.",
    iconName: "Monitor",
    tagline: "Building scalable, production-ready web applications with modern tech stacks.",
    deliverables: [
      "Next.js App Router Architecture",
      "React & TypeScript Engineering",
      "Tailwind CSS & Framer Motion UI",
      "Server-Side Rendering (SSR & SSG)"
    ]
  },
  {
    id: "backend-api",
    number: "02",
    title: "Backend & API Architecture",
    description: "Designing robust, secure, and scalable REST and GraphQL APIs with microservices.",
    iconName: "Share2",
    tagline: "High-throughput server infrastructure built for speed, security, and reliability.",
    deliverables: [
      "Node.js & Express / NestJS Backends",
      "RESTful & GraphQL API Systems",
      "JWT & OAuth Authentication / RBAC",
      "WebSocket Real-Time Pipelines"
    ]
  },
  {
    id: "database-cloud",
    number: "03",
    title: "Database Design & Optimization",
    description: "Architecting relational and NoSQL databases with optimized indexing, caching, and migrations.",
    iconName: "Box",
    tagline: "High-concurrency data layers engineered for sub-millisecond query performance.",
    deliverables: [
      "PostgreSQL, MySQL & MongoDB",
      "Prisma & Drizzle ORM Setup",
      "Redis Caching & Queue Management",
      "Database Schema & Zero-Downtime Migrations"
    ]
  },
  {
    id: "saas-mvp",
    number: "04",
    title: "SaaS Product Engineering",
    description: "Translating ideas into revenue-generating SaaS MVPs with payment processing and user auth.",
    iconName: "Smartphone",
    tagline: "Rapidly taking software products from concept to market-ready reality.",
    deliverables: [
      "Stripe / LemonSqueezy Billing Systems",
      "Multi-Tenant Architecture",
      "User Onboarding & Analytics Tracking",
      "Admin Control Dashboards"
    ]
  },
  {
    id: "devops-ci-cd",
    number: "05",
    title: "DevOps & Cloud Deployment",
    description: "Automating deployments with Docker containers, CI/CD workflows, and serverless infrastructure.",
    iconName: "Award",
    tagline: "Automated pipelines ensuring continuous integration and 99.99% uptime.",
    deliverables: [
      "Docker & Containerization",
      "GitHub Actions CI/CD Pipelines",
      "Vercel, AWS & DigitalOcean Hosting",
      "Security Audits & SSL Governance"
    ]
  },
  {
    id: "performance-seo",
    number: "06",
    title: "Performance & SEO Optimization",
    description: "Maxing out Core Web Vitals, achieving 100/100 Lighthouse scores, and building technical SEO foundation.",
    iconName: "PenTool",
    tagline: "Sub-second load times that rank at the top of Google and convert visitors.",
    deliverables: [
      "Core Web Vitals (LCP, INP, CLS) Tuning",
      "Automated OpenGraph & Metadata",
      "Bundle Size & Image Optimization",
      "Lighthouse 100/100 Auditing"
    ]
  }
];

export const serviceCapabilities: string[] = [
  "Next.js & React",
  "Node.js & Express",
  "TypeScript",
  "PostgreSQL & MySQL",
  "Tailwind CSS",
  "REST & GraphQL APIs",
  "Prisma / Drizzle ORM",
  "Docker & CI/CD",
  "Redis Caching",
  "Full-Stack Architecture"
];
