"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = __importDefault(require("./model/Company"));
const Developpeur_1 = __importDefault(require("./model/Developpeur"));
const Fournisseur_1 = __importDefault(require("./model/Fournisseur"));
const Team_1 = __importDefault(require("./model/Team"));
const Vendeur_1 = __importDefault(require("./model/Vendeur"));
const EmployeeDirectory_1 = __importDefault(require("./service/imp/EmployeeDirectory"));
const marketing = new Team_1.default("Marketing");
const finance = new Team_1.default("Finance");
marketing.addMember(new Developpeur_1.default("momo", "lm", 2000, 1));
finance.addMember(new Developpeur_1.default("jiij", "jiji", 1500, 2));
const company = new Company_1.default();
company.sendPayment([
    new Vendeur_1.default("momo", "lm", 2000, 'toto', 5),
    new Developpeur_1.default("jiij", "jiji", 1500, 3),
    new Fournisseur_1.default("LeroyMerlin", 3000)
]);
marketing.showAll();
finance.showAll();
const employeeList = new EmployeeDirectory_1.default();
employeeList.fetchList();
//# sourceMappingURL=class.js.map