import { useAuth } from "../context/AuthContext.jsx";

export default function Dashboard() {
  const { user, logout } = useAuth();
  return (
    <section style={{ padding: 24 }}>
      <h1>Dashboard</h1>
      <p>Hola, {user?.email}</p>
      <button onClick={logout}>Cerrar sesión</button>
    </section>
  );
}
