import { IFamily } from "./Family";

export interface IProduct {
    name: string;
    quantity: number;
    reference: string;
    price: number;
    getFamily:() => IFamily;
}

export class Product {
    constructor(
        public name: string,
        public quantity: number,
        public reference: string,
        public price: number,
        private family: IFamily
    ) {
    }
    getFamily() {
        return this.family;
    }
    removeQuantity(number: number): void {
        this.quantity -= number;
        this.bewareLowQuantity();
    }
    addQuantity(number: number): void {
        this.quantity += number;
        this.bewareLowQuantity();
    }
    changePrice(newPrice: number): void {
        this.price = newPrice
    }
    bewareLowQuantity(): void {
        if(this.quantity < 10) {
            console.warn(`Attention, le stock est faible : ${this.quantity}`)
        }
    }
}
