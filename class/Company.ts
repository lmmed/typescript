import Payable from "./Payable";

export default  class Company {
  sendPayments(toBePaid: Payable[]){
    toBePaid.forEach(p => p.sendPayment());
  }
}