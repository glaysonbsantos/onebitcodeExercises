class Spaceship {
    static get createNewSpaceship() {
        var spaceship = new Spaceship(prompt("Digite o nome da nave:"), prompt("Digite a quantidade de tripulantes:"))
        var spaceshipType = prompt("Digite o tipo da nave (escolha o número da opção):\n\n1- Batalha\n2- Transporte")
        if (spaceshipType == "1") {
            spaceship.type = "Batalha"
            spaceship.gunsNumber = prompt("Digite o número de armas da nave:")
        } else {
            spaceship.type = "Transporte"
            spaceship.sitNumber = prompt("Digite o número de assentos da nave:")
        }
        
        let chosenOption
        while(chosenOption != 3) {
            chosenOption = prompt("Bem-vindo, capitão. Selecione o número da opção desejada:\n\n1- Acelerar nave\n2- Trocar nave\n3-Imprimir dados da nave e sair")
            if (chosenOption == 1) {
                spaceship.speedUp(prompt("Digite para qual velocidade deseja acelerar:"))
            } else if (chosenOption == 2) {
                spaceship = Spaceship.createNewSpaceship
                break
            } else if (chosenOption == 3) {
                alert("Nome: " + spaceship.name + ".\nQuantidade de tripulante: " + spaceship.crewNumber + ".\nVelocidade atual: " + spaceship.currentVelocity + " km/s")
            }
        }
    }

    static get deceleration() {
        return 0.17
    }

    constructor (name, crewNumber, type) {
        this.name = name
        this.crewNumber = crewNumber
        this.type = type
    }
    currentVelocity = 0

    speedUp(acceleration) {
        this.currentVelocity += (acceleration * (1 - Spaceship.deceleration))
    }
}