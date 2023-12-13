import { ErrorProductNotFound } from "../Error/error";
import { ICommande, ILignePanierCommande, IPanier } from "../Interface/commande";
import { IProduit } from "../Interface/produit";

export class Panier implements IPanier {
    protected nbrArticles: number = 0
    protected total: number = 0
    constructor (
        protected lignes : ILignePanierCommande[],
    ) {}
    commander(): void {
        this.lignes.forEach(ligne => ligne.commander());
        this.lignes = [];
        this.total = 0;
        this.nbrArticles = 0;
    }
    ajouterLigne(article: IProduit, qte: number): void {
        const ligne = new LignePanierCommande(article, qte);
        this.nbrArticles += qte ;
        this.total += qte * article.getPrix();
        this.lignes.push(ligne);
    }

    supprimerLigne(ref: string): void {
        const ligne = this.lignes.find(p => p.getProduit().getRef() == ref);
        if (!ligne) {
            throw new ErrorProductNotFound(ref);
        }
        this.nbrArticles -= ligne.getQte() ;
        this.total -= ligne.getQte() * ligne.getProduit().getPrix();
    }
    viderpanier(): void {
        this.lignes = []
        this.nbrArticles = 0
        this.total = 0
    }
    commanderLigne(ref: string): void {
        throw new Error("Method not implemented.");
    }
    modifierLigne(ref: string, qte: number): void {
        const ligne = this.lignes.find(p => p.getProduit().getRef() == ref);
        if (!ligne) {
            throw new ErrorProductNotFound(ref);
        }
        this.nbrArticles -= ligne.getQte() ;
        this.total -= ligne.getQte() * ligne.getProduit().getPrix();
        ligne.modifier(qte) ;
        this.nbrArticles += ligne.getQte() ;
        this.total += ligne.getQte() * ligne.getProduit().getPrix();
    }
} 

class LignePanierCommande implements ILignePanierCommande {
    readonly commande?: ICommande
    constructor ( 
        readonly produit: IProduit,
        protected quantite: number
        ) {}
    getQte = (): number => this.quantite
    getProduit = (): IProduit => this.produit;
    commander(): void {
        this.produit.retirer(this.quantite);
    }
    modifier(qte: number): void {
        this.quantite = qte
    }
}

class Commande implements ICommande {
    libererLigne(ref: string): void {
        throw new Error("Method not implemented.");
    }
    viderCommande(): void {
        throw new Error("Method not implemented.");
    }
    affecterLivraison(ref: string, adresse: string): void {
        throw new Error("Method not implemented.");
    }
    calculerMontant(): void {
        throw new Error("Method not implemented.");
    }
    
}