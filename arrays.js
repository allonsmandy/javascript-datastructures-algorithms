let daysOfWeek = new Array();
daysOfWeek = new Array(7); //tamanho do array é 7
daysOfWeek = new Array("Mandy", "Lucas");

// ======= EXIBIR TODOS OS ELEMENTOS DO ARRAY =======
for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
}

/*  ======= DESCOBRIR 20 PRIMEIROS NÚMEROS DA SEQUÊNCIA FIBONACCI  =======
os dois primeiros da sequencia são 1 e 2
cada numero subsequente é a soma dos dois núemros anteriores */

const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 1; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}

//  ======= ACRESCENTANDO ELEMENTOS NO FINAL DO ARRAY =======
let numbers = [0, 1, 2, 3, 4, 5, 4, 7, 8, 9];
numbers[numbers.length] = 10;
numbers.push(11, 12, 13);

// ======= ACRESCENTANDO ELEMENTOS NA PRIMEIRA POSIÇÃO =======
/* deslocando todos os elementos pra direita para que
a primeira posição fique livre. 
começa pela ultima posição, deslocando o elemento anterior (i-1) 
para a nova posição (i), fazendo atribuição do novo valor
desejado a primeira posição (indice 0)*/
Array.prototype.insertFirtPosition = function(value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};
numbers.insertFirtPosition(-1);

numbers.unshift(-4, -3, -2);

//  ======= REMOVENDO ELEMENTOS DA PRIMEIRA POSIÇÃO =======
/* desloca todos os elementos de uma posição
para a esquerda, porém o length do array continua igual,
o que significa que ainda temos um elemento extra no array (undefined)
 */
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1];
}

/* para remover o elemento do array, precisa criar
outro array e copiar todos os valores diferentes de undefined
do array original para o novo array e atribui-lo ao nosso array. */
Array.prototype.reIndex = function(myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
};

// remove a primeira posição manualmente e executa reIndex
Array.prototype.removeFirstPosition = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
};
numbers = numbers.removeFirstPosition();

// usando método shift para remover o elemento do inicio do array
numbers.shift();

/*
os metodos shift e unshift permitem que um array emule
uma estrutura de dados básica de fila (queue)
*/

// ======= ADICIONANDO E REMOVENDO ELEMENTOS DE UMA POSIÇÃO ESPECIFICA =======
/*
- splice: especificar posição/indice a partir do qual
queremos fazer a remoção e a quantidade elementos que
gostariamos de remover
*/
numbers.splice(5, 3); //remove 3 elementos a partir do indice 5 (numbers[5], numbers[6], numbers[7])

// antes
[-1, 0, 1, 2, 3, 4, 5, 4, 7, 8, 9, 10, 11, 12, 13];
// depois
[-1, 0, 1, 2, 3, 7, 8, 9, 10, 11, 12, 13];

/*
o operador delete também pode ser usado para remover
um elemento de um array, por exemplo, numbers[0]
porém, a posição 0 do array terá valor undefined, ou seja,
será o mesmo que executar numbers[0] = undefined, e teriamos
que reindexar o array. 
por esse motivo, devemos sempre usar os métodos splice, pop ou
shift para remover elementos
*/

// inserir numeros de 4 a 6 no array a partir da posição 5
numbers.splice(5, 0, 4, 5, 6);

/*
1º argumento: indicie a partir do qual queremos remover ou inserir elementos
2º argumento: quantidade de elementos que queremos remover (nesse caso, nenhum)
3º argumento em diante: valores que gostariamos de inserir
*/
[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// mais um exemplo do splice
numbers.splice(5, 3, 4, 5, 6);
[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/*
esse retorno ocorreu porque removemos 3 elementos a partir
do indice 5, mas tambem acrescentamos os elementos 4, 5 e 6
a partir do indice 5 :)
*/

// ======= ARRAYS BIDIMENCIONAIS E MULTIDIMENCIONAIS =======
/*
- precisamos medir a temperatura de hora em hora durante
alguns dias
*/

let averageTempDay1 = [72, 75, 79, 79, 81, 81];
let averageTempDay2 = [81, 79, 75, 75, 73, 72];

/*
podemos ter algo mais apropriado!
Uma matrix (array bidimensional ou um aray de arrays) pode
ser usada para armazenar essas informações, na qual cada linha
representará o dia e cada coluna representará a medida da
temperatura de hora em hora
*/

let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 72];

/*
o javascript aceita apenas arrays unidimensionais; não tem suporte para matrizes
contudo, podemos implementá-las ou implementar qualquer array multidimensinal, usando
array de arrays como no exemplo acima
*/

// dia 1
averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;

// dia 2
averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 73;

/*
no código acima, especificamos o valor de cada dia e de cada
hora separadamente
linha: representa um dia (0 ,1)
coluna: representa a temperatura de cada hora do dia (0 até 5)
*/

// ======= ITERANDO PELOS ELEMENTOS DE ARRAYS BIDIMENCIONAIS =======
function printMatriz(myMatriz) {
  for (let i = 0; i < myMatriz.length; i++) {
    for (let j = 0; j < myMatriz[i].length; j++) {
      console.log(myMatriz[i][j]);
    }
  }
}

/*
é necessários percorrer todas as linhas e colunas de um laço. 
para isso, devemos usar um laço for aninhado, em que a variavel i
representa as linhas e j representa as colunas. 
no caso, cada myMatriz[i] também representa um array, desse modo, 
também precisamos iterar pelas posições dela no laço for aninhado
*/

printMatriz(averageTemp);
console.table(averageTemp);

/*
┌─────────┬────┬────┬────┬────┬────┬────┐
│ (index) │ 0  │ 1  │ 2  │ 3  │ 4  │ 5  │
├─────────┼────┼────┼────┼────┼────┼────┤
│    0    │ 72 │ 75 │ 79 │ 79 │ 81 │ 81 │
│    1    │ 81 │ 79 │ 75 │ 75 │ 73 │ 73 │
└─────────┴────┴────┴────┴────┴────┴────┘
*/

// ======= ARRAYS MULTIDIMENSIONAIS =======
/*
vamos criar uma matriz 3 x 3
cada célula contém a soma i(linha) + j(coluna) + z(profundidade)
da matriz
*/

const matriz3x3x3 = [];
for (let i = 0; i < 3; i++) {
  matriz3x3x3[i] = []; //precisamos inicializar cada array
  for (let j = 0; j < 3; j++) {
    matriz3x3x3[i][j] = [];
    for (let z = 0; z < 3; z++) {
      matriz3x3x3[i][j][z] = i + j + z;
    }
  }
}

/*
não importa quantas dimensões temos na estrutura de dados;
precisamos percorrer cada dimensão com um laço a fim de acessar a célula
podemos representar uma matriz 3 x 3 x 3 com um diagrama em forma de cubo. 
*/

// exibir o conteudo dessa matriz
for (let i = 0; i < matriz3x3x3.length; i++) {
  for (let j = 0; j < matriz3x3x3[i].length; j++) {
    for (let z = 0; z < matriz3x3x3[i][j].length; z++) {
      console.log(matriz3x3x3[i][j][z]);
    }
  }
}

console.table(matriz3x3x3);
/*
┌─────────┬─────────────┬─────────────┬─────────────┐
│ (index) │      0      │      1      │      2      │
├─────────┼─────────────┼─────────────┼─────────────┤
│    0    │ [ 0, 1, 2 ] │ [ 1, 2, 3 ] │ [ 2, 3, 4 ] │
│    1    │ [ 1, 2, 3 ] │ [ 2, 3, 4 ] │ [ 3, 4, 5 ] │
│    2    │ [ 2, 3, 4 ] │ [ 3, 4, 5 ] │ [ 4, 5, 6 ] │
└─────────┴─────────────┴─────────────┴─────────────┘
*/

// ======= JUNTANDO VÁRIOS ARRAYS =======
const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let numbersConcat = negativeNumbers.concat(zero, positiveNumbers);
[-3, -2, -1, 0, 1, 2, 3];

// ======= FUNÇÕES DE ITERAÇÃO =======
/* 
o javascript tem alguns métodos de iteração embutidos que podem ser
usados com arrays
*/

function isEven(x) {
  //devolve true se x for multiplo de 2
  return x % 2 === 0 ? true : false;
}
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// podemos reescrever essa função com a sintaxe do ES6
const isEven2 = x => x % 2 === 0;

// ======= ITERANDO COM O MÉTODO EVERY =======
/* itera pelos elementos do array até que a função devolva false.
o primeiro elemento do array é 1 que não é multiplo de 2, 
a função retornará false e essa será a unica vez que a função 
será executada */
numbers2.every(isEven2);

// ======= ITERANDO COM O MÉTODO SOME =======
// oposto ao every, ele itera pelos elementos até que a funçaõ retorne true
numbers2.some(isEven2);

// ======= ITERANDO COM FOREACH =======
//iterar em todo o array, independente de tudo mais. O resultado é o mesmo que do laço for
numbers2.forEach(number => console.log(number % 2 === 0));

// ======= USANDO MAP E FILTER =======
// devolvem um array com um resultado

// map: ele armazena os resultaods da função isEven2 passada para o método map
const myMap = numbers2.map(isEven2);
[
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false
];

// filter: devolve um novo array com os elementos para os quais a funçaõ devolveu true
const evenNumbers = numbers2.filter(isEven2);
[2, 4, 6, 8, 10, 12, 14]; //elementos multiplos de 2 (true)

// ======= USANDO O MÉTODO REDUCE =======
/* recebe uma função com os parametros: previousValue, currentValue, index e array
devolver um valor que será somado a um acumulador, 
o qual será devolvido depois que o reduce parar de executar. 
muito útil se quisermos somar todos os valores de um array */
numbers2.reduce((previous, current) => previous + current); //120

// ======= ITERANDO COM O LAÇO FOR...OF =======
// iterar pelos valores de um array

for (const n of numbers2) {
  console.log(n % 2 === 0 ? "even" : "odd");
}

[
  "odd",
  "even",
  "odd",
  "even",
  "odd",
  "even",
  "odd",
  "even",
  "odd",
  "even",
  "odd",
  "even",
  "odd",
  "even",
  "odd"
];

// ======= USANDO O OBJETO @@ITERATOR =======
// é necessário acessar a propriedade Symbol.iterator do array
let iterator = numbers2[Symbol.iterator]();
console.log(iterator.next().value); //1
console.log(iterator.next().value); //2
console.log(iterator.next().value); //3
console.log(iterator.next().value); //4
console.log(iterator.next().value); //5

/* 
podemos chamar o metodo next() individualmente do iterator para obter o 
próximo valor do array
para o array numbers2, precisariamos chamar iterator.next() 15 vezes
podemos apresentar todos os 15 valores do array com o codigo abaixo
se nao tiver mais nada para iterar, o iterator.next() retorna undefined
*/
iterator = numbers2[Symbol.iterator]();
for (const n of iterator) {
  console.log(n);
}

// ======= MÉTODOS ENTRIES, KEYS E VALUES DE ARRAY =======
// três formas novas de obter iteradores de um array

// *~ entries ~*
// devolve @@iterator, que contém pares chave/valor
let aEntries = numbers2.entries(); //obtém um iterador de chave/valor
console.log(aEntries.next().value); //[0, 1] - POSIÇÃO 0, VALOR 1
console.log(aEntries.next().value); //[1, 2] - POSIÇÃO 1, VALOR 2
console.log(aEntries.next().value); //[2, 3] - POSIÇÃO 2, VALOR 3

aEntries = numbers2.entries();
for (const n of aEntries) {
  console.log(n);
}

// *~ keys ~*
/* devolve @@iterator que contém as chaves do array
- para o array numbers2, keys conterá os indices do array
- quando não houver mais valores para iterar, o codigo aKeys.next() 
devolverá undefined como value e done como true
- se done tiver um valor igual a false, significa que ainda há mais
chaves para iterar no array
*/
const aKeys = numbers2.keys(); //obtém um iterador de chaves
console.log(aKeys.next()); // {  value: 0, done: false }
console.log(aKeys.next()); // {  value: 1, done: false }
console.log(aKeys.next()); // {  value: 2 done: false }

// *~ values ~*
// contém os valores do array
const aValues = numbers2.values();
console.log(aValues.next()); // { value: 1, done: false }
console.log(aValues.next()); // { value: 2, done: false }
console.log(aValues.next()); // { value: 3, done: false }

// ======= USANDO O MÉTODO FROM =======
/*
o Array.from cria outro array a partir de um array existente
ex: copiar o array numbers2 para um novo array

também é possivel passar uma função para que possamos determinar quais
valores queremos mapear
*/
let newNumbers = Array.from(numbers2);
let evens = Array.from(numbers2, x => x % 2 === 0); //true se for par, false caso contrário

// ======= USANDO O MÉTODO ARRAY.OF =======
/* 
cria outro array a partir dos argumentos passados para o método
*/
let numbers3 = Array.of(1);
let numbers4 = Array.of(1, 2, 3, 4, 5, 6);

// o codigo acima é o mesmo que o abaixo
numbers3 = [1];
numbers4 = [1, 2, 3, 4, 5, 6];

// cópia de um array existente
let numbersCopy = Array.of(...numbers4); //mesmo que Array.from(numbers4)

// ======= USANDO O MÉTODO FILL =======
//preenche o array com um valor

numbersCopy.fill(0); //terá todas as suas posições com um valor 0
numbersCopy.fill(2, 1); //indice de inicio a partir do qual queremos preencher o array [0, 2, 2, 2, 2, 2]
numbersCopy.fill(1, 3, 5); //passar indice final até o qual queremos preencher [0, 2, 2, 1, 1, 2]

// ótimos se quisermos criar um array e inicializar seus valores
let ones = Array(6).fill(1); //array de tamanho 6 com todos valores iguais a 1

// ======= USANDO O MÉTODO COPYWITHIN =======
// copia uma sequencia de valores do array para a posição de um indice de inicio
let copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(0, 3); //copiar valores 4,5,6 para as primeiras 3 posições
[4, 5, 6, 4, 5, 6];

copyArray = [1, 2, 3, 4, 5, 6];
//copia elementos partindo da posição 3 até a 5(naoincluso), para a posição 1 do array
copyArray.copyWithin(1, 3, 5)[(1, 4, 5, 4, 5, 6)];

// ======= ORDENANDO ELEMENTOS =======
numbers2.reverse(); //[ 15, 14, 13, 12, 11, 10, 9,  8,  7,  6,  5,  4, 3,  2,  1 ]
numbers2.sort(); //[ 1, 10, 11, 12, 13, 14, 15,  2,  3,  4,  5,  6, 7,  8,  9 ]

// o sort deixa em ordem lexicográfica e pressupõe que todos os elementos são strings

numbers2.sort((a, b) => a - b);
/*
o código devolverá um número negativo se B for maior que A, um número positivo
se A for maior que B e 0 se forem iguais.
isso significa que se um valor NEGATIVO for devolvido, é sinal de que A é menor que B,
o que será usado posteriormente pela função SORT para organizar os elementos
*/

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a deve ser igual a b
  return 0;
}
// a função sort pode receber um parâmetro chamado compareFunction responsável pela ordenação do array
numbers2.sort(compare);
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// ======= ORDENAÇÃO PERSONALIZADA =======
const friends = [
  { name: "Lucas", age: 19 },
  { name: "Lune", age: 18 },
  { name: "Dikz", age: 21 } //virgula no final ES2017
];

function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
}

console.log(friends.sort(comparePerson));
[
  { name: "Lune", age: 18 },
  { name: "Lucas", age: 19 },
  { name: "Dikz", age: 21 }
];

// ======= ORDERNANDO STRINGS =======
let names = ["Mandy", "amanda", "Lucas", "Joaozinho", "Gandalf"];
console.log(names.sort()); // [ 'Gandalf', 'Joaozinho', 'Lucas', 'Mandy', 'amanda' ]
// compara os caracteres de acordo com o seu valor ASCII

names = ["Mandy", "amanda", "Lucas", "Joaozinho", "Gandalf"];
console.log(
  names.sort((a, b) => {
    if (a.toLocaleLowerCase() < b.toLocaleLowerCase()) {
      return -1;
    }

    if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) {
      return 1;
    }
    return 0;
  })
);
// [ 'amanda', 'Gandalf', 'Joaozinho', 'Lucas', 'Mandy' ]

// para que as letras minusulas venham antes do array ordenado
names.sort((a, b) => a.localeCompare(b));

// para caracteres com acento, podemos usar o localeCompare também
const names2 = ["Maève", "Maeve"];
console.log(names2.sort((a, b) => a.localeCompare(b))); // [ 'Maeve', 'Maève' ]

// ======= PESQUISA =======
// indexOf: devolve o indice do primeiro elemento correspondente ao argumento passado
// lastIndexOf: devolve o indice do ultimo elemento encontrado, correspondendo ao argumento passado
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(numbers2.indexOf(10)); //9
console.log(numbers2.indexOf(100)); //-1: valor não existe no array

//resultado semelhante a seguir
numbers2.push(10);
console.log(numbers2.lastIndexOf(10)); //15: valores de 1 a 15 e 10
console.log(numbers2.lastIndexOf(100)); //-1: elemento 100 não existe no array

// ======= ECMASCRIPT 2015 - MÉTODOS FIND E FINDINDEX =======
/*
recebem uma função callback que buscará um valor que satisfaça a condição
presente na função callback 

find: devolve o primeiro valor do array que satisfaça a condição proposta
findIndex: devolve o indice do primeiro valor do array que satisfaça a condição

caso o valor seja encontrado, undefined será devolvido
*/
numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function multipleOf13(element, index, array) {
  return element % 13 == 0;
}
console.log(numbers2.find(multipleOf13)); //13
console.log(numbers2.findIndex(multipleOf13)); //12

// ======= ECMASCRIPT 2016 - USANDO O MÉTODO INCLUDES =======
// devolve true caso um elemento seja encontrado no array, e false caso contrário
console.log(numbers2.includes(15)); //true
console.log(numbers2.includes(20)); //false

// é possivel passar um INDICE de inicio a partir do qual queremos que o array faça a pesquisa do valor
let numbers5 = [7, 6, 5, 4, 3, 2, 1];
console.log(numbers5.includes(4, 5)); //false, elemento 4 não existe após posição 5

// ======= CONVERTENDO UM ARRAY EM UMA STRING =======
console.log(numbers5.toString()); // 7,6,5,4,3,2,1

// para separar os elementos com um separador diferente, use o join
const numbersString = numbers5.join("-");
console.log(numbersString); // 7-6-5-4-3-2-1

// ======= CLASSE TYPEDARRAY =======
// trabalhar com arrays contendo um único tipo de dado
let length = 5;
let int16 = new Int16Array(length);
let array16 = [];
array16.length = length;
for (let i = 0; i < length; i++) {
  int16[i] = i + 1;
}
console.log(int16); // Int16Array [ 1, 2, 3, 4, 5 ]
