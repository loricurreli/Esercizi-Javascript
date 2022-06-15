const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.values

let i = 0;
for (key in person){
  console.log(key + " : " + Object.values(person)[i]);
  i++;
}