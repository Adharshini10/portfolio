/**
 * Projects Data
 * Adharshini Lingampally Portfolio
 * 
 * Contains all 4 showcased projects with full details for both
 * the Projects overview gallery and dedicated Project Details pages.
 */

export const projects = [
  {
    id: "skillsync",
    slug: "skillsync",
    title: "SkillSync",
    subtitle: "Skill-Sharing & Project Collaboration Platform",
    tagline: "Connecting developers and learners through reciprocal skill swapping and project teamwork.",
    category: "Full Stack",
    image: "/images/skillsync-preview.jpg",
    featured: true,
    description:
      "Developed a platform that connects users through skill swapping and project collaboration. Users can add skills, discover matching profiles, connect with others, create projects, and manage requests.",
    longOverview:
      "SkillSync was designed to eliminate the friction learners and developers encounter when looking for collaborative partners. Instead of static networking, the platform introduces an interactive matchmaking ecosystem where users list the competencies they can teach alongside the skills they want to learn. Real-time updates and structured project requests keep team formation smooth and transparent.",
    problemStatement:
      "Finding compatible peers for collaborative software projects or reciprocal skill learning is often unstructured and fragmented across forums. Learners lack a dedicated environment that matches mutual needs, validates skill offerings, and coordinates project requests in real-time.",
    keyFeatures: [
      "Dynamic skill swapping registry where users advertise both offered and sought proficiencies.",
      "Smart profile matching algorithm that discovers reciprocal learner pairs.",
      "Comprehensive project creation portal with role assignment and team member onboarding.",
      "Request management hub allowing users to accept, decline, or track collaboration proposals.",
      "Real-time bidirectional messaging and event dispatching powered by WebSocket.",
      "Robust authentication and session management using Spring Security and JWT tokens.",
      "RESTful API architecture handling database persistence with MySQL.",
    ],
    technologies: [
      "React.js",
      "Java",
      "Spring Boot",
      "MySQL",
      "Spring Security",
      "JWT",
      "REST APIs",
      "WebSocket",
    ],
    contributions: [
      "Architected the relational schema in MySQL for users, skill tags, project posts, and collaboration requests.",
      "Engineered Spring Boot RESTful services secured with JWT filters and role authorizations.",
      "Implemented WebSocket handlers for instantaneous notifications when peer requests are submitted or accepted.",
      "Built responsive React frontend views with intuitive dashboards for managing swap requests and viewing matched profiles.",
    ],
    links: {
      github: "https://github.com/Adharshini10",
    },
  },
  {
    id: "learnovaai",
    slug: "learnovaai",
    title: "LearnovaAI — AI Learning Hub",
    subtitle: "Interactive Study Assistant & Document Intelligence",
    tagline: "Empowering students with subject-based learning paths and intelligent PDF-driven query answering.",
    category: "AI & Full Stack",
    image: "/images/learnovaai-preview.jpg",
    featured: true,
    description:
      "An AI-powered learning platform that supports subject-based learning, an AI study assistant, and interactive PDF-based question answering.",
    longOverview:
      "LearnovaAI is an academic learning companion tailored for computer science students and educators. It combines structured subject curriculum navigation with an embedded AI assistant capable of digesting complex technical PDF documents and answering nuanced conceptual questions with context-aware precision.",
    problemStatement:
      "Textbooks and lecture slide PDFs are dense and static, making it time-consuming for students to isolate critical answers or clarify challenging algorithms while studying. Students need an interactive assistant that directly references their course materials.",
    keyFeatures: [
      "Subject-based curriculum hubs organizing course topics into digestible learning modules.",
      "Interactive PDF document reader with in-browser query execution and instant semantic answers.",
      "Context-aware AI study assistant that explains concepts, solves sample questions, and summarizes readings.",
      "High-performance backend API bridging React UI interactions with AI processing pipelines.",
      "Clean, distraction-free study interface engineered with responsive React components.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "JavaScript",
      "AI Integration",
    ],
    contributions: [
      "Implemented the full-stack architecture integrating React frontend with Java Spring Boot backend services.",
      "Developed interactive PDF upload and query workflows facilitating automated document parsing.",
      "Built conversational UI components providing clear markdown-rendered AI responses and source context.",
      "Structured subject taxonomy modules and optimized REST endpoints for low-latency dialogue exchanges.",
    ],
    links: {
      github: "https://github.com/Adharshini10",
    },
  },
  {
    id: "shopez",
    slug: "shopez",
    title: "ShopEZ",
    subtitle: "Full-Stack E-Commerce & Administrative Dashboard",
    tagline: "End-to-end e-commerce solution with dynamic cart, checkout, order tracking, and admin tools.",
    category: "Full Stack",
    image: "/images/shopez-preview.jpg",
    featured: true,
    description:
      "A full-stack e-commerce application with product browsing, cart management, checkout, order tracking, and an admin dashboard.",
    longOverview:
      "ShopEZ provides a frictionless digital shopping workflow. Built on a modern web stack, it features snappy product browsing, comprehensive cart manipulation, secure checkout flows, transparent post-purchase order tracking, and a full-featured admin management panel for store administrators.",
    problemStatement:
      "Modern e-commerce requires seamless synchronization between client-side state (cart, filtering, session storage) and backend operations (inventory reconciliation, order statuses, admin controls).",
    keyFeatures: [
      "Dynamic catalog browsing with multi-criteria filtering, search, and category views.",
      "State-synchronized shopping cart supporting item quantity adjustments and instant subtotal calculation.",
      "Streamlined multi-step checkout workflow with order confirmation and invoice summaries.",
      "Real-time order tracking interface displaying shipment milestones from order placement to delivery.",
      "Dedicated admin dashboard with capabilities for managing product listings, inventory levels, and order statuses.",
      "Stateless security layer leveraging JSON Web Tokens (JWT) for customer and admin authorization.",
      "RESTful API layer powered by Node.js and Express connected to MongoDB document storage.",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "REST APIs",
    ],
    contributions: [
      "Designed and documented RESTful API endpoints for catalog items, cart sessions, and order records.",
      "Implemented JWT authentication middleware separating standard customer access from admin routes.",
      "Constructed modular React views for the customer-facing storefront and back-office admin dashboard.",
      "Configured MongoDB database schemas with indexing for optimized query performance.",
    ],
    links: {
      github: "https://github.com/Adharshini10",
    },
  },
  {
    id: "blood-care",
    slug: "blood-care",
    title: "Blood Care",
    subtitle: "Hospital Discovery & Blood Availability Hub",
    tagline: "Facilitating urgent medical response through location-based hospital discovery and stock updates.",
    category: "Web & Location",
    image: "/images/bloodcare-preview.jpg",
    featured: true,
    description:
      "An application that helps users discover nearby hospitals based on required blood groups and supports blood requests and availability updates.",
    longOverview:
      "Blood Care addresses critical emergencies by bridging the gap between individuals in need of urgent transfusions and healthcare facilities with ready supply. By integrating geolocation awareness with real-time database updates, users can locate nearby medical centers holding specific blood groups in minutes.",
    problemStatement:
      "During medical emergencies, finding verified hospital blood reserves is often delayed by telephone chains and outdated spreadsheets. A centralized, location-aware hub saves life-critical minutes.",
    keyFeatures: [
      "Location-based hospital locator calculating distances to nearby medical facilities.",
      "Blood group filtering system (A+, A-, B+, B-, AB+, AB-, O+, O-) indicating immediate stock.",
      "Emergency blood request submission allowing families and clinics to broadcast urgent needs.",
      "Hospital administrative portal for instant real-time blood unit inventory updates.",
      "Firebase real-time synchronization delivering immediate status changes without page reloads.",
    ],
    technologies: [
      "JavaScript",
      "Firebase",
      "Location-Based APIs",
      "HTML5",
      "CSS3",
    ],
    contributions: [
      "Implemented geolocation services that determine user position and calculate proximity to registered hospitals.",
      "Configured Firebase Realtime Database rules and listeners for instantaneous sync of unit counts.",
      "Developed responsive client interface prioritizing urgent visual readability and accessible tap targets.",
      "Created structured forms for submitting blood requests and managing verified donor contact alerts.",
    ],
    links: {
      github: "https://github.com/Adharshini10",
    },
  },
];
