import { add, multiply, divide, substract } from "./operations";

test("add", () => {
  expect(add(1, 1)).toBe(2);
  expect(add(5, -1)).toBe(4);
  expect(add(0, 0)).toBe(0);
  expect(add(-1, -1)).toBe(-2);
});

test("multiply", () => {
  expect(multiply(1, 1)).toBe(1);
  expect(multiply(2, 1)).toBe(2);
  expect(multiply(2, -1)).toBe(-2);
});
test("substract", () => {
  expect(substract(1, 1)).toBe(0);
  expect(substract(0, 0)).toBe(0);
  expect(substract(5, 1)).toBe(4);
  expect(substract(5, -1)).toBe(6);
});
test("divide", () => {
  expect(divide(1, 1)).toBe(1);
  expect(divide(0, 1)).toBe(0);
  expect(() => divide(1, 0)).toThrow("cannot divide by 0");
});
