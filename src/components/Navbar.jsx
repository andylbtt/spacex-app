import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Importa el CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🚀 SpaceX Tracker</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/launches">Launches</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;