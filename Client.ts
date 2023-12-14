export class Client {
  #address!: string;
  #phone: string;
  #mail!: string;

  constructor(
    readonly firstName: string,
    readonly lastName: string,
    readonly address: string,
    readonly phone: string,
    readonly mail: string
  ) {
    this.#address = address;
    this.#phone = phone;
    this.#mail = mail;
  }
  changeCoordonnees(
    newAddress: string,
    newPhone: string,
    newMail: string
  ): void {
    this.#address = newAddress;
    this.#phone = newPhone;
    this.#mail = newMail;
  }
}
