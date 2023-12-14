import { CanPay, withId } from "../interfaces";

export class Fournisseur implements CanPay, withId<string> {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly toBePaid: number
  ) {}
  sendPayment(): void {
    console.log(`pay ${this.name} --- facture ${this.toBePaid}`);
  }
}
