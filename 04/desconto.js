// 4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. Faça um
// programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto
// b. Mulheres ganham 13% de desconto

let nome = prompt("Digite seu nome: ");
let sexo = prompt("Digite seu sexo 'F' para femonino ou 'M' para mas ");
sexo = sexo.toLowerCase();
let valorCompra = Number.parseFloat(prompt("Digite o valor da compra"));
let valorOriginal = valorCompra

if (sexo == "f") {
    valorCompra = valorCompra - (valorCompra * 0.13)
    document.write(`Tudo bem senhora ${nome}!<br>Sua compra ficou no valor de R$ ${valorOriginal}.<br>Mas com desconto de 13% vai pagar só R$ ${valorCompra}.`)
}else if (sexo == "m") {
    valorCompra = valorCompra - (valorCompra * 0.05)
    document.write(`Tudo bem senhor ${nome}!<br>Sua compra ficou no valor de R$ ${valorOriginal}.<br>Mas com desconto de 5% vai pagar só R$ ${valorCompra}.`)
}