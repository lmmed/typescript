interface Payable {
    sendPayment(): void;
}

class Person {
    constructor(readonly firstname: string, readonly lastname:string) { }
}

class Employee extends Person implements Payable  {
    #commission!: number;
    sendPayment(): void {
        console.log(`paid employee --- ${this.firstname} ${this.lastname}`);
    }

    set commission(value: number) {
        this.#commission = value; 
    }

    get commission() {
        return this.#commission;
    }
}

class Supplier extends Person implements Payable {
    sendPayment(): void {
        console.log(`paid supplier --- ${this.firstname} ${this.lastname}`);
    }


}

enum Commission {
    MARKETING = 5,
    DEV = 0
}

class Group {
    #employees: Payable[] = [];
    constructor(readonly name: keyof typeof Commission) { }

    public addEmployee = (employee: Payable): Group => {
        this.#employees.push(employee);
        return this;
    }

    public addEmployees = (employees: Payable[]): Group => {
        this.#employees.push(...employees);
        return this;
    }

    addCommission(employee: Employee) {
        employee.commission = Commission[this.name]
    }

    sendPayments() {
        this.#employees.forEach(p => p.sendPayment());
    }
}

const emp = new Employee('Titi', 'Tutu');

const supp = new Supplier('Toto', 'Tata');
const group = new Group('MARKETING');

group.addEmployees([emp, supp]);
group.addCommission(emp)

group.sendPayments();