import { CanPay, withId } from "../interfaces";

export abstract class Employee implements CanPay, withId {
  constructor(
    readonly id: string,
    readonly firstName: string,
    readonly lastName: string,
    readonly salaire: number
  ) {}
  sendPayment(): void {
    console.log(`pay ${this.firstName} --- salaire ${this.salaire}`);
  }

  abstract calculerSalaire(): number;
}
