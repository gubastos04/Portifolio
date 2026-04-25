import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-name">
        Gustavo Vieira <span>Bastos</span>
      </div>
      <p className="footer-copy">
        © {year} — Todos os direitos reservados
      </p>
    </footer>
  );
}
