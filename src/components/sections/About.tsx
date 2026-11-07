import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { aboutFacts } from "@/config/site";

export default function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <SectionHeading id="about-title" index="01" eyebrow="About" title="Curious by default," accent="practical by habit." />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <p className="text-pretty font-serif text-2xl leading-snug text-white sm:text-3xl md:text-[2rem]">
            I’m a B.Tech Information Technology student, graduating in 2028, drawn to the point where machine learning
            meets real software.
          </p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-400 md:text-lg">
            <p>
              My interests sit across AI engineering, machine learning and software development. I like taking an idea
              from a notebook-sized experiment to something a person can actually open, use and understand.
            </p>
            <p>
              I focus on building practical, useful applications — signal analysis, satellite imagery, code review,
              design tooling and generative AI — and I care as much about a clear interface and clean code as I do
              about the model behind it.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <dl className="glass divide-y divide-white/[0.06] rounded-3xl px-6 py-2">
            {aboutFacts.map((fact) => (
              <div key={fact.label} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-sm text-zinc-400">{fact.label}</dt>
                <dd className="text-right text-sm font-medium text-zinc-100">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
