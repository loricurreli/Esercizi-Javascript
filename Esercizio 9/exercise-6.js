function getKeys(obj) {
  let keys = [];
  for (elemento in obj){
    keys.push(elemento);
  }
  return keys;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);
