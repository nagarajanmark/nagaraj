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
    id: "frontend-dev",
    number: "01",
    title: "Frontend Development",
    description: "Responsive, high-performance frontend applications using React.js, Next.js, TypeScript and modern UI technologies.",
    iconName: "Monitor",
    tagline: "Building responsive, accessible and high-performance frontend experiences with React.js, Next.js and TypeScript.",
    deliverables: [
      "React.js & Next.js App Router Architecture",
      "TypeScript & Component-Driven UI Engineering",
      "Tailwind CSS, Responsive & Accessible Layouts",
      "Core Web Vitals & Performance Optimization"
    ]
  },
  {
    id: "backend-dev",
    number: "02",
    title: "Backend Development",
    description: "Scalable Node.js backend systems, REST APIs, authentication, database integrations and third-party APIs.",
    iconName: "Share2",
    tagline: "Designing scalable backend systems and APIs using Node.js, REST, databases and modern cloud technologies.",
    deliverables: [
      "Node.js & Express.js Backend Architecture",
      "RESTful & GraphQL API Development",
      "JWT & OAuth Authentication & Authorization",
      "PostgreSQL, MongoDB, MySQL & Supabase Integration"
    ]
  },
  {
    id: "full-stack-web",
    number: "03",
    title: "Full Stack Web Development",
    description: "Complete web applications combining frontend interfaces, backend APIs, databases and deployment.",
    iconName: "Box",
    tagline: "From frontend interfaces to backend APIs and databases, developing complete full-stack web applications with modern JavaScript technologies.",
    deliverables: [
      "End-to-End Web Application Architecture",
      "Unified TypeScript Frontend & Backend Workflows",
      "Database Schema Design, Migrations & Caching (Redis)",
      "Automated CI/CD, Docker & Cloud Deployment"
    ]
  },
  {
    id: "web-app-engineering",
    number: "04",
    title: "Web Application Engineering",
    description: "Production-ready applications designed for performance, scalability and maintainability.",
    iconName: "Award",
    tagline: "Production-grade engineering delivering security, modularity, and high-concurrency performance.",
    deliverables: [
      "Modular, Maintainable Clean Code Architectures",
      "Security Best Practices & Data Validation",
      "Real-Time Data Pipelines & WebSockets",
      "Continuous Monitoring, SEO & Scalability"
    ]
  }
];

export const serviceCapabilities: string[] = [
  "React.js & Next.js",
  "Node.js & Express.js",
  "TypeScript & JavaScript",
  "Full Stack Web Development",
  "REST & GraphQL APIs",
  "PostgreSQL & MongoDB",
  "MySQL & Supabase",
  "Tailwind CSS",
  "Docker & CI/CD",
  "Redis & Performance Optimization"
];
