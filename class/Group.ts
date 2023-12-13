import Employee from "./Employee";

export default class Group {
  employees: Employee[] = [];
  constructor(readonly name: string) {
    this.name = name;
  }
  addMember(employe: Employee) {
    this.employees.push(employe);
  }
}