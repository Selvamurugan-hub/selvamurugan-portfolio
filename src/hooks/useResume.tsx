import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { site } from "@/config/site";

export type ResumeStatus = "checking" | "available" | "missing";

interface ResumeContextValue {
  status: ResumeStatus;
  href: string;
  fileName: string;
}

const ResumeContext = createContext<ResumeContextValue | null>(null);

async function probe(url: string, signal: AbortSignal): Promise<boolean> {
  try {
    let res = await fetch(url, { method: "HEAD", signal, cache: "no-store" });
    if (res.status === 405 || res.status === 501) {
      res = await fetch(url, { method: "GET", signal, cache: "no-store" });
    }
    if (!res.ok) return false;
    // SPA hosts often answer 200 + index.html for unknown paths: verify it's a PDF.
    const type = (res.headers.get("content-type") ?? "").toLowerCase();
    return type.includes("pdf") || type.includes("octet-stream");
  } catch {
    return false;
  }
}

/** Checks once whether the configured resume file really exists. */
export function ResumeProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<ResumeStatus>("checking");

  useEffect(() => {
    const controller = new AbortController();
    probe(site.resumePath, controller.signal).then((ok) => {
      if (!controller.signal.aborted) setStatus(ok ? "available" : "missing");
    });
    return () => controller.abort();
  }, []);

  const value = useMemo<ResumeContextValue>(
    () => ({ status, href: site.resumePath, fileName: site.resumeFileName }),
    [status],
  );

  return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
}

export function useResume(): ResumeContextValue {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error("useResume must be used inside <ResumeProvider>");
  return ctx;
}
