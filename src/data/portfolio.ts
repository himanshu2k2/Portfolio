export const profile = {
  name: "Himanshu Tiwari",
  role: "Frontend-focused Full-Stack Developer",
  tagline:
    "I build production-ready Next.js & React applications with clean, responsive UI — from requirements to deployment.",
  location: "Kanpur, Uttar Pradesh, India",
  avatar: "/profile.jpg",
  phone: "+91 8957319386",
  email: "himanshutiwari0203668@gmail.com",
  socials: {
    github: "https://github.com/himanshu2k2",
    linkedin: "https://linkedin.com/in/himanshu-tiwari-027b67218",
  },
  resumeUrl:
    "https://drive.google.com/file/d/1tjTwKmacO3tjNfTSXn3ieG0Sj1f6xzKj/view?usp=sharing",
  summary:
    "MCA postgraduate and frontend-focused full-stack developer, delivering production-ready Next.js and React applications for real users. Experienced with live client projects, ML-powered web apps, and modern MERN tooling, with a strong focus on clean, responsive UI. Known for taking ownership from requirements to deployment and collaborating closely with teams and stakeholders to ship reliable solutions.",
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Java (Core)", "C", "SQL", "Python"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Backend / DB",
    items: ["Node.js (MERN)", "MongoDB", "DBMS concepts"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "GitHub", "Jupyter Notebook", "Flask (basic)", "Power BI (basic)", "AI tools"],
  },
  {
    category: "LLM / GenAI",
    items: ["LangChain (chains, tools, RAG)", "OpenAI / Llama APIs", "Prompt Engineering"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "Backend Developer",
    company: "Satvik Supply Chain",
    period: "Mar 2026 – Present",
    location: "India",
    points: [
      "Developed and maintained Node.js backend services for supply-chain workflows, including APIs for orders, inventory, and tracking.",
      "Designed and integrated RESTful APIs with databases, ensuring reliable data flow between frontend dashboards and backend systems.",
      "Optimized backend logic and queries to improve response times and support scalable, production-ready operations.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Oneinfo.ai",
    period: "Dec 2025 – Feb 2026",
    location: "Remote / India",
    points: [
      "Developed an admin panel using Next.js, leveraging both server-side and client-side components to improve performance and developer experience.",
      "Implemented responsive UI components with HTML, CSS, and Tailwind CSS, ensuring consistent design and usability across devices.",
      "Collaborated with the team to integrate frontend components with backend APIs and improve overall development speed.",
    ],
  },
];

export type Project = {
  title: string;
  stack: string[];
  description: string;
  points: string[];
  githubUrl: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    title: "Sparsh Physiotherapist Centre Website",
    stack: ["Next.js", "Tailwind CSS", "SEO"],
    description: "A production website for a physiotherapy centre.",
    liveUrl: "https://sparshphysiotherapy.org",
    githubUrl: "https://github.com/himanshu2k2/Sparshphysio.git",
    points: [
      "Built and deployed a production Next.js website showcasing services, doctor information, and contact details for patients.",
      "Implemented responsive layouts, SEO-friendly pages, and reusable UI components to improve UX and discoverability.",
      "Collaborated with the client to gather requirements and iterate on design and content for a live healthcare-facing site.",
    ],
  },
  {
    title: "Education Recommendation System",
    stack: ["Python", "ML", "Flask", "JavaScript"],
    description: "An ML web app suggesting career paths from student data.",
    liveUrl: "",
    githubUrl: "https://github.com/himanshu2k2/Career-and-Course-Recommendation-System.git",
    points: [
      "Built a machine learning-based web application (team of four) that analyzes students' marks and interests to suggest suitable career paths.",
      "Developed responsive frontend interfaces and contributed to project documentation, improving UX and clarity of the system.",
    ],
  },
  {
    title: "Task Terminal",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    description: "A full-stack task manager with authentication.",
    liveUrl: "",
    githubUrl: "",
    points: [
      "Developed a web-based task manager that supports full CRUD operations for users' day-to-day tasks.",
      "Implemented authentication with dedicated login and registration pages to securely manage user data and progress tracking.",
    ],
  },
  {
    title: "Password Generator",
    stack: ["React.js", "Hooks"],
    description: "A customizable, secure password generator.",
    liveUrl: "",
    githubUrl: "https://github.com/himanshu2k2/Password-Generator.git",
    points: [
      "Built a React-based password generator using React hooks to create secure, customizable passwords.",
      "Strengthened understanding of React components, state management, and hooks.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  location: string;
};

export const education: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA) (Honors)",
    institution: "Ajay Kumar Garg Engineering College",
    period: "2023 – 2025",
    location: "Ghaziabad, India",
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Dr. Virendra Swaroop Institute of Computer Studies",
    period: "2019 – 2022",
    location: "Kanpur, India",
  },
];

export const achievements: string[] = [
  "Runner-up in the Business Pitch Competition at Ajay Kumar Garg Engineering College for the idea “Ease Event” — a service brokerage platform connecting consumers with event vendors and services.",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
