import { useReveal } from "../hooks/useReveal";
import "./About.css";

export default function About() {
  const headerRef = useReveal();
  const textRef = useReveal();
  const visualRef = useReveal();

  const scrollTo = (href) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sobre" className="about-section">
      <div className="sec-header reveal" ref={headerRef}>
        <h2 className="sec-tag">Sobre mim</h2>
        <div className="sec-line" />
      </div>

      <div className="sobre-layout">
        <div className="sobre-text reveal" ref={textRef}>
          <p>
            Olá! Meu nome é <strong>Gustavo</strong>. Sou um desenvolvedor Web
            Full Stack morando em <strong>Guarulhos, São Paulo</strong>.
          </p>
          <p>
            Desenvolvo websites responsivos do zero e os transformo em{" "}
            <strong>experiências web modernas e intuitivas</strong>. Transformar
            minha criatividade e conhecimento em websites é minha paixão há mais
            de um ano.
          </p>
          <p>
            Busco sempre aprender sobre as tecnologias e frameworks mais
            recentes, com foco em React e no ecossistema JavaScript.
          </p>
          <button
            className="btn btn-fill sobre-cta"
            onClick={() => scrollTo("#contato")}
          >
            Bora conversar →
          </button>
        </div>

        <div className="sobre-visual reveal" ref={visualRef}>
          <div className="code-block">
            <div className="code-block__bar">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
            </div>
            <pre className="code-content">
              <span className="cm">
                {"// Gustavo Bastos — Dev Web Full Stack"}
              </span>
              {"\n\n"}
              <span className="kw">const</span> <span className="fn">dev</span>{" "}
              = {"{\n"}
              {"  "}nome: <span className="str">'Gustavo Vieira Bastos'</span>,
              {"\n"}
              {"  "}local: <span className="str">'Guarulhos, SP 🇧🇷'</span>,
              {"\n"}
              {"  "}foco:{" "}
              <span className="str">'Desenvolvimento Web Full Stack'</span>,
              {"\n"}
              {"  "}stack: [{"\n"}
              {"    "}
              <span className="str">'React'</span>,{" "}
              <span className="str">'Node.js'</span>,{" "}
              <span className="str">'MongoDB'</span>,{" "}
              {"\n  "}],{"\n"}
              {"  "}objetivo:{" "}
              <span className="str">'Primeira oportunidade'</span>,{"\n"}
              {"  "}disponivel: <span className="kw">true</span>,{"\n"}
              {"}"}
              {"\n\n"}
              <span className="cm">{"// Sempre aprendendo..."}</span>
              {"\n"}
              <span className="fn">console</span>.log(
              <span className="str">'Pronto pra codar!'</span>)
            </pre>
            <div className="code-badge">Disponível ✓</div>
          </div>
        </div>
      </div>
    </section>
  );
}
