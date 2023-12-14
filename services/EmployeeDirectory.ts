import { Developpeur } from "../models/developeur";
import { Employee } from "../models/employee";
import { PhoneBook } from "../models/phonebook";

export class EmployeePhoneBook extends PhoneBook<Employee> {
  getEmployeesFromRemote() {
    return fetch(
      "https://657aa1961acd268f9afb6388.mockapi.io/api/emplyee/all",
      {
        signal: AbortSignal.timeout(5000),
      }
    )
      .then((res) => res.json())
      .then((list) => {
        this.items = list.map(
          (el) => new Developpeur(el.id, el.firstName, el.lastName, el.salaire)
        );
        return this.items;
      })
      .catch((e) => {
        console.error(e);
      });
  }
}
