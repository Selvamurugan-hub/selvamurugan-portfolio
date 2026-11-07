import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups } from "@/config/site";
import { cn } from "@/lib/cn";

export default function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title">
      <SectionHeading
        id="skills-title"
        index="02"
        eyebrow="Technical skills"
        title="The toolkit I"
        accent="build with."
        description="Grouped by what they’re used for. No percentages — the projects below are the evidence."
      />

      <ul className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal as="li" key={group.title} delay={i * 0.05} className={cn("list-none", group.span)}>
            <article className="glass group relative h-full overflow-hidden rounded-3xl p-6 transition duration-300 hover:-translate-y-0.5 hover:border-white/15">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(closest-side, rgb(139 92 246 / 0.22), transparent)" }}
              />
              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/25 to-sky-400/15 text-violet-200 ring-1 ring-inset ring-white/10">
                    <group.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-medium text-white">{group.title}</h3>
                    <p className="text-sm text-zinc-400">{group.blurb}</p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-zinc-200 transition-colors hover:border-violet-400/40 hover:bg-violet-500/10"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
