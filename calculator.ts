/** ADDITION */
// we can specify the return type of the function or typescript do it by himself
function addition(val1: number, val2: number): number {
  return val1 + val2;
}

/** ADDITION LIST */
function additionList(values: number[]) {
  return values.reduce((a, b) => a + b, 0);
}

/** MULTIPLICATION */
function multiplication(values: number[]) {
  let result = 0;

  values.forEach((value, idx) => {
    if (idx === 0) {
      result = value;
      return;
    }

    result *= value;
  });

  return result;
}

/** SUBSTRACTION */
function substraction(values: number[]) {
  return values.reduce((a, b) => a - b, 0);
}

/** DIVISION */
function division<T extends number[]>(values: positivInts<T>) {
  return values.reduce((a, b) => a / b, 0);
}

function division2(values: number[]) {
  try {
    return values.reduce((a, b) => {
      if (b < 0) throw new Error("Negative value not supported");
      return a / b;
    }, 0);
  } catch (_) {}
}

type positivInts<T extends number []> = {
    [Key in keyof T] : `${T[Key]}` extends `-${string}` ? never : T[Key]
}

// not working for array yet...
division([-1, 2, 3, 4, 5]);
