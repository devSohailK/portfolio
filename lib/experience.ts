export interface Experience {
  company: string;
  position: string;
  period: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    company: "Decimal Solutions",
    position: "Full Stack Intern",
    period: "Feb 2026 – Mar 2026",
    startDate: "2026-02-01",
    endDate: "2026-03-31",
    description:
      "Gained practical full-stack development experience working on real-world web applications and improving system performance.",
    responsibilities: [
      "Developed and maintained full-stack web applications",
      "Worked on responsive UI components and layouts",
      "Integrated REST APIs with frontend applications",
      "Implemented efficient state management solutions",
      "Built secure authentication flows",
      "Created dynamic application features",
      "Improved user experience and application performance",
    ],
  },
];
