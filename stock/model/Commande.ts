export interface ICommande {
  libererLigne(ref: string): void;
  viderCommande(): void;
  affecterLivraison(ref: string, adresse: string): void;
  calculerMontant(): number;
}

export class Commande implements ICommande {
  libererLigne(ref: string) {}
  viderCommande() {}
  affecterLivraison(ref: string, adresse: string) {}
  calculerMontant() {
    return 0;
  }
}
