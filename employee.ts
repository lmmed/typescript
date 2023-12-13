interface CanPay {
  sendPayment(): void;
}
interface CanBePaid {
  toBePaid: number;
  receivePayment(): void;
}

class Group implements CanPay {
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
  sendPayment(): void {
    console.log("pay up group");
    this.employees.forEach((employee) => {
      employee.receivePayment();
    });
    this.suppliers.forEach((employee) => {
      employee.receivePayment();
    });
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
    this.toBePaid = 0;
  }

  receivePayment(): void {
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
    this.toBePaid = 0;
    if (group) {
      group?.addEmployee(this);
    }
  }
  receivePayment(): void {
    console.log("pay employee");
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

finance.sendPayment();
finance.sendPayment();
