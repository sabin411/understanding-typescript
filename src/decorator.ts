function Logger(target: Function) {
  console.log("Logging...");
  console.log(target);
}

@Logger
class Person {
  name: string = "Sabin";
  constructor(name: string) {
    this.name = name;
    console.log(`Your name is ${this.name}`);
  }
}

const newPerson = new Person("John");
console.log(newPerson);
