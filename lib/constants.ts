export type Project = {
  title: string;
  slug: string;
  category: string;
  role: string;
  impact: string;
  description: string;
  stack: string[];
  accent: string;
  liveUrl?: string;
  repoUrl?: string;
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  type: string;
  summary: string;
  achievements: string[];
};

export const profile = {
  name: "Muhammad Nurhuda Rusardi",
  shortName: "Huda Rusardi",
  role: "Intelligent Automation Engineer · AI Developer · QA Specialist",
  valueProposition:
    "I turn operational bottlenecks into reliable automation, AI workflows, and high-quality digital products.",
  email: "m.hudaardi@gmail.com",
  phone: "+62 812 3449 9921",
  location: "Jakarta Timur, Indonesia",
  availability: "Open to meaningful product and automation opportunities",
  linkedinUrl: "",
  githubUrl: "",
};

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

export const highlights = [
  { value: "4+", label: "years across the SDLC" },
  { value: "1,000+", label: "daily transactions automated" },
  { value: "100+", label: "man-hours saved monthly" },
  { value: "25–35%", label: "runtime error reduction" },
];

export const strengths = [
  {
    index: "01",
    title: "Performance-first",
    description: "Designing workflows and products that reduce friction, errors, and operational waste.",
  },
  {
    index: "02",
    title: "Systems-minded",
    description: "Connecting APIs, data, orchestration, observability, and people into one dependable flow.",
  },
  {
    index: "03",
    title: "Quality-driven",
    description: "Combining exploratory QA with automation to reveal edge cases before they reach users.",
  },
];

export const projects: Project[] = [
  {
    title: "Intelligent QC System",
    slug: "intelligent-qc-system",
    category: "AI quality control",
    role: "AI Developer · Systems Engineer",
    impact: "Scoring human-agent interactions with traceable AI insights",
    description:
      "An event-driven quality control workflow that evaluates agent interactions and exposes actionable patterns for operational teams.",
    stack: ["NestJS", "Gemini LLM", "RabbitMQ", "Langfuse"],
    accent: "violet",
  },
  {
    title: "Document AI Pipeline",
    slug: "document-ai-pipeline",
    category: "Document intelligence",
    role: "Automation & AI Developer",
    impact: "Turning unstructured documents into higher-throughput workflows",
    description:
      "A distributed Document AI pipeline deployed on GCP, combining Temporal orchestration with Gemini-powered extraction.",
    stack: ["GCP", "Temporal", "Gemini", "Python"],
    accent: "lime",
  },
  {
    title: "Conversational Agent Platform",
    slug: "conversational-agent-platform",
    category: "Agentic AI",
    role: "Backend & AI Developer",
    impact: "Creating persistent, context-aware conversational experiences",
    description:
      "A chatbot platform designed around session continuity, API integrations, and an extensible agentic workflow foundation.",
    stack: ["NestJS", "TypeScript", "Google ADK", "Redis", "MySQL"],
    accent: "cyan",
  },
  {
    title: "Automation Operations Suite",
    slug: "automation-operations-suite",
    category: "RPA & optimization",
    role: "Intelligent Automation Engineer",
    impact: "Automating 1,000+ daily transactions with fewer runtime errors",
    description:
      "A collection of Power Automate and UiPath workflows built from process mapping through deployment and continuous improvement.",
    stack: ["Power Automate", "UiPath", "AI Builder", "Process Mapping"],
    accent: "orange",
  },
];

export const skillGroups = [
  {
    title: "AI & Intelligent Automation",
    items: ["Power Automate", "UiPath", "n8n", "AI Builder", "Prompt Engineering", "Gemini", "OpenAI", "Langfuse"],
  },
  {
    title: "Engineering",
    items: ["TypeScript", "JavaScript", "Python", "NestJS", "Laravel", "CodeIgniter", "MySQL", "Redis", "REST API"],
  },
  {
    title: "Quality & Delivery",
    items: ["Hybrid QA", "Robot Framework", "Regression Testing", "Test Case Design", "JIRA", "Agile", "SDLC Management"],
  },
];

export const experiences: Experience[] = [
  {
    period: "Mar 2024 — Present",
    role: "Intelligent Automation & AI Developer",
    company: "PT. Infomedia Nusantara",
    type: "Contract",
    summary: "Building automation, conversational AI, Document AI, and quality-control systems that connect technical delivery to business efficiency.",
    achievements: [
      "Automated workflows for 1,000+ daily transactions, saving 100+ man-hours monthly.",
      "Reduced runtime errors by 25–35% through process analysis and reliable workflow design.",
      "Developed agentic chatbots and event-driven QC systems with NestJS, Gemini, Redis, RabbitMQ, and Langfuse.",
    ],
  },
  {
    period: "May 2023 — Oct 2023",
    role: "Quality Assurance Engineer",
    company: "Refactory",
    type: "Apprenticeship",
    summary: "Established a hybrid QA approach that combined manual investigation with automation-led regression coverage.",
    achievements: [
      "Uncovered 3–5 critical edge-case bugs missed by automated scripts.",
      "Reduced regression testing time by 30–40% with an automation suite.",
      "Improved average bug time-to-resolution by 15% through clearer defect reporting.",
    ],
  },
  {
    period: "Oct 2022 — Dec 2022",
    role: "Web Developer",
    company: "Ariwa Informatika",
    type: "Contract project",
    summary: "Translated complex Figma concepts into resilient, responsive web experiences in close collaboration with backend teams.",
    achievements: [
      "Translated 20+ Figma designs into pixel-accurate responsive pages.",
      "Boosted Lighthouse performance and reduced navigation issues by 30%.",
      "Improved cross-browser reliability to 90% and reduced integration bugs by 30%.",
    ],
  },
  {
    period: "Sep 2022 — Nov 2022",
    role: "Data Enumerator",
    company: "BPS Statistics Indonesia — Kediri Municipality",
    type: "Contract project",
    summary: "Created and documented structured data flows to support system architecture and collection quality.",
    achievements: ["Improved consistency and traceability of data collection workflows."],
  },
  {
    period: "Jun 2020 — Jul 2020",
    role: "Web Developer",
    company: "Customs and Excise Office (KPPBC)",
    type: "Internship",
    summary: "Built and maintained a responsive CodeIgniter application with API and server-side integration.",
    achievements: ["Handled testing, debugging, maintenance, and feedback-led product improvements."],
  },
];

export const certifications = [
  "UiPath — Introduction to Automation",
  "UiPath — Explore Automation Development with UiPath Studio",
  "UiPath — UiPath Studio Web Overview",
  "UiPath — Build Your First Process with Studio",
  "UiPath — Variables, Constants and Arguments in Studio",
  "Coursera — Data Analytics Fundamentals",
];

export const education = {
  institution: "University of Brawijaya",
  degree: "Bachelor of Computer Science",
  period: "2017 — 2021",
};

export const navigation = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
export const allProjectSlugs = projects.map((project) => project.slug);

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Intelligent Automation Engineer and AI Developer",
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta Timur",
    addressCountry: "ID",
  },
  sameAs: [profile.linkedinUrl, profile.githubUrl].filter(Boolean),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${profile.name} — Portfolio`,
  description: profile.valueProposition,
};

export const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(" ");

export type IconName = "arrow-up-right" | "mail" | "map-pin" | "github" | "linkedin" | "download" | "menu" | "x" | "sparkles";
