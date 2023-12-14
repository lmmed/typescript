interface Article {
    nom: string;
    quantite: number;
    prixUnitaire: number;
}

export class Panier {
    private articles: Article[];
    private total: number;

    constructor() {    
      this.articles = [];
      this.total = 0;
    } 

    ajouterLigne(ref:string, qty:number): void {
    }
    supprimerLigne(ref:string): void {
    }
    viderPanier(): void {
    }
    commanderLigne(ref:string): void {
    }
    modifierLigne(ref:string, qty:number): void {
    }
}
