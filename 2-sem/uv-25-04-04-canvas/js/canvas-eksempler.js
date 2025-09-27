/**
 * Fil: HTML Canvas eksempler (2D grafik)
 * Formål: forberedelse af introduktion til canvas og js.
 * Version: 1.0
 */

/**
 * GLOBALE VARIABLER
 */
 
// Scenen
let canvas = document.querySelector("#scene") // selector
let c = canvas.getContext("2d") // vi tegner i 2D a la Flanagan ;-)
let ctx = c // og laver et alias der svarer til W3 eksempler ;-)

// Farver
let tomat = "#FF6347" // Tomat (Tomato)
let guld = "rgba(255, 99, 71, 0.4)" // Guld (Gold)
let groenGul = "#ADFF2F" // Grøn gul (Green Yellow)
let turkis = "#00CED1" // Mørk turkis (Dark Turquoise)
let blaa = "#8A2BE2" // Blå violet (Blue Violet)
let moerk = "black" // mørk kontrast
let lys = "white" // lys kontrast

// Du får ofte brug for at slette lærredet
let sletLaerred = (navn) => {
    c.clearRect(0, 0, canvas.width, canvas.height) // renser lærredet
}

/**
 * CANVAS GEOMETRI
 * (kommer af: geo = jorden, metria = opmåling af ...)
 * Stier, former og polygoner, Flanagan: 485 ff.
 **/

// REKTANGEL (og kvadrat)
let tegnEnFirkant = () => {
    ctx.beginPath()
    ctx.lineWidth = "10"
    ctx.strokeStyle = "green"
    ctx.fillStyle = turkis
    ctx.rect(100, 100, 123, 123)
    ctx.stroke()
    ctx.fillRect(100,100,123,123)
}

// STI - og lidt geometrisk sjov
let a = Math.floor(Math.random()*100)
let b = Math.floor(Math.random()*100)

let enSti = () => {

    ctx.beginPath() // begynder stien
    ctx.moveTo(0, 0) // flytter "blyanten"
    ctx.lineTo(b, 100) // tegner
    ctx.lineTo(b, 435) // tegner videre
    ctx.strokeStyle = tomat // "blyanten er rød"
    // former kan laves med en masse moveTo og lineTo'er

    // fill i to trin
    ctx.fillStyle = guld // fyld eller "farve" defineres
    ctx.fill() // fyldet anvendes

    // linjerne i to trin
    ctx.lineWidth = 4 // hvor bred skal linjen være?
    ctx.stroke() // stregen sættes ind, der tegnes ...
   
    a += 25 // bare for at flytte dem lidt næste gang
    b += 33 // overvej en tilfældig placering inden for lærredet ... hvordan?

    // reset når værdien bliver for stor
    if (a > 400){
        Math.floor(Math.random()*200)
    }
    if (b > 400){
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

// Brug loops, når noget skal gentages
// Vi tegner 72 stjerner
let stjerneHimmel = () => {
    for (let i = 0; i < 72; i++){
        visSVG()
    }
}

// Tegn en CIRKEL på canvaset
let tegnEnCirkel = () => {
    ctx.beginPath() // begynder stien
    ctx.arc(100, 100, 50, 0, Math.PI * 2)
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

    const dato = new Date()

    const uge = [
        "Søndag",
        "Mandag",
        "Tirsdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "Lørdag"
    ]

    let iDag = "I dag er det " 
    + uge[dato.getDay()]
    + "."

    ctx.font = "30px Arial" // skrifttype og størrelse
    ctx.fillStyle = moerk // farve
    ctx.fillText( iDag, 10, 50) // tekst og position
    roterTekst() // roterer teksten
    }

// skrifttype og størrelse
// hvilke skrifttyper findes der?
// https://www.w3schools.com/cssref/css_websafe_fonts.asp

// Alternative skrifttyper  

// ROTER tekst (eller noget andet)
let roterTekst = () => {
    ctx.save() // gemmer den nuværende tilstand
    ctx.translate(200, 200) // flytter teksten
    ctx.rotate(Math.PI / 3) // roterer teksten
    ctx.fillText("Roteret igå' ...", 0, 0) // tekst og position
    ctx.restore() // gendanner den tidligere tilstand
}

/**
 * WASD
 * Eller: flyt noget med tastetryk
 * (næste gang?)
 */
let tux = () => {

    // begynd med at slette scenen
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // fordi: så kan du flytte rundt med tingene

    // byg scenen op igen
    // baggrund, mellemgrund, figur, forgrund ...
    // lad passende funktioner som gøre dette for dig ...

    // flyt en figur med tastetryk
    let figur = document.getElementById("figur")
    let figurX = 0
    let figurY = 0
    let figurWidth = 100
    let figurHeight = 100
    let figurSpeed = 10
    let figurDirection = 0 // 0 = ingen retning

    // i computerspil får du måske brug for
    let hitpoints = 200

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
            // PS: kan bruges med MaKeyMaKeys w.a.s.d. på bagsiden af kortet
    }

        // opdaterer scenen
        ctx.clearRect(0, 0, canvas.width, canvas.height) // slet lærredet
        // tegn baggrunden igen etc. etc.
        ctx.drawImage(figur, figurX, figurY, figurWidth, figurHeight)
    }

    // tilføj eventlistener til canvaset
    document.addEventListener("keydown", tastetryk)
}


/** -------------------------------------------------
 * BAGGRUND, FIGUR OG FORGRUND
 * Eksempel.
 */

// baggrund
let baggrund = () => {
    //console.log("tegner baggrund")
    gradientNy()
    stjerneHimmel()
}

// forgrund
let forgrund = () => {
    console.log("tegner forgrund")
    for (let i=0; i<5;i++){
        let rndA = Math.floor(Math.random()*400)
        let rndB = Math.floor(Math.random()*400)

        ctx.beginPath() // begynder stien
        ctx.arc(rndA, rndB, 50, 0, Math.PI * 2)
        ctx.fillStyle = turkis // "blyanten er rød"
        ctx.fill() // fylder cirklen med farve
        ctx.stroke() // stregen sættes ind, der tegnes ...
    }
}

// WASD - baggrund, figur, forgrund
let bgFigFg = () => {

    // begynd med at slette scenen
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // fordi: så kan du flytte rundt med tingene

    // flyt en figur med tastetryk
    let figur = document.getElementById("figur")
    let figurX = 0
    let figurY = 0
    let figurWidth = 100
    let figurHeight = 100
    let figurSpeed = 10
    let figurDirection = 0 // 0 = ingen retning

    // i computerspil får du måske brug for
    let hitpoints = 200

    // SCENEN BYGGES =======================
    baggrund() // baggrunden hentes
    ctx.drawImage(figur, figurX, figurY, figurWidth, figurHeight)
    forgrund() // forgrunden indsættes
   

    // WASD tasterne
    let moveUp = 87 // W
    let moveDown = 83 // S
    let moveLeft = 65 // A
    let moveRight = 68 // D

    // tilføj eventlistener til canvaset
    let tastetryk = (event) => {
        switch(event.keyCode) {
            case moveUp:
                ctx.clearRect(0, 0, canvas.width, canvas.height) // slet lærredet
                baggrund()
                figurY -= figurSpeed
                ctx.drawImage(figur, figurX, figurY, figurWidth, figurHeight)
                forgrund()
                break
            case moveDown:
                ctx.clearRect(0, 0, canvas.width, canvas.height) // slet lærredet
                baggrund()
                figurY += figurSpeed
                ctx.drawImage(figur, figurX, figurY, figurWidth, figurHeight)
                forgrund()
                break
            case moveLeft:
                ctx.clearRect(0, 0, canvas.width, canvas.height) // slet lærredet
                baggrund()
                figurX -= figurSpeed
                ctx.drawImage(figur, figurX, figurY, figurWidth, figurHeight)
                forgrund()
                break
            case moveRight:
                ctx.clearRect(0, 0, canvas.width, canvas.height) // slet lærredet
                baggrund()
                figurX += figurSpeed
                ctx.drawImage(figur, figurX, figurY, figurWidth, figurHeight)
                forgrund()
                break
            // PS: kan bruges med MaKeyMaKeys w.a.s.d. på bagsiden af kortet
    }

        // opdaterer scenen
        //ctx.clearRect(0, 0, canvas.width, canvas.height) // slet lærredet
        // tegn baggrunden igen etc. etc.
        //ctx.drawImage(figur, figurX, figurY, figurWidth, figurHeight)
    }

    // tilføj eventlistener til canvaset
    document.addEventListener("keydown", tastetryk)
}

