// Set global variable for custom ehader required by NWS API
var idHeader = {
    headers: {
        "User-Agent": "Student Learning Project - mar18016@byui.edu"
    }
};


// Functions will work together to get weather info for
// current location and populate web page with data
'use strict';


// Local Storage variable
let storage = window.localStorage;

// Call getGeoLocation
getGeoLocation();

// Get longitude and  latitude
function getGeoLocation(){
    const status = document.getElementById('status');
    status.innerHTML = "Getting Location..."

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function (position){
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            // Combine values
            const locale = lat + "," + long;
            console.log(`Lat and Long are: ${locale}.`);

            // Call getLocation, send locale
            getLocation(locale);
        })
    } else {
        status.innerHTML = "Your browser doesn't support Geolocation or it is not enabled!";
    }
}

function getLocation(){

}