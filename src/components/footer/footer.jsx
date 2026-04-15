import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-name">GUSTAVO VIEIRA BASTOS</p>
      <p>© {new Date().getFullYear()} — Todos os direitos reservados</p>
    </footer>
  );
}

export default Footer;
