export class Family {
    #name!: string
    #products: string[] = [];
    constructor(readonly name: string) {
      this.name = name;
    }
  
    listProducts() {
      return this.#products;
    }
  }
  
  