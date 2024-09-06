// inputbox = document.querySelector('.input-box');
// const searchbtn = document.getElementById('searchbtn');
// const weather_img = document.getElementById('weather_img');
// const temperature = document.getElementById('temperature');
// const description = document.getElementById('description');
// const humidity = document.getElementById('humidity');
// const wind_speed = document.getElementById('wind_speed');
// const location_not_found = document.querySelector('.location-not-found');
// const weather_body = document.querySelector('.weather-body');

// let element = document.getElementById('elementId');
// if (element) {
//   element.innerHTML = 'New content';
// }

// async function checkweather(city) {
//   const api_key = "ac3607946c26030ea1d94a0b941d3039";
//   const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key};
//   const weather_data = await fetch(url).then(response => response.json());

//   if (weather_data.cod === 404) {
//     location_not_found.style.display = "flex";
//     weather_body.style.display = "none";
//     console.log("error");
//     return;
//   }

//   weather_body.style.display = "flex";
//   location_not_found.style.display = "none";

//   temperature.innerHTML = ${Math.round(weather_data.main.temp - 273.15)}°C;
//   description.innerHTML = weather_data.weather[0].description;
//   humidity.innerHTML = ${weather_data.main.humidity}%;
//   wind_speed.innerHTML = ${weather_data.wind.speed} km/H;

//   switch (weather_data.weather[0].main.toLowerCase()) {
//     case 'clouds':
//       weather_img.src = "https://media.istockphoto.com/id/1392278078/vector/sun-and-cloud-with-rain-drops-weather-concept-3d-vector-icon-cartoon-minimal-style.jpg?s=612x612&w=0&k=20&c=7ltfH6gTpng1ccretR29TYDY5lDnyTTtqttaXzs6tis=";
//       break;
//     case 'clear':
//       weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-3yBUjW-MLQgUS_yW_5FfWB_qn--PZ1VrA&s";
//       break;
//     case 'rain':
//       weather_img.src = "https://thumbs.dreamstime.com/b/rainy-weather-icon-clouds-umbrella-24120412.jpg";
//       break;
//     case 'mist':
//       weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ppLr6JgPXrVNGz2kxCw2-fefNS56Je5Ypw&s";
//       break;
//     case 'snow':
//       weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2i4jhTGtLJY_c68MshjTcnX_w3LxhozBrNw&s";
//       break;
//     default:
//       console.error('Unknown weather condition:', weather_data.weather[0].main);
//   }

//   console.log(weather_data);
// }

// searchbtn.addEventListener('click', () => {
//   checkweather(inputbox.value);
// });

const inputbox = document.querySelector('.input-box');  // Corrected from 'utbox'
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.getElementById('weather_img');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind_speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

let element = document.getElementById('elementId');
if (element) {
  element.innerHTML = 'New content';
}

async function checkweather(city) {
  const api_key = "ac3607946c26030ea1d94a0b941d3039";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;  // Corrected URL
  const weather_data = await fetch(url).then(response => response.json());

  if (weather_data.cod === 404) {
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    console.log("error");
    return;
  }

  weather_body.style.display = "flex";
  location_not_found.style.display = "none";

  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;  // Corrected interpolation
  description.innerHTML = weather_data.weather[0].description;
  humidity.innerHTML = `${weather_data.main.humidity}%`;  // Corrected interpolation
  wind_speed.innerHTML = `${weather_data.wind.speed} km/H`;  // Corrected interpolation

  switch (weather_data.weather[0].main.toLowerCase()) {
    case 'clouds':
      weather_img.src = "https://media.istockphoto.com/id/1392278078/vector/sun-and-cloud-with-rain-drops-weather-concept-3d-vector-icon-cartoon-minimal-style.jpg?s=612x612&w=0&k=20&c=7ltfH6gTpng1ccretR29TYDY5lDnyTTtqttaXzs6tis=";
      break;
    case 'clear':
      weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-3yBUjW-MLQgUS_yW_5FfWB_qn--PZ1VrA&s";
      break;
    case 'rain':
      weather_img.src = "https://thumbs.dreamstime.com/b/rainy-weather-icon-clouds-umbrella-24120412.jpg";
      break;
    case 'mist':
      weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ppLr6JgPXrVNGz2kxCw2-fefNS56Je5Ypw&s";
      break;
    case 'snow':
      weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2i4jhTGtLJY_c68MshjTcnX_w3LxhozBrNw&s";
      break;
    default:
      console.error('Unknown weather condition:', weather_data.weather[0].main);
  }

  console.log(weather_data);
}

searchbtn.addEventListener('click', () => {
  checkweather(inputbox.value);
});
