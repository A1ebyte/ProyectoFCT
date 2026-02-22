import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../estilos/GameTarjeta.css";
import "../estilos/GameTarjetaHor.css";
import WishlistButton from "./WishListBoton";
import PlataformasIconos from "./PlataformasIconos";

function GameTarjeta({ game, empty = false, horizontal = false, index = 0 }) {
  if (empty) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.35, delay: index * 0.05 }}
      >
      <div className="game-card-vacia">
        <h3>Ver más juegos...</h3>
      </div>
            </motion.div>
    );
  }

  const platforms = game.platforms || [];

  return (
    <motion.div
      layout // <- importante para reorder animado
      initial={{ opacity: 0, y: 20 }} // fade + slide entrada
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }} // fade + slide salida
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <Link
        to={`/juego/${game.id}`}
        className={horizontal ? "game-card-h-link" : "game-card-link"}
      >
        {!horizontal ? (
          <div className="game-card">
            <WishlistButton game={game} />
            {game.rating && (
              <span
                className={`game-badge ${
                  game.rating >= 7.5
                    ? "alta"
                    : game.rating >= 5
                    ? "media"
                    : "baja"
                }`}
              >
                {game.rating}
              </span>
            )}
            <img src={game.image} alt={game.nombre} className="card-img" />
            <img src={game.hoverImage} alt={game.nombre} className="card-img-hover" />
            <div className="overlay">
              <h3>{game.nombre}</h3>
              <PlataformasIconos platforms={platforms} />
              <p>{game.genre.join(" · ")}</p>
            </div>
          </div>
        ) : (
          <div className="game-card-h">
            <WishlistButton game={game} />
            <div className="game-card-h-img">
              {game.rating && (
                <span
                  className={`game-badge ${
                    game.rating >= 7.5
                      ? "alta"
                      : game.rating >= 5
                      ? "media"
                      : "baja"
                  }`}
                >
                  {game.rating}
                </span>
              )}
              <img src={game.image} alt={game.nombre} className="card-img" />
              <img src={game.hoverImage} alt={game.nombre} className="card-img-hover" />
            </div>
            <div className="game-card-h-info">
              <h3>{game.nombre}</h3>
              <PlataformasIconos platforms={platforms} />
              <p className="genre">{game.genre.join(" · ")}</p>
              {game.description && <p className="desc">{game.description}</p>}
            </div>
          </div>
        )}
      </Link>
    </motion.div>
  );
}

export default GameTarjeta;
