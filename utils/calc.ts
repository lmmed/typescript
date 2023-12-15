export const addition = (numbers:number[]):number => {
  if(numbers.length === 0){
    throw new Error("Il faut au minium un paramètre");
  }
  return numbers.reduce((old, current) => old + current, 0);
};

export const substraction = (numbers:number[]):number => {
  if(numbers.length === 0){
    throw new Error("Il faut au minium un paramètre");
  }
  return numbers.reduce((old, current, index) => index === 0 ? current : old - current, 0);
};

export const multiplication = (numbers:number[]):number => {
  if(numbers.length === 0){
    throw new Error("Il faut au minium un paramètre");
  }
  return numbers.reduce((old, current, index) => index === 0 ? current : old * current, 0);
};

export const division = (numbers:number[]):number => {
  if(numbers.length === 0){
    throw new Error("Il faut au minium un paramètre");
  }
  if(numbers.includes(0)){
    throw new Error("Attention division par 0 interdite");
  }
  return numbers.reduce((old, current, index) => index === 0 ? current : old / current, 0);
};
