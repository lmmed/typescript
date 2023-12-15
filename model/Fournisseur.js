"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fournisseur = void 0;
class Fournisseur {
    constructor(name, toBePaid) {
        this.name = name;
        this.toBePaid = toBePaid;
    }
    sendPayment() {
        console.log(`pay ${this.name} --- facture ${this.toBePaid}`);
    }
}
exports.Fournisseur = Fournisseur;
