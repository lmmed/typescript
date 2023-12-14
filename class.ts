import Company from "./model/Company";
import Developpeur from "./model/Developpeur";
import Fournisseur from "./model/Fournisseur";
import Team from "./model/Team";
import Vendeur from "./model/Vendeur";
import EmployeeDirectory from "./service/imp/EmployeeDirectory";


const marketing = new Team("Marketing");
const finance = new Team("Finance");
marketing.addMember(new Developpeur("momo", "lm", 2000, 1));
finance.addMember(new Developpeur("jiij", "jiji", 1500, 2));

const company = new Company();
company.sendPayment([
  new Vendeur("momo", "lm", 2000, 'toto', 5),
  new Developpeur("jiij", "jiji", 1500, 3),
  new Fournisseur("LeroyMerlin", 3000)
]);

marketing.showAll();
finance.showAll();

const employeeList = new EmployeeDirectory();

employeeList.fetchList();