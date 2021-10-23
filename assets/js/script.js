var API_KEY = "c12abb45fb3d7846dcce3d0a0d3e56f1";

var searchBtn = document.querySelector("#search-btn");



searchBtn.addEventListener("click", function() {
    weatherDataCall();
    // weatherDataCall();
});



let weatherDataCall = function () {
    function storeCity() {
        let userCity = document.getElementById("city").value;
        console.log(userCity);
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${API_KEY}`)

            .then(function(response) {
            response.json().then(function (data) {
                console.log('hello');
                // displayIssues(data);
            });
            });
    }
    storeCity();
}

var displayIssues = function (issues) {

    for (i = 0; i < issues.length; i++) {
        var issueEl = document.createElement('div');
        issueEl
    }
}