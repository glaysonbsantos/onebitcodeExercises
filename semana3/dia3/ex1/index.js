let spaceshipName = prompt("Qual o nome da nave, capitão?")

let warpConfirmation = prompt("Deseja entrar em dobra espacial (digite apenas o número da opção)?\n\n1- Sim\n2- Não")

let countedWarps = 0

while(warpConfirmation == 1){
    countedWarps += 1
    warpConfirmation = prompt("Deseja realizar a próxima dobra (digite apenas o número da opção)?\n\n1- Sim\n2- Não")
}

alert("Nome da nave: " + spaceshipName + ".\n\nNúmero de dobras realizadas: " + countedWarps + ".")
