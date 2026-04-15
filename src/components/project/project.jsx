import "./project.css";
import Card from "./card/card";
import portfolio from "../../assets/portifolio.png";

const projects = [
  /* opções de links:
  links: [{ label: "GitHub", url: "#" },
  links: [{ label: "Live", url: "#" },
  links: [{ label: "Figma", url: "#" }, 
  */

  {
    title: "Portfólio",
    desc: "Meu site pessoal feito com React.",
    tags: ["React", "CSS"],
    image: portfolio,
    links: [{ label: "Figma", url: "#" }],
  },
    {
    title: "Portfólio",
    desc: "Meu site pessoal feito com React.",
    tags: ["React", "CSS"],
    image: portfolio,
    links: [{ label: "Figma", url: "#" }],
  },
];

function Project() {
  return (
    <section className="project">
      <div className="section-header">
        <h1>
          <span className="hash">#</span>PROJETOS
        </h1>
        <div className="lines" />
      </div>
      <div className="container-cards">
        {projects.map((p) => (
          <Card key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Project;
