interface Payable {
  sendPayment(): void;
}
export class Supplier implements Payable {
  sendPayment(): void {
    console.log("Supplier");
  }
}

export class Employee implements Payable {
  #firstName: string;
  #lastName: string;
  #group?: Group;
  constructor(firstName: string, lastName: string) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }
  sendPayment(): void {
    console.log("Employee");
  }
  addToGroup(group: Group) {
    this.#group = group;
  }
  show() {
    console.log(
      `${this.#firstName}, ${this.#lastName.toUpperCase()}: ${
        this.#group ?? "Aucun groupe connu"
      }`
    );
  }
}

export enum Group {
  "Marketing" = "Marketing",
  "Finance" = "Finance",
  "Dev" = "Dev",
}

export class Company {
  sendPayments(toBePaid: Payable[]) {
    toBePaid.forEach((p) => p.sendPayment());
  }
}
