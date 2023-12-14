import { ICanPay } from "./ICanPay";

export abstract class Employee implements ICanPay {
  constructor(
    readonly firstName: string,
    readonly lastName: string,
    readonly salaire: number
  ) {}
  sendPayment(): void {
    console.log(`pay ${this.firstName} --- salaire ${this.salaire}`);
  }

  abstract calculerSalaire(): number;
}
