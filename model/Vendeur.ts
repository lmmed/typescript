import { Employee } from "./Employee";
class Vendeur extends Employee<string> { 
    constructor( 
        readonly id: string,
      public readonly firstName: string, 
      public readonly lastName: string, 
      public readonly salaire: number, 
      public readonly commission: number
    ) { 
      super(id,firstName, lastName, salaire); 
    } 
    calculerSalaire(): number{
        return this.salaire + (this.commission/100)* this.salaire;
    }
  }