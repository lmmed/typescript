import { Employee, EmployeeVendeur } from "./Company/Employee/employee";
import { Group, GroupItemWithIdent, AnnuaireEmployee } from "./Company/Group/group";
import { Company } from "./Company/Company";
import { drawIdent } from "./Company/util";
import { Supplier } from "./Company/Supplier/supplier";
import { IEmployee } from "./Company/Interface/interfaces";

const company = new Company() ;

const emp1 = new Employee<string>('LAMHAOUAR', 'Mohamed', 2000, 'lam');
const emp2 = new Employee<string>('RILEY', 'Jack', 2000, 'jack');
const emp3 = new EmployeeVendeur<number>('RILEY', 'vendeur', 2000, 1);
const sup1 = new Supplier('carrefour') ;

const market = new Group<Employee<string | number>>('market') ;
market.addToList(emp1) ;
market.addToList(emp3) ;
console.log(`Market : ${drawIdent(market.getList())}`);

const finance = new Group<Employee<string | number>>('Finance') ;
finance.addToList(emp2) ;
console.log(`Finance : ${drawIdent(finance.getList())}`);

const suplier = new Group<Supplier>('all supliers');
suplier.addToList(sup1) ;
console.log(`Suplier : ${drawIdent(suplier.getList())}`);

// company.sendPayments([...market.getList(), ...finance.getList(), ...suplier.getList()])

const annuaireE = new AnnuaireEmployee('annuaire-employé');
annuaireE.addToList(emp1);
annuaireE.addToList(emp2);
annuaireE.addToList(emp3);
console.log (annuaireE.getList().map(e => e.getIdent())) ;
annuaireE.removeToList(emp2);
console.log (annuaireE.getList().map(e => e.getIdent())) ;

console.log('--------------------------');

const annuaireG = new GroupItemWithIdent('annuaire-group');
annuaireG.addToList(market);
annuaireG.addToList(finance);
console.log (annuaireG.getList().map(e => e.getIdent())) ;

console.log (annuaireG.findItemByIdent('market')) ;

annuaireE.recupererEmployee().then(() => console.log (annuaireE.getList().map(e => e.getIdent())) );
