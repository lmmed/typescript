/** ADDITION */
function addition(values: number[]) {
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

/** DIVISION */

function division<T extends number>(values: positivInts<T>[]) {
  return values.reduce((a, b) => {
    return a / b;
  }, 0);
}

function division2(values: number[]) {
  try {
    return values.reduce((a, b) => {
      if (b < 0) throw new Error("Negative value not supported");
      return a / b;
    }, 0);
  } catch (_) {}
}

type positivInts<T extends number> = `${T}` extends `-${string}` ? never : T;

// not working for
division([-1, 2, 3, 4, 5]);