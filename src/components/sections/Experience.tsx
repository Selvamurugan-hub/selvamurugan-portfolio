import { Award, Briefcase, GraduationCap, Trophy } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { timeline } from "@/config/site";
import type { TimelineItem } from "@/types";

const kindMeta: Record<TimelineItem["kind"], { label: string; Icon: typeof Award }> = {
  education: { label: "Education", Icon: GraduationCap },
  hackathon: { label: "Hackathon project", Icon: Trophy },
  internship: { label: "Internship", Icon: Briefcase },
  achievement: { label: "Achievement", Icon: Award },
};

export default function Experience() {
  const items = timeline.filter((t) => t.verified);

  return (
    <Section id="experience" labelledBy="experience-title">
      <SectionHeading
        id="experience-title"
        index="04"
        eyebrow="Experience & achievements"
        title="Learning in"
        accent="public."
        description="Hackathons and technical activity. Only verified entries appear here — no invented awards, rankings or roles."
      />

      {items.length === 0 ? (
        <p className="glass rounded-2xl p-6 text-zinc-400" role="status">
          Verified experience and achievements will appear here.
        </p>
      ) : (
        <ol className="relative ml-3 border-l border-white/10 sm:ml-4">
          {items.map((entry, i) => {
            const { label, Icon } = kindMeta[entry.kind];
            return (
              <Reveal as="li" key={entry.id} delay={i * 0.05} className="relative list-none pb-10 pl-8 last:pb-0 sm:pl-10">
                <span
                  className="absolute -left-[17px] top-1 grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-ink-900 text-violet-300"
                  aria-hidden="true"
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div className="glass rounded-2xl p-5 transition hover:border-white/15 sm:p-6">
                  <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                    <span className="rounded-full bg-violet-500/15 px-2.5 py-1 font-medium text-violet-200">{label}</span>
                    {entry.period && <span className="font-mono text-zinc-400">{entry.period}</span>}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-white">{entry.title}</h3>
                  <p className="text-sm text-zinc-400">{entry.org}</p>
                  <p className="mt-3 text-pretty leading-relaxed text-zinc-300">{entry.description}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      )}
    </Section>
  );
}
