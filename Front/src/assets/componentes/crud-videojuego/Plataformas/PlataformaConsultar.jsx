const PlataformaConsultar = ({ plataformas }) => {
return (
    <>
    {plataformas.length > 0 ? (
      <div className="detalles-videojuego" style={{ flexDirection: "column" }}>
        <h2>Plataformas Disponibles</h2>

        <div className="generos-list">
          {plataformas.map((plataformas, index) => (
            <div key={index} className="genero-chip">
              <p>{plataformas.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className="empty-state">
        No hay plataformas cargados
      </div>
    )}
    </>
);
};

export default PlataformaConsultar;