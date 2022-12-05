// Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.

let desejaContinuar = 1;
let sexo = "";
let salarioFeminino = 0;
let salarioMasculino = 0;
let salario = 0;

while (desejaContinuar === 1) {
    sexo = prompt("Favor digitar seu sexo 'f' para feminino ou 'm' para masculino: ");
    sexo = sexo.toLowerCase()
    salario = Number.parseFloat(prompt("Digite o valor do seu salario: "));
    if (sexo == "f"){
        salarioFeminino += salario
    }else if (sexo == "m"){
        salarioMasculino += salario
    }
    desejaContinuar = Number.parseInt(prompt("Deseja continuar? Se sim digite '1' se não digite qualquer tecla para finalizar!"));
}

document.write(`O total de salario pagos aos homens foi: R$${salarioMasculino}.<br>`)
document.write(`O total de salario pagos as mulheres foi: R$${salarioFeminino}.<br>`) 