import { useEffect, useMemo, useRef, useState } from "react";
import { portfolioContent, Project } from "./content/portfolio";

type Section = "home" | "projects" | "about";

const navItems: Array<{ id: Section; label: string }> = [
  { id: "home", label: "Showreel" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
];

function App() {
  const { designer, showreel, about, projects } = portfolioContent;
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [activeProjectSlug, setActiveProjectSlug] = useState(projects[0]?.slug ?? "");
  const [isReelOpen, setIsReelOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeProject = useMemo(
    () => projects.find((project) => project.slug === activeProjectSlug) ?? projects[0],
    [activeProjectSlug, projects],
  );

  const openSection = (section: Section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const openProject = (project: Project) => {
    setActiveProjectSlug(project.slug);
    setActiveSection("projects");
    setIsMenuOpen(false);
  };

  return (
    <>
      <CustomCursor />
      <div className={`app-shell section-${activeSection}`}>
        <aside className={`sidebar ${isMenuOpen ? "is-open" : ""}`}>
          <div className="brand-block">
            <a className="brand" href="#home" onClick={() => openSection("home")} aria-label="Open showreel">
              <span className="brand-mark">{designer.logoMark}</span>
              <span>
                <strong>{designer.name}</strong>
                <small>{designer.role}</small>
              </span>
            </a>
            <button
              className="icon-button menu-toggle"
              type="button"
              onClick={() => setIsMenuOpen((value) => !value)}
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              <span />
              <span />
            </button>
          </div>

          <nav className="primary-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={activeSection === item.id ? "is-active" : ""}
                type="button"
                onClick={() => openSection(item.id)}
              >
                <span>{item.label}</span>
                <span className="nav-index">0{navItems.indexOf(item) + 1}</span>
              </button>
            ))}
          </nav>

          <div className="sidebar-meta">
            <p>{designer.availability}</p>
            <a href={`mailto:${designer.email}`}>{designer.email}</a>
          </div>
        </aside>

        <main className="workspace" id="home">
          <ProjectColumn
            isVisible={activeSection === "projects"}
            projects={projects}
            activeProjectSlug={activeProjectSlug}
            onSelect={openProject}
          />

          <section className="stage" aria-live="polite">
            {activeSection === "home" && (
              <HeroReel
                designerIntro={designer.intro}
                showreel={showreel}
                onPlay={() => setIsReelOpen(true)}
                onOpenProjects={() => openSection("projects")}
              />
            )}

            {activeSection === "projects" && activeProject && (
              <ProjectDetail project={activeProject} projects={projects} onSelect={openProject} />
            )}

            {activeSection === "about" && <AboutSection about={about} designer={designer} />}
          </section>
        </main>
      </div>

      {isReelOpen && <ShowreelModal showreel={showreel} onClose={() => setIsReelOpen(false)} />}
    </>
  );
}

function ProjectColumn({
  isVisible,
  projects,
  activeProjectSlug,
  onSelect,
}: {
  isVisible: boolean;
  projects: Project[];
  activeProjectSlug: string;
  onSelect: (project: Project) => void;
}) {
  return (
    <aside className={`project-column ${isVisible ? "is-visible" : ""}`} aria-label="Project list">
      <div className="column-header">
        <span>Projects</span>
        <small>{projects.length.toString().padStart(2, "0")}</small>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectListItem
            key={project.slug}
            project={project}
            index={index}
            isActive={activeProjectSlug === project.slug}
            onSelect={() => onSelect(project)}
          />
        ))}
      </div>
    </aside>
  );
}

function ProjectListItem({
  project,
  index,
  isActive,
  onSelect,
}: {
  project: Project;
  index: number;
  isActive: boolean;
  onSelect: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playPreview = () => {
    videoRef.current?.play().catch(() => undefined);
  };

  const stopPreview = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <button
      className={`project-row ${isActive ? "is-active" : ""}`}
      type="button"
      onClick={onSelect}
      onMouseEnter={playPreview}
      onMouseLeave={stopPreview}
    >
      <span className="row-index">{(index + 1).toString().padStart(2, "0")}</span>
      <span className="row-thumb" style={{ "--accent": project.accent } as React.CSSProperties}>
        <img src={project.coverImage} alt="" loading="lazy" />
        {project.previewVideo && (
          <video ref={videoRef} src={project.previewVideo} muted playsInline loop preload="metadata" aria-hidden="true" />
        )}
      </span>
      <span className="row-copy">
        <strong>{project.title}</strong>
        <small>{project.discipline}</small>
      </span>
    </button>
  );
}

function HeroReel({
  designerIntro,
  showreel,
  onPlay,
  onOpenProjects,
}: {
  designerIntro: string;
  showreel: typeof portfolioContent.showreel;
  onPlay: () => void;
  onOpenProjects: () => void;
}) {
  return (
    <div className="hero-panel">
      <video className="hero-video" src={showreel.video} poster={showreel.poster} muted playsInline autoPlay loop preload="metadata" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">{showreel.eyebrow}</p>
        <h1>{showreel.title}</h1>
        <p>{designerIntro}</p>
        <div className="hero-actions">
          <button className="primary-cta" type="button" onClick={onPlay}>
            Play showreel
          </button>
          <button className="secondary-cta" type="button" onClick={onOpenProjects}>
            Browse projects
          </button>
        </div>
      </div>
      <div className="hero-note">
        <span>Dark native portfolio</span>
        <span>3D / compositing / motion</span>
      </div>
    </div>
  );
}

function ProjectDetail({
  project,
  projects,
  onSelect,
}: {
  project: Project;
  projects: Project[];
  onSelect: (project: Project) => void;
}) {
  return (
    <article className="project-detail" style={{ "--accent": project.accent } as React.CSSProperties}>
      <header className="project-hero">
        <div>
          <p className="eyebrow">
            {project.year} / {project.discipline}
          </p>
          <h2>{project.title}</h2>
          <p>{project.summary}</p>
        </div>
        <div className="project-meta-card">
          <span>Client</span>
          <strong>{project.client}</strong>
          <span>Scope</span>
          <strong>{project.credits.join(", ")}</strong>
        </div>
      </header>

      <div className="project-media-grid">
        {project.media.map((item, index) => (
          <figure className={`media-card media-${item.type}`} key={`${project.slug}-${index}`}>
            {item.type === "image" && <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />}
            {item.type === "video" && (
              <video src={item.src} poster={item.poster} muted playsInline loop controls preload="metadata" aria-label={item.alt} />
            )}
            {item.type === "embed" && (
              <iframe
                src={item.src}
                title={item.title}
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            )}
            {item.caption && <figcaption>{item.caption}</figcaption>}
          </figure>
        ))}
      </div>

      <section className="project-narrative">
        <p>{project.description}</p>
      </section>

      <div className="mobile-project-switcher" aria-label="Switch project">
        {projects.map((item) => (
          <button
            key={item.slug}
            className={item.slug === project.slug ? "is-active" : ""}
            type="button"
            onClick={() => onSelect(item)}
          >
            {item.title}
          </button>
        ))}
      </div>
    </article>
  );
}

function AboutSection({
  about,
  designer,
}: {
  about: typeof portfolioContent.about;
  designer: typeof portfolioContent.designer;
}) {
  return (
    <section className="about-panel">
      <div className="about-heading">
        <p className="eyebrow">About / Capabilities</p>
        <h2>{about.heading}</h2>
      </div>
      <div className="about-body">
        {about.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="stat-grid">
        {about.stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <TagGroup title="Services" items={about.services} />
      <TagGroup title="Software" items={about.software} />
      <div className="contact-card">
        <span>Contact</span>
        <a href={`mailto:${designer.email}`}>{designer.email}</a>
        <small>{designer.location}</small>
      </div>
    </section>
  );
}

function TagGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="tag-group">
      <h3>{title}</h3>
      <div>
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

function ShowreelModal({
  showreel,
  onClose,
}: {
  showreel: typeof portfolioContent.showreel;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Showreel player">
      <button className="modal-close" type="button" onClick={onClose}>
        Close
      </button>
      <video src={showreel.video} poster={showreel.poster} controls autoPlay playsInline />
    </div>
  );
}

function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>(".cursor");
    if (!cursor || window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (event: PointerEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      const target = event.target as HTMLElement | null;
      const isInteractive = Boolean(target?.closest("a, button, video, iframe"));
      cursor.classList.toggle("is-active", isInteractive);
    };

    window.addEventListener("pointermove", moveCursor);
    return () => window.removeEventListener("pointermove", moveCursor);
  }, []);

  return <div className="cursor" aria-hidden="true" />;
}

export default App;
