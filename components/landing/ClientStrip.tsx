import { about } from "@/content/about";

export function ClientStrip() {
  const items = [...about.clients, ...about.clients];
  return (
    <section className="border-b border-ink-400/80 py-10">
      <div className="px-6 pb-6 md:px-12">
        <div className="eyebrow">Selected Clients</div>
      </div>
      <div className="marquee overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {items.map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="px-8 text-[clamp(28px,5vw,56px)] font-medium tracking-tight text-ink-700"
            >
              {c}
              <span className="px-8 text-ink-500">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
