/**
 * Skills Data
 * Adharshini Lingampally Portfolio
 * 
 * Organized strictly by requested categories.
 * No fake percentages, bars, or ratings.
 */

export const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    description: "Core languages used for problem solving, algorithmic development, and application building.",
    skills: [
      {
        name: "Java",
        badge: "Core & OOP",
        description: "Object-oriented programming, data structures, multithreading, and enterprise backend engineering.",
        icon: "SiOpenjdk", // will render via dynamic icon resolver
      },
      {
        name: "JavaScript",
        badge: "ES6+",
        description: "Modern asynchronous JavaScript, DOM manipulation, promises, closures, and modular architecture.",
        icon: "SiJavascript",
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Building responsive, modern, interactive user interfaces with accessible and animated components.",
    skills: [
      {
        name: "HTML",
        badge: "HTML5 & Semantic",
        description: "Semantic document structure, web accessibility (a11y), clean markup, and SEO foundations.",
        icon: "SiHtml5",
      },
      {
        name: "CSS",
        badge: "CSS3 & Responsive",
        description: "Flexbox, CSS Grid, media queries, CSS variables, and modern keyframe animations.",
        icon: "SiCss",
      },
      {
        name: "React.js",
        badge: "Component Architecture",
        description: "Hooks, state management, component lifecycle, React Router, and modular design patterns.",
        icon: "SiReact",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Designing server-side business logic, robust application layers, and scalable APIs.",
    skills: [
      {
        name: "Spring Boot",
        badge: "Enterprise Framework",
        description: "Dependency injection, Spring Security, data persistence, and building microservices.",
        icon: "SiSpringboot",
      },
      {
        name: "REST API Development",
        badge: "API Architecture",
        description: "Standard HTTP methods, JSON data exchange, error handling, status codes, and endpoint security.",
        icon: "TbApi",
      },
    ],
  },
  {
    id: "database",
    title: "Database",
    description: "Relational data modeling, querying, and persistent storage management.",
    skills: [
      {
        name: "MySQL",
        badge: "Relational DBMS",
        description: "Relational schema design, normalization, complex queries, joins, and indexing.",
        icon: "SiMysql",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Collaboration",
    description: "Version control systems and development workflow utilities.",
    skills: [
      {
        name: "Git",
        badge: "Version Control",
        description: "Branching, merging, commit management, and local source tracking.",
        icon: "SiGit",
      },
      {
        name: "GitHub",
        badge: "Code Hosting",
        description: "Remote repository hosting, pull requests, project collaboration, and release management.",
        icon: "SiGithub",
      },
    ],
  },
  {
    id: "additional-interests",
    title: "Additional Interests",
    description: "Emerging technologies and intelligent computational systems currently exploring.",
    skills: [
      {
        name: "Artificial Intelligence",
        badge: "Exploration & Concepts",
        description: "Studying foundational AI concepts, intelligent agent workflows, and machine intelligence paradigms.",
        icon: "TbBrain",
      },
      {
        name: "AI-Powered Application Development",
        badge: "Practical Integration",
        description: "Embedding AI capabilities into practical web tools, document query systems, and interactive assistants.",
        icon: "TbSparkles",
      },
    ],
  },
];
