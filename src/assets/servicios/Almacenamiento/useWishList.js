import useStorageState from "./UseStorageState";

function UseWishlist() {
  // guardamos la wishlist
  const [wishlist, setWishlist] = useStorageState("wishlist", []);

  const agregarJuego = (game) => {
    // evita duplicados
    if (!wishlist.some((g) => g.id === game.id)) {
      setWishlist([
        ...wishlist,
        {
          ...game,
          agregadoEn: new Date().toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }),
        },
      ]);
    }
  };

  const quitarJuego = (id) => {
    setWishlist(wishlist.filter((g) => g.id !== id));
  };

  const estaEnWishlist = (id) => {
    return wishlist.some((g) => g.id === id);
  };

  return {
    wishlist,
    agregarJuego,
    quitarJuego,
    estaEnWishlist,
  };
}

export default UseWishlist;
