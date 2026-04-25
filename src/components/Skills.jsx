import { useEffect, useRef, useState } from "react";
import { SKILLS, TOOLS } from "../data";
import { useReveal } from "../hooks/useReveal";
import "./Skills.css";

const GITHUB_USER = "gubastos04";

function SkillBar({ skill, delay }) {
  const fillRef = useRef(null);
  const observed = useRef(false);

  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observed.current) {
          observed.current = true;
          setTimeout(() => {
            el.style.transform = "scaleX(1)";
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el.parentElement);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div className="skill-row">
      <div className="skill-row__top">
        <span className="skill-row__name">{skill.name}</span>
        <span className="skill-row__pct">{skill.pct.toFixed(1)}%</span>
      </div>
      <div className="skill-track">
        <div
          ref={fillRef}
          className="skill-fill"
          style={{ "--target": skill.pct / 100 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const headerRef = useReveal();
  const introRef = useReveal();

  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGithubSkills() {
      if (!GITHUB_USER?.trim()) {
        setLoading(true);
        return;
      }

      setLoading(true);

      try {
        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`,
        );

        if (!reposRes.ok) {
          throw new Error(`GitHub API retornou ${reposRes.status}`);
        }

        const repos = await reposRes.json();

        if (!Array.isArray(repos) || repos.length === 0) {
          setSkills(SKILLS);
          return;
        }

        const langCount = {};

        await Promise.all(
          repos.map(async (repo) => {
            try {
              const langRes = await fetch(repo.languages_url);

              if (!langRes.ok) return;

              const langs = await langRes.json();

              Object.entries(langs).forEach(([lang, bytes]) => {
                langCount[lang] = (langCount[lang] || 0) + bytes;
              });
            } catch {
              // ignora falhas individuais
            }
          }),
        );

        const totalBytes = Object.values(langCount).reduce(
          (sum, bytes) => sum + bytes,
          0,
        );

        if (totalBytes === 0) {
          setSkills(SKILLS);
          return;
        }

        const githubSkills = Object.entries(langCount)
          .map(([name, bytes]) => ({
            name,
            pct: Number(((bytes / totalBytes) * 100).toFixed(1)),
          }))
          .sort((a, b) => b.pct - a.pct)
          .slice(0, 8);

        setSkills(githubSkills.length ? githubSkills : SKILLS);
      } catch (error) {
        console.error("Erro ao buscar skills:", error);
        setSkills(SKILLS);
      } finally {
        if (GITHUB_USER?.trim()) {
          setLoading(false);
        }
      }
    }

    fetchGithubSkills();
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="sec-header reveal" ref={headerRef}>
        <h2 className="sec-tag">Skills</h2>
        <div className="sec-line" />
      </div>

      <div className="skills-layout">
        <div className="skills-intro reveal" ref={introRef}>
          <p>
            Essas métricas são extraídas do meu perfil público do GitHub,
            refletindo as linguagens mais utilizadas nos meus repositórios.
          </p>
          <p>
            Frameworks e ferramentas destacados representam as tecnologias com as quais possuo maior experiência prática, domínio técnico e familiaridade no desenvolvimento de soluções.
          </p>

          <div className="tools-grid">
            {TOOLS.map((tool) => (
              <div key={tool} className="tool-chip">
                {tool}
              </div>
            ))}
          </div>
        </div>

        <div className="skills-bars">
          {loading ? (
            <p className="skills-loading">Carregando skills...</p>
          ) : (
            skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} delay={i * 120} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
