import { Family } from "../model/family";
import { Product } from "../model/product";

export class Catalog {
    #products: Product[] = [];

    addProduct(ref:string, price: number, family:Family) {
        const product = new Product(0, ref, price, family);
        this.#products.push(product);
    }
    findProductByRef(ref:string): Product {
        const product = this.#products.find(p => p.ref === ref);
        if (!product) {
            throw new Error('this product does not exist');
        }
        console.log(product);
        return product;
    }
    findProductByFamily(familyName:string):Product[] {
        const products = this.#products.filter(p => p.family.name === familyName);
        console.log(products);
        return products;
    }

    changeProductPriceByRef(ref: string, price:number) {
        const product = this.findProductByRef(ref);
        product.changePrice(price);
    }
}