import "./Launches.css";

export default function Launches() {
  return (
    <main className="launches-page">
      <h1 className="launches-title">🚀 Próximos Lanzamientos</h1>
      <p className="launches-text">
        Consulta los próximos lanzamientos programados de SpaceX.
      </p>

      <div className="launches-grid">
        <div className="launch-card">
          <h2>Starlink Mission</h2>
          <p>Fecha: 15 Sept 2025</p>
          <p>Lugar: Cabo Cañaveral</p>
        </div>
        <div className="launch-card">
          <h2>Falcon Heavy</h2>
          <p>Fecha: 28 Oct 2025</p>
          <p>Lugar: Kennedy Space Center</p>
        </div>
      </div>
    </main>
  );
}
