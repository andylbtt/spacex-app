export const fetchLaunches = async () => {
const response = await
fetch("https://api.spacexdata.com/v4/launches");
if (!response.ok) {
throw new Error("Error fetching data");
}
return await response.json();
};