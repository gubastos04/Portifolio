import { HERO_PILLS, HERO_STATS } from "../data";
import { useReveal } from "../hooks/useReveal";
import "./Hero.css";

export default function Hero() {
  const cardRef = useReveal();

  const scrollTo = (href) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero-glow" />

      <div className="hero-text">
        <div className="hero-tag">
          <span className="avail-dot" />
          Disponível para oportunidades
        </div>

        <h1>
          Gustavo Vieira <span className="accent">Bastos</span>
          <span className="hero-subtitle">Desenvolvedor Web Full Stack</span>
        </h1>

        <p className="hero-desc">
          Focado em criar interfaces bonitas, funcionais e experiências web
          modernas e intuitivas. Transformo criatividade e código em produtos
          que fazem a diferença.
        </p>

        <div className="hero-btns">
          <button className="btn btn-fill" onClick={() => scrollTo("#contato")}>
            Entrar em contato
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => scrollTo("#projetos")}
          >
            Ver projetos
          </button>
        </div>
      </div>

      <div className="hero-card reveal" ref={cardRef}>
        <div className="hero-card__top-bar" />
        <p className="hero-card__label">Desenvolvedor Web Full Stack</p>
        <p className="hero-card__name">
          Gustavo Vieira <span>Bastos</span>
        </p>
        <p className="hero-card__role">React · Node.js</p>

        <div className="hero-card__pills">
          {HERO_PILLS.map((p) => (
            <span key={p.label} className={`pill ${p.active ? "active" : ""}`}>
              {p.label}
            </span>
          ))}
        </div>

        <div className="hero-card__stats">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="hero-stat">
              <span className="hero-stat__num">{s.num}</span>
              <span className="hero-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
