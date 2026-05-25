import Link from "next/link";
import { allProjects, featuredProjects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function FeaturedGrid() {
  const featured = featuredProjects.length ? featuredProjects : allProjects;
  const [hero, ...rest] = featured;
  return (
    <section className="border-b border-ink-400/80 px-6 py-16 md:px-12 md:py-24">
      <div className="flex items-end justify-between gap-6 pb-10">
        <div>
          <div className="eyebrow">Selected Work</div>
          <h2 className="h-display mt-3 text-[clamp(28px,4vw,48px)] text-ink-1000">
            Projects that ship.
          </h2>
        </div>
        <Link
          href="/projects"
          data-cursor="link"
          className="hidden shrink-0 items-center gap-2 self-end rounded-full border border-ink-500 px-4 py-2 text-[12.5px] text-ink-900 transition-colors hover:border-ink-1000 hover:text-ink-1000 md:flex"
        >
          All projects
          <span aria-hidden>↗</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
        {hero && (
          <div className="md:col-span-12">
            <ProjectCard project={hero} priority size="lg" />
          </div>
        )}
        {rest.map((p, i) => (
          <div
            key={p.slug}
            className={
              i % 3 === 0 ? "md:col-span-7" : i % 3 === 1 ? "md:col-span-5" : "md:col-span-6"
            }
          >
            <ProjectCard project={p} size="md" />
          </div>
        ))}
      </div>
    </section>
  );
}
