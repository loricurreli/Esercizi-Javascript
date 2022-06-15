function firstUncompletedNote(notes) {
  let uncomplete = [];
  for (note in notes){  // analizzo una nota alla volta
    let uncompleted = false; //booleano per capire se ci sono note non completata
    for (task in notes[note].todos){  // analizzo tutti i task di una nota
      if (!notes[note].todos[task].done){ //task non completato
        uncompleted = true;  // uncompleted diventa true perchè c'è un task non completo
    }
    
  }
  if (uncompleted){   // se c'è un task non completato la nota va segnata uncomplited, e la restituisco essendo la prima
    uncomplete.push(notes[note]);
    return uncomplete;
  }

  }
  
}

const notes = [
  {
    id: 1,
    description: 'Workout program',
    todos: [
      {
        id: 1,
        name: 'Push ups - 10 x 3',
        done: true
      },
      {
        id: 2,
        name: 'Abdominals - 20 x 3',
        done: true
      },
      {
        id: 3,
        name: 'Tapis Roulant - 15min',
        done: true
      }
    ]
  },
  {
    id: 2,
    description: 'Front-end Roadmap',
    todos: [
      {
        id: 1,
        name: 'Learn HTML',
        done: true
      },
      {
        id: 2,
        name: 'Learn CSS',
        done: false
      },
      {
        id: 3,
        name: 'Learn JavaScript',
        done: true
      },
      {
        id: 4,
        name: 'Learn Angular',
        done: false
      }
    ]
  },
  {
    id: 3,
    description: 'My Movies Library',
    todos: [
      {
        id: 1,
        name: 'La città incantata',
        done: true
      },
      {
        id: 2,
        name: 'Avatar',
        done: true
      },
      {
        id: 3,
        name: 'Titanic',
        done: false
      }
    ]
  }
]

const noteInProgress = firstUncompletedNote(notes);
console.log('All notes: ', notes);
console.log('First note in progress: ', noteInProgress);