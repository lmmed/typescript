interface CanPay{
    sendPayment(): void;
}
class Employee implements CanPay{
    constructor( 
        readonly firstName: string, 
        readonly lastName: string,
        readonly salaire: number
      ) {} 
      sendPayment(): void {
          console.log(`pay ${this.firstName} --- salaire ${this.salaire}`);
      }
}

class Supplier implements CanPay{
    constructor( 
        readonly name: string,
        readonly toBePaid: number
      ) {} 
      sendPayment(): void {
          console.log(`pay ${this.name} --- ivoice ${this.toBePaid}`);
      }
}
class Team{
    #employees: Employee[]= [];
    constructor(readonly name: string){}
    addMember(employee: Employee){
        this.#employees.push(employee);
    }
    showAll(){
        this.#employees.forEach(
            employee => console.log(employee)
            
        );
    }
}

class Company{
    sendPayment(toBePaid: CanPay[]){
        toBePaid.forEach(p => p.sendPayment());
    }
}

const marketing = new Team("Marketing");
const finance = new Team("Finance");
marketing.addMember(new Employee("momo", "lm", 2000));
finance.addMember(new Employee("jiij", "jiji", 1500));

const company = new Company();
company.sendPayment([
    new Employee("momo", "lm", 2000),
    new Employee("jiij", "jiji", 1500),
    new Supplier("LeroyMerlin", 3000)
]);

marketing.showAll();
finance.showAll();

console.log(marketing);
console.log(finance);
