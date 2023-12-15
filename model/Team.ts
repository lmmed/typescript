import { Employee } from "./Employee";
export class Team{
    #employees: Employee<any>[]= [];
    constructor(readonly name: string){}
    addMember(employee: Employee<any>){
        this.#employees.push(employee);
    }
    showAll(){
        this.#employees.forEach(
            employee => console.log(employee)
            
        );
    }
}