
var x = document.getElementById("local");
var long, lat;	
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
        
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function getPosition(position) {
    // x.innerHTML = "Latitude: " + position.coords.latitude + 
    // "<br>Longitude: " + position.coords.longitude;
    long = position.coords.longitude;
    lat = position.coords.latitude;
}

document.addEventListener("DOMContentLoaded", function() {
	getLocation();
});