import {
  Company,
  Employee,
  Group,
  SalesEmployee,
  Supplier,
  Team,
} from "./oo/index";

const company = new Company("OpenStudio");
const employe1 = new Employee("John", "Doe");
const employe2 = new SalesEmployee("Jane", "Doe");
const supplier = new Supplier("My Supplier");
const marketing = new Team(Group.Marketing);
const finance = new Team(Group.Finance);
const sales = new Team(Group.Sales);
marketing.addEmployee(employe1);
sales.addEmployee(employe2);
company.addTeam(marketing);
company.addTeam(finance);
company.addTeam(sales);
employe1.show();
employe2.show();
employe1.sendPayment(200);
employe2.sendPayment(100);
supplier.sendPayment(50);
employe1.showPaymentsAmount();
supplier.showPaymentsAmount();

employe1.performSale(1000);
employe2.performSale(0);
employe2.performSale(1000);
