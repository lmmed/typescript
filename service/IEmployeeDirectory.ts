import Employee from "../model/Employee";

export default interface IEmployeeDirectory {
  list: Employee[];

  addEmployee(employee: Employee): void;

  removeEmployee(employee: Employee): void;

  getList(): Employee[];
}
