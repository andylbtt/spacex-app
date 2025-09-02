import useFetchLaunches from "../hooks/useFetchLaunches.js";
import LaunchCard from "../components/LaunchCard.jsx";

export default function Launches() {
  const { data, loading, error } = useFetchLaunches();

  if (loading) return <p>Cargando lanzamientos…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section style={{ padding: 24, display: "grid", gap: 12 }}>
      <h1>Lanzamientos SpaceX</h1>
      {data.map((l) => <LaunchCard key={l.id} launch={l} />)}
    </section>
  );
}
