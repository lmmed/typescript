import { Company, Employee, Supplier } from "./oo/index";

const company = new Company();
company.sendPayments([new Employee(), new Supplier()]);
