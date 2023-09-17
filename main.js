/* Selecting elements from the HTML using the
`document.querySelector()` and `document.getElementById()` methods. */
const searchInput = document.querySelector('.search')
const seeWeather = document.querySelector('.getData')
const key = 'RN2K9W7RXKDS9HFUBNQWDL6UL'
const temperature = document.querySelector('.temperature')
const condition = document.querySelector('.condition')
const city = document.querySelector('.city')
const day = document.querySelector('.day')
const thermometricScale = document.querySelector('.scale')
const tempIcon = document.querySelector('.tempIcon')
const windSpeed = document.querySelector('.windStat')
const humidity = document.querySelector('.humidityStat')
const visibility = document.querySelector('.visibilityStat')
const airPressure = document.querySelector('.airPressureStat')
const weatherToday = document.getElementById('#weatherToday')
const hightlights = document.getElementById('#hightlights')
const weatherWeekCard = document.querySelector('.weatherWeekCard')
const week = document.querySelector('.week')
const scroll = document.querySelector('.scroll')



 /* The `setData` function is an asynchronous function that is triggered when the user
clicks on the "See Weather" button. It retrieves weather data from an API based on
the value entered in the search input field. The function makes a fetch request to
the API endpoint, waits for the response, and then parses the response as JSON. It
then updates various elements on the page with the retrieved weather data, such as
temperature, city, condition, wind speed, humidity, visibility, air pressure, and the


weather forecast for the week. */
async function setData() {


  if(searchInput.value != '') {

    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchInput.value}?unitGroup=us&key=${key}`

    const response = await fetch(url)
    const weather = await response.json()

    console.log(weather)

    temperature.innerHTML = Math.floor(
      (weather.currentConditions.temp - 32) / 1.8
    )
    city.innerHTML = weather.address.toUpperCase()
    condition.innerHTML = weather.currentConditions.conditions;
    thermometricScale.innerHTML = '°C'
    tempIcon.alt = weather.description;
    windSpeed.innerHTML = weather.currentConditions.windspeed + ' mph'
    humidity.innerHTML = weather.currentConditions.humidity + ' %'
    visibility.innerHTML = weather.currentConditions.visibility + ' miles'
    airPressure.innerHTML = weather.currentConditions.pressure + ' mb'
    tempIcon.src = `./assets/amcharts_weather_icons_1.0.0/animated/${weather.currentConditions.icon}.svg`

    week.innerHTML = ''

    for (dia of weather.days) {
      week.innerHTML += `<div class='weatherWeekCard'>


       <img src='${`./assets/amcharts_weather_icons_1.0.0/animated/${dia.icon}.svg`}' alt='' class='tempIcon'>;
       
      <section class='minmax'>
        <span class="max">${Math.floor((dia.tempmax - 32) / 1.8)} °C </span>
        <span class="min">${Math.floor((dia.tempmin - 32) / 1.8)} °C </span>
      </section>
     
      <h3 class='title' >${dia.datetime.slice(5.6)}</h3>
      </div>
      `
    }
  }else if(temp.icon = '') {
    throw new Error(response.status);
  }
}

seeWeather.addEventListener('click', setData)
