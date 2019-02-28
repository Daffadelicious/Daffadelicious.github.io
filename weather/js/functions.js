/* *************************************
*  Weather Site JavaScript Functions
************************************* */

// Variables for Function Use
const temp = 31;
const speed = 5;

buildWC(speed, temp);

// Calculate the Windchill
function buildWC(speed, temp){
    const feelTemp = document.getElementById('feelTemp');

    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);

    // Round the answer down to integer
    wc = Math.floor(wc);

    // If chill is greater than temp, return the temp
    wc = (wc > temp)?temp:wc;

    // Display the windchill
    console.log(wc);
    wc = 'Feels like ' + wc + '&deg;F';
    feelsLike.innerHTML = wc;
}

// Call the windDial Function
const direction = "East";
windDial(direction);

// Wind Dial Function
function windDial(direction){
    // Get the wind dial container
    const dial = document.getElementById("dial");
    // Determine the dial class
    switch (direction){
        case "North":
        case "N":
        dial.setAttribute("class", "n"); //"n" is the CSS rule selector
        break;
        case "NE":
        case "NNE":
        case "ENE":
        dial.setAttribute("class", "ne");
        break;
        case "NW":
        case "NNW":
        case "WNW":
        dial.setAttribute("class", "nw");
        break;
        case "South":
        case "S":
        dial.setAttribute("class", "s");
        break;
        case "SE":
        case "SSE":
        case "ESE":
        dial.setAttribute("class", "se");
        break;
        case "SW":
        case "SSW":
        case "WSW":
        dial.setAttribute("class", "sw");
        break;
        case "East":
        case "E":
        dial.setAttribute("class", "e");
        break;
        case "West":
        case "W":
        dial.setAttribute("class", "w");
        break;
    }
}

// Call the getCondition Function
let weather = getCondition("clear");

// Get Condition Function
function getCondition(phrase){
    let input = phrase;
    switch (input){
        case "clear":
        case "Clear":
        case "Nothing":
            input = "Clear";
            break;
        case "Cloudy":
        case "cloudy":
        case "Clouds":
        case "clouds":
        case "Party Cloudy":
        case "partly cloudy":
        case "Partly cloudy":
            input = "Clouds";
            break;
        case "Fog":
        case "fog":
        case "Foggy":
        case "fog":
            input = "Fog";
            break;
        case "Rain":
        case "rain":
        case "Rainy":
        case "rainy":
            input = "Rain";
            break;
        case "snow":
        case "Snow":
        case "snowy":
        case "Snowy":
            input = "Snow";
            break;
    }
    return input;
}

// Call the changeSummaryImage Function
changeSummaryImage(weather);

function changeSummaryImage(weather){
    // Get the picture container
    const weatherPic = document.getElementById("weatherPic");
    switch(weather){
        case "Clear":
        weatherPic.setAttribute("class", "clear");
        break;
        case "Clouds":
        weatherPic.setAttribute("class", "cloudy");
        break;
        case "Fog":
        weatherPic.setAttribute("class", "fog");
        break;
        case "Rain":
        weatherPic.setAttribute("class", "rain");
        break;
        case "Snow":
        weatherPic.setAttribute("class", "snow");
        break;
    }
}   


// Gets info from elevation on html
let meters = document.getElementById("elevation").innerText;

function convertMeters(meters){
    feet = Math.floor(meters * 3.28);
    return feet;
}
// Calls convertMeters 
let test = convertMeters(meters);
console.log(test);