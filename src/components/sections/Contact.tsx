import { useCallback, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { site } from "@/config/site";

type CopyState = "idle" | "copied" | "failed";

export default function Contact() {
  const [copy, setCopy] = useState<CopyState>("idle");
  const isDev = import.meta.env.DEV;

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopy("copied");
    } catch {
      setCopy("failed");
    }
    window.setTimeout(() => setCopy("idle"), 2200);
  }, []);

  const cards = [
    { label: "GitHub", handle: "Selvamurugan-hub", href: site.links.github, Icon: GithubIcon },
    { label: "LinkedIn", handle: "Selvamurugan S", href: site.links.linkedin, Icon: LinkedinIcon },
  ];

  return (
    <Section id="contact" labelledBy="contact-title" className="pb-16 md:pb-24">
      <SectionHeading
        id="contact-title"
        index="06"
        eyebrow="Contact"
        title="Let’s build something"
        accent="useful."
        description="Open to internship opportunities, collaborations and conversations about AI and software."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {cards.map(({ label, handle, href, Icon }, i) => (
          <Reveal key={label} delay={i * 0.06}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group flex h-full items-center justify-between gap-4 rounded-3xl p-6 transition duration-300 hover:-translate-y-0.5 hover:border-white/20"
            >
              <span className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.06] text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-medium text-white">{label}</span>
                  <span className="block text-sm text-zinc-400">{handle}</span>
                </span>
              </span>
              <ArrowUpRight
                className="h-5 w-5 text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                aria-hidden="true"
              />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Reveal>
        ))}

        {site.email ? (
          <Reveal delay={0.12} className="md:col-span-2">
            <div className="glass flex flex-col gap-4 rounded-3xl p-6 sm:flex-row sm:items-center sm:justify-between">
              <a href={`mailto:${site.email}`} className="flex min-w-0 items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-sky-400/20 text-white">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-medium text-white">Email</span>
                  <span className="block truncate text-sm text-zinc-300 hover:text-white">{site.email}</span>
                </span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm text-zinc-100 transition hover:bg-white/10"
              >
                {copy === "copied" ? <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                {copy === "copied" ? "Copied" : copy === "failed" ? "Copy failed" : "Copy email"}
              </button>
              <span className="sr-only" role="status" aria-live="polite">
                {copy === "copied" ? "Email address copied to clipboard" : copy === "failed" ? "Could not copy email address" : ""}
              </span>
            </div>
          </Reveal>
        ) : (
          isDev && (
            <Reveal delay={0.12} className="md:col-span-2">
              <p className="rounded-3xl border border-dashed border-amber-400/30 bg-amber-400/[0.05] p-5 text-sm text-amber-100/90">
                Developer note (hidden in production): no email configured. Set{" "}
                <code className="rounded bg-black/30 px-1.5 py-0.5 font-mono text-xs">VITE_CONTACT_EMAIL</code> in{" "}
                <code className="rounded bg-black/30 px-1.5 py-0.5 font-mono text-xs">.env.local</code> to show an email card.
              </p>
            </Reveal>
          )
        )}
      </div>
    </Section>
  );
}
