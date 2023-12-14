import { Employee } from "./employee";

export class Developpeur extends Employee {
  calculerSalaire(): number {
    return this.salaire;
  }
}
