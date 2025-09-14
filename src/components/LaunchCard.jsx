export default function LaunchCard({ launch }) {
  return (
    <div className="launch-card">
      <h2>{launch.name}</h2>
      <p>Fecha: {new Date(launch.date_utc).toLocaleDateString()}</p>
      <p>{launch.details || "Sin detalles disponibles"}</p>
    </div>
  );
}

