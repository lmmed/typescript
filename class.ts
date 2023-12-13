interface Payable {
    sendPayment(): void;
}

class Person {
    constructor(readonly firstname: string, readonly lastname:string) { }
}

class Employee extends Person implements Payable  {
    sendPayment(): void {
        console.log(`paid employee --- ${this.firstname} ${this.lastname}`);
    }
}

class Supplier extends Person implements Payable {
    sendPayment(): void {
        console.log(`paid supplier --- ${this.firstname} ${this.lastname}`);
    }
}

class Group {
    #employees: Payable[] = [];
    constructor(readonly name: string) { }

    public addEmployee = (employee: Payable): Group => {
        this.#employees.push(employee);
        return this;
    }

    public addEmployees = (employees: Payable[]): Group => {
        this.#employees.push(...employees);
        return this;
    }

    sendPayments() {
        this.#employees.forEach(p => p.sendPayment());
    }
}

const emp = new Employee('Titi', 'Tutu');

const supp = new Supplier('Toto', 'Tata');
const group = new Group('Marketing');

group.addEmployees([emp, supp]);

group.sendPayments();