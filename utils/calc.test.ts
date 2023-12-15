import { addition, division, multiplication, substraction } from "./calc";

describe(('Calculation function'), () => {
  it(('Addition'), () => {
    expect(addition([1,3,4])).toBe(8);
    expect(addition([5,2])).toBe(7);
    expect(() => addition([])).toThrow();
  });

  it(('Substraction'), () => {
    expect(substraction([5,2])).toBe(3);
    expect(substraction([10,8,2])).toBe(0);
    expect(() => substraction([])).toThrow();
  });

  it('Multiplication', () => {
    expect(multiplication([5,2])).toBe(10);
    expect(multiplication([2,3,4])).toBe(24);
    expect(() => multiplication([])).toThrow();
  });

  it('Division', () => {
    expect(() => division([])).toThrow();
    expect(() => division([])).toThrow();
  })
})