import { ProductTypes } from "../types/product.types";

export class Product implements ProductTypes {
    constructor(
       public description: string,
       public stockQuantity: number,
       public reference: number,
       public price: number,
    ){}
    
    // Fonction pour supprimer une quantité au stock
    removeQuantity(quantity: number): void {
        if (quantity > 0) {
        this.stockQuantity -= quantity;
        console.log(`[${this.description}] ${quantity} unit(s) removed to stock.`);
        } else {
        console.log(`[${this.description}] Invalid quantity.`);
        }
    }
   
    // Fonction pour ajouter une quantité au stock
    addQuantity(quantity: number): void {
        if (quantity > 0) {
        this.stockQuantity += quantity;
        console.log(`[${this.description}] ${quantity} unit(s) added to stock.`);
        } else {
        console.log(`[${this.description}] Invalid quantity.`);
        }
    }

    // Fonction pour changer le prix
    changePrice(newPrice: number): void {
        if (newPrice >= 0) {
        this.price = newPrice;
        console.log(`[${this.description}] Price changed to ${newPrice}.`);
        } else {
        console.log(`[${this.description}] Invalid price.`);
        }
    }

    // Fonction pour alarmer quand le stock est faible
    checkLowStockThreshold(threshold: number): void {
        if (this.stockQuantity <= threshold) {
        console.log(`[${this.description}] Low stock alert! Current stock: ${this.stockQuantity}`);
        } else {
        console.log(`[${this.description}] Sufficient stock: ${this.stockQuantity}`);
        }
    }
}