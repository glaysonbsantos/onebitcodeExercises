const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let moreThan9CrewSpaceship = hitchedSpaceships.filter(subArray => subArray[1] >= 9).map(spaceshipName => spaceshipName[0]).join(", ")

let pendingHitchSpaceship = hitchedSpaceships.findIndex(subArray => subArray[2] == false) + 1

let spaceshipUpperCase = hitchedSpaceships.map(spaceshipName => spaceshipName[0]).join(", ").toUpperCase()

alert("Nave(s) com mais de 9 tripulantes: " + moreThan9CrewSpaceship + "." +
      "\n\nNúmero da plataforma de engate a ser operada: " + pendingHitchSpaceship + "." +
      "\n\nNaves no setor de engate: " + spaceshipUpperCase + "."
)
