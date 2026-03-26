import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import "../estilos/Header.css";

function Menu() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [genresOpen, setGenresOpen] = useState(false);

  const ADMIN_EMAIL = "freddydeandrade54@gmail.com";

  const handleLogout = async () => {
    await signOut();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/juegos?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const genres = [
    "Acción", "Aventura", "RPG", "Estrategia",
    "Deportes", "Simulación", "Terror", "Plataformas",
  ];

  return (
    <header className="header">
      <nav className="header-nav">

        {/* LOGO */}
        <Link to="/" className="header-logo">
          <img src="/Imagenes/Logo.png" alt="Quest-Hub Logo" />

        </Link>

        {/* NAV LINKS (center) */}
        <ul className="header-links">
          <li>
            <Link to="/deals" className="header-link">Deals</Link>
          </li>
          <li
            className="header-dropdown-wrapper"
            onMouseEnter={() => setGenresOpen(true)}
            onMouseLeave={() => setGenresOpen(false)}
          >
            <button className="header-link header-genres-btn">
              Genres <span className="arrow">▼</span>
            </button>
            {genresOpen && (
              <ul className="header-dropdown">
                {genres.map((g) => (
                  <li key={g}>
                    <Link
                      to={`/juegos?genero=${encodeURIComponent(g)}`}
                      className="header-dropdown-item"
                    >
                      {g}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link to="/juegos" className="header-link">Games</Link>
          </li>
          {user?.email === ADMIN_EMAIL && (
            <li>
              <Link to="/admin" className="header-link">Admin</Link>
            </li>
          )}
        </ul>

        {/* RIGHT SIDE: Search + Auth */}
        <div className="header-right">
          <form className="header-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Que juegos buscas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="header-search-input"
            />
            <button type="submit" className="header-search-btn" aria-label="Buscar">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.099zm-5.44 1.406a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
              </svg>
            </button>
          </form>

          {!user ? (
            <Link to="/login" className="header-signin-btn">Sign In</Link>
          ) : (
            <>
              <Link to="/wishlist" className="header-link wishlist-link">WishList</Link>
              <button onClick={handleLogout} className="header-avatar" title={user.email}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
              </button>
            </>
          )}
        </div>

      </nav>
    </header>
  );
}

export default Menu;
