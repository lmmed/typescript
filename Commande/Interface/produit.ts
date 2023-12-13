export interface IFamille {
    listerProduits(): IProduit[];
    getName (): string ;
    addProduit(p: IProduit): void ;
    removeProduit (p: IProduit): void ;
}

export interface IProduit {
    retirer(qte: number): void ;
    ajouter(qte: number): void;
    changer(prix: number): void;
    alarmerStockFaible(minStock: number): boolean;
    getRef (): string ;
    getDesignation(): string;
    getFamille(): IFamille;
    getPrix(): number;
}

export interface ICatalogue {
    chercherProduitParRef(ref: string): IProduit | undefined ;
    chercherProduitParDesignation(designation: string): IProduit[] | undefined ;
    chercherProduitParFamille(famille: string): IProduit[] | undefined ;
    changer (ref: string, prix: number): void ;
    ajouterProduit(ref: string, prix: number, famille: string): IProduit ;
    supprimerProduit(ref: string): void ;
}