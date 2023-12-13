import { ICanPay } from "./ICanPay";

export abstract class Employee<T extends string | number> implements ICanPay{
    constructor( 
        readonly id: T,
        readonly firstName: string, 
        readonly lastName: string,
        readonly salaire: number
      ) {} 
      sendPayment(): void {
          console.log(`pay ${this.firstName} --- salaire ${this.salaire}`);
      }

      getId(): T {
        return this.id
      }

      abstract calculerSalaire(): number;
}