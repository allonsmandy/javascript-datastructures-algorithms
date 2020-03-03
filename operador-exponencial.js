const r = 2;

// calcular área de um circulo
const area = 3.14 * r * r;

// escrevendo com Math.pow
const area2 = 3.14 * Math.pow(r, 2);

// novo operador exponencial do es2016
const area3 = 3.14 * r ** 2;

// novo exemplo
const novoExemplo = 3 * r ** 3;
const novoExemplo2 = 3 * r ** 4;

// 12.56
console.log(`
    area: ${area}
    mathPow: ${area2}
    **: ${area3}
`);

console.log(`
    exemplo 1: ${novoExemplo} 
    exemplo 2: ${novoExemplo2}
`);

// 24
// 48
