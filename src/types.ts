import type { LucideIcon } from "lucide-react";

export type VisualKind = "signal" | "satellite" | "cad" | "review" | "travel" | "imagegen";

export interface SkillGroup {
  title: string;
  blurb: string;
  icon: LucideIcon;
  skills: string[];
  /** Tailwind col-span helper for the bento layout. */
  span?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  visual: VisualKind;
  /** Only add real, working URLs. Buttons render only when these are set. */
  repoUrl?: string;
  demoUrl?: string;
}

export interface TimelineItem {
  id: string;
  kind: "education" | "hackathon" | "internship" | "achievement";
  title: string;
  org: string;
  period?: string;
  description: string;
  /**
   * Safety switch: items render only when `verified` is true.
   * Never add awards, rankings or work experience you cannot back up.
   */
  verified: boolean;
}
