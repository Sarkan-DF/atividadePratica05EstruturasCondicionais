// 3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!

let valorInicial = Number.parseInt(prompt("Digite o valor inicial: "))
let valorFinal = Number.parseInt(prompt("Digite o valor final: "))
let intervalo = Number.parseInt(prompt("Digite o intervalo: "))
let mensagem = ""

for (index = valorInicial; index <= valorFinal; index += intervalo) {
    mensagem += index + " " 
}

document.write(`Contagem: ${mensagem} Acabou!`)