// 1º conceito: atribuição de uma variavel

interface Person {
  name: string;
  age: number;
}

function printName(person: Person) {
  console.log(person.name);
}

const mandy = { name: "Mandy", age: 19 };
const gandalf = { name: "Gandalf", age: undefined, class: "Wizard" };

printName(mandy);
printName(gandalf);

// 2º conceito: programação orientada a objetos
interface Comparable {
  compareTo(b): number;
}

class MyObject implements Comparable {
  age: number;
  compareTo(b): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}
