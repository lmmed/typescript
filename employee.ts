interface Payable {
    sendPayment(): void;
}
class Supplier implements Payable {
    sendPayment(): void {
        console.log('Supplier')
    }
}

class Employee implements Payable {
    sendPayment(): void {
        console.log('Employee')
    }
}

class Company {
    sendPayments(toBePaid:Payable[]) {
        toBePaid.forEach(p => p.sendPayment())
    }
}

const company = new Company();
company.sendPayments([new Employee(), new Supplier()]);
