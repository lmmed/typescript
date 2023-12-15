import { calcAdd, calcDiv, calcMult, calcSub } from "./calculatrice";

describe('sum module', () => {
    test('should execute all calculs', () => {
      expect(calcAdd(1, 2)).toBe(3);
      expect(calcSub(2, 1)).toBe(1);
      expect(calcMult(3, 2)).toBe(6);
      expect(calcDiv(4, 2)).toBe(2);
    });
});