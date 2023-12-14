import { Employee } from "./Employee";

export class Team {
  #employees: Employee[] = [];
  constructor(readonly name: string) {}
  addMember(employee: Employee) {
    this.#employees.push(employee);
  }
  showAll() {
    this.#employees.forEach((employee) => console.log(employee));
  }
}
