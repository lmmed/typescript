
class Customer {
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get phone(): string {
    return this._phone;
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public get address(): string {
    return this._address;
  }
  public set address(value: string) {
    this._address = value;
  }
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }

  constructor(
    private _firstName: string,
    private _lastName: string,
    private _address: string,
    private _phone: string,
    private _email: string
  ) {
  }

  updateInformations(update:{
    firstName?: string,
    lastName?: string,
    address?: string,
    phone?: string,
    email?: string
  }) {
     Object.entries(update).forEach(([key, value])=> {
      if(key in this && value) this[key] = value;
     })
  }
}