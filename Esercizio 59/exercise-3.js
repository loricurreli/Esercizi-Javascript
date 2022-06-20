const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);
      
      if (person) {
        return resolve(JSON.stringify(person));
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}


let newPromise = fetchPersonById(3);
newPromise
.then ((persona) => {console.log(JSON.parse(persona))})  // soluzione con un unico then



// soluzione con due then concatenati

let newPromise1 = fetchPersonById(3);
newPromise1
.then ((persona) => { 
  let oggetto_persona = JSON.parse(persona);
  return oggetto_persona;
})
.then ((oggetto_persona) => console.log(oggetto_persona))