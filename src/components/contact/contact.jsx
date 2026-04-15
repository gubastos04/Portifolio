import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const contactLinks = [
  {
    label: "Email",
    value: "gustavovieirabastos.dev@gmail.com",
    icon: faEnvelope,
    url: "https://mail.google.com/mail/?view=cm&to=gustavovieirabastos.dev@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/gubastos04",
    icon: faGithub,
    url: "https://github.com/gubastos04",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/gustavo-vieira-bastos",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/gustavo-vieira-bastos/",
  },
];

function Contact() {
  return (
    <section className="contact">
      <div className="section-header">
        <h1>
          <span className="hash">#</span>CONTATO
        </h1>
        <div className="lines" />
      </div>
      <div className="contact-body">
        <p className="contact-intro">
          Estou interessado em oportunidades para iniciar minha carreira como
          desenvolvedor. Se você tiver alguma dúvida ou proposta, não hesite em
          entrar em contato.
        </p>
        <div className="contact-card">
          <p className="contact-card-title">Me mande uma mensagem</p>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                key={link.label}
                href={link.url}
                className="contact-link"
              >
                <FontAwesomeIcon icon={link.icon} />
                <span>{link.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
