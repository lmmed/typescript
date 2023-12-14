class LignePanierCommande {
    #quantite: number = 0;

    commander() {
        this.#quantite = 0;
    }

    modifier(qte: number) {
        this.#quantite = qte;
    }
}