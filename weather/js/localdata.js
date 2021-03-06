/* *************************************
*  Weather Site JavaScript Functions
************************************* */

// Key for Rexburg: krxe
// Example: data.properties.temperature.value; data.properties.windSpeed.value;
// Create function that converts Celcius to Fahrenheit

"use strict";

// Set global variable for custom ehader required by NWS API
var idHeader = {
    headers: {
        "User-Agent": "Student Learning Project - mar18016@byui.edu"
    }
};

// DOM structures from webpage
let pageNav = document.getElementById('page-nav');
let statusContainer = document.getElementById('statusMessage');
let contentContainer = document.getElementById('page-content');

let weatherURL = "/weather/js/weather.json";
fetchData(weatherURL);

function fetchData(weatherURL){
    let cityName = 'Greenville'; // The data we want from the weather.json file
    fetch(weatherURL)
    .then(function(response) {
        if(response.ok){
            return response.json();
        }
        throw new ERROR('Network response was not OK.');
    })
    .then(function(data){
        // Check the data object that was retrieved
        console.log(data);
        // data is the full JavaScript object, but we only want the greenville part
        // shorten the variable and focus only on the data we want to reduce typing
        let g = data[cityName];

    // ************ Get the content ******************************

    // Get the location data
    let locName = g.City;
    let locState = g.State;
    // Put them together
    let fullName = locName+', '+locState;
    // See if it worked
    console.log('fullName is: '+fullName);

    // Get the temperature data
    let curTemp = g.Temp;
    let high = g.High;
    let low = g.Low;
    // Test
    console.log("Current Temp:" + curTemp + " High Temp: " + high + " Low Temp: " + low);

    // Get the wind data 
    let windSpeed = g.Wind;
    let gusts = g.Gusts;
    let windDirection = g.Direction;
    // Test
    console.log("Wind is " + wind + ", Direction is " + direction + ", Gusts are " + gusts);

    // Get the current conditions
    let precipitation = g.Precip;
    let weather = g.summary;
    // Test
    console.log("It is currently " + weather + " and the precipitation is " + precipitation);

    // Get the hourly data 
    let hourlyData = g.Hourly;

    // Test
    console.log("The hourly data is " + hourlyData);

    // ************ Display the content ******************************
    // Set the title with the location name at the first
    // Gets the title element so it can be worked with
    let pageTitle = document.getElementById('pageTitle');
    // Create a text node containing the full name 
    let fullNameNode = document.createTextNode(fullName);
    // inserts the fullName value before any other content that might exist
    pageTitle.insertBefore(fullNameNode, pageTitle.childNodes[0]);
    // When this is done the title should look something like this:
    // Greenville, SC | The Weather Site

    // Set the Location information
    // Get the h1 to display the city location
    let contentHeading = document.getElementById('pageHeader');
    contentHeading.innerHTML = fullName;
    // The h1 in main h1 should now say "Greenville, SC"


    // Set the temperature information
    document.getElementById("curTemp").innerHTML = curTemp + "&deg;";
    document.getElementById("high").innerHTML = high + "&deg;";
    document.getElementById("low").innerHTML = low + "&deg;";
    document.getElementById("feelsLike").innerHTML = buildWC(windSpeed, curTemp);

    // Set the wind information
    document.getElementById("mph").innerHTML = windSpeed;
    document.getElementById("gusts").innerHTML = gusts + " mph";
    document.getElementById("direction").innerHTML = windDirection;
    windDial(windDirection);

    // Set the current conditions information
    document.getElementById("weatherTitle").innerHTML = weather;
    console.log(weather);
    let summary = getCondition(weather);
    changeSummaryImage(summary);

    // Set the location information
    let convertedElevation = convertMeters(g.Elevation);
    console.log("Elevation converted into feet equals " + convertedElevation);
    document.getElementById("elevation").innerHTML = convertedElevation;

    // Set the hourly temperature information
    let date = new Date();
    let nextHour = date.getHours() + 1;
    hourlyUL.innerHTML = buildHourlyData(nextHour, hourlyData);

    // Change the status of the containers
    pageContent.setAttribute('class', ''); // removes the hide class
    statusMessage.setAttribute('class', 'hide'); // hides the status container
  })
  .catch(function(error){
  console.log('There was a fetch problem: ', error.message);
  statusMessage.innerHTML = 'Sorry, the data could not be processed.';
  })
}