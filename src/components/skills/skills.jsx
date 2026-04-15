import "./skills.css";
import { useState, useEffect } from "react";

const GITHUB_USER = "gubastos04";

const categoryMap = {
  TechStack: ["JavaScript", "Python", "Lua"],
  Web: ["HTML", "CSS", "SCSS"],
};

const staticCategories = [
  {
    category: "Frameworks",
    skills: [
      { name: "React", level: 75 },
      { name: "Node.js", level: 20 },
    ],
  },
  {
    category: "Ferramentas",
    skills: [
      { name: "Git", level: 80 },
      { name: "VSCode", level: 95 },
      { name: "Figma", level: 75 },
    ],
  },
];

const LOADING_TEXT = "Carregando skills";

function useLoadingDots(speed = 400) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, speed);
    return () => clearInterval(interval);
  }, [speed]);

  return dots;
}

function Skills() {
  const [skillsByCategory, setSkillsByCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const dots = useLoadingDots();

  useEffect(() => {
    async function fetchLanguages() {
      const reposRes = await fetch(
        `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`,
      );
      const repos = await reposRes.json();

      const langCount = {};

      await Promise.all(
        repos.map(async (repo) => {
          const langRes = await fetch(repo.languages_url);
          const langs = await langRes.json();
          for (const [lang, bytes] of Object.entries(langs)) {
            langCount[lang] = (langCount[lang] || 0) + bytes;
          }
        }),
      );

      const maxBytes = Object.values(langCount).reduce((a, b) => a + b, 0);

      const withLevel = Object.entries(langCount)
        .map(([name, bytes]) => ({
          name,
          level: parseFloat(((bytes / maxBytes) * 100).toFixed(1)),
        }))
        .sort((a, b) => b.level - a.level);

      const grouped = Object.entries(categoryMap).map(([category, names]) => ({
        category,
        skills: withLevel.filter((s) => names.includes(s.name)),
      }));

      const categorized = withLevel
        .filter((s) => !Object.values(categoryMap).flat().includes(s.name))
        .slice(0, 4);

      if (categorized.length) {
        grouped.push({ category: "Other", skills: categorized });
      }

      setSkillsByCategory([
        ...grouped.filter((g) => g.skills.length > 0),
        ...staticCategories,
      ]);
      setLoading(false);
    }

    fetchLanguages();
  }, []);

  return (
    <section className="skills">
      <div className="section-header">
        <h1>
          <span className="hash">#</span>SKILLS
        </h1>
        <div className="lines" />
      </div>

      {loading || skillsByCategory.length === 0 ? (
        <p className="loading">
          {LOADING_TEXT}
          {dots}
        </p>
      ) : (
        <>
          <div className="skills-intro">
            <p>
              Dados retirados do meu perfil público do GitHub, refletindo as
              linguagens mais utilizadas nos meus repositórios. A porcentagem
              indica a proporção de código escrito em cada linguagem, destacando
              minhas principais habilidades técnicas.
            </p>
            <p>
              Dados de frameworks e ferramentas são baseados em autoavaliação,
              considerando minha experiência prática e familiaridade com cada
              tecnologia.
            </p>
          </div>
          <div className="container-skills">
            {skillsByCategory.map((cat) => (
              <div key={cat.category} className="skill-card">
                <p className="cat-title">{cat.category}</p>
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level.toFixed(1)}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Skills;
