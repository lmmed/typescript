import Company from "./class/Company";
import Employee from "./class/Employee";
import Supplier from "./class/Supplier";

const company = new Company();

company.sendPayments([
  new Employee(),
  new Supplier()
])