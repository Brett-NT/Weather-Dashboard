var API_KEY = "c12abb45fb3d7846dcce3d0a0d3e56f1";
var API_KEY2 = "304c4844c8b903f295e5d1a0a1da5ab5";
var searchBtn = document.querySelector("#search-btn");
var current = document.querySelector('.current-forecast');
let userCity = document.getElementById("city").value;

searchBtn.addEventListener("click", function() {
    currentWeather();
    forecastFiveDays();
    saveSearch();
});



let currentWeather = function () {
    let userCity = document.getElementById("city").value;
    console.log(userCity);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${API_KEY}&units=imperial`)
    .then(function(response) {
        response.json().then(function (data) {
            console.log(data);
            current.style.border = "3px solid";
            $('.current-header').text(userCity);
            $('.current-temp').text('Temp: ' + data.main.temp + ' Degrees');
            $('.current-wind').text('Wind: ' + data.wind.speed + ' MPH');
            $('.current-humid').text('Humidity: ' + data.main.humidity + '%');
        });   
    });
}

let forecastFiveDays = function() {
    fetch(`api.openweathermap.org/data/2.5/forecast/daily?q=${userCity}&cnt=5&appid=${API_KEY2}`)
    .then(function(response) {
        response.json().then(function(data) {
            console.log(data);

        })
    })
}

let saveSearch = function() {
    localStorage.setItem("previous-searches", JSON.stringify(userCity));
}
let loadHistory = function() {
    localStorage.getItem("previous-searches");
}

