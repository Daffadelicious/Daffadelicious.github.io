'use strict';

// Call getGeoLocation
getGeoLocation();

// Get longitude and  latitude
function getGeoLocation(){
    const status = document.getElementById('statusMessage');
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