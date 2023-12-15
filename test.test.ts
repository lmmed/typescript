import { sum, multiply, subtract, sumList, divide } from "./calculator"; // Assuming you have a sum function in sum.ts

test("sum", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(-1, 2)).toBe(1);
  expect(sum(0, 0)).toBe(0);
});

test("multiply", () => {
  expect(multiply(1, 2)).toBe(2);
  expect(multiply(-1, 2)).toBe(-2);
  expect(multiply(0, 0)).toBe(0);
});

test("subtract", () => {
  expect(subtract(1, 2)).toBe(-1);
  expect(subtract(-1, 2)).toBe(-3);
  expect(subtract(0, 0)).toBe(0);
});

test("sumList", () => {
  expect(sumList([1, 2, 3])).toBe(6);
  expect(sumList([-1, 2, 3])).toBe(4);
  expect(sumList([0, 0, 0])).toBe(0);
});

test("divide", () => {
  expect(divide(1, 2)).toBe(0.5);
  expect(divide(-1, 2)).toBe(-0.5);
  expect(divide(10, 5)).toBe(2);
});

test("multi_tests", () => {
  const value = 5.2 + 5;
  expect(value).toBe(10.2);
  expect(value).toBeGreaterThan(9);
  expect(value).toBeGreaterThanOrEqual(10.2);
  expect(value).toBeLessThan(11);
  expect(value).toBeLessThanOrEqual(10.2);
  expect(value).not.toBe(11);
});

test("test async", async () => {
  const data = await new Promise((res) => res("expected data"));
  expect(data).toBe("expected data");
});

test("test async", () => {
  return new Promise((res) => res("expected data")).then((data) => {
    expect(data).toBe("expected data");
  });
});

beforeEach(() => {
  console.log("before each");
});

afterEach(() => {
  console.log("after each");
});
