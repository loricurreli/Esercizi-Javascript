function adultFilter(persons) {

  let maggiorenni = [];  // conterrà solo i maggiorenni

  for (person in persons){
    if (persons[person].age > 17){
      let maggiorenne ={
        'name' : persons[person].name,
        'age' : persons[person].age
      }
      maggiorenni.push(maggiorenne);     // aggiungo il maggiorenne
    }
  }
 
  return maggiorenni;  //restituisco solo i maggiorenni
  
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

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);