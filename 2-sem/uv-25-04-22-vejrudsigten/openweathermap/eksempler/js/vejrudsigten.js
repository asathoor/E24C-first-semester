        /*
            @datasæt læses sådan:

            http://api.openweathermap.org/data/2.5/weather?
            q=Aarhus
            &lang=da
            &units=metric
            &appid=201d090c9cceacfc8931df89310ebfbb

        */

// token from OpenWeatherMap
const appId = '201d090c9cceacfc8931df89310ebfbb';

// get the weather JSON data via query URI
fetch("http://api.openweathermap.org/data/2.5/weather?q=Aarhus&lang=da&units=metric&appid=" + appId ).then(
    response => {
    return response.json(); // get weather data as JSON
}).then(data => {

    // Work with JSON data here
    console.log(data); // show what's in the json

    // solnedgang
    // var sunsetMs = data.sys.sunset * 1000; // dato-objektet har brug for millisek. Derfor * 1000
    // var sunset = new Date(sunsetMs);

    // Datoformattering @URI < https://www.w3schools.com/js/js_date_methods.asp >
    // var sunsetTime = sunset.getHours() + ":" + sunset.getMinutes();

    // lægger vejrdata ind i #result
    document.getElementById('result').innerHTML =

        // tilføjer ("append") en div til vejroplysninger
        '<div class="weatherInfo">' +

        // tilføjer bynavn
        '<h1> ' + data.name + ' </h1>' +
        
        // '<h2> Luftfugtighed: ' + data.main.humidity + ' </h2>' +

        // OPGAVE:
        // SKRIV HVOR VARMT DET ER LIGE NU?
        // VIA JSON
        // ----
        // hvor varmt er der lige nu i min by?
        '<aside id="temperatur" class="enClass"> Temperatur: ' + data.main.temp + ' </aside>' +

        // tilføjer en beskrivelse af vejret lige nu
        // '<h2>Vejr: ' + data.weather[0].description + '</h2>' +
        // '<h2>Pressure: ' + data.weather[0].main + '</h2>' +

        // Vejrsymbol 
        '<figure>' +
        '<img src="http://openweathermap.org/img/wn/' + data.weather[0].icon +
        '.png" alt="Vejrsymbol">' +
        '</figure>' +

        // tilføjer klokkeslet for solens nedgang i vest
        // '<p> Solnedgang: ' + sunsetTime + '</p>' +

        '</div>'; // afslutter #weatherInfo taggen

    // URL to the weather icons: https://openweathermap.org/weather-conditions

}).catch(err => {
    // Do something with error here
    console.log('There was an error ...');
});