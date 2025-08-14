async function fetchWeatherData(cityname) {
    try {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=fa116f3d0df0cae7fa65b83b9532b85d&units=metric`);
        return await data.json();
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
}
let city=document.querySelector('#cityInput');
let search=document.querySelector('#searchBtn');
search.addEventListener('click', async function(){
let cityname=city.value;
let info=await fetchWeatherData(cityname);
if (!info || info.cod !== 200) {
   update_cityname("City Name", "Not Found");
    return;
}
let country_code=info.sys.country;
let sunset=info.sys.sunset;
let sunrise=info.sys.sunrise;
let temp=info.main.temp;
let description=info.weather[0].description;
let icon_id=info.weather[0].icon;
let humidity=info.main.humidity;
let wind=info.wind.speed;
let pressure=info.main.pressure;
let cloud_cover=info.clouds.all;
update_cityname(cityname, country_code);
update_sunset(sunset);
update_sunrise(sunrise);
update_temp(temp);
update_description(description);
update_icon_id(icon_id);
update_humidity(humidity);
update_wind(wind);
update_pressure(pressure);
update_cloud_cover(cloud_cover);
})
function update_cityname(cityname , country_code){
   let cityElement = document.querySelector('.location');
    cityElement.textContent = `🌍 ${cityname.toUpperCase()}, ${country_code}`; 
};
function update_sunset(sunset){
    let sunsetElement = document.querySelector('#Sunset');
    let date = new Date(sunset * 1000);
    let options = { hour: '2-digit', minute: '2-digit', hour12: true };
    sunsetElement.textContent = date.toLocaleTimeString([], options);
};
function update_sunrise(sunrise){
    let sunriseElement = document.querySelector('#Sunrise');
    let date = new Date(sunrise * 1000);
    let options = { hour: '2-digit', minute: '2-digit', hour12: true };
    sunriseElement.textContent = date.toLocaleTimeString([], options);
};
function update_temp(temp){
let tempElement = document.querySelector('.temperature');
tempElement.textContent = `${temp}°C`;
};   
function update_description(Description){
let descriptionElement = document.querySelector('.description');
descriptionElement.textContent = `${Description.charAt(0).toUpperCase() + Description.slice(1)}`; // Capitalize first letter
};  
function update_icon_id(icon_id){
let iconElement = document.querySelector('#weatherIcon');
iconElement.src = `http://openweathermap.org/img/wn/${icon_id}@2x.png`;
};  
function update_humidity(humidity){
let humidityElement = document.querySelector('#Humidity');
humidityElement.textContent = `${humidity}%`;
};   
function update_wind(wind){
let windElement = document.querySelector('#wind');
windElement.textContent = `${wind} m/s`;
};   
function update_pressure(pressure){
let pressureElement = document.querySelector('#Pressure');
pressureElement.textContent = `${pressure} hPa`;
};
function update_cloud_cover(cloud_cover){
let cloudCoverElement = document.querySelector('#cloud_cover');
cloudCoverElement.textContent = `${cloud_cover}%`;
};          

