var API_KEY = "c12abb45fb3d7846dcce3d0a0d3e56f1";
var API_KEY2 = "ee6fa46e570d6a6d896cc11ed9e3acf7";
var searchBtn = document.querySelector("#search-btn");
var current = document.querySelector('.current-forecast');
let userCity = document.getElementById("city").value;
let dateToday = moment().format('L');

searchBtn.addEventListener("click", function() {
    currentWeather();
    forecastFiveDays();
    saveSearch();
    loadHistory();
});



let currentWeather = function () {
    let userCity = document.getElementById("city").value;
    console.log(userCity);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${API_KEY}&units=imperial`)
    .then(function(response) {
        response.json().then(function (data) {
            console.log(data);
            current.style.border = "3px solid";
            $('.current-header').text(userCity + "  (" + dateToday + ")");
            $('.current-temp').text('Temp: ' + data.main.temp + ' Degrees');
            $('.current-wind').text('Wind: ' + data.wind.speed + ' MPH');
            $('.current-humid').text('Humidity: ' + data.main.humidity + '%');
            $('.current-UV').text('UV: ');
        });   
    });
}

let forecastFiveDays = function() {
    let userCity = document.getElementById("city").value;
    var API_KEY = "c12abb45fb3d7846dcce3d0a0d3e56f1";

    fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${userCity}&cnt=5&appid=${API_KEY2}&units=imperial`)
    .then(function(response) {
        response.json().then(function(data) {
            console.log(data);

        })
    })
}

let saveSearch = function(event) {

    var userCity = document.getElementById("city").value;
    var histLoad = JSON.parse(localStorage.getItem(saveSearch)) || [];
    histLoad.push(userCity);
    localStorage.setItem("previous-searches", JSON.stringify(histLoad));


    $('.hist-1').text(histLoad[0]);
    $('.hist-2').text(histLoad[1]);
    $('.hist-3').text(histLoad[2]);
    $('.hist-4').text(histLoad[3]);
    $('.hist-5').text(histLoad[4]);
    $('.hist-6').text(histLoad[5]);
    $('.hist-7').text(histLoad[6]);
    $('.hist-8').text(histLoad[7]);   
    event.preventDefault();
}

