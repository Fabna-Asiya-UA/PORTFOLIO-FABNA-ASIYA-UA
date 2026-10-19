export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full Stack Trainer",
    company: "Softroniics",
    location: "Palakkad, Kerala",
    period: "April 2026 – Present",
    description:
      "Teaching and supporting learners as they build web development skills and practical projects.",
    responsibilities: [
      "Explain Python, Django, JavaScript, React, and MERN concepts.",
      "Guide learners through coding assignments and project development.",
      "Help learners debug errors and understand development best practices.",
    ],
  },
  {
    role: "Python Full Stack Intern",
    company: "DataSpark Analytics",
    location: "Calicut, Kerala",
    period: "Jun 2025 – Dec 2025",
    description:
      "Developed practical skills in Python-based web development and full-stack application workflows.",
    responsibilities: [
      "Practice backend development using Python and web technologies.",
      "Work with databases and application integration.",
      "Develop understanding of debugging, version control, and project workflows.",
    ],
  },
];