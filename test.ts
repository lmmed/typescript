import { sum, multiply, subtract, sumList, divide } from "./calculator"; // Assuming you have a sum function in sum.ts

describe("sum", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(-1, 2)).toBe(1);
  expect(sum(0, 0)).toBe(0);
});

describe("multiply", () => {
  expect(multiply(1, 2)).toBe(2);
  expect(multiply(-1, 2)).toBe(-2);
  expect(multiply(0, 0)).toBe(0);
});

describe("subtract", () => {
  expect(subtract(1, 2)).toBe(-1);
  expect(subtract(-1, 2)).toBe(-3);
  expect(subtract(0, 0)).toBe(0);
});

describe("sumList", () => {
  expect(sumList([1, 2, 3])).toBe(6);
  expect(sumList([-1, 2, 3])).toBe(4);
  expect(sumList([0, 0, 0])).toBe(0);
});

describe("divide", () => {
  expect(divide(1, 2)).toBe(0.5);
  expect(divide(-1, 2)).toBe(-0.5);
  expect(divide(10, 5)).toBe(2);
});


