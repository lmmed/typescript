import { ICommande } from "./Commande";
import { IProduit } from "./Produit";

interface ILignePanierCommande {}

export class LignePanierCommande implements ILignePanierCommande {
  constructor(
    readonly commande: ICommande,
    readonly produit: IProduit,
    protected quantite: number
  ) {}

  getCommande() {
    return this.produit;
  }
  getProduit() {
    return this.produit;
  }
  commander() {
    this.produit.retirer(this.quantite);
  }

  modifier(qte: number) {
    //ajout ou suppression,
    //vérifier le stock
    //enregistrer la nouvelle quantité
  }
}
