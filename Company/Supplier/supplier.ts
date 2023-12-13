import { IPayable, IWithIdent } from "../Interface/interfaces";

export class Supplier implements IPayable, IWithIdent {
    #nom: string;
    constructor(nom: string ) {
        this.#nom = nom;
    }
    sendPayment(): void {
        console.log(`send payment to Supplier ${this.#nom}`);
    }
    getPayment = (): number => 0
    getIdent= (): string => `${this.#nom}`
}