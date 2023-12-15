import { Developpeur } from "./model/Developpeur";
import { Employee } from "./model/Employee";
import { EmployeeDirectoryServiceImpl } from "./service/imp/EmployeeDirectoryServiceImpl";
/*const ed = new EmployeeDirectoryServiceImpl([]);
const res = ed.fetchEmployes().then(() => {
  console.log(ed.getEmployees());
});
*/
const increaseSalary = (percent: number) => {
  return (employee: Readonly<Employee>) => {
    const increase = employee.salaire * (percent / 100);
    return {
      ...employee,
      salaire: employee.salaire + increase,
    };
  };
};

console.log("partial");
const ab = new Developpeur(1, "a", "b", 1000);
const increaseSalaryByFivePercent = increaseSalary(5);

const doe = increaseSalaryByFivePercent(ab);

console.log(ab);
console.log(doe);

console.log("curry");
function sum2(a: number, b: number) {
  a + b;
}

function sum3(a: number, b: number, c: number) {
  a + b + c;
}

function curry(func: Function) {
  return function curried(...args: any[]) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2: any[]) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

let curriedSum2 = curry(sum2);
let curriedSum3 = curry(sum3);
