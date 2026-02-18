import GameLista from "../componentes/GameLista";
import GameTarjeta from "../componentes/GameTarjeta";
import "../estilos//Paginas/Inicio.css";
import { Link } from "react-router-dom";
import Orden from "../toolkit/orden";
import Filtro from "../toolkit/filtrar";

function Inicio({ videojuegos = [] }) {
  /*es mejor pasarle los juegos y hacer filtros aqui */
  const rating = Orden.ordenar(videojuegos, "rating", Orden.SortOrder.DESC, 9);
  const nuevos = Orden.ordenar(videojuegos, "fecha", Orden.SortOrder.DESC, 9);
  const recomendados = Filtro.filtrarRecomendados(
    Orden.ordenar(videojuegos, "recomendacion", Orden.SortOrder.DESC, 9),
  );

  return (
    <div className="InicioContenedor">
      <div className="Bienvenida">
        <h1>Bienvenido a Quest-Hub</h1>
        <p>
          Aquí encontrarás las últimas novedades y recomendaciones de
          videojuegos.
        </p>
      </div>
      <div className="seccion">
        <h2 className="titulo-seccion">Mejor Rating</h2>
        <p className="descripcion-seccion">
          Aquí te mostramos los juegos con mejor rating elegidos por nuestra
          comunidad.
        </p>
        <GameLista
          juegos={rating}
          columnas={5}
          verMas="juegos?sort=rating&order=desc"
        />
      </div>
      <div className="seccion">
        <h2 className="titulo-seccion">Nuevos Lanzamientos</h2>
        <p className="descripcion-seccion">
          Aquí te mostramos los ultimos lanzamientos del momento.
        </p>
        <GameLista
          juegos={nuevos}
          columnas={5}
          verMas="juegos?sort=fecha&order=desc"
        />
      </div>
      <div className="seccion">
        <h2 className="titulo-seccion">Recomendacion Staff</h2>
        <p className="descripcion-seccion">
          Aquí te mostramos los juegos que te recomendamos jugar.
        </p>
        <GameLista
          juegos={recomendados}
          columnas={5}
          verMas="/juegos?recomendados=true"
        />
      </div>
    </div>
  );
}

export default Inicio;
