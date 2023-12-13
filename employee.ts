interface CanPay {
  sendPayment(toBePaid: CanBePaid[]): void;
}
interface CanBePaid {
  toBePaid: number;
  sendPayment(): void;
}

class Company implements CanPay {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sendPayment(toBePaid: CanBePaid[]) {
    toBePaid.forEach((p) => p.sendPayment());
  }
}

class Group {
  name: string;
  employees: Employee[];
  suppliers: Supplier[];
  constructor(name: string) {
    this.name = name;
    this.employees = [];
    this.suppliers = [];
  }
  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }
  addSupplier(supplier: Supplier) {
    this.suppliers.push(supplier);
  }
}

class Person {
  readonly firstName: string;
  readonly lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Supplier implements CanBePaid {
  readonly name: string;
  toBePaid: number;

  constructor(name: string) {
    this.name = name;
    this.toBePaid = Math.random() * 1000;
  }

  sendPayment(): void {
    console.log("pay supplier");
  }
}

class Employee implements CanBePaid {
  id: number;
  person: Person;
  #group: Group | null;
  toBePaid: number;
  constructor(id: number, person: Person, group: Group | null) {
    this.id = id;
    this.person = person;
    this.#group = group;
    this.toBePaid = Math.random() * 1000;
    if (group) {
      group?.addEmployee(this);
    }
  }
  sendPayment(): void {
    console.log(
      "pay employee",
      this.person.firstName,
      this.person.lastName,
      this.toBePaid
    );
  }
}

const marketing = new Group("marketing");
const finance = new Group("finance");

const mo = new Person("Mohammed", "Lamhaouar");
const jack = new Person("Jack", "Riley");

const employee1 = new Employee(1, mo, marketing);
const employee2 = new Employee(2, jack, finance);

const paperClipMaker = new Supplier("paperclip");

marketing.addSupplier(paperClipMaker);
finance.addSupplier(paperClipMaker);

const company = new Company("company");

company.sendPayment([
  ...marketing.employees,
  ...marketing.suppliers,
  ...finance.employees,
  ...finance.suppliers,
]);
