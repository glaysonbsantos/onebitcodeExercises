alert("Bem-vindo ao mascarador de nomes. Inverteremos o nome da sua nave até que seja encontrada a letra 'e'.")

let spaceshipName = prompt("Digite o nome da nave:")

let newSpaceshipName = ""

for (let pos = spaceshipName.length - 1; pos >= 0; pos--) {
    if (spaceshipName[pos] == "e") {
        break
    } 
    newSpaceshipName += spaceshipName[pos]
}

alert("Nome original da nave: " + spaceshipName + ".\n\nNovo nome da nave: " + newSpaceshipName + ".")