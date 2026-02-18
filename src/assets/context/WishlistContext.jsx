import { createContext, useContext } from "react";
import UseWishlist from "../servicios/Almacenamiento/useWishList.js";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const wishlistData = UseWishlist();

  return (
    <WishlistContext.Provider value={wishlistData}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlistContext() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlistContext debe usarse dentro de WishlistProvider"
    );
  }

  return context;
}