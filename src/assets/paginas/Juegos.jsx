import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import GameLista from "../componentes/GameLista";
import PanelFiltros from "../componentes/PanelFiltros";
import Orden from "../toolkit/orden";
import Filtro from "../toolkit/filtrar";
import "../estilos/Paginas/Juegos.css";

function Juegos({ juegos = [], generos = [], plataformas = [] }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialFiltros = {
    generos: searchParams.get("generos")?.split(",") || [],
    consolas: searchParams.get("consolas")?.split(",") || [],
    rating: Number(searchParams.get("rating")) || 0,
    recomendados: searchParams.get("recomendados") === "true" || false,
    sort: searchParams.get("sort") || "fecha",
    order: searchParams.get("order") || "desc",
  };

  const [filtros, setFiltros] = useState(initialFiltros);
  const [horizontal, setHorizontal] = useState(false);
  const [filtrados, setFiltrados] = useState([]);

  // Sincroniza URL
  useEffect(() => {
    const params = {};
    if (filtros.generos.length > 0) params.generos = filtros.generos.join(",");
    if (filtros.consolas.length > 0)
      params.consolas = filtros.consolas.join(",");
    if (filtros.rating > 0) params.rating = filtros.rating;
    if (filtros.recomendados) params.recomendados = true;
    if (filtros.sort) params.sort = filtros.sort;
    if (filtros.order) params.order = filtros.order;

    setSearchParams(params);
  }, [filtros]);

  // Aplica filtros
  useEffect(() => {
    let data = [...juegos];

    if (filtros.consolas.length > 0) {
      data = Filtro.filtrarConsolas(data, filtros.consolas);
    }

    if (filtros.generos.length > 0) {
      data = Filtro.filtrarGenero(data, filtros.generos);
    }

    if (filtros.rating > 0) {
      data = data.filter((j) => j.rating >= filtros.rating);
    }

    if (filtros.recomendados) {
      data = Filtro.filtrarRecomendados(data);
    }

    // Ordenar
    data = Orden.ordenar(data, filtros.sort, filtros.order);

    setFiltrados(data);
  }, [juegos, filtros]);

  return (
    <div className="InicioContenedor">
      <h1>Catalogo de Juegos</h1>
      <div className="JuegosMostrar">
        {/* Panel de filtros a la izquierda */}
        <PanelFiltros
          filtros={filtros}
          setFiltros={setFiltros}
          generos={generos}
          plataformas={plataformas}
        />

        {/* Contenedor principal de lista */}
        <div className="juegos-lista-container">
          {/* Barra de controles arriba, a la derecha */}
          <div className="barra-controles">
            <div className="direccion-orden">
              <label>
                Ordenar por:{" "}
                <select
                  value={filtros.sort}
                  onChange={(e) =>
                    setFiltros({ ...filtros, sort: e.target.value })
                  }
                >
                  <option value="fecha">Fecha</option>
                  <option value="rating">Rating</option>
                  <option value="nombre">Nombre</option>
                  <option value="recomendacion">Recomendación</option>
                </select>
              </label>
              <button
                className={`dir-btn ${filtros.order === Orden.SortOrder.ASC ? "activo" : ""}`}
                disabled={filtros.order === Orden.SortOrder.ASC}
                onClick={() =>
                  setFiltros({ ...filtros, order: Orden.SortOrder.ASC })
                }
              >
                ▲
              </button>
              <button
                className={`dir-btn ${filtros.order === Orden.SortOrder.DESC ? "activo" : ""}`}
                disabled={filtros.order === Orden.SortOrder.DESC}
                onClick={() =>
                  setFiltros({ ...filtros, order: Orden.SortOrder.DESC })
                }
              >
                ▼
              </button>
            </div>

            <div className="modo-tarjetas">
              {/* Botón Grid (modo vertical) */}
              <button
                className={`modo-btn ${!horizontal ? "activo" : ""}`}
                disabled={!horizontal}
                onClick={() => setHorizontal(false)}
              >
                <span className="icono-grid">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>

              {/* Botón Líneas horizontales (modo horizontal) */}
              <button
                className={`modo-btn ${horizontal ? "activo" : ""}`}
                disabled={horizontal}
                onClick={() => setHorizontal(true)}
              >
                <span className="icono-lineas">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>
          </div>

          {/* Lista de juegos */}
          <GameLista juegos={filtrados} horizontal={horizontal} />
        </div>
      </div>
    </div>
  );
}

export default Juegos;
