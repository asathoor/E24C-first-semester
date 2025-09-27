/*
Fil: oevelse.js
formål: sådan virker API'en fra OpenWeatherMap

    URL'en formatteres sådan:

    http://api.openweathermap.org/data/2.5/weather?
    q=Aarhus
    &lang=da
    &units=metric
    &appid=DIN-APP-KEY-HER
*/

// token fra OpenWeatherMap
const appId = 'DIN-API-KEY-HER'

// get the weather JSON data via query URI
fetch("http://api.openweathermap.org/data/2.5/weather?q=Aarhus&lang=da&units=metric&appid=" + appId ).then(
    response => {
    return response.json(); // get weather data as JSON
}).then(data => {

    // Work with JSON data here
    console.log(data) // show what's in the json

    // lægger vejrdata ind i #result
    document.getElementById('result').innerHTML =

        // tilføjer ("append") en div til vejroplysninger
        '<section class="weatherInfo">' +

        // tilføjer bynavn
        '<h1> ' + data.name + ' </h1>' +
        
        // Vejrsymbol 
        '<figure>' +
        '<img src="http://openweathermap.org/img/wn/' + data.weather[0].icon +
        '.png" alt="Vejrsymbol">' +
        '</figure>' +
       
        '</section>' // afslutter #weatherInfo taggen

    // URL to the weather icons: https://openweathermap.org/weather-conditions

}).catch(err => {
    // Do something with error here
    console.log('Noget gik galt ... ' + err  )
})