interface IPanier {
  ajouterLigne(ref: string, qte: number): void;
  supprimerLigne(ref: string): void;
  viderPanier(): void;
  commanderLigne(ref: string): void;
  modifierLigne(ref: string, qte: number): void;
}

export class Panier implements IPanier {
  #lignes: [] = [];
  constructor(
    private nbreArticles: number = 0,
    private total: number = 0
  ) {
    this.nbreArticles = nbreArticles;
    this.total = total;
  }

  ajouterLigne(ref: string, qte: number) {}
  supprimerLigne(ref: string) {}
  viderPanier() {
    this.#lignes = [];
    this.nbreArticles = 0;
    this.total = 0;
  }
  commanderLigne(ref: string) {}
  modifierLigne(ref: string, qte: number) {}
}
