import { PROJECTS } from "../data";
import { useReveal } from "../hooks/useReveal";
import "./Projects.css";

function ProjectCard({ project }) {
  const ref = useReveal();

  return (
    <div
      className={`proj-card ${project.featured ? "proj-card--featured" : ""} reveal`}
      ref={ref}
    >
      <div className="proj-thumb">
        <div className="proj-thumb__grid" />

        {project.icon ? (
          <img
            src={project.icon}
            alt={project.title}
            className="proj-thumb__img"
          />
        ) : (
          <span className="proj-thumb__number">
            {String(project.id).padStart(2, "0")}
          </span>
        )}
      </div>

      <div className="proj-body">
        <p className="proj-meta">{project.meta}</p>
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-desc">{project.desc}</p>

        <div className="proj-tags">
          {project.tags.map((t) => (
            <span key={t} className="pill">
              {t}
            </span>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="proj-links">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="proj-link"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useReveal();

  return (
    <section id="projetos" className="projects-section">
      <div className="sec-header reveal" ref={headerRef}>
        <h2 className="sec-tag">Projetos</h2>
        <div className="sec-line" />
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
