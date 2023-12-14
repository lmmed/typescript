export interface ICanPay {
  sendPayment(toBePaid: CanBePaid[]): void;
}
