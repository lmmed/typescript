import Payable from "./Payable";

export default  class Employee implements Payable {
  sendPayment(): void {
      console.log('Supplier');
  }
}
