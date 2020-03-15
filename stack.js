const _items = Symbol("stackItems");

class Stack {
  constructor() {
    this.count = 0;
    this[_items] = [];
  }

  push(element) {
    this[_items][this.count] = element;
    this.count++;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const result = this[_items][this.count];
    delete this[_items][this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this[_items][this.count - 1];
  }

  clear() {
    this[_items] = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this[_items][0]}`; //inicializa a string com o primeiro elemento
    for (let i = 1; i < this.count; i++) {
      //itera por todas as chaves da pilha
      objString = `${objString}, ${this[_items][i]}`; //add virgula seguida do proximo elemento
    }
    return objString;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(8);

/*
items = {
    0: 5,
    1: 8
}
count = 2
*/

console.log(Object.getOwnPropertyNames(stack)); //['count', 'items']
console.log(Object.keys(stack)); //['count', 'items']
console.log(stack.items); //{ '0': 5, '1': 8 }

stack.push(5);
stack.push(8);
let objectSymbols = Object.getOwnPropertySymbols(stack);
console.log(objectSymbols); //[ Symbol(stackItems) ]
console.log(objectSymbols.length); //1
console.log(objectSymbols[0]); //Symbol(stackItems)
stack[objectSymbols[0]].push(1); //5, 8, 1
