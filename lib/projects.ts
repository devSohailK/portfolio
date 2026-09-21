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
    id: "smartdoc",
    title: "SmartDoc-SaaS",
    category: "AI / Full-Stack",
    shortDescription:
      "An AI-powered document analysis tool that allows users to upload PDFs and query their content using a context-aware chatbot.",
    fullDescription:
      "SmartDoc is a sophisticated SaaS application that leverages advanced AI and machine learning to provide intelligent document analysis. Users can upload PDF documents and interact with them through a natural language interface, enabling quick information retrieval and analysis without manually reading through lengthy documents.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Gemini API", "TypeScript", "Tailwind CSS"],
    keyFeatures: [
      "AI-powered document analysis",
      "Retrieval-Augmented Generation (RAG)",
      "Gemini API integration",
      "Context-aware responses",
      "PDF document processing",
      "User authentication",
      "Document storage and management",
    ],
    problem:
      "Users often struggle to quickly extract and understand information from lengthy PDF documents. Manual document analysis is time-consuming and inefficient.",
    solution:
      "Built an intelligent document analysis platform using RAG (Retrieval-Augmented Generation) that allows users to upload PDFs and ask questions about their content. The system uses Gemini API to provide context-aware, accurate responses.",
    contribution:
      "Designed and implemented the full-stack application, including the RAG pipeline, API endpoints, PDF processing, and responsive UI components.",
    links: {
      github: "https://github.com",
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
      github: "https://github.com",
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
      github: "https://github.com",
      demo: "",
    },
  },
];
