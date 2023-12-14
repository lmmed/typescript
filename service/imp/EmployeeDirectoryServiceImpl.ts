import { Employee } from "../../model/Employee";
import { Developpeur } from "../../model/Developpeur";
import { IEmployeeDirectoryService } from "../IEmployeeDirectoryService";
import fetch from "node-fetch";

export class EmployeeDirectoryServiceImpl implements IEmployeeDirectoryService {
  private employees: Employee[];

  constructor(employees: Employee[]) {
    this.employees = employees;
  }

  async fetchEmployes() {
    try {
      const response = await fetch(
        "https://657aa1961acd268f9afb6388.mockapi.io/api/emplyee/all",
        { signal: AbortSignal.timeout(5000) }
      );
      const data: {
        firstName: string;
        lastName: string;
        salaire: string;
        id: string;
      }[] = await response.json();
      const employees = data.map(
        ({ firstName, lastName, salaire, id }) =>
          new Developpeur(
            id === "NaN" ? undefined : parseInt(id, 10),
            firstName,
            lastName,
            parseInt(salaire, 10)
          )
      );
      this.employees = employees;
      return employees;
    } catch (error) {
      console.error(error);
    }
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
