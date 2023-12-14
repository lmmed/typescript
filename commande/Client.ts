export interface IClient {
    lastName: string;
    firstName: string;
    address: string;
    phone: string;
    mail: string;
}

export class Client {
    constructor(
        public firstName: string,
        public lastName: string,
        public address: string,
        public phone: string,
        public mail: string,
    ) {
    }
    changeCoordinates(newAddress: string, newPhone: string, newMail: string): void {
        this.address = newAddress;
        this.phone = newPhone;
        this.mail = newMail;
    }
}