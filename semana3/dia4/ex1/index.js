let spaceshipName = prompt("Digite o nome da nave:")

let speed = 0

let chosenOption

function speedUp () {
    speed += 5
}

function slowDown () {
    if (speed > 5) {
        speed -= 5
    } else {
        speed = 0
    }
}

function printData () {
    alert("Nome da nave: " + spaceshipName + ".\n\nVelocidade atual: " + speed + "km/s")
}

while(chosenOption != 4) {
    chosenOption = prompt(
        "Seja bem-vindo, piloto. Escolha uma opção (digite apenas um número correspondente): " +
        "\n\n1- Acelerar a nave em 5km/s" +
        "\n2- Desacelerar a nave em 5km/s" +
        "\n3- Imprimir dados de bordo" +
        "\n4- Sair do programa"
    )

    if (chosenOption == 1) {
        speedUp()
    } else if (chosenOption == 2) {
        slowDown()
    } else if (chosenOption == 3) {
        printData()
    } else if (chosenOption == 4) {
        alert("Programa encerrado com sucesso")
    }
}