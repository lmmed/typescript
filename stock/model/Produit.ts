import { IFamille } from "./Famille";
export interface IProduit {
  getRef(): string;
  getDesignation(): string;
  getFamille(): IFamille;
  retirer(qte: number): void;
  ajouter(qte: number): void;
  changer(prix: number): void;
  alarmerStockFaible(): void;
}

const SEUIL_FAIBLE = 10;

export class Produit implements IProduit {
  constructor(
    private famille: IFamille,
    private designation: string,
    private qteStock: number,
    private ref: string,
    private prix: number
  ) {
    this.designation = designation;
    this.qteStock = qteStock;
    this.ref = ref;
    this.prix = prix;
  }

  getRef() {
    return this.ref;
  }

  getDesignation() {
    return this.designation;
  }
  getFamille() {
    return this.famille;
  }

  retirer(qte: number) {
    if (qte <= 0) {
      throw "On ne peut pas retirer une quantité négative ou nulle";
    }
    if (qte > this.qteStock) {
      throw "On n'a pas assez de produit en stock";
    }
    this.qteStock -= qte;
    this.alarmerStockFaible();
  }
  ajouter(qte: number) {
    if (qte <= 0) {
      throw "On ne peut pas ajouter une quantité négative ou nulle";
    }
    if (qte > this.qteStock) {
      throw "On n'a pas assez de produit en stock";
    }
    this.qteStock += qte;
    this.alarmerStockFaible();
  }

  changer(prix: number) {
    if (prix <= 0) {
      throw "Le prix ne peut pas être négatif ou nul";
    }
    this.prix += prix;
  }

  alarmerStockFaible() {
    if (this.qteStock < SEUIL_FAIBLE) {
      console.warn(
        `Attention le stock pour le produit ${this.designation}(${this.ref}) est faible : ${this.qteStock}`
      );
    }
  }
}
