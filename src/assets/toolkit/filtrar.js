const SortRecomendacion = { "Si": 2, "Tal vez": 1, "No": 0 };

// Filtrar por género, acepta array de géneros
const filtrarGenero = (datos, genero) => {
  return datos.filter(juego =>
    juego.genre.some(g =>
      genero.map(x => x.toLowerCase()).includes(g.toLowerCase())
    )
  );
};

// Filtrar por consolas, acepta array de consolas
const filtrarConsolas = (datos, consola) => {
  return datos.filter(juego =>
    juego.platforms.some(g =>
      consola.map(x => x.toLowerCase()).includes(g.toLowerCase())
    )
  );
};

// Filtrar juegos recomendados
const filtrarRecomendados = (datos) => {
  return datos.filter(juego => SortRecomendacion[juego.recomendacion] > 0);
};

export default { filtrarGenero, filtrarRecomendados, filtrarConsolas, SortRecomendacion };
