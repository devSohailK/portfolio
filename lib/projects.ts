export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image?: string;
  technologies: string[];
  keyFeatures: string[];
  problem: string;
  solution: string;
  contribution: string;
  links: {
    github?: string;
    demo?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: "devblog",
    title: "DevBlog – Content Management & Blogging Platform",
    category: "Full-Stack",
    shortDescription:
      "Built a full-stack blogging platform with authentication, blog management, and user profiles. Implemented responsive UI and cloud-based data storage using modern web technologies.",
    fullDescription:
      "DevBlog is a comprehensive content management and blogging platform designed for developers and creators. It features secure authentication, robust blog management, personalized user profiles, a responsive modern UI, and scalable cloud-based data storage.",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS", "TypeScript"],
    keyFeatures: [
      "Authentication & user profiles",
      "Blog management & content publishing",
      "Responsive modern user interface",
      "Cloud-based data storage",
      "Markdown & rich content editing",
      "Secure session handling",
    ],
    problem:
      "Content creators and developers need a modern, streamlined, and responsive blogging platform that provides intuitive content management without unnecessary complexity.",
    solution:
      "Built a full-stack blogging platform with authentication, blog management, and user profiles. Implemented responsive UI and cloud-based data storage using modern web technologies.",
    contribution:
      "Designed and developed the full-stack web application, implemented user authentication and profile management, designed the responsive UI, and integrated cloud-based storage.",
    links: {
      github: "https://github.com/devSohailK/DevBlog.git",
      demo: "https://dev-blog-two-mauve.vercel.app/",
    },
  },
  {
    id: "api-hit-monitoring",
    title: "API Hit Monitoring Platform",
    category: "Backend / Distributed Systems",
    shortDescription:
      "Built a scalable API monitoring platform to track API health, performance, and availability. Implemented a distributed backend using PostgreSQL, MongoDB, RabbitMQ, Docker, and pgAdmin.",
    fullDescription:
      "API Hit Monitoring Platform is a distributed backend solution engineered to track real-time API health, traffic patterns, performance metrics, and endpoint availability at scale. It leverages RabbitMQ for message queuing, a dual-database architecture with PostgreSQL and MongoDB, and containerized deployment with Docker.",
    technologies: ["PostgreSQL", "MongoDB", "RabbitMQ", "Docker", "Node.js", "pgAdmin"],
    keyFeatures: [
      "Real-time API health & availability tracking",
      "Distributed backend architecture",
      "Message queuing with RabbitMQ",
      "PostgreSQL relational analytics & storage",
      "MongoDB high-throughput log storage",
      "Docker containerization & pgAdmin management",
    ],
    problem:
      "Managing modern microservices and high-traffic APIs requires real-time insight into endpoint performance, uptime, and request failures before issues impact end users.",
    solution:
      "Built a scalable API monitoring platform to track API health, performance, and availability. Implemented a distributed backend using PostgreSQL, MongoDB, RabbitMQ, Docker, and pgAdmin.",
    contribution:
      "Architected and implemented the distributed backend services, integrated RabbitMQ message queuing, designed database schemas for PostgreSQL and MongoDB, and containerized the infrastructure with Docker.",
    links: {
      github: "https://github.com/devSohailK/api-monitoring-platform.git",
      demo: "",
    },
  },
  {
    id: "smartdraft",
    title: "SmartDraft",
    category: "AI / Full-Stack",
    shortDescription:
      "An AI-driven platform for generating technical content using Natural Language Generation and OpenAI APIs.",
    fullDescription:
      "SmartDraft is an intelligent content generation platform that empowers users to create high-quality technical content efficiently. Built with cutting-edge AI technology, it provides customizable templates, content optimization features, and SEO-aware suggestions.",
    technologies: ["React", "Node.js", "OpenAI API", "JavaScript", "Tailwind CSS"],
    keyFeatures: [
      "AI content generation",
      "OpenAI API integration",
      "User customization",
      "Content templates",
      "SEO optimization",
      "Real-time content generation",
    ],
    problem:
      "Creating high-quality technical content is time-consuming and requires significant expertise and effort from developers.",
    solution:
      "Developed an AI-powered content generation platform that uses OpenAI APIs to automatically generate technical content based on user input and preferences.",
    contribution:
      "Implemented the OpenAI integration, built the template system, and created responsive UI components for content customization and generation.",
    links: {
      github: "https://github.com/devSohailK/SmartDraft.git",
      demo: "",
    },
  },
  {
    id: "clickprint",
    title: "ClickPrint",
    category: "Mobile / Full-Stack",
    shortDescription:
      "A cross-platform printing management application for submitting and managing print jobs with both mobile app and admin dashboard.",
    fullDescription:
      "ClickPrint is a comprehensive printing management system consisting of a mobile application for end-users and a web-based admin dashboard for print shop management. It streamlines the entire printing workflow from job submission to completion.",
    technologies: ["React Native", "Expo", "Node.js", "MongoDB", "Express.js", "JavaScript"],
    keyFeatures: [
      "OTP authentication",
      "Secure token storage",
      "Print job management",
      "Document uploads",
      "Print settings customization",
      "Automated job cost calculation",
      "Admin dashboard",
      "Print shop management",
      "Order tracking",
      "Payment integration ready",
    ],
    problem:
      "Print shops lack a modern, efficient way to manage print jobs, and customers have no convenient way to submit and track orders.",
    solution:
      "Built a comprehensive platform with a mobile app for customers to submit print jobs and an admin dashboard for print shop staff to manage operations, calculate costs, and track orders.",
    contribution:
      "Developed both the mobile application using React Native/Expo and the backend API. Implemented authentication, job management logic, and cost calculation algorithms.",
    links: {
      github: "https://github.com/WeCodePK/ClickPrintMobile.git",
      demo: "https://app.clickprint.pk",
    },
  },
];
