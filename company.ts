






import { employeServcie } from "./employeServcie";
import Developpeur from "./model/Developpeur";
import Employee from "./model/Employee";

const increaseSalary = (percent: number) => {
  return (employee: Readonly<Employee<string|number>>) => {
    const increase = employee.salaire * (percent / 100);
    return {
      ...employee,
      salary: employee.salaire + increase
    }
  }
}

const test = new Developpeur(5,"test","test", 100);
const increaseSalaryByFivePercent = increaseSalary(2);

const newEmployee = increaseSalaryByFivePercent(test);

employeServcie.recupererEmploye();