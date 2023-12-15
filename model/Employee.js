"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(id, firstName, lastName, salaire) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salaire = salaire;
    }
    sendPayment() {
        console.log(`pay ${this.firstName} --- salaire ${this.salaire}`);
    }
    getId() {
        return this.id;
    }
}
exports.Employee = Employee;
