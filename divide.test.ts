import { divide } from "./index";

test('Simple test pour addition', () => {
    expect(divide(1,10)).toBe(0.1);
})

test('Simple test pour addition', () => {
    expect(divide(1,0)).toThrow();
})