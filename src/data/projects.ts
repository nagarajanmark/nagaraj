export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
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
    category: "Hospitality & Experience Web App",
    year: "2026",
    client: "The Wheels Turbo Cafe",
    role: "Lead Full Stack & UI/UX Developer",
    deliverables: ["Next.js & TypeScript", "Interactive Digital Menu", "Booking & Reservation Engine", "Tailwind CSS", "Framer Motion Animations"],
    description: "Coimbatore's premier racing and Ajith Kumar themed cafe web application in RS Puram, engineered for immersive digital storytelling, online menu browsing, and event reservations.",
    overview: "The Wheels Turbo Cafe required an electrifying web portal that embodies motorsport energy while driving real table bookings, online inquiries, and cafe visits.",
    challenge: "Capturing the fast-paced racing aesthetic with buttery-smooth animations without sacrificing mobile loading speed or accessibility for diner guests.",
    solution: "Built a responsive Next.js web application with dark-mode motorsport gradients, interactive menu categories, fast load times, and frictionless booking call-to-actions.",
    impact: "+210% Digital menu engagement, 45,000+ monthly page views, and 4.9/5 guest rating.",
    image: "/projects/wheels-turbo-cafe.webp",
    gallery: [
      "/projects/wheels-turbo-cafe.webp"
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
    category: "Architecture & Structural Engineering Portal",
    year: "2026",
    client: "Sarvilinga Builders & Structures",
    role: "Full Stack Web Architect",
    deliverables: ["Next.js App Router", "Bilingual Support (EN/TA)", "Interactive Proposal Engine", "Live Consultation Booking", "Tailwind CSS"],
    description: "A digital showcase for luxury construction and turnkey engineering projects across Coimbatore and Tamil Nadu, featuring architectural portfolios and quick proposal requests.",
    overview: "Sarvilinga required a high-trust digital platform to display extensive structural achievements, industrial warehouses, and luxury villas to prospective high-ticket clients.",
    challenge: "Organizing multi-tiered engineering portfolios, live video showcases, and multilingual Tamil/English content into an intuitive, razor-sharp user experience.",
    solution: "Architected a Next.js application with interactive floating 3D hero concepts, dynamic proposal generators, client testimonials, and WhatsApp direct consultation triggers.",
    impact: "+175% Structural consultation inquiries and 3.8x increase in qualified commercial leads.",
    image: "/projects/sarvilinga-builders.webp",
    gallery: [
      "/projects/sarvilinga-builders.webp"
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
    category: "Healthcare & Dental Web Application",
    year: "2026",
    client: "Niyozenix Dental & Orthodontics",
    role: "Lead Full Stack Developer",
    deliverables: ["Next.js & React", "Online Appointment Booking", "Orthodontic Treatment Showcase", "Patient CRM Integration", "Tailwind CSS"],
    description: "A patient-centric healthcare platform for a top orthodontic clinic in Pondicherry, providing seamless appointment booking, doctor schedules, and verified patient reviews.",
    overview: "Niyozenix needed a clean, inviting web experience to build patient trust for specialized treatments like Invisalign, Vivera, and 3M Orthodontics.",
    challenge: "Creating an accessible, mobile-first appointment booking flow that reduces patient friction and simplifies clinic staff workflow.",
    solution: "Engineered a calming, modern UI with 1-click booking, before-and-after visual sliders, direct phone calling triggers, and certified partner validations.",
    impact: "+240% Direct online appointment bookings and 94% positive patient feedback score.",
    image: "/projects/niyozenix-dental.webp",
    gallery: [
      "/projects/niyozenix-dental.webp"
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
    title: "Trucker Path Website",
    tagline: "High-converting logistics platform, driver portal, dispatch dashboards & fleet management web application.",
    category: "Web Design • Landing Page",
    year: "2026",
    client: "Trucker Path Inc.",
    role: "Lead UI/UX & Full-Stack Architect",
    deliverables: ["Next.js & TypeScript", "Figma Design System", "Framer Motion", "Tailwind CSS", "Interactive Fleet Maps"],
    description: "A flagship logistics and freight management ecosystem built for over 1M+ active truck drivers, fleet operators, and dispatchers across North America.",
    overview: "Trucker Path required an immersive, high-converting digital experience that clearly communicates their smart freight solutions, live dispatch tooling, and automated fleet dashboards.",
    challenge: "Organizing dense logistics features, dispatch systems, and community resources into an intuitive, razor-sharp landing page that maximizes driver and enterprise conversion.",
    solution: "Crafted a modular design system, responsive 3D interactive preview components, streamlined navigation architecture, and high-performance Next.js landing experiences.",
    impact: "+180% Demo request conversion, 4.9/5 user satisfaction across web fleets.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop"
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
    title: "Zenith Cloud SaaS",
    tagline: "Real-time collaborative developer workspace & workflow management platform.",
    category: "Full Stack SaaS & Cloud Architecture",
    year: "2026",
    client: "Zenith Technologies",
    role: "Lead Full Stack Engineer",
    deliverables: ["Next.js App Router", "Node.js Microservices", "PostgreSQL & Prisma", "WebSocket Engine", "Docker & CI/CD"],
    description: "Zenith is an enterprise workflow platform built with Next.js, Node.js, and WebSockets enabling real-time collaboration across 250,000+ active engineers and developers.",
    overview: "Zenith needed a complete architectural overhaul from a legacy monolith to a lightning-fast full stack application capable of handling high concurrency, live state syncing, and sub-100ms API responses.",
    challenge: "Handling tens of thousands of concurrent WebSocket connections, complex state reconciliation across distributed teams, and instant database querying without memory spikes.",
    solution: "Engineered a scalable full-stack system using Next.js Server Components, Redis Pub/Sub for live messaging, PostgreSQL with connection pooling, and optimized TypeScript APIs.",
    impact: "+140% Daily active throughput, reduced server response latency from 450ms to 42ms.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
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
