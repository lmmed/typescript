import { addList, addition, divide, multiply, substract } from "./calculator"


test("addition test", () => {
    expect(addition(1,2)).toBe(3)
})
test("substract test", () => {
    expect(substract(7,2)).toBe(5)
})
test("multiply test", () => {
    expect(multiply(7,2)).toBe(14)
})
test("divide test", () => {
    expect(divide(8,2)).toBe(4)
})
test("addList test", () => {
    expect(addList([6,8])).toBe(14)
})