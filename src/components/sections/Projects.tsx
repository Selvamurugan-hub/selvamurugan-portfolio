import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { ProjectVisual } from "@/components/visuals/ProjectVisual";
import { projects, site } from "@/config/site";
import type { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasLinks = Boolean(project.repoUrl || project.demoUrl);

  return (
    <Reveal as="li" delay={(index % 2) * 0.08} className="list-none">
      <article className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-white/20">
        <div className="relative aspect-[400/220] overflow-hidden border-b border-white/[0.06]">
          <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
            <ProjectVisual kind={project.visual} />
          </div>
          <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-ink-950/80 px-3 py-1 text-xs text-zinc-200">
            {project.category}
          </span>
          <span className="absolute right-4 top-4 font-mono text-xs text-zinc-400" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
          <p className="mt-2.5 text-pretty leading-relaxed text-zinc-400">{project.summary}</p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-md bg-white/[0.05] px-2.5 py-1 font-mono text-xs text-zinc-300">
                {tag}
              </li>
            ))}
          </ul>

          {hasLinks && (
            <div className="mt-6 flex flex-wrap gap-4 border-t border-white/[0.06] pt-5 text-sm">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-200 transition hover:text-white"
                >
                  <GithubIcon className="h-4 w-4" /> Source
                  <span className="sr-only"> for {project.title} (opens in a new tab)</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-200 transition hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live demo
                  <span className="sr-only"> of {project.title} (opens in a new tab)</span>
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <Section id="projects" labelledBy="projects-title">
      <SectionHeading
        id="projects-title"
        index="03"
        eyebrow="Featured projects"
        title="Things I’ve"
        accent="built."
        description="Six projects across signal processing, computer vision, developer tooling and generative AI."
      />

      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </ul>

      <Reveal className="mt-12 flex justify-center">
        <a
          href={site.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="glass group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm text-zinc-200 transition hover:border-white/20 hover:text-white"
        >
          <GithubIcon className="h-4 w-4" />
          See repositories on GitHub
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </Reveal>
    </Section>
  );
}
