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
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      let trovato = persons.find(item => item.id === id); 

      // se esiste una persona con quell'id trovato sarà object, altrimenti undefined
      if(typeof(trovato)=='object'){
        resolve (trovato);
      } else{
        reject (new Error("Id non valido!"));
      }
    }, 1000);
  });}


let newPromise = fetchPersonById(4);
newPromise
.then ((persona) => {console.log(persona)})
.catch((err) => {console.log("ERRORE!! ", err)})
.finally(() => {console.log("Esecuzione terminata")});