function sumUntil(maxValue) {
  let i=1;
  let sum = maxValue;
  while (i<maxValue){
    sum+=i;
    i++;
  }
  return sum;

}

console.log(sumUntil(5));