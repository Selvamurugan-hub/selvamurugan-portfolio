/** Shown while a lazy-loaded section's code is downloading. */
export function SectionSkeleton() {
  return (
    <div className="container-page py-24" role="status" aria-live="polite">
      <span className="sr-only">Loading section…</span>
      <div className="relative max-w-2xl space-y-4 overflow-hidden" aria-hidden="true">
        <div className="h-3 w-32 rounded-full bg-white/[0.06]" />
        <div className="h-9 w-3/4 rounded-xl bg-white/[0.06]" />
        <div className="h-4 w-full rounded-full bg-white/[0.04]" />
        <div className="h-4 w-2/3 rounded-full bg-white/[0.04]" />
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      </div>
    </div>
  );
}
