const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = 'Simon';  // Si passa un riferimento quindi vengono modificati entrambi
console.log(person1);
console.log(person2);