const person = {
  firstName:"",
  lastName:"",
  getfirstName : function(){
    return this.firstName;
  },
  getlastName : function(){
    return this.lastName;
  },
  setfirstName : function(fname){
    this.firstName=fname;
  },
  setlastName : function(lname){
    this.lastName=lname;
  },
  getlastName : function(){
    return this.lastName;
  },
  fullName: function(){
    return (`${this.getfirstName()} ${this.getlastName()}`);
  }

}
const john = Object.create(person);
john.setfirstName("John");
john.setlastName("Doe");

const simon = Object.create(person);
simon.setfirstName("Simon");
simon.setlastName("Collins");

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
