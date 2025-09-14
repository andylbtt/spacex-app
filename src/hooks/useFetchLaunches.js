import { useEffect, useState } from "react";
import { fetchLaunches } from "../services/spaceXService";

export default function useFetchLaunches() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const launches = await fetchLaunches();
        setData(launches.slice(0, 20));
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, loading };
}
