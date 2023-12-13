import Payable from "./Payable";

export default  class Employee implements Payable {

  constructor(
    readonly firstName: string,
    readonly lastName: string,
    readonly salary: number
  ) {}

  sendPayment(): void {
      console.log(`${this.firstName} ${this.lastName} a était payé ${this.salary}`);
  }
}
