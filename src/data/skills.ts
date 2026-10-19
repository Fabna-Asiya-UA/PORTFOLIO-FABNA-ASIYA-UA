export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    description: "Building responsive and accessible user interfaces.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend Development",
    description: "Creating APIs, business logic, and authentication.",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
    ],
  },
  {
    title: "Databases",
    description: "Working with structured and document-based data.",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  },
  {
    title: "Tools and Workflow",
    description: "Tools used for development and debugging.",
    skills: ["Git", "GitHub", "Postman", "npm", "VS Code"],
  },
];