import ICanPay from "./ICanPay";

export default class Company {
  sendPayment(toBePaid: ICanPay[]){
      toBePaid.forEach(p => p.sendPayment());
  }
}