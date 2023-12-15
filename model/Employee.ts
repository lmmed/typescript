import { ICanPay } from "./ICanPay";

export abstract class Employee<T> implements ICanPay{
    constructor( 
        readonly id: T,
        readonly firstName: string, 
        readonly lastName: string,
        readonly salaire: number
      ) {} 
      sendPayment(): void {
          console.log(`pay ${this.firstName} --- salaire ${this.salaire}`);
      }

      getId(): T{
        return this.id;
      }
      
      increaseSalary = (percent:number) => {
        return (employee:Readonly<Employee<any>) => {
            const increase = employee.salaire * (percent / 100);
            const salary = employee.salaire + increase;
            return {
                ...employee,
                salary
            }
        }
      }
      abstract calculerSalaire(): number;
}