export function add(a: number, b: number) {
  return a + b;
}

export function multiply(a: number, b: number) {
  return a * b;
}

export function substract(a: number, b: number) {
  return a - b;
}

export function divide(a: number, b: number) {
  if (b === 0) {
    throw "cannot divide by 0";
  }
  return a / b;
}

export function addList(list: number[]): number {
  return list.reduce((acc, val) => acc + val, 0);
}
