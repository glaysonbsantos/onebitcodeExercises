const Planet = require('./planet')
const solarSystem = require('./solar_system')

const earth = new Planet('Terra', 501000000)
earth.rotate()

solarSystem.planets.push(earth)
solarSystem.planets.push(new Planet('Marte', 144800000))
solarSystem.planets.push(new Planet('Mercúrio', 744800000))
solarSystem.planets.push(new Planet('Saturno', 4270000000))

console.log(solarSystem)