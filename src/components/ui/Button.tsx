import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group relative inline-flex select-none items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-white text-ink-950 shadow-[0_0_0_1px_rgb(255_255_255/0.2),0_8px_30px_-8px_rgb(139_92_246/0.6)] hover:bg-zinc-100 hover:shadow-[0_0_0_1px_rgb(255_255_255/0.3),0_12px_36px_-8px_rgb(139_92_246/0.8)]",
  secondary: "glass text-zinc-100 hover:border-white/20 hover:bg-white/[0.07]",
  ghost: "text-zinc-300 hover:text-white",
};

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type BtnProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: LinkProps | BtnProps) {
  const { variant = "primary", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], className);

  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
