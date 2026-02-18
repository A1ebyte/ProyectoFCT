import React from "react";
import "../estilos/Paginas/Privacidad.css";

const Privacidad = () => {
  return (
    <section className="privacy InicioContenedor">
      <h1>Política de Privacidad</h1>

      <p className="privacy-intro">
        En Quest-Hub nos tomamos muy en serio tu privacidad. Esta página explica qué datos recopilamos, cómo los usamos y cómo protegemos tu información mientras disfrutas de nuestra plataforma.
      </p>

      <div className="privacy-section">
        <h2>1. Información que recopilamos</h2>
        <p>
          Podemos recopilar información que tú nos proporcionas directamente, como tu correo electrónico o datos de contacto cuando te registras o envías comentarios. También podemos recopilar datos automáticamente sobre cómo usas nuestra plataforma, como búsquedas o navegación dentro del catálogo.
        </p>
      </div>

      <div className="privacy-section">
        <h2>2. Uso de la información</h2>
        <p>
          La información que recopilamos se utiliza para mejorar tu experiencia en Quest-Hub, proporcionarte recomendaciones, enviarte notificaciones importantes y mantener la plataforma segura y funcional.
        </p>
      </div>

      <div className="privacy-section">
        <h2>3. Protección de datos</h2>
        <p>
          Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra accesos no autorizados, pérdida o filtraciones. Tu privacidad es nuestra prioridad.
        </p>
      </div>

      <div className="privacy-section">
        <h2>4. Compartir información</h2>
        <p>
          No vendemos ni compartimos tus datos personales con terceros para fines comerciales. Solo compartimos información cuando es necesario para cumplir con la ley o proteger los derechos y seguridad de los usuarios.
        </p>
      </div>

      <div className="privacy-section">
        <h2>5. Cambios en la política de privacidad</h2>
        <p>
          Quest-Hub puede actualizar esta política ocasionalmente. Recomendamos revisar esta página periódicamente para estar al tanto de cualquier cambio.
        </p>
      </div>

      <p className="privacy-contact">
        Si tienes preguntas sobre nuestra política de privacidad, puedes <a href="/contacto">contactarnos</a>.
      </p>
    </section>
  );
};

export default Privacidad;
