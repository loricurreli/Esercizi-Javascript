const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};


const personInfo = {
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age
};

const {id,firstName: f_name, lastName: l_name,age} = person;  //estraggo le proprietà

let [serial, ...other] = [id,f_name,l_name,age];  //divido l'id dal resto delle proprietà
console.log(serial, other);