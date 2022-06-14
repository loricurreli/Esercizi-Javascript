function calculate() {

  let count = 0;
  newObject = outherFunction(count);
  return newObject;

}

function outherFunction(count){
  this.sum = count;
  this.add = function (number){
      sum+=number;
      return this;
  }
  this.multiply = function (number){
    sum*=number;
    return this;
  }
  this.divide = function (number){
    sum/=number;
    return this;
  }
  this.sub = function (number){
    sum-=number;
    return this;
  }
  this.printResult = function (){
    console.log(sum);
  }

  return this;
  
};

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7