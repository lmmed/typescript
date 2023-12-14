export interface IFamille {
  listerProduits: () => void;
}

export class Famille implements IFamille {
  constructor(private nom: string) {
    this.nom = nom;
  }

  listerProduits() {
    //return this.#produits;
  }
}
