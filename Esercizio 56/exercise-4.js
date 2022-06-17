function sum(...numbers) {  // rendo la funzione sum generica per n numeri anzichè 3
  let sum = 0;
  for (let num of numbers) sum += num;
  return sum;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));  // uso spread operator per evitare non dover specificare tutti i parametri