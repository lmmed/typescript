import Developer from "./class/Developer";
import Employee from "./class/Employee";
import Group from "./class/Group";
import Supplier from "./class/Supplier";

const titi = new Employee("Titi", "TATA", 100);
const marketingGroup = new Group("Marketing");
marketingGroup.addMember(titi);

const financeGroup = new Group("Finance");
const test = new Employee( "Test", "TOTO", 100);
financeGroup.addMember(test);
test.makeSell(500);


const supplier = new Supplier("OTO", 250);
titi.sendPayment();
test.sendPayment();
supplier.sendPayment();


const developper = new Developer('Lola', 'LULU', 100);
developper.makeSell(200);