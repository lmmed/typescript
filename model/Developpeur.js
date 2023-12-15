"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developpeur = void 0;
const Employee_1 = require("./Employee");
class Developpeur extends Employee_1.Employee {
    calculerSalaire() {
        return this.salaire;
    }
}
exports.Developpeur = Developpeur;
