const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let i = 0;
for (key in person){
  console.log(Object.keys(person)[i] + " : " + person[key]);
  i++;
}


//Soluzione alternativa senza Object.keys()
for (key in person){
  console.log(key + " : " + person[key]);
}