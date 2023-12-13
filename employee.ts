class Group {
  name: string;
  elements: Person[];
  constructor(name: string) {
    this.name = name;
    this.elements = [];
  }
  add(person: Person) {
    this.elements.push(person);
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
  person: Person;
  group: Group | null;
  constructor(person: Person, group: Group | null) {
    this.person = person;
    this.group = group;
    if (group) {
      group?.add(this.person);
    }
  }
}

const marketing = new Group("marketing");
const finance = new Group("finance");

const mo = new Person("Mohammed", "Lamhaouar");
const jack = new Person("Jack", "Riley");

const employee1 = new Employee(mo, marketing);
const employee2 = new Employee(jack, finance);

console.log(employee1.group?.elements);
