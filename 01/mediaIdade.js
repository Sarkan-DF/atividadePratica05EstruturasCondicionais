// 1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo.

let idade = 0;
let contador = -1;
let media = 0;
let somaIdade = 0;

while (idade != 999) {
    idade = Number.parseInt(prompt("Digite sua idade: "));
    contador++;
    if (idade != 999){
        somaIdade += idade;
    }
}

media = somaIdade / contador

document.write(`Sua sala tem ${contador} alunos.<br>`)
document.write(`E a media das notas digitadas é ${media.toFixed(2)}.`)
