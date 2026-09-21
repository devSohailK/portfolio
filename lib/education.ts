export interface Education {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number | string;
  gpa: string;
  description?: string;
}

export const EDUCATION: Education[] = [
  {
    institution: "COMSATS University Islamabad (CUI)",
    degree: "Bachelor of Science",
    field: "Software Engineering",
    startYear: 2023,
    endYear: "Current",
    gpa: "3.27",
    description:
      "Building strong foundation in data structures, algorithms, object-oriented programming, database systems, and software engineering principles.",
  },
];
