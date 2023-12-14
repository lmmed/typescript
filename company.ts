import { Company } from "./models/company";
import { Developpeur } from "./models/developeur";

import { Fournisseur } from "./models/fournisseur";

import { Team } from "./models/team";
import { Vendeur } from "./models/vendeur";

const marketing = new Team("Marketing", "1");
const finance = new Team("Finance", "2");
marketing.addMember(new Developpeur("1", "momo", "lm", 2000));
finance.addMember(new Developpeur("2", "jiij", "jiji", 1500));

const company = new Company();
company.sendPayment([
  new Vendeur("1", "momo", "lm", 2000, 5),
  new Developpeur("3", "jiij", "jiji", 1500),
  new Fournisseur("1", "LeroyMerlin", 3000),
]);

marketing.showAll();
finance.showAll();

console.log(marketing);
console.log(finance);
