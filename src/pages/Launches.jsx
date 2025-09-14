import useFetchLaunches from "../hooks/useFetchLaunches";
import LaunchCard from "../components/LaunchCard";

export default function Launches() {
  const { data: launches, loading } = useFetchLaunches();

  if (loading) return <p>Cargando lanzamientos...</p>;

  return (
    <main className="launches-page">
      <h1 className="launches-title">🚀 Próximos Lanzamientos</h1>
      <div className="launches-grid">
        {launches.slice(0, 6).map((launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        ))}
      </div>
    </main>
  );
}

