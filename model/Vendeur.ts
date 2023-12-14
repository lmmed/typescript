import { Employee } from "./Employee";

export class Vendeur extends Employee {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly salaire: number,
    public readonly commission: number
  ) {
    super(firstName, lastName, salaire);
  }
  calculerSalaire(): number {
    return this.salaire + (this.commission / 100) * this.salaire;
  }
}
