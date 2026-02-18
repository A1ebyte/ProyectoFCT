const Consultar = ({ videojuegoSeleccionado }) => {
  
  return (
        <div className="detalles-videojuego">
      {/* Imagen de portada */}
      <div className="detalles-imagen">
        <img
          src={videojuegoSeleccionado.image}
          alt={videojuegoSeleccionado.nombre}
        />
      </div>

      {/* Información del juego */}
      <div className="detalles-info">
        <h2>{videojuegoSeleccionado.nombre}</h2>

        <p>
          <strong>Género:</strong>{" "}
          {videojuegoSeleccionado.genre.join(", ")}
        </p>

        <p>
          <strong>Plataformas:</strong>{" "}
          {videojuegoSeleccionado.platforms.join(", ")}
        </p>

        <p>
          <strong>Fecha de lanzamiento:</strong>{" "}
          {new Date(videojuegoSeleccionado.fecha).toLocaleDateString("es-ES")}
        </p>

        <p>
          <strong>Rating:</strong> {videojuegoSeleccionado.rating}
        </p>

        <p>
          <strong>Descripción:</strong> {videojuegoSeleccionado.description}
        </p>

        <p>
          <strong>Imagen:</strong>{" "}
          {videojuegoSeleccionado.image !== "" ? (
            <a
              href={videojuegoSeleccionado.image}
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview
            </a>
          ) : (
            <span>No hay nada</span>
          )}
        </p>

        <p>
          <strong>Hover Imagen:</strong>{" "}
          {videojuegoSeleccionado.hoverImage !== "" ? (
            <a
              href={videojuegoSeleccionado.hoverImage}
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview
            </a>
          ) : (
            <span>No hay nada</span>
          )}
        </p>

        <p>
          <strong>Trailer:</strong>{" "}
          {videojuegoSeleccionado.trailer !== "" ? (
            <a
              href={videojuegoSeleccionado.trailer}
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview
            </a>
          ) : (
            <span>No hay nada</span>
          )}
        </p>

        <p>
          <strong>Screenshots:</strong>{" "}
          {videojuegoSeleccionado.screenshots !== "" ? (
            <span className="screenshots-list">
            {videojuegoSeleccionado.screenshots.map((elem, indx) => (
              <a href={elem} target="_blank" rel="noopener noreferrer">
                Preview{indx + 1}
              </a>
              ))}
            </span>
          ) : (
            <span>No hay nada</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Consultar;
