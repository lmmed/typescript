import { Company } from "./company";
import { Developpeur } from "./model/company/Developpeur";
import { Fournisseur } from "./model/company/Fournisseur";
import { Team } from "./model/company/Team";
import { Vendeur } from "./model/company/Vendeur";
import { ITeamDirectoryService } from "./service/company/ITeamDirectoryService";
import { TeamDirectoryServiceImpl } from "./service/company/implementation/TeamDirectoryServiceImp";


const marketing = new Team("Marketing");
const finance = new Team("Finance");
marketing.addMember(new Developpeur("momo", "lm", 2000));
finance.addMember(new Developpeur("jiij", "jiji", 1500));

const teamDirectory: ITeamDirectoryService = new TeamDirectoryServiceImpl()

const company = new Company();
company.sendPayment([
    new Vendeur("momo", "lm", 2000, 5),
    new Developpeur("jiij", "jiji", 1500),
    new Fournisseur("LeroyMerlin", 3000)
]);

marketing.showAll();
finance.showAll();

console.log(marketing);
console.log(finance);
