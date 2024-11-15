let abates: number = 0;
let assistencias: number = 0;
let mortes: number = 0;
let resultado: number = 0;

abates =Number(prompt("digite o numero de abates: "));
assistencias =Number(prompt("digite o numero de assistencias: "));
mortes =Number(prompt("digite o numero de mortes: "));

resultado= (abates + assistencias) / mortes;

console.log(`A pontuação é ${resultado}`);
