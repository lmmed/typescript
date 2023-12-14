export interface CanPay {
  sendPayment(): void;
}
export interface withId<T = string | number> {
  id: T;
}
