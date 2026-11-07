import { site } from "@/config/site";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container-page flex flex-col items-center justify-between gap-5 text-sm text-zinc-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </p>
        <p className="order-3 text-xs sm:order-none">Built with React, TypeScript, Tailwind CSS &amp; Framer Motion</p>
        <div className="flex items-center gap-4">
          <a href={site.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className="transition hover:text-white">
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className="transition hover:text-white">
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
