import { IFamily } from "./Family";
import { IProduct, Product } from "./Product";

export class Catalogue {
    #produits: IProduct[] = [];

    searchProductByRef(ref: string): IProduct[] {
        return this.#produits.filter((p) => p.reference === ref)
    }

    searchProductByName(name: string): IProduct[] {
        return this.#produits.filter((p) => p.name === name)
    }

    searchProductByFamily(family: IFamily): IProduct[] {
        return this.#produits.filter((p) => p.getFamily() === family)
    }

    changePrice(ref: string, price: number){
        const product = this.searchProductByRef(ref);
        if (!product) {
            throw "Produit non trouvé";
        }
        product[0].price = price;
    }
    addProduct(ref: string, price: number, family: IFamily) {
        return new Product( "Produit bis", 20, ref, price, family);
    }
    deleteProduct(ref: string) {
        const product = this.searchProductByRef(ref);
        if (!product) {
            throw "Produit non trouvé";
        }
        this.#produits = this.#produits.filter((p) => p.reference !== ref)
    }
}