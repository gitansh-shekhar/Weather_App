async function fetchWeatherData() {
    try {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=New Delhi&appid=fa116f3d0df0cae7fa65b83b9532b85d&units=metric`);
        return await data.json();
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
}
const info= fetchWeatherData();
console.log(info);