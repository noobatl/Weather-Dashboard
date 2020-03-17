console.log("hello world");

// This is our API key
var APIKey = "99a566c439046197735a1f037b051159";
var city = "Atlanta";

// Here we are building the URL we need to query the database
var queryURL =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=" +
  APIKey;

console.log(queryURL);
