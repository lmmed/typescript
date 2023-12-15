import Employee from "./Employee";

export default class Developpeur extends Employee<number> {
    calculerSalaire(): number{
        return this.salaire;
    }
  }