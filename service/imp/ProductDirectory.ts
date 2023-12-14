import Product from "../../model/Product";
import IProductDirectory from "../IProductDirectory";

export default class ProductDirectory implements IProductDirectory {
  list: Product[] = [];

  searchByRef(ref:string):Product|undefined{
    return this.list.find(product => product.ref===ref);
  }

  searchByDescription(description: string): Product[] {
      return this.list.filter(product => product.description.includes(description));
  }

  changePrice(ref: string, price: number): void {
      const product = this.searchByRef(ref);
      if(product){
        product.changePrice(price);
        console.log('Votre produit à été mis à jour');
      }
      else {
        console.log('Référence Introuvable');
      }
  }

  addProduct(ref: string, price: number, family: string): void {
      this.list.push(new Product(ref,price));
  }

  deleteProduct(ref:string):void {
    const product = this.searchByRef(ref);
      if(product){
        this.list = this.list.filter(productInList => productInList !== product);
        console.log('Produit supprimé');
      }
      else {
        console.log('Référence Introuvable');
      }
  }

}
