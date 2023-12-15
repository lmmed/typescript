"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Company {
    sendPayment(toBePaid) {
        toBePaid.forEach(p => p.sendPayment());
    }
}
exports.default = Company;
//# sourceMappingURL=Company.js.map