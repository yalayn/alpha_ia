export class SubscriptionAlreadyCanceledException extends Error {
  constructor(subscriptionId: string) {
    super(`Subscription with id "${subscriptionId}" is already canceled`);
    this.name = 'SubscriptionAlreadyCanceledException';
  }
}
