import { Employee } from "../../model/Employee";
import { IEmployeeDirectoryService } from "../IEmployeeDirectoryService";

export class EmployeeDirectoryServiceImpl implements IEmployeeDirectoryService {
  private employees: Employee[];

  constructor(employees: Employee[]) {
    this.employees = employees;
  }

  recupererEmploye():void {
    new Promise((resolve, reject) => {
      const response = fetch("https://657aa1961acd268f9afb6388.mockapi.io/api/emplyee/all", {signal: AbortSignal.timeout(5000)});
      response.then(r => {
          r.json().then(json => {
            this.employees = json;
            console.log(this.employees);
          })
      }).catch(reason => {
        console.log(reason);
      });
    })
  }

  addEmployees(employees: Employee[]) {
    this.employees.push(...employees);
  }

  getEmployees() {
    return this.employees;
  }

  deleteEmployee(employee: Employee) {
    this.employees = this.employees.filter((e) => e !== employee);
  }
  deleteEmployeeByIndex(index: number) {
    if (index === 0) {
      this.employees = this.employees.slice(1);
    } else if (index === this.employees.length) {
      this.employees = this.employees.slice(0, -1);
    } else {
      this.employees = [
        ...this.employees.slice(0, index),
        ...this.employees.slice(index + 1),
      ];
    }
  }
  findByName(firstName: string, lastName: string) {
    return this.employees.find(
      (employee) =>
        employee.lastName === lastName && employee.firstName === firstName
    );
  }
}
