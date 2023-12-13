import { IProduit } from "./produit";

export interface ICommande {
    libererLigne(ref: string): void;
    viderCommande(): void;
    affecterLivraison(ref: string, adresse:string): void ;
    calculerMontant(): void ;
}

export interface ILignePanierCommande {

    commander(): void;
    modifier(qte: number): void;
    getProduit(): IProduit;
    getQte(): number;
}

export interface IPanier {
    ajouterLigne (article: IProduit, qte:number): void;
    supprimerLigne(ref: string): void;
    viderpanier(): void;
    commanderLigne(ref: string): void;
    commander(): void;
    modifierLigne(ref: string, qte: number): void;
}