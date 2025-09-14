import { useState, useEffect } from "react";
import { fetchLaunches } from "../services/spaceXService";
const useFetchLaunches = () => {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
const getLaunches = async () => {
try {
const launches = await fetchLaunches();
setData(launches);
} catch (error) {
console.error("Error fetching launches:", error);
} finally {
setLoading(false);
}
};
getLaunches();
}, []);
return { data, loading };

Unset

Unset
};
export default useFetchLaunches;