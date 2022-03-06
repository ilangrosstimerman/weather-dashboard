//src and variables

src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js";
var fiveDayURL;
var currentQueryURL;
var UVIndURL;
var latitude;
var longitude;
var citySearch;
var cityStorage;

//local storage

if (JSON.parse(localStorage.getItem("cityArray") !== null)) {
    cityStorage = JSON.parse(localStorage.getItem("cityArray"));
  } else {
    cityStorage=[]
    localStorage.setItem("cityArray", cityStorage);
  }
  
//search button functionality

  $("#searchSubBtn").on("click", function (event) {
    $("#cityCurrent").html("");
    $("#fiveDay").html("");
    event.preventDefault();
    citySearch = $("#searchBar").val().trim();
    console.log(citySearch);
    getWeather();
  });

  //define getWeather function
  
  function getWeather() {
    var currentQueryURL =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      citySearch +
      "&appid=18a8feef5d0c615b7e0d94298dc9dfbe";

    var fiveDayURL =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    citySearch +
    "&appid=18a8feef5d0c615b7e0d94298dc9dfbe";

  }


  //today's info

  var todayTemp;
  var todayWS;
  var todayHumidity;
  var UVInd;
  var cityName;
  $.ajax({
    url: currentQueryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    latitude = response.coord.lat;
    longitude = response.coord.lon;
    UVIndURL =
      "http://api.openweathermap.org/data/2.5/uvi?appid=18a8feef5d0c615b7e0d94298dc9dfbe&lat=" +
      latitude +
      "&lon=" +
      longitude;
    todayTemp = (response.main.temp - 273) * (9 / 5) + 32;
    todayHumidity = response.main.humidity;
    todayWS = response.wind.speed;
    UVInd;
    cityName = response.name;
    cityStorage.push(response.name);
  
  })