import { withId } from "../interfaces";
import { Employee } from "./employee";

export class Team implements withId<number> {
  #employees: Employee[] = [];

  constructor(readonly name: string, readonly id: number) {}
  addMember(employee: Employee) {
    this.#employees.push(employee);
  }
  showAll() {
    this.#employees.forEach((employee) => console.log(employee));
  }
}
