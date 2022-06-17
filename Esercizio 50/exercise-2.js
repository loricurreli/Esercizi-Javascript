class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }

  static fromJson(json_string){
    let dev = JSON.parse(json_string);  // converto la stringa in oggetto (non di classe Person)
    const {id,firstName,lastName,age} = dev; // prendo i parametri del nuovo oggetto
    return new Person(id,firstName,lastName,age); //restituisco un nuovo oggetto di tipo Person
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);