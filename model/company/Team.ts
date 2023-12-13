import { Employee } from "./Employee"

export class Team {
    #employees: Employee<string | number> []= [];
    constructor(readonly name: string){}
    addMember(employee: Employee<string | number>){
        this.#employees.push(employee);
    }
    showAll(){
        this.#employees.forEach(
            employee => console.log(employee)
            
        );
    }
}