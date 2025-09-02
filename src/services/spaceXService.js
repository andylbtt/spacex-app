export async function fetchLaunches() {
  const res = await fetch("https://api.spacexdata.com/v4/launches");
  if (!res.ok) throw new Error("Error fetching launches");
  return await res.json();
}
