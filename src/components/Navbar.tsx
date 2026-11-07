import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/config/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToId } from "@/lib/scroll";
import { cn } from "@/lib/cn";

const ids = navItems.map((n) => n.id);

export function Navbar() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = useCallback((id: string) => {
    setOpen(false);
    // Wait a frame so the body scroll-lock is released before scrolling.
    requestAnimationFrame(() => scrollToId(id));
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Primary"
        className={cn(
          "glass-blur mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full pl-4 pr-2 transition-shadow duration-300",
          scrolled && "shadow-[0_10px_40px_-12px_rgb(0_0_0/0.8)]",
        )}
      >
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            history.replaceState(null, "", window.location.pathname);
          }}
          className="flex items-center gap-2.5 text-sm font-semibold text-white"
          aria-label={`${site.name} — back to top`}
        >
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-sky-400 text-[11px] font-bold text-ink-950">
            {site.initials}
          </span>
          <span className="hidden sm:inline">{site.shortName}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(item.id);
                }}
                aria-current={active === item.id ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                  active === item.id ? "text-white" : "text-zinc-400 hover:text-white",
                )}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go("contact");
            }}
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-950 transition hover:bg-zinc-200 sm:inline-block"
          >
            Let’s talk
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full text-zinc-200 transition hover:bg-white/10 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="glass-blur mx-auto mt-2 max-w-6xl rounded-3xl p-2 md:hidden"
          >
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(item.id);
                    }}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3.5 text-base transition-colors",
                      active === item.id ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/5",
                    )}
                  >
                    {item.label}
                    <span className="font-mono text-xs text-zinc-500" aria-hidden="true">
                      0{navItems.findIndex((n) => n.id === item.id) + 1}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
