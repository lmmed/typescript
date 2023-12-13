export interface IPayable {
    sendPayment(): void ;
    getPayment(): number ;
}

export interface IWithIdent {
    getIdent(): string;
}

export interface IEmployee {
    firstName: string;
    lastName: string;
    salaire:string;
    id:string;
}