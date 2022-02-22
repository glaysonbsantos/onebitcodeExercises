let nomePiloto = prompt("Digite o nome do Piloto:")
let velocidadeAtual = 0
let velocidadeDesejada = prompt("Digite a velocidade desejada:")
let confirmacaoVelocidadeDesejada = confirm("Deseja alterar a velocidade para " + velocidadeDesejada + "km/h?")

if(confirmacaoVelocidadeDesejada){
    velocidadeAtual = velocidadeDesejada
}

if(velocidadeAtual <= 0){
    alert("A nave está parada. Considiere aumentar a velocidade e partir.")
} else if(velocidadeAtual < 40){
    alert("Você está devagar, podemos aumentar mais.")
} else if(velocidadeAtual <80){
    alert("Parece uma boa velocidade para manter.")
} else if(velocidadeAtual < 100){
    alert("Velocidade alta. Considere diminuir.")
} else{
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert("Piloto da nave: " + nomePiloto + "." +
    "\n\n Velocidade atual de voo: " + velocidadeAtual + "km/h."
)