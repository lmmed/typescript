import { Family } from "../model/family";
import { Product } from "../model/product";

export class Catalog {
    #products: Product[] = [];

    addProduct(ref:string, price: number, family:Family) {
        const product = new Product(0, ref, price, family);
        this.#products.push(product);
    }
    findProductByRef(ref:string) {
        const product = this.#products.find(p => p.ref === ref);
        console.log(product);
    }
    findProductByFamily(familyName:string) {
        const products = this.#products.filter(p => p.family.name === familyName);
        console.log(products);
    }
}