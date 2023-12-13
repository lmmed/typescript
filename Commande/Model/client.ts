import { IClient } from "../Interface/client";
import { IPanier } from "../Interface/commande";
import { Panier } from "./commande";

export class Client implements IClient{
    private panier: IPanier;
    constructor (
        private nom: string, 
        private prenom: string,
        private adresse: string,
        private tel: string,
        private email: string,
        ) {
            this.panier = new Panier([]);
    }
    getPanier = (): IPanier => this.panier;

    changerCoordonnees(): void {
        throw new Error("Method not implemented.");
    }
    
}