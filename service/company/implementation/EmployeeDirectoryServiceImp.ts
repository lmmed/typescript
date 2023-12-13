import { Developpeur } from "../../../model/company/Developpeur";
import { Employee } from "../../../model/company/Employee";
import { IEmployeeDirectoryService } from "../IEmployeDirectoryService";
import fetch from 'node-fetch'

export class EmployeeDirectory implements IEmployeeDirectoryService {
    private employees: Employee<string | number>[]= [];
    addEmployee(employee: Employee<string | number>) {
        this.employees.push(employee)
    }
    showAll(){
        this.employees.forEach(
            employee => console.log(employee)
        );
    }
    getEmployeesFromRemote() {
        return fetch(
          "https://657aa1961acd268f9afb6388.mockapi.io/api/emplyee/all",
          {
            signal: AbortSignal.timeout(5000),
          }
        )
          .then((res) =>
            res.json().catch((e) => {
              console.log("parse error");
            })
          )
          .then((list: any) => {
            this.employees = list.map(
              (el) => new Developpeur(el.id, el.firstName, el.lastName, el.salaire)
            );
            return this.employees;
          })
          .catch((e) => {
            console.error(e);
          });
      }
}