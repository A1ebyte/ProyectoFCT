const GenerosConsultar = ({ generos }) => {
return (
    <>
    {generos.length > 0 ? (
      <div className="detalles-videojuego" style={{ flexDirection: "column" }}>
        <h2>Géneros Disponibles</h2>

        <div className="generos-list">
          {generos.map((genero, index) => (
            <div key={index} className="genero-chip">
              <p>{genero.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className="empty-state">
        No hay géneros cargados
      </div>
    )}
    </>
);
};

export default GenerosConsultar;