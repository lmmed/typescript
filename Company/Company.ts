import { IPayable } from "./Interface/interfaces";



export class Company {
    sendPayments (toBePaid: IPayable[]) {
        toBePaid.forEach(p => p.sendPayment()) ;
    }
}

