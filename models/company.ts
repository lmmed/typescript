import { CanPay } from "../interfaces";

export class Company {
  sendPayment(toBePaid: CanPay[]) {
    toBePaid.forEach((p) => p.sendPayment());
  }
}
