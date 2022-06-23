const person = {
  firstName:"",
  lastName:"",
  get nome() {
    return this.firstName;
  },
  get cognome() {
    return this.lastName;
  },
  set nome(new_name) {
    this.firstName = new_name;
  },
  set cognome(new_lname) {
    this.lastName = new_lname;
  },
  fullName: function(){
    return (`${this.nome} ${this.cognome}`);
  }

}
const john = Object.create(person);
john.nome = "John"
john.cognome = "Doe";

const simon = Object.create(person);
simon.nome = "Simon";
simon.cognome = "Collins";

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
