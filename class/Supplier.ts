import Payable from "./Payable";

export default class Supplier implements Payable {
  constructor(readonly name: string, readonly salary: number){}
  sendPayment(): void {
      console.log(`${this.name} as était payé ${this.salary}`);
  }
}
