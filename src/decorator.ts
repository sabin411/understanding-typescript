function Logger(logString: string = "LOGGING") {
  return function (target: Function) {
    console.log(logString);
    console.log(target);
  };
}

@Logger("LOGGING - PERSON")
class Person {
  name: string = "Sabin";
  constructor(name: string) {
    this.name = name;
    console.log(`Your name is ${this.name}`);
  }
}

const newPerson = new Person("John");
console.log(newPerson);
