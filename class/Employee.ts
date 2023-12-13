import Payable from "./Payable";

export default  class Employee implements Payable {
  firstName: string;
  lastName: string;

  constructor({firstName, lastName}: {firstName: string, lastName: string}) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sendPayment(): void {
      console.log('Supplier');
  }
}
