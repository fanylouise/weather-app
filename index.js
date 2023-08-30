let key = 'RN2K9W7RXKDS9HFUBNQWDL6UL';
let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Brasilia%2CBR?unitGroup=us&key=${key}`;
let searchInput = document.querySelector('.search');
let temperature = document.querySelector('.temperature');
let condition = document.querySelector('.condition')
let city = document.querySelector('.city');
let day = document.querySelector('.day');
let weekyDay;

async function getData(){
  const response = await fetch(url);
  const weather = await response.json();
  console.log(weather)

  temperature.innerHTML = weather.currentConditions.temp
  city.innerHTML = weather.address;
  condition.innerHTML = weather.currentConditions.conditions;
}
searchInput.addEventListener('click',getData)