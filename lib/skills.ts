export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: "Code" },
      { name: "CSS", icon: "Palette" },
      { name: "JavaScript", icon: "Terminal" },
      { name: "React.js", icon: "Zap" },
      { name: "Next.js", icon: "Zap" },
      { name: "Tailwind CSS", icon: "Palette" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "Server" },
      { name: "Express.js", icon: "Server" },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "React Native", icon: "Smartphone" },
    ],
  },
  {
    category: "State Management",
    skills: [
      { name: "Context API", icon: "GitBranch" },
      { name: "Zustand", icon: "GitBranch" },
    ],
  },
  {
    category: "Databases & APIs",
    skills: [
      { name: "MongoDB", icon: "Database" },
      { name: "MySQL", icon: "Database" },
      { name: "REST APIs", icon: "Globe" },
      { name: "OpenAI API", icon: "Brain" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "GitBranch" },
      { name: "Vercel", icon: "Cloud" },
      { name: "Postman", icon: "Send" },
      { name: "Docker", icon: "Box" },
    ],
  },
];
