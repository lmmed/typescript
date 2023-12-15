"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.add = void 0;
const add = (nb1, nb2) => {
    return nb1 + nb2;
};
exports.add = add;
const divide = (nb1, nb2) => {
    if (nb2 === 0) {
        throw new Error('Division par zéro impossible');
    }
    return nb1 / nb2;
};
exports.divide = divide;
