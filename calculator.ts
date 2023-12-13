const addition = (numbers:number[]):number => {
  if(numbers.length === 0){
    throw new Error("Il faut au minium un paramètre");
  }
  return numbers.reduce((old, current) => old + current, 0);
};

const substraction = (numbers:number[]):number => {
  if(numbers.length === 0){
    throw new Error("Il faut au minium un paramètre");
  }
  return numbers.reduce((old, current, index) => index === 0 ? current : old - current, 0);
};

const multiplication = (numbers:number[]):number => {
  if(numbers.length === 0){
    throw new Error("Il faut au minium un paramètre");
  }
  return numbers.reduce((old, current, index) => index === 0 ? current : old * current, 0);
};

const division = (numbers:number[]):number => {
  if(numbers.length === 0){
    throw new Error("Il faut au minium un paramètre");
  }
  if(numbers.includes(0)){
    throw new Error("Attention division par 0 interdite");
  }
  return numbers.reduce((old, current, index) => index === 0 ? current : old / current, 0);
};


const additionResult = addition([5,1,4]);
const substractionResult = substraction([10, 5, 2])
const multiplicationResult = multiplication([10, 2]);
const divisionResult = division([50,5,2]);