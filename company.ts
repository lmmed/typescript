import { EmployeePhoneBook } from "./services/EmployeeDirectory";

const employeeDirectory = new EmployeePhoneBook();

employeeDirectory.getEmployeesFromRemote().then((val) => console.log(val));
