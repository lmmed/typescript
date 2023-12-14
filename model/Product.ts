class Product {
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
  public get designation(): string {
    return this._designation;
  }
  public set designation(value: string) {
    this._designation = value;
  }
  constructor(
    private _designation: string,
    private _quantity: number,
    private _ref: string,
    private _price: number,
  ){

  }

  remove(){
    this.quantity = this.quantity - 1;
  }

  add(){
    this.quantity = this.quantity + 1;
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