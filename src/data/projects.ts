
export type Project = {
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  github: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "NaduCare",
    category: "Civic Technology",
    description:
      "A community-focused platform for reporting local problems and helping residents follow their progress.",
    problem:
      "Residents may struggle to communicate local infrastructure issues and track their status.",
    solution:
      "A web application that organizes community reports and makes issue information easier to access.",
    technologies: [
      "Python",
      "Django",
      "Bootstrap",
      "Cloudinary",
    ],
    features: [
      "Community problem reporting",
      "Problem details and status tracking",
      "Image uploads",
      "Administrative management",
    ],
    github: "https://github.com/Fabna-Asiya-UA/NADUCARE",
    demo: "https://naducare.onrender.com",
    featured: true,
  },
  {
    title: "StudyNest",
    category: "Education Technology",
    description:
      "A learning platform bringing study materials, assignments, quizzes, notes, and learning support into one place.",
    problem:
      "Learning resources and classroom activities can become scattered across different tools.",
    solution:
      "A centralized learning experience for students and teachers, with role-based access.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    features: [
      "Student and teacher workflows",
      "Learning materials and assignments",
      "Quizzes and exams",
      "Notes, goals, and revision tools",
    ],
    github: "https://github.com/Fabna-Asiya-UA/STUDY-NEST",
    demo: "https://study-nest-tawny.vercel.app",
    featured: true,
  },
  {
    title: "SocioSphere",
    category: "Social Networking",
    description:
      "A responsive social media platform where users can connect, share posts, follow other users, and manage their profiles.",
    problem:
      "People need a simple and accessible platform to connect with others, share updates, and manage their social profiles. Without an integrated platform, it can be difficult to share content and stay connected in one place.",
    solution:
      "SocioSphere provides a centralized social networking platform with user authentication, post management, follow and unfollow functionality, and profile management through a responsive interface.",
    technologies: [
      "React",
      "Vite",
      "Python",
      "Django",
      "Django REST Framework",
      "JWT Authentication",
      "Axios",
      "Tailwind CSS",
      "SQLite",
    ],
    features: [
      "User registration and login",
      "JWT-based authentication",
      "Create and delete posts",
      "Follow and unfollow users",
      "Profile management",
      "Responsive user interface",
    ],
    github: "https://github.com/Fabna-Asiya-UA/SOCIOSPHERE",
    demo: "https://sociosphere-lyart.vercel.app",
    featured: true,
  },
  {
    title: "Role-Based Task & Project Management System",
    category: "Project Management",
    description:
      "A project management platform that enables teams to organize projects, assign tasks, track progress, and collaborate through role-specific dashboards.",
    problem:
      "Managing projects and team tasks without a centralized system can lead to unclear responsibilities, difficulty tracking progress, and inefficient collaboration.",
    solution:
      "A centralized task and project management system built with Django REST Framework and React. It provides role-based access for administrators, project managers, and team members to manage projects, assign tasks, update statuses, and track progress.",
    technologies: [
      "React",
      "Vite",
      "Python",
      "Django",
      "Django REST Framework",
      "JWT Authentication",
      "Axios",
      "SQLite",
    ],
    features: [
      "User authentication and authorization",
      "Role-based access control",
      "Admin, manager, and team member roles",
      "Project creation and management",
      "Task assignment and tracking",
      "Task status updates",
      "Project and task overview dashboard",
    ],
    github:
      "https://github.com/Fabna-Asiya-UA/ROLE-BASED-TASK-AND-PROJECT-MANAGEMENT-SYSTEM",
    featured: true,
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured
);
