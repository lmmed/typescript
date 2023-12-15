"use strict";
const addition = (a, b) => {
    return a + b;
};
const substraction = (a, b) => {
    return a - b;
};
const multiplication = (a, b) => {
    return a * b;
};
const division = (a, b) => {
    if (a === 0 || b === 0) {
        throw new Error("Division par 0 impossible");
    }
    return a / b;
};
const additionList = (...numbers) => {
    return numbers.reduce((old, current, index) => old + current, 0);
};
const additionResult = addition(5, 4);
const substractionResult = substraction(10, 5);
const multiplicationResult = multiplication(5, 2);
const divisionResult = division(50, 2);
const additionListResult = additionList(1, 2, 5);
//# sourceMappingURL=calculator.js.map