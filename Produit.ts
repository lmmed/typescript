class Produit {
    #designation!: string;
    #ref!: string;
    #prix!: number;
    #qteStock!: number;

    constructor(readonly designation: string, readonly ref: string, readonly prix: number, readonly qteStock: number) {
        this.#designation = designation;
        this.#ref = ref;
        this.#prix = prix;
        this.#qteStock = qteStock;
    }

    retirerStock(qte: number) {
        this.#qteStock -= qte;
    }

    ajouterStock(qte: number) {
        this.#qteStock += qte;
    }

    changerPrix(newPrix: number) {
        this.#prix = newPrix;
    }

    alamerStockFaible() {
        if (this.#qteStock < 10) {
            console.log("Stock faible");
        }
    }
}