import { site } from "@/content/site";
import { ScrollPane } from "@/components/ui/ScrollPane";
import { PageTransition } from "@/components/ui/PageTransition";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <ScrollPane>
      <PageTransition>
        <section className="flex min-h-[calc(100dvh-1px)] flex-col px-6 py-12 md:px-12 md:py-16">
          <div className="eyebrow">Contact</div>
          <h1 className="h-display mt-4 text-[clamp(40px,8vw,120px)] text-ink-1000">
            Let’s make
            <br />
            <span className="text-ink-700">something.</span>
          </h1>

          <a
            href={`mailto:${site.email}`}
            data-cursor="link"
            className="mt-12 block max-w-fit text-[clamp(22px,3vw,40px)] font-medium tracking-tight text-ink-1000 hover:text-ink-700"
          >
            {site.email} ↗
          </a>

          <div className="mt-auto grid grid-cols-2 gap-6 border-t border-ink-400/80 pt-10 md:grid-cols-4">
            <div>
              <div className="eyebrow">Status</div>
              <div className="mt-2 text-[13px] text-ink-1000">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Booking Q3—Q4 2026
              </div>
            </div>
            <div>
              <div className="eyebrow">Location</div>
              <div className="mt-2 text-[13px] text-ink-1000">
                {site.location}
              </div>
            </div>
            <div className="col-span-2 md:col-span-2">
              <div className="eyebrow">Social</div>
              <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[13px]">
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
        </section>
      </PageTransition>
    </ScrollPane>
  );
}
