import Payable from "./Payable";
import Seller from "./Seller";

export default  class Developer extends Seller implements Payable {
  commissionPercentage: number = 0;

  constructor(
    readonly firstName: string,
    readonly lastName: string,
    readonly salary: number
  ) {
    super();
  }

  sendPayment(): void {
      console.log(`${this.firstName} ${this.lastName} a était payé ${this.salary}`);
  }
}
