function tellTime(){
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    console.log("Current time:"+theHr+":"+theMin);
}

tellTime();



function showTemperature(){
    console.log("Current temperature is: "+26);
}


function showHumidity(){
    console.log("Current Humidity is: "+75);
}

function showWeather(){
    showTemperature();
    showHumidity();
}

showWeather();