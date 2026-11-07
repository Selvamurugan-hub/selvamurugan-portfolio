import { lazy, Suspense } from "react";
import { MotionConfig } from "framer-motion";
import { Background } from "@/components/ui/Background";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { SectionSkeleton } from "@/components/ui/SectionSkeleton";
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import { ResumeProvider } from "@/hooks/useResume";

// Below-the-fold sections are code-split to keep first paint fast on low-spec devices.
const About = lazy(() => import("@/components/sections/About"));
const Skills = lazy(() => import("@/components/sections/Skills"));
const Projects = lazy(() => import("@/components/sections/Projects"));
const Experience = lazy(() => import("@/components/sections/Experience"));
const Resume = lazy(() => import("@/components/sections/Resume"));
const Contact = lazy(() => import("@/components/sections/Contact"));
const Footer = lazy(() => import("@/components/sections/Footer"));

function Lazy({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <ErrorBoundary label={label}>
      <Suspense fallback={<SectionSkeleton />}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ResumeProvider>
        <a
          href="#about"
          className="sr-only z-[70] rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Background />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <Lazy label="About"><About /></Lazy>
          <Lazy label="Skills"><Skills /></Lazy>
          <Lazy label="Projects"><Projects /></Lazy>
          <Lazy label="Experience"><Experience /></Lazy>
          <Lazy label="Resume"><Resume /></Lazy>
          <Lazy label="Contact"><Contact /></Lazy>
        </main>
        <Lazy label="Footer"><Footer /></Lazy>
      </ResumeProvider>
    </MotionConfig>
  );
}
