alert("Seja bem-vindo ao mascarador de nomes.")

let spaceshipName = prompt("Digite o nome da nave:")

let charToReplace = prompt("Digite o carácter a ser substituído:")

let replacementChar = prompt("Digite o carácter substituidor:")

let newSpaceshipName = ""

for (let i = 0; i < spaceshipName.length; i++) {
    if (spaceshipName[i] == charToReplace){
        newSpaceshipName += replacementChar
    } else {
        newSpaceshipName += spaceshipName[i]
    }
}

alert("O novo nome de nave é: " + newSpaceshipName + ".")