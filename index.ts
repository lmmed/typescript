import { Company, Employee, Group } from "./oo/index";

const company = new Company();
const employe1 = new Employee("John", "Doe");
const employe2 = new Employee("Jane", "Doe");
employe1.addToGroup(Group.Marketing);
employe2.addToGroup(Group.Finance);
employe1.show();
employe2.show();
