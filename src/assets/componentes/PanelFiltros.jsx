import "../estilos/PanelFiltro.css";

function PanelFiltros({ filtros, setFiltros, generos, plataformas }) {
  const toggleArray = (campo, valor) => {
    const actual = filtros[campo];
    const nuevo = actual.includes(valor)
      ? actual.filter((v) => v !== valor)
      : [...actual, valor];
    setFiltros({ ...filtros, [campo]: nuevo });
  };

  return (
    <div className="PanelFiltros">
      {/* CONSOLAS */}
      <div className="checkbox-group">
        <h3>Consolas</h3>
        {plataformas.map((p) => (
          <label key={p.id || p.nombre}>
            <input
              type="checkbox"
              checked={filtros.consolas.includes(p.nombre)}
              onChange={() => toggleArray("consolas", p.nombre)}
            />
            {p.nombre}
          </label>
        ))}
      </div>

      {/* GÉNEROS */}
      <div className="checkbox-group">
        <h3>Géneros</h3>
        {generos.map((g) => (
          <label key={g.id || g.nombre}>
            <input
              type="checkbox"
              checked={filtros.generos.includes(g.nombre)}
              onChange={() => toggleArray("generos", g.nombre)}
            />
            {g.nombre}
          </label>
        ))}
      </div>

      {/* RATING MÍNIMO */}
      <div className="slider-group">
        <h3>Rating</h3>
        <div className="slider-with-value">
          <input
            type="range"
            min="0"
            max="10"
            step="1"
            value={filtros.rating ?? 0}
            onChange={(e) =>
              setFiltros({ ...filtros, rating: Number(e.target.value) })
            }
            style={{
              background: `linear-gradient(to right, var(--turquesa) 0%, var(--accent) ${
                ((filtros.rating ?? 0) / 10) * 100
              }%, #2a2a2a ${((filtros.rating ?? 0) / 10) * 100}%, #2a2a2a 100%)`,
            }}
          />
          <span className="slider-value">{filtros.rating ?? 0}</span>
        </div>
      </div>

      {/* RECOMENDADOS */}
      <div className="checkbox-group">
        <h3>Recomendados</h3>
        <label>
          <input
            type="checkbox"
            checked={filtros.recomendados || false}
            onChange={(e) =>
              setFiltros({ ...filtros, recomendados: e.target.checked })
            }
          />
          Staff
        </label>
      </div>
    </div>
  );
}

export default PanelFiltros;
