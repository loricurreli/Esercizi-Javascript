function calculateAverageAge(persons) {
  
  let n_persone;
  let total_age = 0;
  for (person in persons){
    total_age += persons[person].age;
    if (person == 9){
      n_persone = Number(person) + 1;
    }
  }
  return total_age/n_persone;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const averageAge = calculateAverageAge(persons);
console.log(persons);
console.log(averageAge);