export default function LaunchCard({ launch }) {
  return (
    <article style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
      <h3>{launch.name}</h3>
      <p>Fecha: {new Date(launch.date_utc).toLocaleString()}</p>
      <a href={launch.links?.article || launch.links?.webcast} target="_blank">
        Ver más
      </a>
    </article>
  );
}
