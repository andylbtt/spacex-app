import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h1 className="logo">🚀 SpaceX App</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        {user && <li><Link to="/launches">Launches</Link></li>}
        {user && <li><Link to="/dashboard">Dashboard</Link></li>}
        {!user ? (
          <li><Link to="/login">Login</Link></li>
        ) : (
          <>
            <li className="user-email">Hola, {user.email}</li>
            <li><button onClick={logout} className="logout-btn">Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}
