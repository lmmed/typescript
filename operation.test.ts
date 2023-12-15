import { add, multiply, divide, substract } from "./operations";

describe("Test all operations", () => {
  /* beforeAll(() => {
    console.log("Début du test sur les opérations");
  });
  afterAll(() => {
    console.log("Fin du test sur les opérations");
  });
  beforeEach(() => {
    console.log("Début du test");
  });
  afterEach(() => {
    console.log("Fin du test");
  });*/

  it("should validate add", () => {
    expect(add(1, 1)).toBe(2);
    expect(add(5, -1)).toBe(4);
    expect(add(0, 0)).toBe(0);
    expect(add(-1, -1)).toBe(-2);
  });

  it("should validate substract", () => {
    expect(substract(1, 1)).toBe(0);
    expect(substract(0, 0)).toBe(0);
    expect(substract(5, 1)).toBe(4);
    expect(substract(5, -1)).toBe(6);
  });
  it("should validate multiply", () => {
    expect(multiply(1, 1)).toBe(1);
    expect(multiply(2, 1)).toBe(2);
    expect(multiply(2, -1)).toBe(-2);
    expect(multiply(2, -1)).toBeLessThan(0);
  });
  it("should validate divide", () => {
    expect(divide(1, 1)).toBe(1);
    expect(divide(0, 1)).toBe(0);
    expect(divide(1, 10)).toBeLessThan(1);
    expect(() => divide(1, 0)).toThrow("cannot divide by 0");
  });
});
