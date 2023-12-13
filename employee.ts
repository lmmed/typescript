class Group {
  name: string;
  elements: Employee[];
  constructor(name: string) {
    this.name = name;
    this.elements = [];
  }
  add(employee: Employee) {
    this.elements.push(employee);
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

class Employee {
  id: number;
  person: Person;
  group: Group | null;
  constructor(id: number, person: Person, group: Group | null) {
    this.id = id;
    this.person = person;
    this.group = group;
    if (group) {
      group?.add(this);
    }
  }
}

const marketing = new Group("marketing");
const finance = new Group("finance");

const mo = new Person("Mohammed", "Lamhaouar");
const jack = new Person("Jack", "Riley");

const employee1 = new Employee(1, mo, marketing);
const employee2 = new Employee(2, jack, finance);

console.log(employee1.group?.elements, finance.elements);
