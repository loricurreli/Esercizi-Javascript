function person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFirstName = function(){
    return this.firstName;
  }
  this.setFirstName = function (new_Name){
    this.firstName=new_Name;
  }
  this.getLastName = function(){
    return this.lastName;
  }
  this.setLastName = function (new_LastName){
    this.lastName=new_LastName;
  }
  this.fullName = function(){
    return this.getFirstName() + " " + this.getLastName();
  }
}

let john = new person('John','Doe');
let simon = new person('Simon', 'Collins');
console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins