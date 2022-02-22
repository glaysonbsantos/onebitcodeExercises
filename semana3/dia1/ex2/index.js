let nomeMaisVelho = prompt("Qual o nome da pessoa mais velha?")
let idadeMaisVelho = prompt("Qual a idade da pessoa mais velha?")
let nomeMaisNovo = prompt("Qual o nome da pessoa mais nova?")
let idadeMaisNovo = prompt("Qual a idade da pessoa mais nova?")
let diferencaIdade = idadeMaisVelho - idadeMaisNovo
alert(
    "A pessoa mais velha se chama " + nomeMaisVelho + " e tem " + idadeMaisVelho + " anos." + 
    "\n\nA pessoa mais nova se chama " + nomeMaisNovo + " e tem " + idadeMaisNovo + " anos." + 
    "\n\nA diferença de idade entre os dois é de " + diferencaIdade + " anos."
)
