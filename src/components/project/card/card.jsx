import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons";


const iconMap = {
  Live: faArrowUpRightFromSquare,
  GitHub: faGithub,
  Figma: faFigma,
};

function Card({ title, desc, tags, links = [], image }) {
  return (
    <div className="card">
      <div className="card-preview">
        <img src={image} alt={title} />
      </div>
      <div className="card-tags">
        {tags.map((t) => <span key={t}>{t}</span>)}
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="card-btns">
          {links.map((link) => (
            <a key={link.label} href={link.url}>
              <FontAwesomeIcon icon={iconMap[link.label]} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
