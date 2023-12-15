"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(firstName, lastName, salaire, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salaire = salaire;
        this.id = id;
    }
    sendPayment() {
        console.log(`pay ${this.firstName} --- salaire ${this.salaire}`);
    }
}
exports.default = Employee;
//# sourceMappingURL=Employee.js.map