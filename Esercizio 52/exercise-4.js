const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

//soluzione 1 con array
const json = JSON.stringify(person, ['id', 'age']);
console.log(json); // Should return: { id: 1, age: 25 }


// Altra soluzione con function

function replacer(key, value) {
  if (typeof value === 'string') {
    return undefined;
  }
  return value;
}

const json1 = JSON.stringify(person, replacer);
console.log(json1); // Should return: { id: 1, age: 25 }
