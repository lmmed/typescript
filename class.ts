interface CanPay{
  sendPayment(): void;
}
abstract class Employee implements CanPay{
  constructor(
      readonly firstName: string,
      readonly lastName: string,
      readonly salaire: number
    ) {}
    sendPayment(): void {
        console.log(`pay ${this.firstName} --- salaire ${this.salaire}`);
    }

    abstract calculerSalaire(): number;
}
class Vendeur extends Employee {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly salaire: number,
    public readonly commission: number
  ) {
    super(firstName, lastName, salaire);
  }
  calculerSalaire(): number{
      return this.salaire + (this.commission/100)* this.salaire;
  }
}

class Developpeur extends Employee {
  calculerSalaire(): number{
      return this.salaire;
  }
}

class Fournisseur implements CanPay{
  constructor(
      readonly name: string,
      readonly toBePaid: number
    ) {}
    sendPayment(): void {
        console.log(`pay ${this.name} --- facture ${this.toBePaid}`);
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

class EmployeeDirectory{
  private list: Employee[] = [];

  addEmployee(employee: Employee):void {
    this.list.push(employee);
  }

  removeEmployee(employee: Employee): void {
    this.list = this.list.filter((currentEmployee) => currentEmployee !== employee);
  }

  getList():Employee[] {
    return this.list;
  }
}

class TeamDirectory{
  private list: Team[] = [];

  addTeam(team: Team):void {
    this.list.push(team);
  }

  removeTeam(team: Team): void {
    this.list = this.list.filter((currentTeam) => currentTeam !== team);
  }

  addEmployeeToGroup(team: Team, employee: Employee) {
    team.addMember(employee);
  }

  findTeam(name: string): Team | undefined {
    return this.list.find((currentTeam) => currentTeam.name === name)
  }

  getList():Team[] {
    return this.list;
  }
}

const marketing = new Team("Marketing");
const finance = new Team("Finance");
marketing.addMember(new Developpeur("momo", "lm", 2000));
finance.addMember(new Developpeur("jiij", "jiji", 1500));

const company = new Company();
company.sendPayment([
  new Vendeur("momo", "lm", 2000, 5),
  new Developpeur("jiij", "jiji", 1500),
  new Fournisseur("LeroyMerlin", 3000)
]);

marketing.showAll();
finance.showAll();