// 6. Faça um programa que leia a largura e o comprimento de um
// terreno retangular, calculando e mostrando a sua área em m2. O
// programa também deve mostrar a classificação desse terreno, de
// acordo com a lista abaixo:
// Abaixo de 100m2 = TERRENO POPULAR
// Entre 100m2 e 500m2 = TERRENO MASTER
// Acima de 500m2 = TERRENO VIP

let largura = Number.parseInt(prompt("Digite a largura do terreno: "));
let comprimento = Number.parseInt(prompt("Digite o comprimento do terreno: "));
let metrosQuadrados = 0;
let mensagem = "";

metrosQuadrados = largura * comprimento

if (metrosQuadrados < 100) {
    mensagem = "TERRENO POPULAR";
}else if (metrosQuadrados >= 100 && metrosQuadrados <= 500) {
    mensagem = "TERRENO MASTER";
}else {
    mensagem = "TERRENO VIP";
}

document.write(`Seu terreno tem ${metrosQuadrados}m² e é um ${mensagem}.`);