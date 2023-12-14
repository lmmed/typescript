import Developpeur from "../../model/Developpeur";
import Employee from "../../model/Employee";
import IEmployeeDirectory from "../IEmployeeDirectory";
import fetch from 'node-fetch';

export default class EmployeeDirectory implements IEmployeeDirectory {
  list: Employee[] = [];

  async fetchList(): Promise<void> {
    try {
      const res = await fetch('https://657aa1961acd268f9afb6388.mockapi.io/api/emplyee/all', {signal: AbortSignal.timeout(5000)});
      const json = await res.json();
      this.list = json.map((dev: {
        firstName: string,
        lastName: string,
        salaire: string,
        id: string
      }) =>
        new Developpeur(dev.firstName, dev.lastName, parseFloat(dev.salaire), parseFloat(dev.id))
      );
    }
    catch(e) {
      throw new Error("Erreur dans dans la requête");
    }
  }

  addEmployee(employee: Employee): void {
    this.list.push(employee);
  }

  removeEmployee(employee: Employee): void {
    this.list = this.list.filter((currentEmployee) => currentEmployee !== employee);
  }

  getList(): Employee[] {
    return this.list;
  }
}
