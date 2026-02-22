import React from "react";
import "../estilos/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-left">
        <p>© <span className="pixel">{new Date().getFullYear()} Derechos reservados</span></p>
        <div className="footer-links">
          <Link to="/contacto">Contacto</Link>
          <Link to="/privacidad">Privacidad</Link>
          <a href="mailto:info@tuempresa.com" data-text="Email">Email</a>
        </div>
      </div>

      <Link to="/">
        <div className="footer-right">
          <img src="/Imagenes/Logo.png" alt="Logo" />
        </div>
      </Link>
    </footer>
  );
}
export default Footer;
