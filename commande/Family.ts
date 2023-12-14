import { IProduct } from "./Product";

export interface IFamily {
    name: string;
}

export class Family {
    #products: IProduct[] = [];
    constructor(public name: string) {
      this.name = name;
    }
  
    listProducts() {
      return this.#products;
    }
  }