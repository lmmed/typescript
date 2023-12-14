import { EmployeeDirectoryServiceImpl } from "./service/imp/EmployeeDirectoryServiceImpl";
const ed = new EmployeeDirectoryServiceImpl([]);
const res = ed.fetchEmployes().then(() => {
  console.log(ed.getEmployees());
});
