
var x = document.getElementById("local");
var lati, longi;
var tempC, tempF; 
var tempCheck = 0;  // c = 0, f = 1
var cCode = "&#8451;", fCode = "&#8457;";	
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getLocalWeather);
        
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function getLocalWeather(position) {
    // x.innerHTML = "Latitude: " + position.coords.latitude + 
    // "<br>Longitude: " + position.coords.longitude;
    longi = position.coords.longitude;
    lati = position.coords.latitude;
    var urlStr = "https://fcc-weather-api.glitch.me/api/current?lat=" + lati + "&lon=" + longi;
    console.log(urlStr);
    $.ajax( {
        url: urlStr,
        dataType: 'json',
        success: function(data) {
            console.log(JSON.stringify(data));
            document.getElementById("icon-weather").src = data.weather[0].icon;
            document.getElementById("icon-weather").alt = data.weather[0].main;
            document.getElementById("local-text").innerHTML = data.name + ", " + data.sys.country;
            tempC = data.main.temp;
            document.getElementById("temp").innerHTML = tempC;
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    tempC = true;
    tempF = false;
	getLocation();
    document.getElementById("temp-type").addEventListener("click", function(e) {
        console.log("click");
        e.preventDefault();
        tempF = tempC * 9/5 + 32;
        if(tempCheck === 0) {
            document.getElementById("temp").innerHTML = tempF;
            document.getElementById("temp-type").innerHTML = fCode;
            tempCheck = 1;
        } else {
            document.getElementById("temp").innerHTML = tempC;
            document.getElementById("temp-type").innerHTML = cCode;
            tempCheck = 0;
        }
    });
});