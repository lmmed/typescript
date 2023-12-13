import { IPayable, IWithIdent } from "../Interface/interfaces";

export class Employee<T> implements IPayable, IWithIdent  {
    #nom: string;
    #prenom: string;
    protected salaire: number;
    readonly id: T;
    constructor(nom: string, prenom: string, salaire: number, id: T ) {
        this.#nom = nom;
        this.#prenom = prenom;
        this.salaire = salaire;
        this.id = id ;
    }
    getIdent= (): string => `${this.id} ${this.nom} ${this.prenom}`
    getPayment = (): number => this.salaire
    sendPayment(): void {
        console.log(`send payment to ${this.getIdent()} ${this.getPayment()}`);
    }
    public get nom() {
        return this.#nom
    } 
    public get prenom() {
        return this.#prenom
    } 
}

export class EmployeeVendeur<T> extends Employee<T> {
    getPayment = (): number => this.salaire * 1.05;
}