interface Payable {
  sendPayment(): void;
}

class Supplier implements Payable {
  sendPayment(): void {
    console.log("supplier");
  }
}

type EmployeeType = "Marketing" | "Finance" | "RH" | "Dev";

class Employee implements Payable {
  #type!: EmployeeType

  constructor(type: EmployeeType) {
    this.#type = type;
  }

  sendPayment(): void {
    console.log("Employee");
  }

  get type() {
    return this.#type;
  }
}

class Company {
  sendPayments(toBePaid: Payable[]): void {
    toBePaid.forEach((p) => {
      p.sendPayment();
    });
  }
}

const company = new Company();

company.sendPayments([new Employee('Dev'), new Supplier()]);
