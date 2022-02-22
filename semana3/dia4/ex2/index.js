function slowDown(speed, printer) {
    alert("Bem-vindo, capitão. Sistema de pouso acionado. Sua nave será desacelerada até 0 km/s. Acompanhe a desaceleração via log.")
    while (speed > 0) {
        printer(speed)
        speed -= 20
    }

    if (speed <= 0) {
        console.log("Velocidade atual da nave: 0 km/s")
    }

    alert("Nave parada. Permissão concedida para abertura das comportas.")
}

let speed = 150

slowDown(speed, printerSpeed => console.log("Velocidade atual da nave: " + printerSpeed + " km/s"))
