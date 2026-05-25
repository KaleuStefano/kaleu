import { about } from "@/content/about";
import { site } from "@/content/site";
import { ScrollPane } from "@/components/ui/ScrollPane";
import { PageTransition } from "@/components/ui/PageTransition";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <ScrollPane>
      <PageTransition>
        <article className="pb-20">
          <header className="border-b border-ink-400/80 px-6 pt-12 pb-12 md:px-12 md:pt-16 md:pb-16">
            <div className="eyebrow">About</div>
            <h1 className="h-display mt-4 text-[clamp(40px,8vw,120px)] text-ink-1000">
              {site.fullName}.
            </h1>
            <p className="mt-8 max-w-3xl text-[clamp(17px,1.6vw,22px)] leading-relaxed text-ink-900">
              {about.intro}
            </p>
          </header>

          <section
            id="experience"
            className="grid grid-cols-1 gap-12 border-b border-ink-400/80 px-6 py-12 md:grid-cols-12 md:gap-16 md:px-12 md:py-20"
          >
            <div className="md:col-span-3">
              <div className="eyebrow">Bio</div>
            </div>
            <div className="md:col-span-9">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="mt-0 max-w-3xl text-[16px] leading-relaxed text-ink-800 [&+p]:mt-5"
                >
                  {p}
                </p>
              ))}
            </div>
          </section>

          <section
            className="grid grid-cols-1 gap-12 border-b border-ink-400/80 px-6 py-12 md:grid-cols-12 md:gap-16 md:px-12 md:py-20"
          >
            <div className="md:col-span-3">
              <div className="eyebrow">Capabilities</div>
            </div>
            <ul className="md:col-span-9 grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-3">
              {about.capabilities.map((c) => (
                <li
                  key={c}
                  className="flex items-baseline gap-3 text-[15px] text-ink-1000"
                >
                  <span className="font-mono text-[11px] text-ink-700">
                    /
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </section>

          <section
            id="software"
            className="grid grid-cols-1 gap-12 border-b border-ink-400/80 px-6 py-12 md:grid-cols-12 md:gap-16 md:px-12 md:py-20"
          >
            <div className="md:col-span-3">
              <div className="eyebrow">Software stack</div>
            </div>
            <div className="md:col-span-9">
              <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {about.software.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-center justify-between rounded-md border border-ink-400/80 px-4 py-3"
                  >
                    <span className="text-[14px] font-medium text-ink-1000">
                      {s.name}
                    </span>
                    <span className="font-mono text-[10.5px] uppercase tracking-wider text-ink-700">
                      {s.group}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="awards"
            className="grid grid-cols-1 gap-12 border-b border-ink-400/80 px-6 py-12 md:grid-cols-12 md:gap-16 md:px-12 md:py-20"
          >
            <div className="md:col-span-3">
              <div className="eyebrow">Awards</div>
            </div>
            <ul className="md:col-span-9 divide-y divide-ink-400/80">
              {about.awards.map((a) => (
                <li
                  key={`${a.year}-${a.title}`}
                  className="flex flex-wrap items-baseline justify-between gap-4 py-4 first:pt-0"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-mono text-[12px] text-ink-700">
                      {a.year}
                    </span>
                    <span className="text-[15px] text-ink-1000">
                      {a.title}
                    </span>
                  </div>
                  <span className="text-[13px] text-ink-700">{a.project}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="px-6 py-16 md:px-12 md:py-24">
            <div className="eyebrow">Get in touch</div>
            <a
              href={`mailto:${site.email}`}
              data-cursor="link"
              className="mt-3 block text-[clamp(32px,6vw,80px)] font-medium tracking-tight text-ink-1000 hover:text-ink-700"
            >
              {site.email} ↗
            </a>
          </section>
        </article>
      </PageTransition>
    </ScrollPane>
  );
}
