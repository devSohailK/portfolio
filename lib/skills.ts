export interface SkillItem {
  name: string;
  iconKey: string;
  color: string;
}

export const TECH_STACK: SkillItem[] = [
  { name: "C++", iconKey: "Cplusplus", color: "#00599C" },
  { name: "Javascript", iconKey: "Javascript", color: "#F7DF1E" },
  { name: "Typescript", iconKey: "Typescript", color: "#3178C6" },
  { name: "Node.Js", iconKey: "Nodedotjs", color: "#5FA04E" },
  { name: "React.Js", iconKey: "React", color: "#61DAFB" },
  { name: "Mongo DB", iconKey: "Mongodb", color: "#47A248" },
  { name: "Next.js", iconKey: "Nextdotjs", color: "#FFFFFF" },
  { name: "Git", iconKey: "Git", color: "#F05032" },
  { name: "Firebase", iconKey: "Firebase", color: "#FFCA28" },
  { name: "Redis", iconKey: "Redis", color: "#DC382D" },
  { name: "Docker", iconKey: "Docker", color: "#2496ED" },
  { name: "Kubernetes", iconKey: "Kubernetes", color: "#326CE5" },
  { name: "Postgresql", iconKey: "Postgresql", color: "#4169E1" },
  { name: "Python", iconKey: "Python", color: "#3776AB" },
  { name: "Java", iconKey: "Java", color: "#EA2D2E" },
  { name: "Tailwind CSS", iconKey: "Tailwind", color: "#06B6D4" },
  { name: "Material UI", iconKey: "MUI", color: "#007FFF" },
  { name: "Postman", iconKey: "Postman", color: "#FF6C37" },
  { name: "AWS", iconKey: "AWS", color: "#FF9900" },
  { name: "Kafka", iconKey: "Kafka", color: "#E2E8F0" },
];

export const TOOLS: SkillItem[] = [
  { name: "Google Chrome", iconKey: "Chrome", color: "#4285F4" },
  { name: "Vs Code", iconKey: "VsCode", color: "#007ACC" },
  { name: "IntelliJ", iconKey: "IntelliJ", color: "#FE315D" },
];
