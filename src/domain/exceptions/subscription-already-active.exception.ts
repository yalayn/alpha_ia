export class SubscriptionAlreadyActiveException extends Error {
  constructor(customerId: string) {
    super(`Customer "${customerId}" already has an active subscription`);
    this.name = 'SubscriptionAlreadyActiveException';
  }
}
