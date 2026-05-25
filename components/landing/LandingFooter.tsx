import { site } from "@/content/site";

export function LandingFooter() {
  return (
    <footer className="border-b border-ink-400/80 px-6 py-16 md:px-12 md:py-24">
      <div className="eyebrow">Have a project in mind?</div>
      <a
        href={`mailto:${site.email}`}
        data-cursor="link"
        className="mt-4 block text-[clamp(40px,9vw,148px)] font-medium leading-[0.95] tracking-tight text-ink-1000 transition-colors hover:text-ink-700"
      >
        {site.email}
        <span className="text-ink-700"> ↗</span>
      </a>
      <div className="mt-12 grid grid-cols-2 gap-8 border-t border-ink-400/80 pt-8 text-[12.5px] text-ink-800 md:grid-cols-4">
        <div>
          <div className="eyebrow">Location</div>
          <div className="mt-2 text-ink-1000">{site.location}</div>
        </div>
        <div>
          <div className="eyebrow">Studio</div>
          <div className="mt-2 text-ink-1000">{site.fullName}</div>
        </div>
        <div>
          <div className="eyebrow">Year</div>
          <div className="mt-2 font-mono text-ink-1000">© 2026</div>
        </div>
        <div>
          <div className="eyebrow">Social</div>
          <ul className="mt-2 space-y-1">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-1000 hover:text-ink-700"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
