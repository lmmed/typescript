import { Family } from "../model/family";
import { Product } from "../model/product";

export class Catalog {
    #products: Product[] = [];

    addProduct(ref:string, price: number, family:Family) {
        const product = new Product(0, ref, price, family);
        this.#products.push(product);
    }
    findProductByRef(ref:string) {
        this.#products.find(p => p.ref === ref);
    }
    findProductByFamily(familyName:string) {
        this.#products.find(p => p.family.name === familyName);
    }
}