/** Fixed ambient backdrop. Pure CSS gradients — no canvas, no blur filters. */
export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      <div className="grid-mask absolute inset-0" />
      <div
        className="orb animate-drift -left-[10%] -top-[18%] h-[60vmax] w-[60vmax] opacity-70"
        style={{ background: "radial-gradient(closest-side, rgb(139 92 246 / 0.28), transparent)" }}
      />
      <div
        className="orb animate-drift-alt -right-[14%] top-[8%] h-[52vmax] w-[52vmax] opacity-60"
        style={{ background: "radial-gradient(closest-side, rgb(56 189 248 / 0.18), transparent)" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950 to-transparent" />
    </div>
  );
}
