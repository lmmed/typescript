"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = require("./Employee");
class Vendeur extends Employee_1.Employee {
    constructor(id, firstName, lastName, salaire, commission) {
        super(id, firstName, lastName, salaire);
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salaire = salaire;
        this.commission = commission;
    }
    calculerSalaire() {
        return this.salaire + (this.commission / 100) * this.salaire;
    }
}
