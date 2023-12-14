export default class Product {
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  public get ref(): string {
    return this._ref;
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public get quantity(): number {
    return this._quantity;
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  private _quantity: number = 0;

  constructor(
    private _ref: string,
    private _price: number,
    private _description: string = ''
  ){

  }

  remove(quantity:number){
    this.quantity = this.quantity - quantity;
  }

  add(quantity:number){
    this.quantity = this.quantity + quantity;
  }

  changePrice(newPrice: number) {
    this.price = newPrice;
  }

  notificationLowStock(){
    if(this.quantity < 2){
      console.log("Attention quantité faible");
    }
  }

}