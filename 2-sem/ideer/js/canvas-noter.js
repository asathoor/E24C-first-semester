/**
 * Fil: HTML Canvas noter (2D grafik)
 * Formål: forberedelse af introduktion til canvas og js.
 * Version: 1.0
 */

// Globale variabler

// lærredet
let canvas = document.querySelector("#scene") // selector
let c = canvas.getContext("2d") // vi tegner i 2D a la Flanagan ;-)
let ctx = c // og laver et alias der svarer til W3 eksempler ;-)

// farver (CoPilot forsøger at vælge farver i stil med Goethes farvelære)
let tomat = "#FF6347" // Tomat (Tomato)
let guld = "rgba(255, 99, 71, 0.4)" // Guld (Gold)
let groenGul = "#ADFF2F" // Grøn gul (Green Yellow)
let turkis = "#00CED1" // Mørk turkis (Dark Turquoise)
let blaa = "#8A2BE2" // Blå violet (Blue Violet)
let moerk = "black" // mørk kontrast
let lys = "white" // lys kontrast

// tegn en firkant
let tegnEnFirkant = () => {    
    c.fillStyle = groenGul // farve fra globale var
    c.strokeStyle 
    c.fillRect(30,20,100,100) // definerer hjørnernes position
}

// Forbedring af koden: 
// lav en funktion som, laver en firkant med en tilfældig bredde og højde.
// Hvordan kan du skrive sådan en funktion?

// Når det virker, så prøv at fyre funtionen af 32 gange med et loop!

// du får ofte brug for at slette for at kunne tegne igen
let sletLaerred = (navn) => {
    c.clearRect(0, 0, canvas.width, canvas.height) // renser lærredet
}

/**
 * GEOMETRI
 * Stier og polygoner, Flanagan: 485.
 **/

// STI - og lidt geometrisk sjov
let a = Math.floor(Math.random()*100)
let b = Math.floor(Math.random()*100)

let enSti = () => {

    ctx.beginPath() // begynder stien
    ctx.moveTo(0, 0) // flytter "blyanten"
    ctx.lineTo(b, 100) // tegner
    ctx.lineTo(b, 435) // tegner videre
    ctx.strokeStyle = tomat // "blyanten er rød"

    // fill
    ctx.fillStyle = guld
    ctx.fill()

    ctx.lineWidth = 4
    
    ctx.stroke() // stregen sættes ind, der tegnes ...
   
    a += 25
    b += 33

    if (a > 500){
        Math.floor(Math.random()*200)
    }
    if (b > 500){
        Math.floor(Math.random()*20)
    }
}

/** 
 * BILLEDER
 * Husk at billeder pixeleerer når der skaleres heftigt.
 * Brug evt. SVG billeder i stedet.
 * Billeder skal være *loaded* før de kan bruges.
 */
let visRidder = () => {
    let image = document.getElementById("ridder")

    // syntax skaler: drawImage(image, dx, dy, dwidth, dheight)
    ctx.drawImage(image, 0,0, 100,100)
    // syntax klip: drawImage(image, sx, sy, swidth, sheight, dx, dy, dwidth, dheight)
    
    //ctx.drawImage(image, 300,200, 768,768, 10,10, 300, 300)
    /*
        ctx.drawImage(
        image, src  
        sx, 0
        sy, 0
        swidth, 768 
        sheight, 768
        dx, 10
        dy, 10
        dwidth, 300 
        dheight) 300
    */

    // drawImage(image, sx, sy, swidth, sheight, dx, dy, dwidth, dheight)
    ctx.drawImage(image,350,350, 350, 350, 20, 200, 100,100)
    }

// SVG
// Billeder kan også være SVG billeder, som er vektor billeder.
// FEATURE: tilfældig positionering

let visSVG = () => {
    let svg = document.getElementById("pentagram")

    // tilfældig positionering
    let x = Math.floor(Math.random()*400)
    let y = Math.floor(Math.random()*400)

    ctx.drawImage(svg, x,y, 100,100)
}

// Tegn nu 72 stjerner
let stjerneHimmel = () => {
    for (let i = 0; i < 72; i++){
        visSVG()
    }
}

/** Ideer til OPGAVER 
 * 1. Lav en funktion, der tegner en kurve
 * 2. Lav et søjlediagram - med forklarende tekst. Data fra JSON eller array.
 *   - brug en funktion til at tegne søjlerne
 *   - brug samme funktion til at tegne teksten
 * 3. Lav et cirkeldiagram
*/

// Tegn en CIRKEL på canvaset
let tegnEnCirkel = () => {
    ctx.beginPath() // begynder stien
    ctx.arc(100, 100, 50, 0, Math.PI * 2) // cirkel
    ctx.fillStyle = turkis // "blyanten er rød"
    ctx.fill() // fylder cirklen med farve
    ctx.stroke() // stregen sættes ind, der tegnes ...
}

// GRADIENTER
// Hentes via fillstyle og strokeStyle
// fx sådan:
let gradientNy = () => {
    // lav firkant med en gradient på canvas
    let gradient = ctx.createLinearGradient(0, 0, 200, 0)
    gradient.addColorStop(0, tomat) // startfarve
    gradient.addColorStop(1, guld) // slutfarve
    ctx.fillStyle = gradient // fylder med gradient
    ctx.fillRect(0, 0, 400, 400) // fylder firkant med gradient
    ctx.strokeStyle = tomat // "blyanten er rød"
}

// TEKSTER
// Du kan også skrive tekst på canvaset
let skrivTekst = () => {
    ctx.font = "30px Arial" // skrifttype og størrelse
    ctx.fillStyle = groenGul // farve
    ctx.fillText("Der var engang en lille frø.", 10, 50) // tekst og position
    roterTekst() // roterer teksten
    }

// skrifttype og størrelse
// hvilke skrifttyper findes der?
// https://www.w3schools.com/cssref/css_websafe_fonts.asp

// Alternative skrifttyper  


// rotere tekst
let roterTekst = () => {
    ctx.save() // gemmer den nuværende tilstand
    ctx.translate(200, 200) // flytter teksten
    ctx.rotate(Math.PI / 3) // roterer teksten
    ctx.fillText("Nu roterer det ...", 0, 0) // tekst og position
    ctx.restore() // gendanner den tidligere tilstand
}

/**
 * OPGAVE (brainstorm)
 * Lav en init() funtion, der sætter en scene.
 * Tilføj transparente figurer i SVG.
 * Lav "sætstykker" i stil med en teaterkulisse:
 * 
 * - lav en scene i form af en canvas med id'en scene
 * - lav en baggrund i samme størrelse som scenen
 * - lav en forgrund
 * - lav en midtergrund
 * - lav en figur i forgrunden
 * - lav en mindre version af figuren i baggrunden
 * - placer en mørk træstup i forgrunden til højre
 * - forrest lav nogen blomster og græsstrå, et par sten etc.
 * - lav en funktion der placerer en sky
 * - lad et loop skabe ca. syv skyer
 *
 */

/**
 * FLYT EN FIGUR MED TASTETRYK
 * (Næste )
 */

// flyt en figur med tastetryk
let figur = document.getElementById("figur")
let figurX = 0
let figurY = 0
let figurWidth = 100
let figurHeight = 100
let figurSpeed = 10
let figurDirection = 0 // 0 = ingen retning

// tilføj figuren til canvaset
ctx.drawImage(figur, figurX, figurY, figurWidth, figurHeight)
// tilføj eventlistener til canvaset

// WASD tasterne
let moveUp = 87 // W
let moveDown = 83 // S
let moveLeft = 65 // A
let moveRight = 68 // D

// tilføj eventlistener til canvaset
let tastetryk = (event) => {
    switch(event.keyCode) {
        case moveUp:
            figurY -= figurSpeed 
            break
        case moveDown:
            figurY += figurSpeed
            break
        case moveLeft:
            figurX -= figurSpeed
            break
        case moveRight:
            figurX += figurSpeed
            break
    }
    // opdaterer scen
    ctx.clearRect(0, 0, canvas.width, canvas.height) // slet lærredet
    // tegn baggrunden igenm etc. etc.
    ctx.drawImage(figur, figurX, figurY, figurWidth, figurHeight)
}
// tilføj eventlistener til canvaset
document.addEventListener("keydown", tastetryk)
