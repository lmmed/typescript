import { Employee } from "../../model/Employee";
import { Developpeur } from "../../model/Developpeur";
import { IEmployeeDirectoryService } from "../IEmployeeDirectoryService";
import fetch from "node-fetch";

export class EmployeeDirectoryServiceImpl<T extends string | number>
  implements IEmployeeDirectoryService
{
  private employees: Employee<T>[];

  constructor(employees: Employee<T>[]) {
    this.employees = employees;
  }

  async fetchEmployes() {
    new Promise((resolve, reject) => {
      return fetch(
        "https://657aa1961acd268f9afb6388.mockapi.io/api/emplyee/all",
        { signal: AbortSignal.timeout(5000) }
      )
        .then((r: any) => r.json())
        .then(
          (
            data: {
              firstName: string;
              lastName: string;
              salaire: string;
              id: string;
            }[]
          ) => {
            const employees = data.map(
              ({ firstName, lastName, salaire, id }) =>
                new Developpeur(
                  id === "NaN" ? undefined : parseInt(id, 10),
                  firstName,
                  lastName,
                  parseInt(salaire, 10)
                )
            );
            this.employees = employees as Employee<T>[];
            console.log(`${this.employees.length} employés ajoutés !`);
            console.log(this.employees);
          }
        )
        .catch((err: Error) => console.error(err));
    });
  }

  addEmployees(employees: Employee<T>[]) {
    this.employees.push(...employees);
  }

  getEmployees() {
    return this.employees;
  }

  deleteEmployee(employee: Employee<T>) {
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
