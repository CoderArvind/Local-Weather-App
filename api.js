
var getWeather=function(json){

  $('#weatherIcon')
        .append("<img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png' class='resize'>");
  $("#condition").html(json.weather[0].description);
  $("#temprature").html(json.main.temp+" &deg"+"C");
}

$(document).ready(function(){


  function getLocation() {
    $.get("https://ipinfo.io", function(location) {
      var city=location.city;
      var loc=location.loc.split(',');
        //console.log(longi);
      var lat=loc[0];
      var longi=loc[1];
       $("#location").html(city);
      api_Gen(city,lat,longi);
    }, "jsonp");

  }


  function api_Gen(a,b,c){
    var city=a;
    var lat=b;
    var longi=c;
    var api="http://api.openweathermap.org/data/2.5/weather?";
  var geoLat="lat="+lat;
  var geoLong="&lon="+longi;
  var api_key="&APPID=ee46ebbe1e1716d6214d5abff1545c42";
    var unit="&units=metric";
  var apiUrl=api+geoLat+geoLong+api_key+unit;

  $.getJSON(apiUrl,getWeather,'jsonp');
  }
  getLocation();

});
