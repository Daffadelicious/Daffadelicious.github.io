/* *************************************
*  Weather Site JavaScript Functions
************************************* */

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
    return wc;
}

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
        case "Thunderstorms":
            input = "Rain";
            break;
        case "snow":
        case "Snow":
        case "snowy":
        case "Snowy":
            input = "Snow";
            break;
    }
    console.log(input);
    return input; 
}

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

function convertMeters(meters){
    feet = Math.floor(meters * 3.28);
    return feet;
}

// Convert hours into 12 hour format
function time_format(hour){
    if(hour > 23){
        hour -= 24;
    }
    let amPM = (hour > 11) ? "pm" : "am";
    if(hour > 12){
        hour -= 12;
    }
    if(hour == 0){
        hour = "12";
    }
    return hour + amPM;
}

// Build the hourly temperature list
function buildHourlyData(nextHour,hourlyTemps) {
    // Data comes from a JavaScript object of hourly temp name - value pairs
    // Next hour should have a value between 0-23
    // The hourlyTemps variable holds an array of temperatures
    // Line 8 builds a list item showing the time for the next hour 
    // and then the first element (value in index 0) from the hourly temps array
    let hourlyListItems = '<li>' + format_time(nextHour) + ': ' + hourlyTemps[0] + '&deg;F</li>';
    // Build the remaining list items using a for loop
    for (let i = 1, x = hourlyTemps.length; i < x; i++) {
        hourlyListItems += '<li>' + format_time(nextHour+i) + ': ' + hourlyTemps[i] + '&deg;F</li>';
    }
    console.log('HourlyList is: ' +hourlyListItems);
    return hourlyListItems;
    }

// Get the next hour based on the current time
let date = new Date(); 
let nextHour = date.getHours() + 1;