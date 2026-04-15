import "./App.css";
import { useState, useEffect } from "react";
import Project from "./components/project/project";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

const nameParts = [
  { text: "GUSTAVO ", className: "" },
  { text: "VIEIRA ", className: "" },
  { text: "BASTOS ", className: "highlight" },
];

function useTyping(text, speed = 80) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (displayed.length >= text.length) return;
    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, text, speed]);

  return displayed;
}

function App() {
  const name = nameParts.map((p) => p.text).join("");
  const typed = useTyping(name);

  let remaining = typed;
  const rendered = nameParts.map((part, i) => {
    if (!remaining) return null;
    const chunk = remaining.slice(0, part.text.length);
    remaining = remaining.slice(part.text.length);
    return (
      <span key={i} className={part.className}>
        {chunk}
      </span>
    );
  });
  return (
    <div className="Home">
      <nav>
        <h1 className="typing">{rendered}</h1>
        <menu>
          <li>
            <a href="#projects">
              <span className="hash">#</span>PROJETOS
            </a>
          </li>
          <li>
            <a href="#about">
              <span className="hash">#</span>SOBRE-MIM
            </a>
          </li>
          <li>
            <a href="#contact">
              <span className="hash">#</span>CONTATO
            </a>
          </li>
        </menu>
      </nav>
      <section className="presentation">
        <h1>
          <span className="highlight">Gustavo</span> é um Desenvolvedor
          <span className="highlight"> Front-end</span>
        </h1>
        <h2>Focado em criar interfaces bonitas e funcionais.</h2>
        <a href="#contact">ENTRAR EM CONTATO</a>
        
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
