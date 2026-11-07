import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  id?: string;
  index: string;
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
}

export function SectionHeading({ id, index, eyebrow, title, accent, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl md:mb-16">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-zinc-400">
        <span className="text-violet-400">{index}</span>
        <span className="h-px w-8 bg-white/20" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}{" "}
        {accent && <span className="font-serif font-normal italic text-gradient">{accent}</span>}
      </h2>
      {description && <p className="mt-5 text-pretty text-base leading-relaxed text-zinc-400 md:text-lg">{description}</p>}
    </Reveal>
  );
}
