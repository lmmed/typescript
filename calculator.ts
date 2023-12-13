// Addition
const addition = (a: number, b: number) => {
    return a+b;
  }

const additionResult = addition(5, 6);
console.log(additionResult)

// Soustraction

const substract = (a: number, b:number) => ( a - b);

const substractResult = substract(9,5)
console.log(substractResult)

// Multiplication

const multiply = (a: number, b:number) => (a * b);

const multiplyResult = substract(9,5);
console.log(multiplyResult)


// Division

const divide = (a: number, b: number) => {
    if(b === 0) {
        throw "cannot divide by 0"
    }
    return a/b;
}

const divideResult = divide(9,7);
console.log(divideResult)


// Ajouter liste
const addList=(values:number[])=>values.reduce((previous, current)=> previous + current, 0);

console.log(addList([1,6]))