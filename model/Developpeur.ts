import { Employee } from "./Employee";

export class Developpeur extends Employee {
  calculerSalaire(): number {
    return this.salaire;
  }
}
