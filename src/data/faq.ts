export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqData: FAQItem[] = [
  {
    id: "tech-stack",
    question: "What is your primary full stack technology stack?",
    answer: "My core stack centers around TypeScript, Next.js (App Router), React, Node.js, Express/NestJS, PostgreSQL, Prisma/Drizzle ORM, Tailwind CSS, and Redis. For cloud infrastructure and DevOps, I use Docker, GitHub Actions, AWS, and Vercel.",
    category: "Technical"
  },
  {
    id: "full-stack-ownership",
    question: "Do you handle both frontend and backend development?",
    answer: "Yes, 100%. I handle the entire development lifecycle: from relational database modeling, REST/GraphQL API construction, and server-side logic to pixel-perfect responsive UI engineering, state management, and production cloud deployment.",
    category: "Services"
  },
  {
    id: "timeline",
    question: "How long does a typical full-stack web project take?",
    answer: "A production-ready MVP or customized web application typically takes between 4 to 8 weeks depending on complexity, third-party integrations, and database schemas. I work in fast weekly sprints with continuous staging deployments so you test features as they are built.",
    category: "Process"
  },
  {
    id: "pricing",
    question: "How do you structure project pricing?",
    answer: "I offer both milestone-based fixed project pricing and dedicated monthly engineering retainers for startups needing ongoing senior full-stack development. All pricing is transparent with clear sprint deliverables and zero hidden fees.",
    category: "Pricing"
  },
  {
    id: "code-quality",
    question: "How do you ensure code quality, security, and performance?",
    answer: "Every application is built with strict TypeScript type-safety, automated testing, SQL injection prevention, JWT/OAuth secure authentication, and Core Web Vitals optimization to guarantee sub-second load times and 100/100 Lighthouse scores.",
    category: "Technical"
  },
  {
    id: "getting-started",
    question: "How do we get started working together?",
    answer: "You can start by submitting your project requirements via the contact form or scheduling a 30-minute discovery call. We'll analyze your technical architecture, define the scope and timeline, and kick off sprint one immediately.",
    category: "Process"
  }
];
