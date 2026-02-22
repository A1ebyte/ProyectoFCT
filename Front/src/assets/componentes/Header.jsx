import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../estilos/Header.css";

function Menu() {
  const { user, signOut } = useAuth();

  // Email que tendrá permisos de admin/ modificar en supabase luego
  const ADMIN_EMAIL = "freddydeandrade54@gmail.com";

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className="menu">
      <nav className="menu-nav">
        <Link to="/">
          <div className="logo">
            <img src="/Imagenes/Logo.png" alt="Logo" />
          </div>
        </Link>
        <ul>
          {/* LOGIN / LOGOUT dinámico */}
          {!user ? (
            <Link to="/login">
              <li>LogIn</li>
            </Link>
          ) : (
          <Link to="/" onClick={handleLogout}>
            <li>
              LogOut
            </li>
          </Link>
          )}

          <Link to={user ? "/wishlist":"/login"}>
            <li>WishList</li>
          </Link>

          {/* Admin solo si es el usuario específico */}
          {user?.email === ADMIN_EMAIL && (
            <Link to="/admin">
              <li>Admin</li>
            </Link>
          )}

          <Link to="/juegos">
            <li>Juegos</li>
          </Link>
          {/* cambiar/crear a cuenta de usuario y hacerlo protected*/}
          {/*user!=null && (
          <Link to="/perfil">
            <li>Perfil</li>
          </Link>)*/}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
