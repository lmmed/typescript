import { Company, Employee, Group, Supplier, Team } from "./oo/index";

const company = new Company("OpenStudio");
const employe1 = new Employee("John", "Doe");
const employe2 = new Employee("Jane", "Doe");
const supplier = new Supplier("My Supplier");
const marketing = new Team(Group.Marketing);
const finance = new Team(Group.Finance);
marketing.addEmployee(employe1);
finance.addEmployee(employe2);
company.addTeam(marketing);
company.addTeam(finance);
employe1.show();
employe2.show();
employe1.sendPayment(200);
employe2.sendPayment(100);
supplier.sendPayment(50);
employe1.showPaymentsAmount();
supplier.showPaymentsAmount();
