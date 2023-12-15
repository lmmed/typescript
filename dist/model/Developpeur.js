"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
class Developpeur extends Employee_1.default {
    calculerSalaire() {
        return this.salaire;
    }
}
exports.default = Developpeur;
//# sourceMappingURL=Developpeur.js.map