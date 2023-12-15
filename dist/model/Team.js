"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Team_employees;
Object.defineProperty(exports, "__esModule", { value: true });
class Team {
    constructor(name) {
        this.name = name;
        _Team_employees.set(this, []);
    }
    addMember(employee) {
        __classPrivateFieldGet(this, _Team_employees, "f").push(employee);
    }
    showAll() {
        __classPrivateFieldGet(this, _Team_employees, "f").forEach(employee => console.log(employee));
    }
}
_Team_employees = new WeakMap();
exports.default = Team;
//# sourceMappingURL=Team.js.map