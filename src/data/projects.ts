export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  projectType: string;
  frontendTech: string[];
  backendTech: string[];
  database: string;
  year: string;
  client: string;
  role: string;
  deliverables: string[];
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  impact: string;
  image: string;
  imageAlt: string;
  gallery: string[];
  featured: boolean;
  link?: string;
  metrics: { label: string; value: string }[];
}

export const projectsData: Project[] = [
  {
    id: "wheels-turbo-cafe",
    slug: "wheels-turbo-cafe",
    title: "The Wheels Turbo Cafe",
    tagline: "High-octane racing & Ajith Kumar themed cafe experience with digital interactive menu and table reservations.",
    category: "Full Stack Hospitality Web App",
    projectType: "Full Stack Web Application",
    frontendTech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backendTech: ["Node.js", "REST APIs", "Express.js"],
    database: "PostgreSQL",
    year: "2026",
    client: "The Wheels Turbo Cafe",
    role: "Full Stack Developer",
    deliverables: [
      "Next.js & TypeScript Frontend",
      "Interactive Digital Menu Engine",
      "Table Booking & Reservation REST APIs",
      "PostgreSQL Database Integration",
      "Responsive UI & Mobile Optimization"
    ],
    description: "Full-stack web application built with Next.js and TypeScript frontend, Node.js REST APIs and PostgreSQL database for immersive digital menu browsing and real-time table reservations.",
    overview: "The Wheels Turbo Cafe required an electrifying web portal that embodies motorsport energy while driving real table bookings, online inquiries, and cafe visits.",
    challenge: "Capturing the fast-paced racing aesthetic with buttery-smooth animations without sacrificing mobile loading speed or accessibility for diner guests.",
    solution: "Built a responsive Next.js web application with dark-mode motorsport gradients, interactive menu categories, fast load times, and frictionless booking call-to-actions.",
    impact: "+210% Digital menu engagement, 45,000+ monthly page views, and 4.9/5 guest rating.",
    image: "/projects/the-wheels-turbo-cafe-full-stack-app.webp",
    imageAlt: "The Wheels Turbo Cafe Full Stack Web Application by Nagarajan",
    gallery: [
      "/projects/the-wheels-turbo-cafe-full-stack-app.webp"
    ],
    featured: true,
    link: "https://wheelsturbocafe.com",
    metrics: [
      { label: "Monthly Views", value: "45K+" },
      { label: "Engagement Lift", value: "+210%" },
      { label: "Load Speed", value: "0.8s" }
    ]
  },
  {
    id: "sarvilinga-builders",
    slug: "sarvilinga-builders",
    title: "Sarvilinga Builders & Structures",
    tagline: "Turnkey structural engineering, luxury construction portal, and interactive proposal estimator.",
    category: "Full Stack Engineering & Construction Portal",
    projectType: "Full Stack Web Application",
    frontendTech: ["Next.js App Router", "React.js", "TypeScript", "Tailwind CSS"],
    backendTech: ["Node.js", "REST APIs", "Email & Notification Services"],
    database: "PostgreSQL & Supabase",
    year: "2026",
    client: "Sarvilinga Builders & Structures",
    role: "Full Stack Developer",
    deliverables: [
      "Next.js App Router & Bilingual UI (EN/TA)",
      "Interactive Construction Estimator",
      "Consultation Booking API Endpoints",
      "Supabase & PostgreSQL Data Layer",
      "Lead Capture & WhatsApp Notification Automation"
    ],
    description: "Full-stack construction engineering web application engineered with Next.js and TypeScript frontend, Node.js backend integration and PostgreSQL database for project portfolios and live estimation.",
    overview: "Sarvilinga required a high-trust digital platform to display extensive structural achievements, industrial warehouses, and luxury villas to prospective high-ticket clients.",
    challenge: "Organizing multi-tiered engineering portfolios, live video showcases, and multilingual Tamil/English content into an intuitive, razor-sharp user experience.",
    solution: "Architected a Next.js application with interactive floating 3D hero concepts, dynamic proposal generators, client testimonials, and WhatsApp direct consultation triggers.",
    impact: "+175% Structural consultation inquiries and 3.8x increase in qualified commercial leads.",
    image: "/projects/sarvilinga-builders-full-stack-portal.webp",
    imageAlt: "Sarvilinga Builders Full Stack Engineering Web Application by Nagarajan",
    gallery: [
      "/projects/sarvilinga-builders-full-stack-portal.webp"
    ],
    featured: true,
    link: "https://sarvilingabuilders.com",
    metrics: [
      { label: "Lead Inquiries", value: "+175%" },
      { label: "Client Conversion", value: "3.8x" },
      { label: "Lighthouse Score", value: "99/100" }
    ]
  },
  {
    id: "niyozenix-dental",
    slug: "niyozenix-dental",
    title: "Niyozenix Dental & Orthodontics",
    tagline: "Premier dental & orthodontic digital healthcare platform with instant appointment scheduling.",
    category: "Full Stack Healthcare Platform",
    projectType: "Full Stack Web Application",
    frontendTech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    backendTech: ["Node.js", "REST APIs", "CRM Integrations"],
    database: "MongoDB",
    year: "2026",
    client: "Niyozenix Dental & Orthodontics",
    role: "Full Stack Developer",
    deliverables: [
      "Responsive Next.js & React Frontend",
      "Online Patient Appointment Scheduling",
      "RESTful API & Patient Inquiry Management",
      "MongoDB Database Schema Design",
      "Mobile-First Patient Booking Flow"
    ],
    description: "Full-stack healthcare web application built with React and Next.js frontend, Node.js REST API endpoints, and MongoDB database for orthodontic scheduling and patient services.",
    overview: "Niyozenix needed a clean, inviting web experience to build patient trust for specialized treatments like Invisalign, Vivera, and 3M Orthodontics.",
    challenge: "Creating an accessible, mobile-first appointment booking flow that reduces patient friction and simplifies clinic staff workflow.",
    solution: "Engineered a calming, modern UI with 1-click booking, before-and-after visual sliders, direct phone calling triggers, and certified partner validations.",
    impact: "+240% Direct online appointment bookings and 94% positive patient feedback score.",
    image: "/projects/niyozenix-dental-full-stack-healthcare.webp",
    imageAlt: "Niyozenix Dental Full Stack Healthcare Web Application by Nagarajan",
    gallery: [
      "/projects/niyozenix-dental-full-stack-healthcare.webp"
    ],
    featured: true,
    link: "https://niyozenix.com",
    metrics: [
      { label: "Online Bookings", value: "+240%" },
      { label: "Patient Satisfaction", value: "98%" },
      { label: "Mobile Share", value: "78%" }
    ]
  },
  {
    id: "trucker-path",
    slug: "trucker-path",
    title: "Trucker Path Logistics Platform",
    tagline: "High-converting logistics platform, driver portal, dispatch dashboards & fleet management web application.",
    category: "Full Stack Logistics Web Application",
    projectType: "Full Stack Web Application",
    frontendTech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backendTech: ["Node.js", "REST APIs", "Microservices"],
    database: "PostgreSQL & Redis",
    year: "2026",
    client: "Trucker Path Inc.",
    role: "Full Stack Developer",
    deliverables: [
      "Next.js & TypeScript UI Architecture",
      "Interactive Fleet Map & Logistics Displays",
      "Node.js High-Throughput REST APIs",
      "PostgreSQL & Redis Cache Layer",
      "Conversion-Optimized Landing Experience"
    ],
    description: "Full-stack logistics web platform featuring Next.js and TypeScript frontend interfaces, Node.js microservices, and PostgreSQL database with Redis caching for fleet operations.",
    overview: "Trucker Path required an immersive, high-converting digital experience that clearly communicates their smart freight solutions, live dispatch tooling, and automated fleet dashboards.",
    challenge: "Organizing dense logistics features, dispatch systems, and community resources into an intuitive, razor-sharp landing page that maximizes driver and enterprise conversion.",
    solution: "Crafted a modular design system, responsive 3D interactive preview components, streamlined navigation architecture, and high-performance Next.js landing experiences.",
    impact: "+180% Demo request conversion, 4.9/5 user satisfaction across web fleets.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Trucker Path Logistics Full Stack Web Application by Nagarajan",
    gallery: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop"
    ],
    featured: true,
    link: "https://truckerpath.com",
    metrics: [
      { label: "Active Drivers", value: "1M+" },
      { label: "Conversion Lift", value: "+180%" },
      { label: "Fleet Uptime", value: "99.99%" }
    ]
  },
  {
    id: "zenith",
    slug: "zenith",
    title: "Zenith Cloud SaaS Workspace",
    tagline: "Real-time collaborative developer workspace & workflow management platform.",
    category: "Full Stack Cloud SaaS Platform",
    projectType: "Full Stack Web Application",
    frontendTech: ["Next.js App Router", "React.js", "TypeScript", "Tailwind CSS"],
    backendTech: ["Node.js", "WebSockets", "REST APIs", "Express.js"],
    database: "PostgreSQL & Prisma ORM & Redis",
    year: "2026",
    client: "Zenith Technologies",
    role: "Full Stack Developer",
    deliverables: [
      "Next.js App Router & Server Components",
      "Node.js WebSocket Real-Time Engine",
      "PostgreSQL Database & Prisma ORM",
      "Redis Pub/Sub Pipeline",
      "Dockerized CI/CD Deployment"
    ],
    description: "Full-stack SaaS web application built with Next.js and TypeScript frontend, Node.js WebSocket engine, and PostgreSQL database with Prisma ORM for real-time collaboration.",
    overview: "Zenith needed a complete architectural overhaul from a legacy monolith to a lightning-fast full stack application capable of handling high concurrency, live state syncing, and sub-100ms API responses.",
    challenge: "Handling tens of thousands of concurrent WebSocket connections, complex state reconciliation across distributed teams, and instant database querying without memory spikes.",
    solution: "Engineered a scalable full-stack system using Next.js Server Components, Redis Pub/Sub for live messaging, PostgreSQL with connection pooling, and optimized TypeScript APIs.",
    impact: "+140% Daily active throughput, reduced server response latency from 450ms to 42ms.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Zenith Cloud SaaS Full Stack Web Application by Nagarajan",
    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop"
    ],
    featured: true,
    link: "https://zenith-demo.dev",
    metrics: [
      { label: "Active Users", value: "250K+" },
      { label: "API Latency", value: "< 42ms" },
      { label: "Uptime Reliability", value: "99.99%" }
    ]
  }
];
