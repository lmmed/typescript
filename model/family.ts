import { Product } from "./product";

export class Family {
    #products: Product[] = [];
    constructor(readonly name:string) {}

    listProducts() {
        this.#products.forEach(p => console.log(`Produit ${p.name}`));
    }
}