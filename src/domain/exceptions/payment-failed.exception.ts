export class PaymentFailedException extends Error {
  constructor(reason: string) {
    super(`Payment failed: ${reason}`);
    this.name = 'PaymentFailedException';
  }
}
