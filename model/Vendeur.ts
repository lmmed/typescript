import Employee from "./Employee";

export default class Vendeur extends Employee<string> {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly salaire: number,
    public readonly id: string,
    public readonly commission: number
  ) {
    super(firstName, lastName, salaire, id);
  }
  calculerSalaire(): number{
      return this.salaire + (this.commission/100)* this.salaire;
  }
}