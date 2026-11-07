import { Download, FileX2 } from "lucide-react";
import { Button } from "./Button";
import { useResume } from "@/hooks/useResume";
import { scrollToId } from "@/lib/scroll";

interface ResumeButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

/**
 * Download link that never ends in a dead 404:
 *  - checking  → optimistic, behaves like a normal link
 *  - available → real download
 *  - missing   → routes to the Resume section, which explains what to do
 */
export function ResumeButton({ variant = "secondary", className }: ResumeButtonProps) {
  const { status, href, fileName } = useResume();

  if (status === "missing") {
    return (
      <Button variant={variant} className={className} onClick={() => scrollToId("resume")} aria-describedby="resume-status">
        <FileX2 className="h-4 w-4" aria-hidden="true" />
        Resume
      </Button>
    );
  }

  return (
    <Button variant={variant} className={className} href={href} download={fileName}>
      <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
      Download Resume
    </Button>
  );
}
