function speedUp(acceleration){this.velocity += acceleration}
function speedUpConfirmationFunc(){
    return speedUpConfirmation = prompt("Deseja acelerar ou parar a nave (digite o número da opção)?\n1- Acelerar\n2- Parar")
}

let spaceship = {}
let acceleration = ""
let speedUpConfirmation

spaceship.name = prompt("Digite o nome da nave:")
spaceship.type = prompt("Digite o tipo da nave:")
spaceship.maxVelocity = parseInt(prompt("Digite a velocidade máxima que a nave pode atingir:"))
alert(typeof(spaceship.maxVelocity))
spaceship.velocity = 0

speedUpConfirmationFunc()

while(true) {   
    if(speedUpConfirmation == 1) {
        acceleration = parseInt(prompt("Digite o valor que deseja acelerar:"))
        alert(typeof(acceleration))
        if(spaceship.velocity + acceleration > spaceship.maxVelocity) {
            alert(acceleration + spaceship.velocity)
            alert("Velocidade atual: " + spaceship.velocity + " km/s." +
                  "\nVelocidade máxima permitida: " + spaceship.maxVelocity + " km/s."
            )
        } else {
            spaceship.velocity += acceleration
            alert("Velocidade atual: " + spaceship.velocity + " km/s.")
        }
        speedUpConfirmationFunc()
    } else if (speedUpConfirmation == 2) {
        alert("Velocidade atual: " + spaceship.velocity + " km/s." +
              "\nIniciando a parada da nave de " + spaceship.type + ", " + spaceship.name + "."
        )
        alert("Nave parada. Abertura de comportas liberada.")
        break
    } else {
        alert("Opção inválida.")
        speedUpConfirmationFunc()
    }
}