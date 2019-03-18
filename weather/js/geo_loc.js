// // Functions will work together to get weather info for
// // current location and populate web page with data
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

// // Gets location information from the NWS API
// function getLocation(locale){
//     const URL = "https://api.weather.gov/points/" + locale;
//     // NWS User-Agent header is second parameter

//     // Fetch fucntion
//     fetch(URL, idHeader)
//         .then(function(response){
//             if(response.ok){
//                 return response.json();
//             }
//             throw new Error("Response not OK.");
//         })
//         .then(function(data) {
//             // Check 
//             console.log("Json object from getLocation function: ");
//             console.log(data);
//             // Store in localstorage
//             storage.setItem("locName", data.properties.relativeLocation.properties.city);
//             storage.setItem("locState", data.properties.relativeLocation.properties.state);
            
//             // Get weather station ID
//             let stationsURL = data.properties.observationStations;
//             // Call getStationId function
//             getStationID(stationsURL);
//         })
//         .catch(error => console.log("There was a getLocation error: ", error))
// }

// // Gets weather station list and finds ID
// function getStationID(stationsURL){
//     fetch(stationsURL, idHeader)
//     .then(function(response){
//         if(response.ok){
//             return response.json();
//         }
//         throw new Error("Response not OK.");
//     })
//     .then(function(data){
//         // Check collected data
//         console.log("From getStationId function:");
//         console.log(data);
    

//     // Store station ID and elevation
//     let stationId = data.features[0].properties.stationIdentifier;
//     let stationElevation = data.features[0].properties.elevation.value;
//     // Check
//     console.log("Station and Elevation are " + stationId, stationElevation);

//     // Data to localstorage
//     storage.setItem("stationId", stationId);
//     storage.setItem("stationElevation", stationElevation);

//     // Request current weather for specific station
//     getWeather(stationId);
//     })
//     .catch(error => console.log("There was a getStationId error: ", error))
// }

// // Gets current weather information for specific station
// function getWeather(stationId){
//     // Url for current observation data
//     const URL = "https://api.weather.gov/stations/" + stationId + "/observations/latest";
    
//     fetch(URL, idHeader)
//     .then(function(response){
//         if(response.ok){
//             return response.json();
//         }
//         throw new ERROR("Response not OK.");
//     })
//     .then(function(data){
//         // Check data
//         console.log("From getWeather function:");
//         console.log(data);

//         // Store weather information 
//         let temperature = data.properties.temperature.value;
//         let curWeather = data.properties.temperature.textDescription;
//         let windSpeed = data.properties.windSpeed.value;
//         let windDirection = data.properties.windDirection.value;
//         // Comment out these three if error
//         let windGust = data.properties.windGust.value;
//         let high = data.properties.maxTemperatureLast24Hours.value;
//         let low = data.properties.minTemperatureLast24Hours.value;

//         // Local storage
//         storage.setItem("temperature", temperature);
//         storage.setItem("curWeather", curWeather);
//         storage.setItem("windSpeed", windSpeed);
//         storage.setItem("windDirection", windDirection);
//         storage.setItem("windGust", windGust);
//         storage.setItem("high", high);
//         storage.setItem("low", low);
//     })
//     .catch(error => console.log("There was a getWeather error: ", error))
// }