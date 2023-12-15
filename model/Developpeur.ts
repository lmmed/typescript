import { Employee } from "./Employee";

export class Developpeur extends Employee<number> { 
    calculerSalaire(): number{
        return this.salaire;
    }
  } 