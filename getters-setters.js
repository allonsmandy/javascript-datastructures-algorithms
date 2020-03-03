class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

let lotrChar = new Person("Mandinha");
console.log(lotrChar.name);

lotrChar.name = "Tauriel";
console.log(lotrChar.name);

lotrChar._name = "Arwen";
console.log(lotrChar.name);
