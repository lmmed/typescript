import { ICanPay } from "./ICanPay";

export abstract class Employee<T extends number | string> implements ICanPay {
  constructor(
    readonly id: T | undefined,
    readonly firstName: string,
    readonly lastName: string,
    readonly salaire: number
  ) {}
  sendPayment(): void {
    console.log(`pay ${this.firstName} --- salaire ${this.salaire}`);
  }

  getId(): T | undefined {
    return this.id;
  }

  abstract calculerSalaire(): number;
}
