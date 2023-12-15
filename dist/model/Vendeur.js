"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
class Vendeur extends Employee_1.default {
    constructor(firstName, lastName, salaire, id, commission) {
        super(firstName, lastName, salaire, id);
        this.firstName = firstName;
        this.lastName = lastName;
        this.salaire = salaire;
        this.id = id;
        this.commission = commission;
    }
    calculerSalaire() {
        return this.salaire + (this.commission / 100) * this.salaire;
    }
}
exports.default = Vendeur;
//# sourceMappingURL=Vendeur.js.map