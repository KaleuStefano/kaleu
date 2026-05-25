import { allProjects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ScrollPane } from "@/components/ui/ScrollPane";
import { PageTransition } from "@/components/ui/PageTransition";

export const metadata = { title: "Projects" };

export default function ProjectsIndex() {
  return (
    <ScrollPane>
      <PageTransition>
        <section className="px-6 py-12 md:px-12 md:py-16">
          <div className="flex items-end justify-between gap-6 pb-10">
            <div>
              <div className="eyebrow">Index · {allProjects.length}</div>
              <h1 className="h-display mt-3 text-[clamp(40px,7vw,96px)] text-ink-1000">
                Projects.
              </h1>
              <p className="mt-4 max-w-xl text-[14px] text-ink-800">
                A scrollable overview. Hover any thumbnail to preview the
                muted reel; click to open the full case study.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {allProjects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} priority={i < 2} />
            ))}
          </div>
        </section>
      </PageTransition>
    </ScrollPane>
  );
}
