/*
* Dienifer Verch
*
*
*/
//Exercícios de interpretação de código
//console.log(10);
//console.log(10, 5);

//2-

//console.log(10, 10, 10);

//3-
// let horasTrabalhadas;
// let valorRecebido;


//Exercícios de escrita de código

// variavel lista de nomes
let nome;
let idade;
console.log(typeof nome);
console.log(typeof idade);

// D- porque não foi definido um valor;
//E-

nome = prompt("qual é o seu nome?");
idade = prompt("qual a sua idade?");
console.log(typeof nome);
console.log(typeof idade);

//f- retornou duas strings

console.log("olá",nome,"você tem",idade);

let vocêusavermelho;
let torceparaogremio;
let vocêjanta;
//2-

vocêusavermelho = prompt("você usa vermelho?");
torceparaogremio = prompt("torce para o grêmio?");
vocêjanta = prompt("você janta?");
console.log("você usa vermelho?", vocêusavermelho);
console.log("torce para o grêmio?", torceparaogremio);
console.log("você janta?",vocêjanta);

//3-
let a = 10;
let b = 25;
c = a;
a = b;
b = c;
console.log(a, b);
