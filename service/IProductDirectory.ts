import Product from "../model/Product";

export default interface IProductDirectory {
  list: Product[];
  searchByRef(ref:string): Product | undefined;
  searchByDescription(description:string):Product[];
  // searchByFamily(family:Family):Product[];
  changePrice(ref:string, price:number):void;
  addProduct(ref:string, price: number, family:string):void;
  deleteProduct(ref:string):void;
}
