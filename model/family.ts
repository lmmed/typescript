import { Product } from "./product";

export class Family implements Family {
    #products: Product[] = [];
    constructor(readonly name:string) {}

    listProducts() {
        this.#products.forEach(p => console.log(`Produit ${p.ref}`));
    }

    addProduct(product: Product) {
        this.#products.push(product);
    }
}