import { EmployeeDirectoryServiceImpl } from "./service/imp/EmployeeDirectoryServiceImpl";
const ed = new EmployeeDirectoryServiceImpl<string>([]);
const res = ed.fetchEmployes();
