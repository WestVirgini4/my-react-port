// Skills data organized by tech categories
export const skillsData = [
  {
    id: 1,
    category: "Front-end Techstack",
    title: "Frontend Technologies",
    icon: "bx bx-palette",
    skills: [
      { name: "HTML", level: "Advanced", icon: "bxl-html5" },
      { name: "CSS", level: "Advanced", icon: "bxl-css3" },
      { name: "JavaScript", level: "Advanced", icon: "bxl-javascript" },
      { name: "TypeScript", level: "Intermediate", icon: "bxl-typescript" },
      { name: "React", level: "Advanced", icon: "bxl-react" },
      { name: "Next.js", level: "Intermediate", icon: "bx-code-block" },
      { name: "Vue.js", level: "Basic", icon: "bxl-vuejs" },
      { name: "Tailwind CSS", level: "Advanced", icon: "bx-palette" },
      { name: "Bootstrap", level: "Intermediate", icon: "bxl-bootstrap" },
    ]
  },
  {
    id: 2,
    category: "Back-end Techstack",
    title: "Backend Technologies",
    icon: "bx bx-server",
    skills: [
      { name: "Node.js", level: "Intermediate", icon: "bxl-nodejs" },
      { name: "Express.js", level: "Intermediate", icon: "bx-server" },
      { name: "FastAPI", level: "Basic", icon: "bx-fast-forward" },
      { name: "PHP", level: "Basic", icon: "bxl-php" },
      { name: "REST API", level: "Intermediate", icon: "bx-network-chart" },
    ]
  },
  {
    id: 3,
    category: "Database",
    title: "Database Management",
    icon: "bx bx-data",
    skills: [
      { name: "MySQL", level: "Basic", icon: "bx-data" },
      { name: "MongoDB", level: "Basic", icon: "bxl-mongodb" },
      { name: "PostgreSQL", level: "Intermediate", icon: "bxl-postgresql" },
      { name: "SQLite", level: "Basic", icon: "bx-cylinder" },
    ]
  },
  {
    id: 4,
    category: "Servers",
    title: "Server & DevOps",
    icon: "bx bx-cloud",
    skills: [
      { name: "Vercel", level: "Advanced", icon: "bx-rocket" },
      { name: "Netlify", level: "Intermediate", icon: "bx-globe" },
      { name: "GitHub Pages", level: "Advanced", icon: "bxl-github" },
      { name: "Render", level: "Intermediate", icon: "bx-server" },
      { name: "Docker", level: "Basic", icon: "bxl-docker" },
      { name: "AWS", level: "Basic", icon: "bxl-aws" },
      { name: "Git/GitHub", level: "Advanced", icon: "bxl-git" },
      { name: "Linux", level: "Basic", icon: "bx-terminal" }
    ]
  }
];

export type SkillLevel = "Basic" | "Intermediate" | "Advanced";

export type Skill = {
  name: string;
  level: SkillLevel;
  icon: string; // CSS class หรือ URL รูปภาพ
};

export type SkillCategory = {
  id: number;
  category: string;
  title: string;
  icon: string;
  skills: Skill[];
};