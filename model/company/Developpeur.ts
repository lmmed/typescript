import { Employee } from "../company/Employee";

export class Developpeur extends Employee<string | number> { 
    calculerSalaire(): number{
        return this.salaire;
    }
} 