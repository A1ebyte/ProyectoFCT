import React from "react";
import "../estilos/Paginas/Autor.css";
import Contacto from "../componentes/Contacto";

const Autor = () => {
  return (
    <section className="about InicioContenedor">
      {/* Sección Introducción */}
      <h1>Acerca de Quest-Hub</h1>
      <p className="about-intro">
        Quest-Hub nació para crear un espacio donde los gamers puedan descubrir
        y gestionar sus videojuegos favoritos. Información rápida, confiable y
        fácil de usar sobre géneros, plataformas, ratings y fechas de
        lanzamiento.
      </p>
      <hr className="section-divider" />

      {/* Qué ofreceremos */}
      <div className="about-section">
        <h2>Qué ofreceremos</h2>
        <ul>
          <li>Catálogo actualizado de videojuegos</li>
          <li>Búsqueda y filtrado avanzado</li>
          <li>Ratings y detalles completos</li>
          <li>Interfaz moderna y responsive</li>
        </ul>
      </div>
      <hr className="section-divider" />

      {/* Quién soy */}
      <article className="about-section about-author">
        <h2>Quién soy</h2>
        <div className="author-info">
          <img
            src="/Imagenes/Pfp.png"
            alt="Autor, desarrollador y gamer"
            className="author-image"
          />
          <div className="author-description">
            <p>
              ¡Hola! Soy Freddy De Andrade, desarrollador y gamer
              apasionado. Desde pequeño me fascinó cómo los videojuegos combinan
              historia, gráficos y mecánicas para crear mundos inmersivos, y esa
              pasión me llevó al mundo del desarrollo web y videojuegos.
            </p>
            <p>
              Mi objetivo con Quest-Hub es ofrecer a los jugadores un espacio
              donde puedan descubrir, organizar y explorar todos sus videojuegos
              favoritos de manera rápida y sencilla. Quiero que la experiencia
              sea intuitiva, interactiva y divertida, al estilo de los juegos
              clásicos.
            </p>
            <p>
              Más allá del desarrollo, me gusta experimentar con nuevas
              tecnologías y estilos visuales que hagan que plataformas como
              Quest-Hub sean tanto útiles como un pequeño guiño al mundo gamer.
              Este proyecto es mi forma de unir mis dos pasiones: los
              videojuegos y la programación.
            </p>
          </div>
        </div>
        <hr className="section-divider" />

        {/* Componente de Contacto */}
        <Contacto
          correo="freddy@example.com"
          redes={{
            Instagram: "https://www.instagram.com/usuario",
            Twitter: "https://twitter.com/usuario",
            LinkedIn: "https://www.linkedin.com/in/freddy-de-andrade/",
            GitHub: "https://github.com/A1ebyte"
          }}
        />
      </article>
    </section>
  );
};

export default Autor;
