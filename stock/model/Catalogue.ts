import { Famille, IFamille } from "./Famille";
import { Produit, IProduit } from "./Produit";

interface ICatalogue {
  chercherProduitParRef(ref: string): IProduit[];
  chercherProduitParDesignation(designation: string): IProduit[];
  chercherProduitParFamille(famille: IFamille): IProduit[];
  changer(ref: string, prix: number): void;
  ajouterProduit(ref: string, prix: number, famille: Famille): void;
  supprimerProduit(ref: string): void;
}

const DEFAULT_STOCK = 100;
export class Catalogue implements ICatalogue {
  #produits: IProduit[] = [];

  chercherProduitParRef(ref: string): IProduit[] {
    return this.#produits.filter((p) => p.getRef().indexOf(ref) !== -1);
  }
  chercherProduitParDesignation(designation: string): IProduit[] {
    return this.#produits.filter(
      (p) => p.getDesignation().indexOf(designation) !== -1
    );
  }
  chercherProduitParFamille(famille: IFamille): IProduit[] {
    return this.#produits.filter((p) => p.getFamille() === famille);
  }

  changer(ref: string, prix: number) {
    const produit = this.chercherProduitParRef(ref);
    if (!produit) {
      throw "Produit non trouvé";
    }
    if (produit.length > 1) {
      throw "Plusieurs produits trouvé pour cette ref";
    }
    produit[0].changer(prix);
  }

  ajouterProduit(ref: string, prix: number, famille: Famille) {
    const produit = this.chercherProduitParRef(ref);
    if (produit.length > 0) {
      throw "Produit déjà existant";
    }
    const nouveauProduit = new Produit(famille, "", DEFAULT_STOCK, ref, prix);
    this.#produits.push(nouveauProduit);
  }

  supprimerProduit(ref: string) {
    const produit = this.chercherProduitParRef(ref);
    if (!produit) {
      throw "Produit non trouvé";
    }
    if (produit.length > 1) {
      throw "Plusieurs produits trouvé pour cette ref";
    }
    this.#produits = this.#produits.filter((p) => p.getRef() !== ref);
  }
}
