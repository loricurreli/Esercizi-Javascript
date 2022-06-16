class Person {

  _firstName = "";
  _lastName = "";
  _age = "";
  constructor(firstName, lastName, age){
    this._firstName=firstName;
    this._lastName=lastName;
    this._age=age;
  }


  //metodi getter e setter
  get firstName(){
    return this._firstName;
  }
  set firstName(new_name){
    this._firstName = new_name;
  }

  get lastName(){
    return this._lastName;
  }
  set lastName(new_lastName){
    this._lastName = new_lastName;
  }
  get age(){
    return this._age;
  }
  set age(new_age){
    this._age=new_age;
  }


  //metodo fullName

  get fullName(){
    return this.firstName + " " + this.lastName;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);