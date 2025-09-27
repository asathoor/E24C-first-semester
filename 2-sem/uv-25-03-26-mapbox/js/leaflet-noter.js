// se: https://www.w3schools.com/js/js_strict.asp

/**
 * Leaflet
 */

// Kortet centreres på en geografisk position
const kortCenter = [55.250310, 9.482092] // London

// kortet centreres nu på kortCenter
var map = L.map('map').setView( kortCenter , 15)

// VIGTIGT: copyright informationer skal være i orden, så brug altid:
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

// cirkel
var circle = L.circle( kortCenter, {
    color: 'yellow',
    fillColor: 'pink',
    fillOpacity: 0.3,
    radius: 222
}).addTo(map)


// marker
var marker = L.marker( kortCenter ).addTo(map)

// damager kirkegaard
var damager = L.marker( [55.24, 9.46] ).addTo(map)
damager.bindPopup("Ude i vandet")

// geometrisk poligon
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map)


// popup'ere forbindes med variablen:
marker.bindPopup(" Damparken i Haderslev")
//circle.bindPopup("I am a circle.")
//polygon.bindPopup("I am a polygon.")


// openPopup() metoden vil åbne et lag oven på kortet
/*
marker.bindPopup("🍦 <b>Hello world!</b><br>I am a popup.").openPopup()
circle.bindPopup("I am a circle.")
polygon.bindPopup("I am a polygon.")
*/

// events kan anvendes sådan:

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng)
}

map.on('click', onMapClick) // viser positionen i en alert
// hvad kan det her bruges til?
// kan andre events end click bruges her?


// Haderslev
// https://www.openstreetmap.org/search?query=haderslev#map=17/55.250310/9.482092

/** Interaktive funktioner */
// flyTo()
let flyvTil = ( position, zoom, abc) => {
    map.flyTo( position, zoom )
    
    // herefter kan scriptet starte lyd, video etc.
    // ændre innerHTML (DOM'en)
    // style noget .... etc. etc. etc. 
    tekst.innerHTML = abc
}