import Product from "./Product";

export default class Family {
  private _products: Product[] = [];

  public get products(): Product[] {
    return this._products;
  }
  public set products(value: Product[]) {
    this._products = value;
  }

  constructor(readonly name:string){}

  listProducts():Product[]{
    return this.products;
  }
}