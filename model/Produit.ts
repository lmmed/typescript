export class Produit {
    constructor( 
        readonly designation: string, 
        readonly qteStock: number,
        readonly ref: string,
        readonly prix: number,
      ) {}

      retirer(qty:number): void {
      }
      ajouter(qty:number): void {
      }
      changer(prix:number): void {
      }
      alarmerStockFaible(): void {
      }
}