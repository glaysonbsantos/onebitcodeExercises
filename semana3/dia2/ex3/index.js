let lyDistance = prompt("Informe a distância em anos-luz:")

let unity = prompt("Deseja converter para qual unidade? \n1- Parsec (pc)\n2- Unidade Astronômica (AU)\n3- Quilômetros (km)")

let lyConvertedDistance

switch(unity){
    case "1":
        unity = "Parsec"
        lyConvertedDistance = lyDistance * 0.306601
        alert("Distância em anos-luz: " + lyDistance + " ly.\n" +
            unity + " = " + lyConvertedDistance + " pc."
        )
        break
    case "2":
        unity = "Unidade Astronômica"
        lyConvertedDistance = lyDistance * 63241.1
        alert("Distância em anos-luz: " + lyDistance + " ly.\n" +
        unity + " = " + lyConvertedDistance + " AU."
        )
        break
    case "3":
        unity = "Quilômetros"
        lyConvertedDistance = lyDistance * (9.5 * Math.pow(10, 12))
        alert("Distância em anos-luz: " + lyDistance + " ly.\n" +
        unity + " = " + lyConvertedDistance + " km."
        )
        break
    default:
        alert("Distância em anos-luz: " + lyDistance +
            "\nUnidade não identificada: conversão fora do escopo."
        )
}
