import { ICanPay } from "./model/company/ICanPay";

export class Company{
    sendPayment(toBePaid: ICanPay[]){
        toBePaid.forEach(p => p.sendPayment());
    }
}