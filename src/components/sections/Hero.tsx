import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { site } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { scrollToId } from "@/lib/scroll";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const socials = [
  { label: "GitHub", href: site.links.github, Icon: GithubIcon },
  { label: "LinkedIn", href: site.links.linkedin, Icon: LinkedinIcon },
];

const facts = [
  { Icon: GraduationCap, label: "Education", value: site.education },
  { Icon: MapPin, label: "Location", value: site.location },
  { Icon: Sparkles, label: "Focus", value: "AI · ML · Software" },
];

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative flex min-h-[100svh] items-center pb-16 pt-32 md:pt-36">
      <div className="container-page">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.p
            variants={item}
            className="glass mb-8 inline-flex items-center gap-2.5 rounded-full py-1.5 pl-2.5 pr-4 text-xs text-zinc-300 sm:text-[13px]"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {site.availability}
          </motion.p>

          <motion.p variants={item} className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 sm:text-sm">
            {site.roles.join("  ·  ")}
          </motion.p>

          <motion.h1
            id="hero-title"
            variants={item}
            className="text-balance text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            {site.headline.lead}{" "}
            <span className="font-serif font-normal italic text-gradient">{site.headline.accent}</span>{" "}
            {site.headline.tail}
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg md:text-xl">
            <span className="text-zinc-100">{site.name}</span> — {site.description}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <Button onClick={() => scrollToId("projects")}>
              Explore Projects
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </Button>
            <ResumeButton variant="secondary" />
            <span className="mx-1 hidden h-6 w-px bg-white/10 sm:block" aria-hidden="true" />
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (opens in a new tab)`}
                className="glass grid h-11 w-11 place-items-center rounded-full text-zinc-300 transition hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid gap-3 sm:grid-cols-3 md:mt-24"
        >
          {facts.map(({ Icon, label, value }) => (
            <div key={label} className="glass-blur flex items-center gap-3.5 rounded-2xl px-4 py-3.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-violet-300">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <dt className="text-[11px] uppercase tracking-wider text-zinc-400">{label}</dt>
                <dd className="truncate text-sm text-zinc-100">{value}</dd>
              </div>
            </div>
          ))}
        </motion.dl>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          scrollToId("about");
        }}
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-zinc-400 transition hover:text-white lg:flex"
      >
        Scroll <ArrowUpRight className="h-3.5 w-3.5 rotate-[135deg] motion-safe:animate-float" aria-hidden="true" />
      </a>
    </section>
  );
}
