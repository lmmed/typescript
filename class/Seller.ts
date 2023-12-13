export default abstract class Seller {
  salary!: number;
  commissionPercentage!: number;

  makeSell(value:number):void {
    console.log('Vous avez fais une vente');
    this.salary += value * (this.commissionPercentage / 100);
  }
}