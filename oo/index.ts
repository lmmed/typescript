interface Payable {
  sendPayment(): void;
}
export class Supplier implements Payable {
  sendPayment(): void {
    console.log("Supplier");
  }
}

export class Employee implements Payable {
  sendPayment(): void {
    console.log("Employee");
  }
}

export class Company {
  sendPayments(toBePaid: Payable[]) {
    toBePaid.forEach((p) => p.sendPayment());
  }
}
