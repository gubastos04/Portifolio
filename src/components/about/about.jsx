import "./about.css";
import SVGComponent from "../../assets/svg";

function About() {
  return (
    <section className="about">

      <div className="section-header">
        <h1>
          <span className="hash">#</span>SOBRE MIM
        </h1>
        <div className="lines" />
      </div>
      <div className="container-about">
        <p>
          Olá, meu nome é Gustavo! Sou um desenvolvedor front-end , moro em
          Guarulhos, São Paulo. Desenvolvo websites responsivos do zero e os
          transformo em experiências web modernas e intuitivas. Transformar
          minha criatividade e conhecimento em websites é minha paixão há mais
          de um ano. Busco sempre aprender sobre as tecnologias e frameworks
          mais recentes.
        </p>
        <SVGComponent></SVGComponent>
      </div>
    </section>
  );
}

export default About;
