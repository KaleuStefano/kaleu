import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { allProjects, getProjectBySlug } from "@/content/projects";
import { MediaPlayer } from "@/components/projects/MediaPlayer";
import { ScrollPane } from "@/components/ui/ScrollPane";
import { PageTransition } from "@/components/ui/PageTransition";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = getProjectBySlug(params.slug);
  if (!p) return { title: "Project" };
  return {
    title: p.title,
    description: p.summary,
    openGraph: {
      title: p.title,
      description: p.summary,
      images: [{ url: p.cover.src }],
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const idx = allProjects.findIndex((p) => p.slug === project.slug);
  const next = allProjects[(idx + 1) % allProjects.length];

  return (
    <ScrollPane>
      <PageTransition>
        <article className="pb-20">
          {/* Header */}
          <header className="border-b border-ink-400/80 px-6 pt-10 md:px-12 md:pt-14">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-700">
                Project · {String(idx + 1).padStart(2, "0")} /{" "}
                {String(allProjects.length).padStart(2, "0")}
              </div>
              <Link
                href="/projects"
                className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-800 hover:text-ink-1000"
              >
                ← Index
              </Link>
            </div>
            <h1 className="h-display mt-6 text-[clamp(36px,6vw,88px)] text-ink-1000">
              {project.title}
            </h1>
            <div className="mt-4 max-w-2xl text-[15px] text-ink-800">
              {project.summary}
            </div>
            <div className="mt-8 flex flex-wrap gap-2 pb-8">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-ink-500 px-3 py-1 text-[11px] text-ink-900"
                >
                  {t}
                </span>
              ))}
            </div>
          </header>

          {/* Hero media */}
          <section className="px-6 pt-8 md:px-12 md:pt-12">
            <MediaPlayer media={project.hero} eager priority />
          </section>

          {/* Body */}
          <section className="grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-12 md:gap-12 md:px-12 md:py-16">
            <div className="md:col-span-8">
              {project.description?.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="mt-0 text-[15.5px] leading-relaxed text-ink-800 first:mt-0 [&+p]:mt-5"
                >
                  {para}
                </p>
              ))}
            </div>
            <aside className="md:col-span-4">
              <Meta label="Client" value={project.client ?? "—"} />
              <Meta label="Role" value={project.role} />
              <Meta label="Year" value={String(project.year)} mono />
              {project.credits && project.credits.length > 0 && (
                <div className="mt-8 border-t border-ink-400/80 pt-6">
                  <div className="eyebrow">Credits</div>
                  <ul className="mt-3 space-y-2">
                    {project.credits.map((c) => (
                      <li
                        key={`${c.role}-${c.name}`}
                        className="flex justify-between gap-4 text-[13px]"
                      >
                        <span className="text-ink-700">{c.role}</span>
                        <span className="text-ink-1000">{c.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex rounded-full border border-ink-500 px-4 py-2 text-[12.5px] text-ink-1000 hover:border-ink-1000"
                >
                  External case study ↗
                </a>
              )}
            </aside>
          </section>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <section className="grid grid-cols-1 gap-5 border-t border-ink-400/80 px-6 py-12 md:grid-cols-2 md:px-12">
              {project.gallery.map((m, i) => (
                <MediaPlayer
                  key={i}
                  media={m}
                  aspectClass="aspect-[16/10]"
                />
              ))}
            </section>
          )}

          {/* Up next */}
          <section className="border-t border-ink-400/80 px-6 py-12 md:px-12 md:py-16">
            <div className="eyebrow">Up next</div>
            <Link
              href={`/projects/${next.slug}`}
              className="group mt-3 flex flex-wrap items-baseline justify-between gap-4"
            >
              <h2 className="h-display text-[clamp(32px,6vw,80px)] text-ink-1000 transition-colors group-hover:text-ink-700">
                {next.title}
              </h2>
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink-700 group-hover:text-ink-1000">
                {next.year} · {next.client ?? next.role} →
              </span>
            </Link>
          </section>
        </article>
      </PageTransition>
    </ScrollPane>
  );
}

function Meta({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="border-t border-ink-400/80 py-3 first:border-t-0">
      <div className="eyebrow">{label}</div>
      <div
        className={`mt-1 text-[13px] text-ink-1000 ${mono ? "font-mono" : ""}`}
      >
        {value}
      </div>
    </div>
  );
}
