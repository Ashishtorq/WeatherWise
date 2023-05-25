// const apik = "353757cc05cd55f2f6c4c6d5bfd6c81f";
// const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=banglore";
// async function checkweather(){
//     const response = await fetch(apiUrl + `&appid=${apikey}`);
//     var data = await response.json();
//     console.log(data);
// }
// checkweather();

const apikey = "353757cc05cd55f2f6c4c6d5bfd6c81f";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weathericon");

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    //console.log(data);

    document.querySelector(".city").innerHTML = data.name;

    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";

    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";

    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    console.log(data);
    console.log(weatherIcon);
    if (data.weather[0].main == "Haze") {
      weatherIcon.src = `images/clouds.png`;
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
