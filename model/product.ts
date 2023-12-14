import { Family } from "./family";

export class Product {
    #limitLowStock = 5;
    
    
    constructor(private qte:number, readonly ref:string, private price:number,readonly family: Family, private decription?: string)  {
        family.addProduct(this);
     }

    addQte(number:number = 1) {
        this.qte += number;
    }
    removeQte(number:number = 1) {
        this.qte -= number;
    }

    changePrice(newPrice: number) {
        this.price = newPrice;
    }

    alertLowStock() {
        if (this.qte <= this.#limitLowStock) {
            console.log("alert low stock !!!");
        }
    }


}