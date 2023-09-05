
let searchInput = document.querySelector('.search');
let seeWeather  = document.querySelector('.getData')
let key = 'RN2K9W7RXKDS9HFUBNQWDL6UL';
let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tokyo?unitGroup=us&key=${key}`;
let temperature = document.querySelector('.temperature');
let condition = document.querySelector('.condition')
let city = document.querySelector('.city');
let day = document.querySelector('.day');
let thermometricScale = document.querySelector('.scale');
let weekyDay;
let tempIcon = document.querySelector('.tempIcon');
let windSpped = document.querySelector('.windStat')
let humidity = document.querySelector('.humidityStat');
let visibility = document.querySelector('.visibilityStat');
let airPressure = document.querySelector('.airPressureStat')

let changeIcon = (weather)=>{
    switch(weather.currentConditions.icon){
    case "clear-day":
      tempIcon.src = './assets/amcharts_weather_icons_1.0.0/static/day.svg';
      break;
    case "snow":
      tempIcon.src ='./assets/amcharts_weather_icons_1.0.0/animated/snow-6.svg';
      break;
    case "rain":
       tempIcon.src ='./assets/amcharts_weather_icons_1.0.0/animated/rainy-7.svg';
       break;
    case "fog":
      tempIcon.src ='./assets/amcharts_weather_icons_1.0.0/animated/cloudy.svg';
      break;
    case "wind":
      tempIcon.src ='./assets/amcharts_weather_icons_1.0.0/animated/day.svg';
      break;
    case "cloudy":
      tempIcon.src ='./assets/amcharts_weather_icons_1.0.0/animated/cloudy.svg';
      break;
    case 'partly-cloudy-day':
      tempIcon.src ='./assets/amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg';
      break;
    case 'partly-cloudy-night':
      tempIcon.src ='./assets/amcharts_weather_icons_1.0.0/animated/cloudy-night-3.svg';
      break;
    case 'clear-night':
      tempIcon.src ='./assets/amcharts_weather_icons_1.0.0/animated/night.svg';
      break;
    case 'overcasting':
      tempIcon.src ='./assets/amcharts_weather_icons_1.0.0/animated/cloudy.svg';
      break;
    default:
      tempIcon.src ='./assets/amcharts_weather_icons_1.0.0/static/weather.svg';
      break;
}
}
async function setData(){
 
  const response = await fetch(url);
  const weather = await response.json();
  console.log(weather)
  
  temperature.innerHTML = Math.floor((weather.currentConditions.temp - 32) / 1.8);
  city.innerHTML = weather.address;
  condition.innerHTML = weather.currentConditions.conditions;
  thermometricScale.innerHTML = '°C';
  tempIcon.alt = weather.description;
  windSpped.innerHTML= weather.currentConditions.windspeed + ' mph';
  humidity.innerHTML = weather.currentConditions.humidity + ' %';
  visibility.innerHTML = weather.currentConditions.visibility + ' miles';
  airPressure.innerHTML = weather.currentConditions.pressure + ' mb'

  changeIcon(weather)
}




seeWeather.addEventListener('click', setData)