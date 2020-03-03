let age: number = 19;
let existsFlag: boolean = true;
let language: string = "Javascript";

// reescrevendo :)

let age2 = 19; //number
let existsFlag2 = true; //boolean
let language2 = "Javascript"; //string

/*
com o código reescrito, o typescript ainda saberá
que age é um numero, existsFlag é um booleano e 
language é uma string, portanto, não é necessário
atribuir explicitamente um tipo a essas
variaveis.
*/

// se declarar a variavel e não iniciar com um valor,
// é recomendável atribuir-lhe um tipo :)
let favoriteLanguage: string;
let langs = ["Javascript", "Ruby", "Python"];

favoriteLanguage = langs[0];

// se não especificar um tipo para a variavel, ela será
// automaticamente tipada como any, o que significa
// que poderá receber qualquer valor, como no Javascript
