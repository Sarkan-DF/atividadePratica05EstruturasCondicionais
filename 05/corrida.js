// 5. Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.

let distancia = Number.parseInt(prompt("Qual a distancia da viagem em Km :"));
let valorViagem = 0;

if (distancia <= 200) {
    valorViagem = distancia * 0.50
}else {
    valorViagem = distancia * 0.45
}

document.write(`O valor da viagem foi de R$ ${valorViagem}.`)