import { Braces, Brain, Database, GitBranch, Layers } from "lucide-react";
import type { Project, SkillGroup, TimelineItem } from "@/types";

/* ──────────────────────────────────────────────────────────────
 *  Single source of truth for all portfolio content.
 *  Edit this file — components never hard-code personal data.
 * ────────────────────────────────────────────────────────────── */

export const site = {
  name: "Selvamurugan S.",
  shortName: "Selvamurugan",
  initials: "SS",
  roles: ["AI/ML Engineer", "Python Developer", "Software Developer"],
  headline: {
    lead: "Building",
    accent: "Intelligent Solutions",
    tail: "with AI & Engineering.",
  },
  description:
    "B.Tech Information Technology student (class of 2028) who builds practical, well-crafted applications across machine learning, computer vision and full-stack software.",
  availability: "Seeking AI / ML engineering internships",
  education: "B.Tech Information Technology · 2028",
  location: "Cuddalore, Tamil Nadu, India",
  links: {
    github: "https://github.com/Selvamurugan-hub",
    linkedin: "https://www.linkedin.com/in/selvamurugans6972583a5/",
  },
  /** Set VITE_CONTACT_EMAIL in .env.local. Never hard-code a guessed address. */
  email: (import.meta.env.VITE_CONTACT_EMAIL ?? "").trim(),
  /** Set VITE_RESUME_PATH to change where the PDF is served from. */
  resumePath: (import.meta.env.VITE_RESUME_PATH ?? "/resume/Selvamurugan_S_Resume.pdf").trim(),
  resumeFileName: "Selvamurugan_S_Resume.pdf",
} as const;

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
] as const;

export const aboutFacts = [
  { label: "Education", value: "B.Tech, Information Technology" },
  { label: "Graduating", value: "2028" },
  { label: "Based in", value: "Cuddalore, Tamil Nadu" },
  { label: "Focus", value: "AI engineering · ML · Software" },
] as const;

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    blurb: "The foundations I build everything on.",
    icon: Braces,
    skills: ["Python", "JavaScript", "Java", "SQL", "HTML", "CSS"],
    span: "md:col-span-2",
  },
  {
    title: "AI & Vision",
    blurb: "Models and computer vision.",
    icon: Brain,
    skills: ["PyTorch", "OpenCV"],
  },
  {
    title: "Frameworks",
    blurb: "Interfaces and APIs.",
    icon: Layers,
    skills: ["React.js", "Flask", "FastAPI"],
  },
  {
    title: "Databases & Backend",
    blurb: "Storage and managed services.",
    icon: Database,
    skills: ["MySQL", "SQLite", "Supabase"],
  },
  {
    title: "Tooling",
    blurb: "Version control and collaboration.",
    icon: GitBranch,
    skills: ["Git", "GitHub"],
  },
];

export const projects: Project[] = [
  {
    id: "ntro-signal",
    title: "NTRO Signal Analysis Assistant",
    category: "Signal Processing",
    summary:
      "Analyses IQ and WAV signal files using FFT and spectrograms, with anomaly detection to surface unusual activity.",
    tags: ["IQ / WAV", "FFT", "Spectrograms", "Anomaly detection"],
    visual: "signal",
  },
  {
    id: "satquery",
    title: "SatQuery AI",
    category: "Computer Vision",
    summary: "AI-powered analysis of satellite imagery, built to make remote-sensing data easier to explore and query.",
    tags: ["Satellite imagery", "AI analysis"],
    visual: "satellite",
  },
  {
    id: "buildwise",
    title: "BuildWise AI",
    category: "Full-stack · Design",
    summary: "A web app for CAD-style design and construction estimation, built around an interactive canvas editor.",
    tags: ["React", "Vite", "Tailwind CSS", "Zustand", "React-Konva"],
    visual: "cad",
  },
  {
    id: "buildmate",
    title: "BuildMate AI",
    category: "Developer Tools",
    summary:
      "An AI-powered code review assistant that pairs static analysis with model-based review to explain bugs clearly.",
    tags: ["Python", "FastAPI", "React", "Static analysis"],
    visual: "review",
  },
  {
    id: "tastetrail",
    title: "TasteTrail AI",
    category: "Applied AI",
    summary: "A taste-based AI travel planner that shapes itineraries around what you actually enjoy.",
    tags: ["Travel planning", "Personalisation", "AI"],
    visual: "travel",
  },
  {
    id: "genimage",
    title: "GenImage AI",
    category: "Generative AI",
    summary: "An AI image generation application that turns text prompts into visuals.",
    tags: ["Image generation", "Generative AI"],
    visual: "imagegen",
  },
];

/**
 * Only verified entries are displayed. Hackathon items below record the
 * events each project was built for — no results, rankings or awards are
 * claimed. Add outcomes ONLY once they are confirmed.
 */
export const timeline: TimelineItem[] = [
  {
    id: "edu",
    kind: "education",
    title: "B.Tech, Information Technology",
    org: "Undergraduate programme",
    period: "Graduating 2028",
    description: "Studying information technology with a focus on AI, machine learning and software engineering.",
    verified: true,
  },
  {
    id: "nebius",
    kind: "hackathon",
    title: "Nebius × NVIDIA Global AI Hackathon 2026",
    org: "Coding & Agentic Engineering track",
    period: "2026",
    description:
      "Developed BuildMate AI, a Python code-review agent combining static analysis with AI review, using a FastAPI backend and React frontend.",
    verified: true,
  },
  {
    id: "climatechain",
    kind: "hackathon",
    title: "IEEE ClimateChain Global Hackathon 2026",
    org: "Climate Data & Environmental Monitoring track",
    period: "2026",
    description:
      "Developed ClimateProof AI, a project for climate-data anomaly detection with hash-chain based record verification.",
    verified: true,
  },
  {
    id: "forgehacks",
    kind: "hackathon",
    title: "ForgeHacks Online 2026",
    org: "AI + Cybersecurity track",
    period: "2026",
    description:
      "Developed ShieldMail AI, a phishing-analysis tool using transparent, rule-based scoring with a React and FastAPI stack.",
    verified: true,
  },
];
