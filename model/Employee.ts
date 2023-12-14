import ICanPay from "./ICanPay";

export default abstract class Employee<T = string | number> implements ICanPay{
  constructor(
      readonly firstName: string,
      readonly lastName: string,
      readonly salaire: number,
      readonly id: T
    ) {}
    sendPayment(): void {
        console.log(`pay ${this.firstName} --- salaire ${this.salaire}`);
    }

    abstract calculerSalaire(): number;
}