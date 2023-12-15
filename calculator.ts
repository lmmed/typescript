export const sum = (a: number, b: number) => a + b;

export const multiply = (a: number, b: number) => a * b;

export const divide = (a: number, b: number) => a / b;

export const subtract = (a: number, b: number) => a - b;

export const sumList = (list: number[]) => list.reduce((prev, curr) => prev + curr, 0);