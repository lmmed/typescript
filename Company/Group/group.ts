import { Employee } from "../Employee/employee";
import { IEmployee, IWithIdent } from "../Interface/interfaces";

export class Group<T> implements IWithIdent {
    #list : T[] = [] ;
    constructor (readonly nom: string) {}
    getIdent(): string {
        return this.nom;
    }
    getList = () => this.#list;
    addToList = (item : T) => {
        this.#list.push(item) ;
    }
    removeToList = (item : T) => {
        this.#list = [...this.#list.filter(actualItem => actualItem !== item )];
    }
    clearList = () => this.#list=[];
}

export class GroupItemWithIdent extends Group<IWithIdent> {
   findItemByIdent = (ident : string) : IWithIdent | undefined => this.getList().find( i => i.getIdent() === ident)
}

export class AnnuaireEmployee extends GroupItemWithIdent {
    recupererEmployee = () => {
        return fetch ('https://657aa1961acd268f9afb6388.mockapi.io/api/emplyee/all')
        .then (r =>  r.json().catch(() => console.log('parse error')))
        .then ((data: IEmployee[]) => {
            this.clearList();
            data.forEach (e => {
                this.addToList(new Employee<string>(e.lastName, e.firstName, Number(e.salaire), e.id))
            })
            
        } )
        .catch((e) => {
            console.log(e);  
        })
    }
}