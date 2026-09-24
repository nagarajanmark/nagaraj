export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqData: FAQItem[] = [
  {
    id: "specialization",
    question: "What does Nagarajan specialize in?",
    answer: "Nagarajan specializes in Full Stack Web Development, engineering responsive frontend user interfaces, scalable backend systems, REST and GraphQL APIs, and database architectures using modern JavaScript technologies including React.js, Next.js, Node.js, and TypeScript.",
    category: "Specialization"
  },
  {
    id: "full-stack-role",
    question: "Does Nagarajan work as a Full Stack Developer?",
    answer: "Yes. Nagarajan operates as a dedicated Full Stack Developer managing the complete engineering lifecycle—from interactive UI/UX components and client state management to server-side business logic, database design, and cloud deployments.",
    category: "Role"
  },
  {
    id: "frontend-development",
    question: "Does Nagarajan develop frontend applications?",
    answer: "Yes. Nagarajan builds modern, responsive, accessible, and high-performance frontend interfaces using React.js, Next.js, TypeScript, Tailwind CSS, and Framer Motion, with a strong focus on Core Web Vitals and fluid user experience.",
    category: "Frontend"
  },
  {
    id: "backend-nodejs",
    question: "Does Nagarajan develop Node.js backends?",
    answer: "Yes. Nagarajan develops scalable backend architectures, microservices, and server-side applications with Node.js and Express.js, integrating secure authentication (JWT/OAuth), relational and NoSQL databases, and third-party APIs.",
    category: "Backend"
  },
  {
    id: "end-to-end-apps",
    question: "Can Nagarajan build complete full-stack applications?",
    answer: "Yes. Nagarajan builds end-to-end web applications from scratch, connecting frontend interfaces, secure backend APIs, optimized databases (PostgreSQL, MongoDB, MySQL, Supabase), and production deployment pipelines.",
    category: "Full Stack"
  },
  {
    id: "tech-stack",
    question: "What technologies does Nagarajan use?",
    answer: "Nagarajan's primary stack includes React.js, Next.js, TypeScript, JavaScript, Node.js, Express.js, PostgreSQL, MongoDB, MySQL, Supabase, Redis, Tailwind CSS, Docker, and Git for modern web application engineering.",
    category: "Technologies"
  },
  {
    id: "rest-apis",
    question: "Does Nagarajan build REST APIs?",
    answer: "Yes. Nagarajan designs, documents, and implements secure, high-throughput RESTful and GraphQL APIs with robust validation, rate limiting, token authentication, and optimized database query execution.",
    category: "APIs"
  },
  {
    id: "existing-apps",
    question: "Can Nagarajan work on existing web applications?",
    answer: "Yes. Nagarajan can refactor, optimize, and scale existing web codebases—modernizing frontend performance, migrating to Next.js or TypeScript, improving backend API throughput, and adding new full-stack features.",
    category: "Engineering"
  }
];
