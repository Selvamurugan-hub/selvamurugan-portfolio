import { Download, FileText, Loader2, Mail } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { LinkedinIcon } from "@/components/ui/BrandIcons";
import { useResume } from "@/hooks/useResume";
import { site } from "@/config/site";

export default function Resume() {
  const { status, href, fileName } = useResume();
  const isDev = import.meta.env.DEV;

  return (
    <Section id="resume" labelledBy="resume-title">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full"
            style={{ background: "radial-gradient(closest-side, rgb(139 92 246 / 0.3), transparent)" }}
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full"
            style={{ background: "radial-gradient(closest-side, rgb(56 189 248 / 0.16), transparent)" }}
          />

          <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-zinc-400">
                <span className="text-violet-400">05</span>
                <span className="h-px w-8 bg-white/20" aria-hidden="true" />
                Resume
              </p>
              <h2 id="resume-title" className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                Want the <span className="font-serif font-normal italic text-gradient">full picture?</span>
              </h2>
              <p className="mt-5 max-w-xl text-pretty leading-relaxed text-zinc-400 md:text-lg">
                A concise PDF with my education, skills and projects — ready to download.
              </p>

              <div className="mt-8" id="resume-status" aria-live="polite">
                {status === "checking" && (
                  <Button variant="secondary" disabled>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Checking resume…
                  </Button>
                )}

                {status === "available" && (
                  <Button href={href} download={fileName}>
                    <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                    Download Resume (PDF)
                  </Button>
                )}

                {status === "missing" && (
                  <div className="max-w-xl rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] p-5" role="status">
                    <p className="font-medium text-amber-100">The resume PDF isn’t available right now.</p>
                    {isDev ? (
                      <p className="mt-2 text-sm leading-relaxed text-amber-100/80">
                        Developer note: add your PDF at <code className="rounded bg-black/30 px-1.5 py-0.5 font-mono text-xs">public{href}</code>{" "}
                        or set <code className="rounded bg-black/30 px-1.5 py-0.5 font-mono text-xs">VITE_RESUME_PATH</code> in{" "}
                        <code className="rounded bg-black/30 px-1.5 py-0.5 font-mono text-xs">.env.local</code>.
                      </p>
                    ) : (
                      <p className="mt-2 text-sm leading-relaxed text-amber-100/80">
                        Please reach out on LinkedIn{site.email ? " or by email" : ""} and I’ll share it directly.
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Button variant="secondary" href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="!px-4 !py-2">
                        <LinkedinIcon className="h-4 w-4" /> LinkedIn
                      </Button>
                      {site.email && (
                        <Button variant="secondary" href={`mailto:${site.email}`} className="!px-4 !py-2">
                          <Mail className="h-4 w-4" aria-hidden="true" /> Email
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div aria-hidden="true" className="relative mx-auto hidden w-44 rotate-3 md:block">
              <div className="rounded-xl border border-white/15 bg-ink-850 p-4 shadow-2xl shadow-violet-950/40">
                <FileText className="mb-4 h-6 w-6 text-violet-300" />
                <div className="space-y-2">
                  <div className="h-2 w-3/4 rounded bg-white/25" />
                  <div className="h-1.5 w-full rounded bg-white/10" />
                  <div className="h-1.5 w-5/6 rounded bg-white/10" />
                  <div className="h-1.5 w-2/3 rounded bg-white/10" />
                  <div className="mt-4 h-2 w-1/2 rounded bg-sky-300/40" />
                  <div className="h-1.5 w-full rounded bg-white/10" />
                  <div className="h-1.5 w-4/5 rounded bg-white/10" />
                </div>
                <p className="mt-5 font-mono text-[10px] text-zinc-400">PDF</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
