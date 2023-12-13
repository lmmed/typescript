import Payable from "./Payable";

export default class Supplier implements Payable {
  sendPayment(): void {
      console.log('Supplier');
  }
}
