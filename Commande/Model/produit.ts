import { ErrorProductAlreadyExists, ErrorProductNotFound, ErrorQtyGreaterThanStock } from "../Error/error";
import { ICatalogue, IFamille, IProduit } from "../Interface/produit";

export class Famille implements IFamille {
    constructor (  protected produits: IProduit[], readonly nom: string) {}
    removeProduit(p: IProduit): void {
        this.produits = this.produits.filter(oldP => oldP.getRef() !== p.getRef())
    }
    addProduit(p: IProduit): void {
        this.produits.push(p);
    }
    getName = (): string => this.nom;
    listerProduits = (): IProduit[] => [...this.produits];
}

export class Produit implements IProduit {
    constructor (
    readonly famille: IFamille,
    readonly designation: string,
    protected qteStock: number,
    readonly ref: string,
    protected prix: number
    ) {}
    getPrix= (): number => this.prix
    getFamille = (): IFamille=>this.famille
    getDesignation = (): string => this.designation
    getRef = (): string => this.ref
    retirer(qte: number): void {
        if (qte > this.qteStock) {
            throw new ErrorQtyGreaterThanStock(this.ref, qte);
        }
        this.qteStock = this.qteStock-qte;
    }
    ajouter(qte: number): void {
        this.qteStock = this.qteStock+qte;
    }
    changer(prix: number): void {
        this.prix = prix;
    }
    alarmerStockFaible= (minStock: number): boolean => this.qteStock<minStock;
    
}

export class Catalogue implements ICatalogue {
    private familles: IFamille[] = [];
    constructor (protected produits: IProduit[]) {};
    chercherProduitParRef(ref: string): IProduit | undefined {
        return this.produits.find(p => p.getRef() === ref)
    }
    chercherProduitParDesignation(designation: string): IProduit[] | undefined {
        return this.produits.filter(p => p.getDesignation() === designation)
    }
    chercherProduitParFamille(famille: string): IProduit[] | undefined {
        return this.familles.find(f => f.getName() === famille)?.listerProduits() ;
    }
    changer(ref: string, prix: number): void {
        const prod = this.chercherProduitParRef(ref) ;
        if (!prod) {
            throw new ErrorProductNotFound(ref);
        }
        prod.changer(prix) ;
    }
    ajouterProduit(ref: string, prix: number, famille: string): IProduit {
        if (this.chercherProduitParRef(ref)) {
            throw new ErrorProductAlreadyExists(ref);
        }
        const fam = this.familles.find(f => f.getName() === famille) ?? this.addFamille(famille);
        const p = new Produit(fam, '', 0, ref, prix) ;
        fam.addProduit(p);
        this.produits.push(p);
        return p;
    }
    supprimerProduit(ref: string): void {
        const prod = this.chercherProduitParRef(ref) ;
        if (!prod) {
            throw new ErrorProductNotFound(ref);
        }
        prod.getFamille().removeProduit(prod) ;
        this.produits = this.produits.filter (p => p.getRef() !== ref) 
    }

    addFamille(nom: string): Famille {
        const fam = new Famille([], nom) ;
        this.familles.push(fam);
        return fam
    }
    
}