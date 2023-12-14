import { ClientTypes } from "../types/client.types";

export class Client implements ClientTypes {
    constructor(
        public firstName: string,
        public lastName: string,
        public address: string,
        public phone: string,
        public email: string,
    ){}

    changeCoordinates(newAddress: string, newPhone: string, newEmail: string): void {
        this.address = newAddress;
        this.phone = newPhone;
        this.email = newEmail;
    }
}