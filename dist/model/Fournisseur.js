"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fournisseur {
    constructor(name, toBePaid) {
        this.name = name;
        this.toBePaid = toBePaid;
    }
    sendPayment() {
        console.log(`pay ${this.name} --- facture ${this.toBePaid}`);
    }
}
exports.default = Fournisseur;
//# sourceMappingURL=Fournisseur.js.map