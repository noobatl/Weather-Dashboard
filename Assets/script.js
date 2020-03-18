// This is our API key
var APIKey = "99a566c439046197735a1f037b051159";
var city = "Atlanta";
var currentDate = moment().format("l");
// Here we are building the URL we need to query the database
var queryCurrentURL =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=" +
  APIKey;

$.ajax({
  url: queryCurrentURL,
  method: "GET"
}).then(function(currentResponse) {
  // Log the queryURL and response object
  //   console.log(queryCurrentURL);
    console.log(currentResponse);

  $("#current-city").text(currentDate);

//   var iconCodeCurrent = currentResponse.weather[0].icon;
//   console.log(iconCodeCurrent);
//   var currentIcon = $("<img>").html.attr(
//     "src",
//     "http://openweathermap.org/img/wn/" + iconCodeCurrent + "@2x.png"
//   );

  // Transfer content to HTML
  $("#current-city").html(
    "<h1>" + currentResponse.name + " " + currentDate + " " + "</h1>"
  );
//   $("#current-city").html(
//       "<img>" + "</img>"
//   );
  // Convert the temp to fahrenheit
  var tempF = (currentResponse.main.temp - 273.15) * 1.8 + 32;
  $("#current-temperature").text(
    "Temperature: " + tempF.toFixed(1) + " \u00B0F"
  );
  $("#current-humidity").text(
    "Humidity: " + currentResponse.main.humidity + "%"
  );
  $("#current-wind").text("Wind Speed: " + currentResponse.wind.speed + " MPH");
});

var queryForecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?q=" +
  city +
  "&appid=" +
  APIKey;

$.ajax({
  url: queryForecastURL,
  method: "GET"
}).then(function(forecastResponse) {
  // Log the queryURL and response object
  //   console.log(queryForecastURL);
  //   console.log(forecastResponse);

  // Temperature forecast for given date at 15:00
  var forecastOne = forecastResponse.list[4].main;
  $("#forecast-date-1").text(
    moment()
      .add(1, "days")
      .format("l")
  );
  var iconCodeOne = forecastResponse.list[4].weather[0].icon;
  $("#forecast-img-1").attr(
    "src",
    "http://openweathermap.org/img/wn/" + iconCodeOne + "@2x.png"
  );
  var tempF = (forecastOne.temp - 273.15) * 1.8 + 32;
  $("#forecast-temp-1").text("Temp: " + tempF.toFixed(1) + " \u00B0F");
  $("#forecast-humid-1").text("Humidity: " + forecastOne.humidity + "%");

  var forecastTwo = forecastResponse.list[12].main;
  $("#forecast-date-2").text(
    moment()
      .add(2, "days")
      .format("l")
  );
  var iconCodeTwo = forecastResponse.list[12].weather[0].icon;
  $("#forecast-img-2").attr(
    "src",
    "http://openweathermap.org/img/wn/" + iconCodeTwo + "@2x.png"
  );
  var tempF = (forecastTwo.temp - 273.15) * 1.8 + 32;
  $("#forecast-temp-2").text("Temp: " + tempF.toFixed(1) + " \u00B0F");
  $("#forecast-humid-2").text("Humidity: " + forecastTwo.humidity + "%");

  var forecastThree = forecastResponse.list[20].main;
  $("#forecast-date-3").text(
    moment()
      .add(3, "days")
      .format("l")
  );
  var iconCodeThree = forecastResponse.list[20].weather[0].icon;
  $("#forecast-img-3").attr(
    "src",
    "http://openweathermap.org/img/wn/" + iconCodeThree + "@2x.png"
  );
  var tempF = (forecastThree.temp - 273.15) * 1.8 + 32;
  $("#forecast-temp-3").text("Temp: " + tempF.toFixed(1) + " \u00B0F");
  $("#forecast-humid-3").text("Humidity: " + forecastThree.humidity + "%");

  var forecastFour = forecastResponse.list[28].main;
  $("#forecast-date-4").text(
    moment()
      .add(4, "days")
      .format("l")
  );
  var iconCodeFour = forecastResponse.list[28].weather[0].icon;
  $("#forecast-img-4").attr(
    "src",
    "http://openweathermap.org/img/wn/" + iconCodeFour + "@2x.png"
  );
  var tempF = (forecastFour.temp - 273.15) * 1.8 + 32;
  $("#forecast-temp-4").text("Temp: " + tempF.toFixed(1) + " \u00B0F");
  $("#forecast-humid-4").text("Humidity: " + forecastFour.humidity + "%");

  var forecastFive = forecastResponse.list[36].main;
  $("#forecast-date-5").text(
    moment()
      .add(5, "days")
      .format("l")
  );
  var iconCodeFive = forecastResponse.list[36].weather[0].icon;
  $("#forecast-img-5").attr(
    "src",
    "http://openweathermap.org/img/wn/" + iconCodeFive + "@2x.png"
  );
  var tempF = (forecastFive.temp - 273.15) * 1.8 + 32;
  $("#forecast-temp-5").text("Temp: " + tempF.toFixed(1) + " \u00B0F");
  $("#forecast-humid-5").text("Humidity: " + forecastFive.humidity + "%");
});


