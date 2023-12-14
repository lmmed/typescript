export class Panier {
    #nbreArticles: number = 0;
    #total: number = 0;
    constructor(readonly name: string) {}
  
    ajouterLigne(ref: string, qte: number) {
        this.#nbreArticles += qte;
        this.#total += qte;
    }

    supprimerLigne(ref: string) {
        this.#nbreArticles -= 1;
        this.#total -= 1;
    }

    viderPanier() {
        this.#nbreArticles = 0;
        this.#total = 0;
    }

    commanderLigne(ref: string) {
        
    }

    modifierLigne(ref: string, qte: number) {
    }
  }
  
  