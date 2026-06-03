export const SITE = {
  name: "Shresth Gupta",
  role: "Backend & Full-Stack Engineer",
  tagline:
    "Building secure, scalable products across AI, blockchain, and geospatial systems.",
  heroIntro:
    "I build software that is fast, secure, and hard to break — from backend systems and APIs to mobile apps and zero-knowledge workflows.",
  location: "Mumbai, India",
  status: "Open to full-time roles",
  email: "shresthgupta106@gmail.com",
  phone: "+91 7506992248",
  github: "https://github.com/shhresth",
  linkedin: "https://www.linkedin.com/in/shhresth/",
  currentSite: "https://shresth.is-a.dev",
  githubHandle: "shhresth",
  initials: "SG",
  resumeUrl:
    process.env.NEXT_PUBLIC_RESUME_URL?.trim() || "/resume.pdf",
};

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  description: string;
  why: string;
  highlights: string[];
  stack: string[];
  category: "flagship" | "side";
  status?: string;
  period: string;
  links: { label: string; href: string }[];
  visual: "anonhire" | "lumina" | "stratify" | "deeplog" | "terminal";
};

export const PROJECTS: Project[] = [
  {
    slug: "anonhire",
    title: "AnonHire",
    oneLiner:
      "Privacy-preserving employment credential verification using SSI, IPFS, smart contracts, and zero-knowledge proofs.",
    description:
      "A decentralized credential verification platform that lets candidates prove GPA, experience, and skill thresholds without revealing the underlying data.",
    why: "It combines product thinking, applied cryptography, and full-stack engineering around a real-world trust problem — credentials that employers can verify without doxxing the candidate.",
    highlights: [
      "Issuer / holder / verifier roles with end-to-end workflow",
      "Encrypted off-chain payloads anchored to on-chain hashes",
      "Revocation support via registry smart contracts on Sepolia",
      "Zero-knowledge circuits (Circom + SnarkJS) for GPA and experience thresholds",
    ],
    stack: ["Solidity", "Circom", "SnarkJS", "Next.js", "Express", "PostgreSQL", "IPFS", "Docker"],
    category: "flagship",
    status: "In active development",
    period: "Oct 2025 – Present",
    links: [
      { label: "GitHub", href: "https://github.com/shhresth/AnonHire" },
    ],
    visual: "anonhire",
  },
  {
    slug: "lumina",
    title: "Lumina",
    oneLiner:
      "An offline-first mobile GIS platform for fiber-optic deployment and field operations.",
    description:
      "Native mobile geospatial app for technicians working in zero-connectivity environments: GPS route tracing, asset tracking, and reliable sync when the network comes back.",
    why: "It shows I can build beyond standard web apps and handle maps, mobile constraints, and domain-specific workflows where connectivity is not guaranteed.",
    highlights: [
      "Offline-first capture with SQLite and a sync-replay engine",
      "Geospatial backend on PostgreSQL + PostGIS (polygon access, cable routes, live tracking)",
      "Hierarchical field-operations management for fiber assets",
      "Native Android / iOS builds via React Native + Expo",
    ],
    stack: ["React Native", "Expo", "NestJS", "PostgreSQL", "PostGIS", "Redis", "TypeScript"],
    category: "flagship",
    status: "In active development",
    period: "May 2026 – Present",
    links: [
      { label: "GitHub", href: "https://github.com/shhresth/lumina" },
    ],
    visual: "lumina",
  },
  {
    slug: "stratify",
    title: "Stratify",
    oneLiner:
      "A role-based enterprise goal-tracking and performance management platform.",
    description:
      "Models real business workflows: goal lifecycles, quarterly updates, approvals, scoring, audit logs, and cycle locking — backed by a clean Prisma data model.",
    why: "It proves I can model business logic, not just build isolated features — the kind of system that needs to stay correct as it grows.",
    highlights: [
      "Role-based flows for employees, managers, and admins",
      "Goal lifecycle, approvals, and audit logs with cycle locking",
      "Google OAuth + credential login via NextAuth",
      "Validated server actions with Zod",
    ],
    stack: ["Next.js", "React", "TypeScript", "Express", "Prisma", "PostgreSQL", "NextAuth", "Zod"],
    category: "flagship",
    status: "Built",
    period: "2025",
    links: [
      { label: "GitHub", href: "https://github.com/shhresth/Stratify" },
    ],
    visual: "stratify",
  },
  {
    slug: "deeplog",
    title: "DeepLog",
    oneLiner:
      "An AI-powered log anomaly detector that uses classical machine learning to surface hidden errors in noisy system logs.",
    description:
      "A Streamlit app that processes uploaded `.log` or `.csv` files through a classical ML pipeline—text normalization, TF-IDF vectorization, and DBSCAN clustering—to flag outlier patterns, complete with 2D PCA visualization and CSV export.",
    why: "It demonstrates my ability to bridge the gap between raw data and actionable insights. Instead of relying on black-box models, I engineered a deterministic, highly efficient classical ML pipeline that scales well and provides interpretable results, proving I can ship end-to-end data tools from preprocessing to a polished UI.",
    highlights: [
      "Custom regex-based log cleaner that normalizes dynamic values (IPs, UUIDs, numbers) into stable placeholders for consistent clustering.",
      "Configurable TF-IDF vectorization with a 'Fast' (1,000 features) and 'Full' (3,000 features) mode to balance speed and accuracy for large datasets.",
      "Unsupervised anomaly detection using DBSCAN (eps=0.5, min_samples=5) over cosine similarity, treating outlier noise as the primary anomaly signal.",
      "Interactive Streamlit dashboard featuring a PCA-based 2D scatter plot (anomalies highlighted in red) and a one-click CSV export of the labelled dataset.",
    ],
    stack: ["Python", "Streamlit", "scikit-learn", "pandas", "Matplotlib", "Seaborn"],
    category: "side",
    period: "2024",
    links: [
      { label: "GitHub", href: "https://github.com/shhresth/DeepLog" },
    ],
    visual: "deeplog",
  },
  {
    slug: "terminal-profile",
    title: "terminal-profile",
    oneLiner:
      "An interactive terminal-style profile card you can run with `npx shresth`.",
    description:
      "A small npm package that prints a stylized card with my projects, stack, and links — a CLI business card that doubles as a brand experiment.",
    why: "A fun side project that adds personality without pretending to be a flagship — and it makes the rest of the site more memorable.",
    highlights: [
      "Zero-install: runs with `npx shresth`",
      "Interactive prompts with project list and links",
      "TypeScript package, published to npm",
    ],
    stack: ["TypeScript", "Node.js", "npm"],
    category: "side",
    period: "2025",
    links: [
      { label: "GitHub", href: "https://github.com/shhresth/shhresth" },
    ],
    visual: "terminal",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  bullets: string[];
  stack: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Vector Consulting Group",
    role: "Software Engineering Intern",
    period: "Jan 2026 – Present",
    location: "Thane, MH",
    current: true,
    bullets: [
      "Designed a SID-backed JWT authentication architecture enabling immediate session revocation, per-device logout, and secure refresh-token rotation via centralized session validation.",
      "Optimized PostgreSQL query workflows in enterprise manufacturing-planning systems by refactoring complex queries to reduce locking contention and report generation latency.",
      "Built and enhanced Python-based data processing and import pipelines for manufacturing-planning workflows using Django, Pandas, and PostgreSQL.",
      "Refactored shared React dashboard workflows to cut unnecessary API calls and improve frontend responsiveness without changing existing application behavior.",
    ],
    stack: ["Django", "PostgreSQL", "Pandas", "React", "JWT"],
  },
  {
    company: "HarmoCare (formerly Harmonia)",
    role: "Backend Developer Intern",
    period: "Mar 2025 – Jun 2025",
    location: "Mumbai, MH",
    bullets: [
      "Architected backend systems in Node.js and Python designed to support 10,000+ concurrent users for healthcare-oriented applications.",
      "Improved database performance through schema design, indexing, and query tuning across MySQL and PostgreSQL.",
      "Implemented secure authentication and authorization flows using Express.js, JWT, and cryptographic techniques.",
      "Integrated AWS services such as RDS, DynamoDB, and S3 to improve reliability and deployment readiness.",
    ],
    stack: ["Node.js", "Express", "Python", "MySQL", "PostgreSQL", "AWS"],
  },
  {
    company: "Shishya Academy",
    role: "Full Stack Developer Intern",
    period: "Mar 2023 – Jul 2023",
    location: "Mumbai, MH",
    bullets: [
      "Built a production-ready student management platform with React, Node.js, and MongoDB Atlas serving 1,000+ active users daily.",
      "Implemented authentication and role-based access control with JWT to replace paper-based administrative workflows.",
      "Designed RESTful APIs with strong error handling and documentation for easier integration.",
      "Shipped CRUD workflows, file handling, and real-time data sync across the stack.",
    ],
    stack: ["React", "Node.js", "MongoDB Atlas", "JWT"],
  },
];

export const SKILL_GROUPS = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "Solidity", "Java", "C/C++"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "NestJS", "Django", "Flask", "REST APIs", "JWT", "Auth flows"],
  },
  {
    title: "Frontend & Mobile",
    items: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Data & Infra",
    items: ["PostgreSQL", "PostGIS", "Redis", "MongoDB Atlas", "Docker", "AWS", "Azure", "Linux"],
  },
  {
    title: "Specialty",
    items: [
      "Zero-knowledge proofs",
      "Self-Sovereign Identity",
      "Offline sync",
      "Geospatial systems",
      "System design",
      "Database tuning",
    ],
  },
];

export const EDUCATION = [
  {
    school: "Shah and Anchor Kutchhi Engineering College",
    degree: "B.Tech in Information Technology",
    period: "Sep 2023 – Jul 2026",
    detail: "8.95 CGPA",
  },
  {
    school: "Government Polytechnic, Mumbai",
    degree: "Diploma in Computer Engineering",
    period: "Oct 2020 – Aug 2023",
  },
];
