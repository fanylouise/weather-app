let key = 'RN2K9W7RXKDS9HFUBNQWDL6UL';
let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/China?unitGroup=us&key=${key}`;
let searchInput = document.querySelector('.search');
let temperature = document.querySelector('.temperature');
let condition = document.querySelector('.condition')
let city = document.querySelector('.city');
let day = document.querySelector('.day');
let thermometricScale = document.querySelector('.scale');
let weekyDay;
let tempIcon = document.querySelector('.tempIcon');

const changeIcon = (weather)=>{
  switch(weather.currentConditions.icon){
      case 'clear-day':
        tempIcon.src = '/assets/amcharts_weather_icons_1.0.0/animated/day.svg';
      case 'snow':
        tempIcon.src ='/assets/amcharts_weather_icons_1.0.0/animated/snow-6.svg'
      case 'rain':
          tempIcon.src ='/assets/amcharts_weather_icons_1.0.0/animated/rainy-7.svg'
      case 'fog':
        tempIcon.src ='/assets/amcharts_weather_icons_1.0.0/animated/cloudy.svg'
      case 'wind':
        tempIcon.src ='/assets/amcharts_weather_icons_1.0.0/animated/day.svg'
      case 'cloudy':
        tempIcon.src ='/assets/amcharts_weather_icons_1.0.0/animated/cloudy.svg'
      case 'partly-cloudy-day':
        tempIcon.src ='/assets/amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg'
      case 'partly-cloudy-night':
        tempIcon.src ='/assets/amcharts_weather_icons_1.0.0/animated/cloudy-night-3.svg'
      case 'clear-night':
        tempIcon.src ='/assets/amcharts_weather_icons_1.0.0/animated/night.svg'
      case 'overcasting':
        tempIcon.src ='/assets/amcharts_weather_icons_1.0.0/animated/cloudy.svg'

  }
}
 
async function getData(){
  const response = await fetch(url);
  const weather = await response.json();
  console.log(weather)

  temperature.innerHTML = weather.currentConditions.temp
  city.innerHTML = weather.address;
  condition.innerHTML = weather.currentConditions.conditions;
  thermometricScale.innerHTML = '°F';
  tempIcon.alt = weather.description;

  
  changeIcon(weather)
}


searchInput.addEventListener('click',getData)