export class SubscriptionNotFoundException extends Error {
  constructor(subscriptionId: string) {
    super(`Subscription with id "${subscriptionId}" was not found`);
    this.name = 'SubscriptionNotFoundException';
  }
}
