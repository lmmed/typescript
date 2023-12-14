import { ICanPay } from "./ICanPay";

export class Fournisseur implements ICanPay {
  constructor(
    readonly name: string,
    readonly toBePaid: number
  ) {}
  sendPayment(): void {
    console.log(`pay ${this.name} --- facture ${this.toBePaid}`);
  }
}
