export class Product {
    #limitLowStock = 5;
    constructor(readonly name: string, private qte:number, readonly ref:string, private price:number) {}

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