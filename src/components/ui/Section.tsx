import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}

export function Section({ id, children, className, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("relative scroll-mt-20 py-20 md:py-28", className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}
