// Addition
export const addition = (a: number, b: number) => {
    return a+b;
  }

const additionResult = addition(5, 6);

// Soustraction

export const substract = (a: number, b:number) => ( a - b);

const substractResult = substract(9,5)

// Multiplication

export const multiply = (a: number, b:number) => (a * b);

const multiplyResult = substract(9,5);


// Division

export const divide = (a: number, b: number) => {
    if(b === 0) {
        throw "cannot divide by 0"
    }
    return a/b;
}

const divideResult = divide(9,7);


// Ajouter liste
export const addList=(values:number[])=>values.reduce((previous, current)=> previous + current, 0);

