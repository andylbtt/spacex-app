import "./Dashboard.css";

export default function Dashboard() {
  return (
    <main className="dashboard-page">
      <h1 className="dashboard-title">📊 Dashboard</h1>
      <p className="dashboard-text">
        Visualiza estadísticas de lanzamientos de SpaceX.
      </p>

      <div className="dashboard-cards">
        <div className="card">Total lanzamientos: 120</div>
        <div className="card">Éxitos: 110</div>
        <div className="card">Fallidos: 10</div>
      </div>
    </main>
  );
}


