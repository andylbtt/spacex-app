import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h1 className="logo">🚀 SpaceX App</h1>
      <ul className="nav-links">
        {/* Siempre visible */}
        <li><Link to="/">Home</Link></li>

        {/* Solo si hay usuario logueado */}
        {user && <li><Link to="/launches">Launches</Link></li>}
        {user && <li><Link to="/dashboard">Dashboard</Link></li>}

        {/* Si no hay usuario → botón de login */}
        {!user ? (
          <li><Link to="/login">Login</Link></li>
        ) : (
          <>
            {/* Mostrar el correo del usuario logueado */}
            <li className="user-email">Hola, {user.email}</li>
            {/* Botón de logout */}
            <li>
              <button onClick={logout} className="logout-btn">
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

