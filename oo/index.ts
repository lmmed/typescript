abstract class Payable {
  $amount: number;
  constructor() {
    this.$amount = 0;
  }
  sendPayment(amount: number) {
    if (amount < 0) {
      throw new Error("payment must be a positive value");
    }
    this.$amount += amount;
  }
  abstract showPaymentsAmount(): void;
}
export class Supplier extends Payable {
  #companyName: string;
  constructor(name: string) {
    super();
    this.#companyName = name;
  }
  showPaymentsAmount(): void {
    console.log(
      `${this.#companyName}: ${new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(this.$amount)}`
    );
  }
}

export class Employee extends Payable {
  #firstName: string;
  #lastName: string;
  #group?: Group;
  constructor(firstName: string, lastName: string) {
    super();
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  showPaymentsAmount(): void {
    console.log(
      `${
        this.#firstName
      }, ${this.#lastName.toUpperCase()}: ${new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(this.$amount)}`
    );
  }
  setGroup(group: Group) {
    this.#group = group;
  }
  getDisplayName() {
    return `${this.#firstName} ${this.#lastName.toUpperCase()}`;
  }
  show() {
    console.log(
      `${this.getDisplayName()}: ${this.#group ?? "Aucun groupe connu"}`
    );
  }
  performSale(_amount: number) {
    console.log("Merci, mais pas de commission pour toi");
  }
}

export class SalesEmployee extends Employee {
  performSale(amount: number) {
    if (amount < 0) {
      throw new Error("Le montant de la vente ne peut pas être négative");
    }
    console.log("Merci, voilà une commission pour toi");
    this.sendPayment(amount * 0.05);
  }
}

export enum Group {
  "Sales" = "Sales",
  "Marketing" = "Marketing",
  "Finance" = "Finance",
  "Dev" = "Dev",
}

export class Team {
  #name: Group;
  #employees: Employee[] = [];
  constructor(name: Group) {
    this.#name = name;
  }

  addEmployee(employee: Employee) {
    this.#employees.push(employee);
    employee.setGroup(this.#name);
  }
  itsPaydayFellas(amount: number) {
    this.#employees.forEach((employee) => {
      employee.sendPayment(amount);
    });
  }
}

export class Company {
  #name: string;
  #teams: Team[];
  constructor(name: string, teams?: Team[]) {
    this.#name = name;
    this.#teams = teams || [];
  }
  addTeam(team: Team) {
    this.#teams.push(team);
  }
}
